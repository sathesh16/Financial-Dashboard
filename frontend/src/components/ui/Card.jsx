export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        bg-slate-900
        border
        border-slate-800
        p-5
        ${className}
      `}
    >
      {children}
    </div>
  );
}