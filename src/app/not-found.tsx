import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <Ghost className="w-16 h-16 text-muted-foreground mb-4" />

      <h1 className="text-4xl font-bold mb-2" data-testid="notfound-title">
        404 - Página no encontrada
      </h1>

      <p
        className="text-muted-foreground mb-6"
        data-testid="notfound-description"
      >
        Lo sentimos, no pudimos encontrar la página que estás buscando.
      </p>

      <Link href="/">
        <Button data-testid="go-home">Volver al inicio</Button>
      </Link>
    </main>
  );
}
