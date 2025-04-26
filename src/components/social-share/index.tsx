// components/SocialShare.tsx
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaVimeoV } from "react-icons/fa";

const url = encodeURIComponent("localhost:3000/products/1");
const text = encodeURIComponent("Cek konten ini!");

const platforms = [
  {
    icon: <FaFacebookF />,
    href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  },
  {
    icon: <FaTwitter />,
    href: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
  },
  {
    icon: <FaLinkedinIn />,
    href: `https://www.linkedin.com/shareArticle?mini=true&url=${url}`,
  },
  {
    icon: <FaVimeoV />,
    href: `https://vimeo.com`, // Vimeo tidak mendukung share URL langsung, ganti jika perlu
  },
];

const SocialShare = () => {
  return (
    <div className="flex gap-2 mt-4">
      {platforms.map((platform, index) => (
        <Link
          key={index}
          href={platform.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="w-full h-full flex items-center justify-center hover:text-white">
            {platform.icon}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default SocialShare;
