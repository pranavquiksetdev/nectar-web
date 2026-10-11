import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";


export default function ShopSection({ h = "h1" }: { h?: "h1" | "h2" } = {}) {
  return (
    <div id="shop" className="scroll-mt-16">
      <PageHero
        as={h}
        title="Shop"
        intro="Six chocolates, all with less sugar and lots of cocoa. Pick a bar for your next break."
      />
      <section className="mx-auto grid max-w-[1180px] justify-items-center gap-x-6 gap-y-10 md:grid-cols-2 px-[6vw] py-[6vh]">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </section>
    </div>
  );
}
