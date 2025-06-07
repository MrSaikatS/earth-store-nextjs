import TalkToUsComp from "@/components/TalkToUsComp";
import Image from "next/image";

const page = () => {
  return (
    <>
      <section className="space-y-16 md:space-y-24">
        <div className="text-color-seaweed grid h-[40dvh] place-items-center bg-[url('/about-images/about-banner.jpg')] bg-cover bg-center bg-no-repeat text-4xl font-bold tracking-widest md:h-[65dvh]">
          WHO ARE WE?
        </div>

        <div className="container mx-auto grid grid-cols-1 place-items-center gap-10 px-6 md:grid-cols-2 md:gap-24">
          <Image
            src={"/home-images/our-mission-min.jpg"}
            alt="Our Mission"
            height={1000}
            width={1000}
          />

          <div className="space-y-5">
            <div className="text-3xl font-bold">OUR MISSION</div>
            <div className="text-foreground/60">
              Hello, my name is Tyler Moore and with the help of many people I
              made this template. I made it so it is super easy to update and so
              that it flows perfectly with my tutorials. Lots of love and
              hundreds of hours went into making it. I hope you love it as much
              as I do.
            </div>
            <div className="text-foreground/60">
              I wish you the best of luck with your business, enjoy the
              adventure.
            </div>
          </div>
        </div>

        <TalkToUsComp />
      </section>
    </>
  );
};

export default page;
