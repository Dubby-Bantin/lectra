import { featuresData } from "@/lib/utils/constants";

const FeaturesSection = () => (
  <section className="relative px-6 md:px-12 lg:px-24 py-16 w-full text-gray-800 dark:text-gray-200 overflow-clip">
    <div className="md:dark:block left-[40%] -z-10 absolute hidden w-[25%] h-[10%] blue__gradient" />
    <div className="mx-auto text-center container">
      <h2 className="mb-8 font-poppins font-semibold text-3xl md:text-4xl">
        Key Features
      </h2>
      <div className="gap-10 grid sm:grid-cols-2 lg:grid-cols-3">
        {featuresData.map(({ Icon, title, description }, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white dark:bg-background shadow-sm hover:shadow-xl p-6 border rounded-lg transition-shadow duration-300"
          >
            <Icon
              className="bg-gradient-to-r from-[#0C0E23] to-[#050112] -mr-2 mb-4 p-3 rounded-full"
              size={45}
            />
            <h3 className="mb-2 font-semibold text-xl">{title}</h3>
            <p className="font-poppins text-center text-gray-600 text-sm dark:text-gray-300">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
