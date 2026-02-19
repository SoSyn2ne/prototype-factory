import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  { id: "p1", name: "Voyager Backpack", price: "$89", description: "Waterproof daily carry with 22L capacity." },
  { id: "p2", name: "Mono Desk Lamp", price: "$42", description: "Dimmable warm light with USB-C charging." },
  { id: "p3", name: "Field Notebook Set", price: "$16", description: "Three stitched notebooks for quick ideas." },
];

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-4 py-12">
      <header className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Commerce UI Template</p>
        <h1 className="text-3xl font-bold text-slate-900">Starter storefront layout</h1>
        <p className="text-slate-700">Use this as a lightweight base for product-list and card-based commerce flows.</p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto flex items-center justify-between pt-0">
              <p className="text-lg font-semibold text-slate-900">{product.price}</p>
              <Button>Add to cart</Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
