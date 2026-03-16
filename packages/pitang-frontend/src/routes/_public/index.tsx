import { Link, redirect } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchProducts } from "@/lib/api";
import type { Product } from "@/types";
import { createFileRoute } from "@tanstack/react-router";
import { isAuthenticated } from "@/hooks/use-auth";

export const Route = createFileRoute("/_public/")({
  beforeLoad: () => {
    if (isAuthenticated()) {
      throw redirect({
        to: "/dashboard",
      });
    }
  },
  component: RouteComponent,
  loader: async (): Promise<{ products: Product[] }> => {
    const data = await fetchProducts(1, 4);
    return { products: data.products };
  },
});

function RouteComponent() {
  const { products } = Route.useLoaderData();
  return (
    <div className="min-h-screen flex flex-col">
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Descubra produtos incríveis
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Encontre os melhores produtos com preços imbatíveis e entrega
            rápida.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" render={<Link to="/dashboard/products" />}>
              Quero comprar <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Compre por categoria
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Eletrônicos", icon: "📱" },
              { name: "Roupas", icon: "👕" },
              { name: "Casa e Jardim", icon: "🏠" },
              { name: "Esportes", icon: "⚽" },
            ].map((category) => (
              <Card
                key={category.name}
                className="text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardHeader>
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Produtos em Destaque</h2>
            <Button variant="ghost">
              Ver Todos <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product: Product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm line-clamp-1">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 text-xs">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">${product.price}</span>
                    <span className="text-sm text-muted-foreground">
                      {product.stock} in stock
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
