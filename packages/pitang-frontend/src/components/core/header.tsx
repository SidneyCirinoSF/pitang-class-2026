import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          PitangShop
        </Link>

        <div className="flex items-center gap-2">
          <Button variant="ghost" render={<Link to="/login" />}>
            Login
          </Button>
          <Button render={<Link to="/register" />}>Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
