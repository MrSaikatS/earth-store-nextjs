import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <>
      <header className="absolute top-0 z-10 container mx-auto px-5 py-8">
        <MobileNav />
      </header>
    </>
  );
};

export default Header;
