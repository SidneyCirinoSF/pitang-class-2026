import { Outlet, createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/core/header";
import { Footer } from "@/components/core/footer";

export const Route = createFileRoute("/_public")({
  component: PublicLayout,
});

function PublicLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
