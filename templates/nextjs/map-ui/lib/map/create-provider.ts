import type { MapProvider } from "@/lib/map/provider";
import { MockMapProvider } from "@/lib/map/mock-provider";

export function createMapProvider(): MapProvider {
  return new MockMapProvider();
}
