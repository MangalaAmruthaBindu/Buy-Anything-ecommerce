import {BsSearch} from "react-icons/bs"
import {AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai"
import CartCountBadge from "./CartCountBadge"
function Navbar({setShowCart}:any) {
  return (
    <div className="sticky top-0 bg-white z-10">
        <div className="container hidden lg:block">
            <div className="flex items-center justify-between p-8">
                <h1 className="text-3xl font-medium italic text-accent"> Buy Anything</h1>

            <div className="relative w-full max-w-[500px]">
                <input className="bg-[#f2f3f5] border-none rounded-[30px] px-6 py-3 w-full" type="text" placeholder="Search Products...."/>
                <BsSearch className=" absolute top-0 right-0 mt-4 mr-5 text-gray-500"  size={20}/>

            </div>
            <div className="flex gap-2">
                <div className="icon__wrapper">
                    <AiOutlineUser/>

                </div>
                <div className="icon__wrapper relative cursor-pointer" onClick={()=>setShowCart(true)}>
                    <AiOutlineShoppingCart/>
                    <CartCountBadge size={"w-[25px] h-[25px]"}/>

                </div>
            </div>
            
            </div>

        </div>
    </div>
  )
}

export default Navbar