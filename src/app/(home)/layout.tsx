import { Navbar } from "@/components/navbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="container">
        <Navbar />
      </div>
      <div className="container mt-40">
        {children}
      </div>
    </div>
  );
}
