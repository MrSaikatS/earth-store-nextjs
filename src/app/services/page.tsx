import TalkToUsComp from "@/components/TalkToUsComp";

const page = () => {
  return (
    <>
      <section>
        <div className="text-color-seaweed grid h-[40dvh] place-items-center bg-[url('/call-to-action.jpg')] bg-cover bg-center bg-no-repeat text-4xl font-bold tracking-widest md:h-[65dvh]">
          SERVICES
        </div>
        <div className=""></div>
        <TalkToUsComp />
      </section>
    </>
  );
};

export default page;
