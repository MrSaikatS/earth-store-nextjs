import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DarkThemeBtn from "../DarkMode/DarkThemeBtn";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const MobileNav = () => {
  return (
    <>
      <section className="flex w-full items-center justify-between">
        <div className="flex gap-6">
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

        {/* sheet start */}

        <Sheet>
          <SheetTrigger className="bg-color-chelsea-cucumber p-2">
            <Menu
              color="white"
              size={24}
            />
          </SheetTrigger>

          <SheetContent className="px-6 py-8">
            <SheetHeader>
              <SheetTitle className="flex justify-center">
                <Link href="/">
                  <Image
                    src={"/logo.png"}
                    width={100}
                    height={19.77}
                    alt="Earth Store Logo"
                  />
                </Link>
              </SheetTitle>
            </SheetHeader>

            <Link href="/">HOME</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/services">SERVICES</Link>
            <Link href="/contact">CONTACT</Link>
          </SheetContent>
        </Sheet>
      </section>
    </>
  );
};

export default MobileNav;
