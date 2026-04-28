#!/usr/bin/env python3
"""Create PF ideation signal stubs from candidate URLs.

Tavily should be used for search/discovery. This helper optionally uses
Scrapling for URL body extraction, but degrades to URL-only stubs when the
package is not installed. It never reads or prints API keys.
"""

from __future__ import annotations

import argparse
import html
import json
import re
import sys
from dataclasses import asdict, dataclass
from typing import Iterable
from urllib.parse import urlparse


INSTALL_HINT = "uv pip install scrapling curl-cffi playwright browserforge patchright"


@dataclass
class SignalStub:
    source: str
    url: str
    extraction_status: str
    observed_complaint_or_desire: str
    who_feels_it: str
    why_now: str
    willingness_to_pay_or_shareability: str
    community_chatter: str
    notes: str


def read_urls(args: argparse.Namespace) -> list[str]:
    urls: list[str] = []
    if args.file:
        with open(args.file, "r", encoding="utf-8") as f:
            urls.extend(line.strip() for line in f if line.strip() and not line.lstrip().startswith("#"))
    urls.extend(args.urls)
    deduped: list[str] = []
    seen = set()
    for url in urls:
        if url not in seen:
            seen.add(url)
            deduped.append(url)
    return deduped


def load_scrapling_fetcher():
    try:
        from scrapling import Fetcher  # type: ignore

        return Fetcher, None
    except Exception as exc1:  # pragma: no cover - depends on optional package
        try:
            from scrapling.fetchers import Fetcher  # type: ignore

            return Fetcher, None
        except Exception as exc2:  # pragma: no cover - depends on optional package
            return None, f"Scrapling unavailable ({type(exc1).__name__}; {type(exc2).__name__}). Install with: {INSTALL_HINT}"


def fetch_with_scrapling(fetcher, url: str) -> str:
    page = None
    if hasattr(fetcher, "get"):
        page = fetcher.get(url)
    elif callable(fetcher):
        instance = fetcher()
        if hasattr(instance, "get"):
            page = instance.get(url)
    if page is None:
        raise RuntimeError("Scrapling Fetcher does not expose a supported get(url) API")

    all_text = getattr(page, "get_all_text", None)
    if callable(all_text):
        text = all_text()
    else:
        text_attr = getattr(page, "text", None)
        if callable(text_attr):
            text = text_attr()
        elif isinstance(text_attr, str):
            text = text_attr
        else:
            body = page.css("body").get() if hasattr(page, "css") else getattr(page, "body", None) or str(page)
            if isinstance(body, bytes):
                body = body.decode("utf-8", errors="replace")
            text = html_to_text(str(body))
    return normalize_text(str(text))


def html_to_text(raw: str) -> str:
    raw = re.sub(r"<script[\s\S]*?</script>", " ", raw, flags=re.I)
    raw = re.sub(r"<style[\s\S]*?</style>", " ", raw, flags=re.I)
    raw = re.sub(r"<[^>]+>", " ", raw)
    return html.unescape(raw)


def normalize_text(text: str, limit: int = 1200) -> str:
    return re.sub(r"\s+", " ", text).strip()[:limit]


def source_name(url: str) -> str:
    host = urlparse(url).netloc or url
    return host.removeprefix("www.")


def make_stub(url: str, body: str | None, status: str) -> SignalStub:
    notes = body or "TODO: paste the relevant extracted complaint/comment snippet here."
    return SignalStub(
        source=source_name(url),
        url=url,
        extraction_status=status,
        observed_complaint_or_desire="TODO: summarize the pain, desire, workaround, or jealousy/status anxiety.",
        who_feels_it="TODO: name the affected user segment.",
        why_now="TODO: explain the trigger/timing/policy/trend.",
        willingness_to_pay_or_shareability="TODO: note budget pain, urgency, or social/share reason.",
        community_chatter="TODO: yes/no; mark yes for forums, comments, Reddit/HN/Product Hunt/Naver/Blind-like chatter.",
        notes=notes,
    )


def to_markdown(stubs: Iterable[SignalStub]) -> str:
    blocks = ["## External signals", ""]
    for idx, stub in enumerate(stubs, start=1):
        blocks.extend(
            [
                f"### Signal {idx}: {stub.source}",
                f"- url: {stub.url}",
                f"- extraction_status: {stub.extraction_status}",
                f"- observed complaint/desire: {stub.observed_complaint_or_desire}",
                f"- who feels it: {stub.who_feels_it}",
                f"- why now: {stub.why_now}",
                f"- willingness-to-pay/shareability: {stub.willingness_to_pay_or_shareability}",
                f"- community chatter: {stub.community_chatter}",
                f"- notes: {stub.notes}",
                "",
            ]
        )
    return "\n".join(blocks).rstrip() + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Create Markdown/JSON PF external-signal stubs from Tavily-discovered URLs."
    )
    parser.add_argument("urls", nargs="*", help="Candidate URLs to extract or stub")
    parser.add_argument("--file", "-f", help="File containing one URL per line")
    parser.add_argument("--format", choices=["markdown", "json"], default="markdown")
    parser.add_argument("--require-scrapling", action="store_true", help="Fail instead of degrading when Scrapling is missing")
    parser.add_argument("--no-fetch", action="store_true", help="Do not fetch; emit URL-only stubs")
    args = parser.parse_args()

    urls = read_urls(args)
    if not urls:
        parser.error("provide at least one URL or --file")

    fetcher = None
    unavailable = None
    if not args.no_fetch:
        fetcher, unavailable = load_scrapling_fetcher()
        if unavailable and args.require_scrapling:
            print(unavailable, file=sys.stderr)
            return 2

    stubs: list[SignalStub] = []
    for url in urls:
        if args.no_fetch:
            stubs.append(make_stub(url, None, "not_fetched (--no-fetch)"))
            continue
        if unavailable or fetcher is None:
            stubs.append(make_stub(url, None, f"degraded: {unavailable}"))
            continue
        try:
            body = fetch_with_scrapling(fetcher, url)
            stubs.append(make_stub(url, body, "scrapling_extracted"))
        except Exception as exc:  # pragma: no cover - network/package dependent
            stubs.append(make_stub(url, None, f"fetch_failed: {type(exc).__name__}: {exc}"))

    if args.format == "json":
        print(json.dumps([asdict(stub) for stub in stubs], ensure_ascii=False, indent=2))
    else:
        print(to_markdown(stubs), end="")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
