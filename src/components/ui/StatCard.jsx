import Card from "./Card";

export default function StatCard({
  title,
  value,
}) {
  return (
    <Card>
      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h3 className="text-2xl font-bold mt-2">
        {value}
      </h3>
    </Card>
  );
}