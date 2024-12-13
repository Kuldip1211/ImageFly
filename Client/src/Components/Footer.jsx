import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"


function Footer() {
 const Navigate = useNavigate();
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
     <img src={assets.logo} width={150} alt="" />
     <p className="flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-500 max:sm:hidden">All right reserved. Copyright @imagify</p>
     <div className="flex gap-2.5">
      <img onClick={()=>Navigate("")} src={assets.facebook_icon} width={35} alt="" className="cursor-pointer" />
      <img onClick={()=>Navigate("https://www.linkedin.com/in/kuldeep-chudasama-1759b1256/")} src={assets.twitter_icon} width={35} alt="" className="cursor-pointer" />
      <img onClick={()=>Navigate("https://www.linkedin.com/in/kuldeep-chudasama-1759b1256/")} src={assets.instagram_icon} width={35} alt="" className="cursor-pointer" />
     </div>
      
    </div>
  )
}

export default Footer
