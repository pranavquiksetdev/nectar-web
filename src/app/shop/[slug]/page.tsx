import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductImage from "@/components/ProductImage";
import ProductCard from "@/components/ProductCard";
import { getProduct, products, rupees } from "@/data/products";

// One page per chocolate, built at build time from the product data.
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/shop/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: product.name, description: `${product.tagline} ${product.description}` };
}

export default async function ProductPage({ params }: PageProps<"/shop/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <main>
      <div className="mx-auto max-w-[1180px] px-[6vw] pt-8">
        <Link href="/shop" className="text-sm text-muted hover:text-accent">
          &larr; All chocolates
        </Link>
      </div>

      <section className="mx-auto grid max-w-[1180px] items-center gap-12 px-[6vw] py-[6vh]">
        <ProductImage slug={product.slug} name={product.name} priority className="mx-auto w-full max-w-[440px]" />

        <div>
          <h1 className="text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.05]">{product.name}</h1>
          <p className="mt-3 text-xl text-accent">{product.tagline}</p>
          <p className="mt-6 max-w-[52ch] text-lg leading-[1.7] text-muted">{product.description}</p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {product.notes.map((n) => (
              <li key={n} className="rounded-full bg-card px-4 py-1.5 text-sm text-ink">
                {n}
              </li>
            ))}
          </ul>

          <dl className="mt-8 grid max-w-sm grid-cols-2 gap-y-3 border-t border-black/10 pt-6 text-sm">
            <dt className="text-muted">Cocoa</dt>
            <dd>{product.cocoa}%</dd>
            <dt className="text-muted">Weight</dt>
            <dd>{product.weight}</dd>
            <dt className="text-muted">Ingredients</dt>
            <dd className="col-span-2 leading-relaxed">{product.ingredients}</dd>
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <span className="font-display text-3xl">{rupees(product.price)}</span>
            <Link
              href={`/contact?order=${product.slug}`}
              className="rounded-full bg-cocoa px-7 py-3 font-medium text-cream hover:bg-tile"
            >
              Order {product.name}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-[6vw] pb-[8vh]">
        <h2 className="mb-6 text-3xl">Try these next</h2>
        <div className="grid justify-items-center gap-x-6 gap-y-8 md:grid-cols-3">
          {others.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
