const Benefits = () => {
  return (
    <section className="py-16 bg-gray-50 mt-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
          Why Choose Us
        </h2>
        <p className="text-gray-600 mb-12">
          Enjoy hassle-free rentals with features designed for your comfort and
          safety.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <div className="text-blue-600 mb-4 text-4xl">🚗</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Wide Car Selection
            </h3>
            <p className="text-gray-600">
              Choose from a wide variety of vehicles to match every style and
              budget.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <div className="text-green-600 mb-4 text-4xl">💳</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Affordable Pricing
            </h3>
            <p className="text-gray-600">
              Transparent pricing with no hidden fees. Pay only for what you
              use.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <div className="text-red-500 mb-4 text-4xl">🔒</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Secure & Reliable
            </h3>
            <p className="text-gray-600">
              Safe transactions, verified listings, and 24/7 customer support.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <div className="text-yellow-500 mb-4 text-4xl">🧾</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Easy Booking Process
            </h3>
            <p className="text-gray-600">
              Book your car in just a few clicks with our user-friendly system.
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <div className="text-indigo-600 mb-4 text-4xl">🧍‍♂️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Add Your Car & Earn
            </h3>
            <p className="text-gray-600">
              Have a car? List it with us and start earning from day one.
            </p>
          </div>

          {/* Benefit 6 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <div className="text-pink-500 mb-4 text-4xl">🌐</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Nationwide Coverage
            </h3>
            <p className="text-gray-600">
              Available in major cities across the country for ultimate
              convenience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
