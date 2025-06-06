import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-background flex flex-col items-center justify-center gap-6 px-6 py-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
        <Image
          src={"/logo.png"}
          width={100}
          height={19.77}
          alt="Earth Store Logo"
        />
        <div className="">@2025 || Earth Store || All rights reserved</div>
      </footer>
    </>
  );
};

export default Footer;
