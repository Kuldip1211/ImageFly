import { assets } from "../assets/assets"

function GanrateButton() {
  return (
    <div className="pb-16 text-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16 ">See the magic, Try now</h1>
      <button className="inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-[1.05] transition-all duration-500 ">Generate Image
       <img src={assets.star_group} alt="" className="h-6" />
      </button>
    </div>
  )
}

export default GanrateButton
