import Image from "next/image";
import DarkThemeBtn from "../DarkMode/DarkThemeBtn";
import Link from "next/link";

const DesktopNav = () => {
  return (
    <>
      <section className="flex w-full items-center justify-between">
        <div className="flex justify-center gap-10">
          <Link href="/">
            <Image
              src={"/logo.png"}
              width={100}
              height={19.77}
              alt="Earth Store Logo"
            />
          </Link>
          <DarkThemeBtn />
        </div>
        <div className="dark:text-background space-x-6 text-sm md:text-lg">
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/services">SERVICES</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
      </section>
    </>
  );
};

export default DesktopNav;
