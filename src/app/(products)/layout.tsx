export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="mt-40">
        {children}
      </div>
    </div>
  );
}
