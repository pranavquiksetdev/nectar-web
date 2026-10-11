import Link from "next/link";
import ProductImage from "@/components/ProductImage";
import { rupees, type Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group flex w-full max-w-[440px] flex-col gap-4 rounded-2xl p-3 transition-colors hover:bg-card focus-visible:outline-2 focus-visible:outline-accent"
    >
      <ProductImage
        slug={product.slug}
        name={product.name}
        className="transition-transform duration-300 motion-safe:group-hover:-translate-y-1"
      />
      <div className="px-1">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-2xl">{product.name}</h3>
          <span className="shrink-0 font-medium text-accent">{rupees(product.price)}</span>
        </div>
        <p className="mt-1 text-muted">{product.tagline}</p>
        <p className="mt-2 text-sm text-ink/70">
          {product.cocoa}% cocoa · {product.weight}
        </p>
      </div>
    </Link>
  );
}
