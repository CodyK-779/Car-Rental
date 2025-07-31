const HowItWork = () => {
  return (
    <section className="mt-14 py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-1 text-gray-800">
          How It Works
        </h2>
        <p className="font-medium text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12">
          A simple 3-step process to get started with our platform.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Create an Account",
              desc: "Sign up in seconds with your email or social account and access your dashboard instantly.",
            },
            {
              title: "Browse & Select",
              desc: "Explore our wide range of cars. Pick the one you like and select Pick-up date and Return date.",
            },
            {
              title: "Start Using It",
              desc: "Enjoy the benefits immediately. The car will drop off to your location and you can hit the road stress free.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="relative bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow text-left"
            >
              <div className="absolute -top-4 left-6 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-semibold shadow-lg">
                {i + 1}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-neutral-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
