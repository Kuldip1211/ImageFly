import { assets, testimonialsData } from "../assets/assets";
import { motion } from "framer-motion";
function Testimonial() {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-20 py-12"
    >
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Customer testimonials
      </h1>
      <p className="text-gray-500 mb-12 ">What Our Users Are Saying</p>

      <div className="flex flex-wrap gap-6">
        {testimonialsData.map((testmonial, index) => (
          <div
            key={index}
            className="bg-white/20 p-12 rounded-lg shadow-md order w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all"
          >
            <div className="flex flex-col items-center ">
              <img
                src={testmonial.image}
                className="rounded-full w-14"
                alt=""
              />
              <h2 className="text-xl font-semibold mt-3 ">{testmonial.name}</h2>
              <p className="text-gray-500 mb-4">{testmonial.role}</p>
              <div className="flex mb-4">
                {Array(testmonial.stars)
                  .fill()
                  .map((item, index) => (
                    <img key={index} src={assets.rating_star} />
                  ))}
              </div>
              <p className="text-center text-sm text-gray-600">
                {testmonial.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Testimonial;
