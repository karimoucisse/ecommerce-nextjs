import ProductsRow from "@/components/ProductsRow";
import PromoSection from "@/components/PromoSection";

export default function Home() {
  const products = [
    {
      name: "Air force 1",
      image: "/imageTest.jpg",
      price: "35",
    },
    {
      name: "Air force 1",
      image: "/imageTest.jpg",
      price: "35",
    },
    {
      name: "Air force 1",
      image: "/imageTest.jpg",
      price: "35",
    },
    {
      name: "Air force 1",
      image: "/imageTest.jpg",
      price: "35",
    },
  ] as const;
  return (
    <main>
      <PromoSection />
      <ProductsRow title="Nouveautés" products={products} />
    </main>
  );
}
