import { Button } from "./ui/button";

const TalkToUsComp = () => {
  return (
    <>
      <div className="flex h-[50dvh] flex-col items-center justify-center gap-3 bg-[url('/call-to-action.jpg')] bg-cover bg-center bg-no-repeat px-6">
        <div className="text-color-seaweed text-center text-4xl font-bold tracking-wider md:text-5xl">
          TALK TO US
        </div>
        <div className="dark:text-background text-center md:w-[40%] md:text-lg">
          Have any questions? We are always open to talk about your business,
          new projects, creative opportunities and how we can help you.
        </div>
        <Button className="bg-color-chelsea-cucumber hover:bg-color-seaweed mt-6 rounded-none px-8 py-6 tracking-widest md:px-12 dark:text-white">
          GET IN TOUCH
        </Button>
      </div>
    </>
  );
};

export default TalkToUsComp;
