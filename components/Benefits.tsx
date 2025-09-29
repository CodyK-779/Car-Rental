import BenefitsMotion from "./BenefitsMotion";

const Benefits = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="sm:text-4xl min-[350px]:text-3xl text-2xl font-bold mb-3 text-gray-800">
          Why Choose Us
        </h2>
        <p className="min-[350px]:text-base text-sm font-medium text-gray-600 mb-12">
          Enjoy hassle-free rentals with features designed for your comfort and
          safety.
        </p>
        <BenefitsMotion />
      </div>
    </section>
  );
};

export default Benefits;
