import { Navbar } from "@/components/navbar";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container">
      <Navbar />
      {children}
    </div>
  );
}
