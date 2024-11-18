import { featuresData } from "@/lib/utils/constants";

const FeaturesSection = () => (
  <section className="text-gray-800 dark:text-gray-200 py-16 px-6 md:px-12 lg:px-24">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 font-poppins">
        Key Features
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {featuresData.map(({ Icon, title, description }, index) => (
          <div
            key={index}
            className="border flex flex-col items-center bg-white dark:bg-background p-6 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300"
          >
            <Icon className="mb-4" size={30} />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-center font-poppins text-sm">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
