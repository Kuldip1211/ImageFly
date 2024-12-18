import { useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

function Result() {
  const [image, setImage] = useState(assets.sample_img_1);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoding] = useState(false);
  const [input, setInput] = useState("");

  // form submit handler
  const onSubmitHAndler = async (e) => {
    console.log("hello");
  };

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSubmitHAndler}
      action=""
      className="flex flex-col min-h-[90vh] justify-center items-center"
    >
      <div>
        <div className="relative">
          <img src={assets.sample_img_1} className="max-w-sm rounded" alt="" />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 {loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`}
          ></span>
        </div>
        <p className={!loading ? "hidden" : ""}>Loading...</p>
      </div>

      {!imageLoaded && (
        <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what you want to generate"
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color"
          />
          <button
            type="submit"
            className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full"
          >
            Generate
          </button>
        </div>
      )}

      {imageLoaded && (
        <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
          <p
            onClick={() => {
              setImageLoaded(false);
            }}
            className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
          >
            Generate Another
          </p>
          <a
            href={image}
            className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full"
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
}

export default Result;
