import Link from "next/link";
import Logo from "../logo";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface FooterProps {
  logo?: {
    src: React.ReactNode;
    alt: string;
    title: string;
    url: string;
  };
  contacts?: {
    text: string;
    url: string;
  }[];
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  address?: {
    text: string;
    url: string;
  };
}

export const Footer = ({
  logo = {
    src: <Logo />,
    alt: "Gudangorder Logo",
    title: "Gudangorder",
    url: "/",
  },
  tagline = "Mulai berjualan dengan Gudangorder. \nHarga terjangkau, kualitas terjamin.",
  contacts = [
    {
      text: "gudangorder.id@gmail.com",
      url: "mailto:gudangorder.id@gmail.com",
    },
    {
      text: "(+62) 852-3231-0544",
      url: "https://wa.me/+6285232310544",
    },
  ],
  menuItems = [
    {
      title: "Company",
      links: [
        { text: "Home", url: "/" },
        { text: "About", url: "/about" },
        { text: "Products", url: "/products" },
        { text: "Blog", url: "/blogs" },
      ],
    },
    {
      title: "Account",
      links: [
        { text: "Track Order", url: "/order/track" },
        { text: "Profile", url: "/profile" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Instagram", url: "https://www.instagram.com/ekata.tech/" },
        { text: "LinkedIn", url: "https://www.linkedin.com/company/ekata-tech" },
      ],
    },
  ],
  copyright = `© ${new Date().getFullYear()} Gudangorder All rights reserved.`,
  address = {
    text: "Perum Bumiayu Indah Blok i - 10, Bumiayu, Kec. Kedungkandang, Kota Malang, Jawa Timur 65135",
    url: "https://maps.app.goo.gl/zMQ1DHX9RDFt5PA78",
  }
}: FooterProps) => {
  return (
    <section className="py-32">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:grid-cols-7">
            {/* logo and tagline */}
            <div className="col-span-2 mb-8 lg:mb-0 space-y-4">
              {/* Logo */}
              <div className="flex items-center gap-2 lg:justify-start">
                <Link href={logo.url}>
                  {logo.src}
                </Link>
              </div>
              <p>{tagline}</p>
              {/* Logo */}
            </div>
            {/* logo and tagline */}

            {/* Footer items */}
            <div className="grid grid-cols-2 gap-4 xl:grid-cols-3 col-span-3">
              {menuItems.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-4 font-medium">{section.title}</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <Link href={link.url}>{link.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* Footer items */}

            {/* Address & Contact*/}
            <div className="col-span-2 mb-8 lg:mb-0 space-y-4">
              <div>
                <h3 className="font-medium">Address</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="font-medium hover:text-primary">
                    <Link href={address.url}>{address.text}</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold">Talk to us</h5>
                <div className="space-y-3">
                  {contacts.map((contact, contactIdx) => (
                    <div
                      key={contactIdx}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <Link
                        href={contact.url}
                        className="text-muted-foreground font-medium hover:text-blue-400"
                      >
                        {contact.text}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Address & Contact*/}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
          </div>
        </footer>
      </div >
    </section >
  );
};
