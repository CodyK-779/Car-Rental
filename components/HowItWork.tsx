const HowItWork = () => {
  return (
    <section className="mt-20 px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold">1. Choose Your Car</h3>
          <p className="text-gray-600 mt-2">
            Browse our available cars and pick your perfect ride.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">2. Set Your Schedule</h3>
          <p className="text-gray-600 mt-2">
            Select pick-up and drop-off times that suit you.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">3. Enjoy the Drive</h3>
          <p className="text-gray-600 mt-2">
            Pick up your car and hit the road stress-free.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
