export function SectionLabel({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className={`h-2 w-2 rounded-full ${dark ? "bg-gold-light" : "bg-ember"}`} />
      <span className={dark ? "label-tag-dark" : "label-tag"}>{children}</span>
    </div>
  );
}
