import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="container">
        <Navbar />
      </div>
      <div className="mt-40">
        {children}
      </div>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
}
