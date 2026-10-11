// A chocolate bar drawn in CSS: a grid of raised, moulded segments. Stands in for product photos.
export default function ChocBar({
  tone,
  cols = 4,
  rows = 3,
  className = "",
}: {
  tone: [string, string];
  cols?: number;
  rows?: number;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`grid gap-1.5 rounded-2xl p-2 shadow-[0_20px_30px_-16px_rgba(36,18,10,.6)] ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, background: tone[1] }}
    >
      {Array.from({ length: cols * rows }, (_, i) => (
        <span
          key={i}
          className="relative aspect-[4/5] rounded-[6px] shadow-[inset_0_1.5px_0_rgba(255,235,210,.2),inset_0_-2px_0_rgba(0,0,0,.4)]"
          style={{ background: `linear-gradient(135deg, ${tone[0]}, ${tone[1]})` }}
        >
          <span className="absolute inset-[18%] rounded-[3px] shadow-[inset_0_1.5px_3px_rgba(0,0,0,.4),0_1px_0_rgba(255,235,210,.1)]" />
        </span>
      ))}
    </div>
  );
}
