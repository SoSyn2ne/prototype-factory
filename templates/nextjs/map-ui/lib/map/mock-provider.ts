import type { MapItem, MapProvider, OnSelectCallback } from "@/lib/map/provider";

export class MockMapProvider implements MapProvider {
  private container: HTMLElement | null = null;
  private items: MapItem[] = [];
  private onSelect: OnSelectCallback | null = null;

  init(container: HTMLElement) {
    this.container = container;
    this.render();
  }

  setMarkers(items: MapItem[]) {
    this.items = items;
    this.render();
  }

  setOnSelect(cb: OnSelectCallback | null) {
    this.onSelect = cb;
    this.render();
  }

  destroy() {
    if (this.container) {
      this.container.innerHTML = "";
      this.container = null;
    }
  }

  private render() {
    if (!this.container) return;

    this.container.innerHTML = "";

    const root = document.createElement("div");
    root.className = "space-y-3";

    const placeholder = document.createElement("div");
    placeholder.className = "rounded-lg border border-dashed border-slate-400 bg-slate-100 p-6 text-sm text-slate-700";
    placeholder.textContent = "Mock map canvas. Swap this provider with Kakao/Naver/Mapbox later.";
    root.appendChild(placeholder);

    const list = document.createElement("ul");
    list.className = "space-y-2";

    for (const item of this.items) {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.type = "button";
      button.className =
        "w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-left text-sm text-slate-900 hover:bg-slate-50";
      button.textContent = `${item.title} (${item.lat.toFixed(4)}, ${item.lng.toFixed(4)})`;
      button.addEventListener("click", () => this.onSelect?.(item));
      li.appendChild(button);
      list.appendChild(li);
    }

    root.appendChild(list);
    this.container.appendChild(root);
  }
}
