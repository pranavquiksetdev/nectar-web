import Image from "next/image";

// Product photo on its dark cocoa background, cropped to a fixed shape so every card lines up.
export default function ProductImage({
  slug,
  name,
  className = "",
  priority = false,
}: {
  slug: string;
  name: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative aspect-[10/9] overflow-hidden rounded-2xl bg-[#2b150a] ${className}`}>
      <Image
        src={`/images/${slug}.png`}
        alt={`${name} chocolate bar, partly unwrapped`}
        fill
        sizes="(min-width: 1180px) 1080px, 90vw"
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
