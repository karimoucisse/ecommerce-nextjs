import ProductsRow from "@/components/ProductsRow";
import PromoSection from "@/components/PromoSection";

export default function Home() {
  const data = [
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
      <ProductsRow title="Nouveautés" data={data} />
    </main>
  );
}
