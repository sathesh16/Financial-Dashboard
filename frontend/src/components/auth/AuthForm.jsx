export default function AuthForm({
  title,
  children,
  onSubmit,
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <form
        onSubmit={onSubmit}
        className="
          w-full
          max-w-md
          rounded-xl
          border
          border-slate-800
          bg-slate-900
          p-8
          space-y-4
        "
      >
        <h1 className="text-2xl font-bold text-white">
          {title}
        </h1>

        {children}
      </form>
    </div>
  );
}