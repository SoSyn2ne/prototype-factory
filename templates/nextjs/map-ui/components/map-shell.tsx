"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { MapItem } from "@/lib/map/provider";
import { createMapProvider } from "@/lib/map/create-provider";

const sampleItems: MapItem[] = [
  { id: "m1", title: "HQ", lat: 37.5665, lng: 126.978 },
  { id: "m2", title: "Design Studio", lat: 37.5651, lng: 126.9895 },
  { id: "m3", title: "Pilot Cafe", lat: 37.5702, lng: 126.9824 },
];

export function MapShell() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<MapItem | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const provider = createMapProvider();
    provider.init(containerRef.current);
    provider.setMarkers(sampleItems);
    provider.setOnSelect((item) => setSelected(item));

    return () => provider.destroy?.();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Map Provider Slot</CardTitle>
        <CardDescription>
          UI is decoupled from mapping SDK. Replace `createMapProvider` when adding a real provider.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div ref={containerRef} className="rounded-lg border border-slate-200 bg-white p-4" />
        <div className="rounded-md bg-slate-100 p-3 text-sm text-slate-700">
          {selected
            ? `Selected: ${selected.title} (${selected.lat.toFixed(4)}, ${selected.lng.toFixed(4)})`
            : "Select a marker from the mock provider list."}
        </div>
      </CardContent>
    </Card>
  );
}
