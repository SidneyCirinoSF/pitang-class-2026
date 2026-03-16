import { Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">PitangShop</h2>
            <p className="text-sm text-muted-foreground">
              Sua loja online de tecnologia, acessórios e lifestyle. Produtos
              selecionados com qualidade e entrega para todo o Brasil.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Contato</h3>
            <p className="text-sm text-muted-foreground">
              📍 Recife, PE - Brasil
            </p>
            <p className="text-sm text-muted-foreground">📞 (81) 4444-4444</p>
            <p className="text-sm text-muted-foreground">
              ✉ contato@pitangshop.com
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Redes sociais</h3>
            <p className="text-sm text-muted-foreground">
              <Instagram className="inline-block mr-2" /> @pitangshop
            </p>
            <p className="text-sm text-muted-foreground">
              <Twitter className="inline-block mr-2" /> @pitangshop
            </p>
            <p className="text-sm text-muted-foreground">
              <Facebook className="inline-block mr-2" /> /pitangshop
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
