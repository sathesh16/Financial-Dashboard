import StatCard from "../../components/ui/StatCard";

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Dashboard
      </h2>

      <div className="grid grid-cols-4 gap-6">
        <StatCard
          title="Revenue"
          value="$45,200"
        />
        <StatCard
          title="Expenses"
          value="$12,800"
        />

        <StatCard
          title="Profit"
          value="$32,400"
        />

        <StatCard
          title="Transactions"
          value="1,245"
        />
      </div>
    </div>
  );
}