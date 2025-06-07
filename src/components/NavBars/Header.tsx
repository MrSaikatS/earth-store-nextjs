import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <>
      <header className="absolute top-0 right-0 left-0 z-10 container mx-auto px-6 py-8">
        <div className="visible md:hidden">
          <MobileNav />
        </div>

        <div className="hidden md:block">
          <DesktopNav />
        </div>
      </header>
    </>
  );
};

export default Header;
