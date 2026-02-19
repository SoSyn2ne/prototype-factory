export interface MapItem {
  id: string;
  title: string;
  lat: number;
  lng: number;
}

export type OnSelectCallback = (item: MapItem) => void;

export interface MapProvider {
  init(container: HTMLElement): void;
  setMarkers(items: MapItem[]): void;
  setOnSelect(cb: OnSelectCallback | null): void;
  destroy?(): void;
}
