const SPARKLES = [
  { left: "4%", top: "9%", size: 9, delay: "0s", dur: "2.6s" },
  { left: "12%", top: "58%", size: 6, delay: "0.7s", dur: "3.1s" },
  { left: "19%", top: "28%", size: 7, delay: "1.4s", dur: "2.4s" },
  { left: "27%", top: "80%", size: 5, delay: "0.3s", dur: "2.9s" },
  { left: "35%", top: "14%", size: 8, delay: "2.0s", dur: "2.2s" },
  { left: "44%", top: "70%", size: 6, delay: "0.9s", dur: "3.3s" },
  { left: "53%", top: "22%", size: 7, delay: "1.7s", dur: "2.7s" },
  { left: "61%", top: "88%", size: 5, delay: "0.5s", dur: "2.5s" },
  { left: "68%", top: "38%", size: 9, delay: "1.1s", dur: "3.0s" },
  { left: "75%", top: "6%", size: 6, delay: "2.3s", dur: "2.3s" },
  { left: "82%", top: "65%", size: 7, delay: "0.2s", dur: "2.8s" },
  { left: "89%", top: "20%", size: 5, delay: "1.5s", dur: "3.2s" },
  { left: "94%", top: "48%", size: 8, delay: "0.8s", dur: "2.6s" },
  { left: "7%", top: "92%", size: 6, delay: "1.9s", dur: "2.9s" },
  { left: "48%", top: "95%", size: 5, delay: "0.6s", dur: "2.4s" },
  { left: "32%", top: "46%", size: 4, delay: "2.7s", dur: "3.1s" },
  { left: "57%", top: "52%", size: 6, delay: "1.2s", dur: "2.7s" },
  { left: "78%", top: "84%", size: 5, delay: "0.4s", dur: "3.0s" },
  { left: "22%", top: "72%", size: 7, delay: "1.8s", dur: "2.5s" },
  { left: "91%", top: "76%", size: 4, delay: "1.0s", dur: "2.2s" },
];

function StarIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" aria-hidden="true">
      <path
        d="M5 0L6 3.8L10 5L6 6.2L5 10L4 6.2L0 5L4 3.8Z"
        fill="rgba(244,63,94,0.55)"
      />
    </svg>
  );
}

export function SparklesBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {SPARKLES.map((s, i) => (
        <div
          key={i}
          className="absolute animate-sparkle"
          style={{
            left: s.left,
            top: s.top,
            animationDelay: s.delay,
            animationDuration: s.dur,
          }}
        >
          <StarIcon size={s.size} />
        </div>
      ))}
    </div>
  );
}
