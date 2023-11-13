import ProductsRow from "@/components/ProductsRow";
import PromoSection from "@/components/PromoSection";

export default function Home() {
  const products = [
    {
      name: "Air force 1",
      image: "/imageTest.jpg",
    },
    {
      name: "Air force 1",
      image: "/imageTest.jpg",
    },
    {
      name: "Air force 1",
      image: "/imageTest.jpg",
    },
    {
      name: "Air force 1",
      image: "/imageTest.jpg",
    },
    {
      name: "Air force 1",
      image: "/imageTest.jpg",
    },
  ] as const;
  return (
    <main>
      <PromoSection />
      <ProductsRow title="Nouveautés" products={products} />
    </main>
  );
}
