# PRD — Refund Screenshot Caseboard

## Problem / target
Turn scattered refund screenshots and chat fragments into a timestamped merchant dispute packet. Target: 온라인 구매 환불이 지연된 소비자와 CS 대행자.

## Core UX
스크린샷 드롭 → 자동 시간순 배열 → 빠진 증거 표시 → 판매자/플랫폼별 제출 패킷 미리보기. Required sections: 증거 드롭존, 타임라인, 누락 증거 체크, 주장/근거 매핑, 제출 패킷.

## Design / theme / evidence
- Profile: `calm-consumer`; theme: 자산 방어.
- Sources: S1 https://consumer.go.kr; S5 https://www.lawtimes.co.kr/news/articleView.html?idxno=217386.
- QA: value visible in 3 seconds; complete empty, active, error, and success states; desktop/mobile fit; simulated or estimated results labeled.

## Stitch prompt
Design a responsive web app named “Refund Screenshot Caseboard.” Let a consumer drag in order, chat, tracking, and refund screenshots; arrange them into a timestamped case timeline; flag missing proof; map each claim to evidence; and preview a concise merchant or platform dispute packet. Include empty, sorting, incomplete, and ready-to-export states with realistic Korean and English sample data. Design direction: follow the calm-consumer profile with warm neutrals, one gentle teal accent, generous step spacing, reassuring recovery copy, and red reserved only for expired deadlines.
