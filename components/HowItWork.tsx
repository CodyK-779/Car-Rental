import HowItWorksMotion from "./HowItWorksMotion";

const HowItWork = () => {
  return (
    <section className="mt-14 py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-1 text-gray-800">
          How It Works
        </h2>
        <p className="font-medium text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-14">
          A simple 3-step process to get started with our platform.
        </p>

        <HowItWorksMotion />
      </div>
    </section>
  );
};

export default HowItWork;
