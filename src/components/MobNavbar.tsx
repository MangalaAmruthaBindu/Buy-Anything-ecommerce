import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import{IoIosMenu} from "react-icons/io"
import CartCountBadge from './CartCountBadge'

const MobNavbar=({setShowCart}:any)=> {
  return (
    <div className='sticky top-0 bg-white z-10'>
        <div className='container p-8 lg:hidden'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-6 items-center'>
                    <IoIosMenu size={30}/>
                    <BsSearch size={30}/>

                </div>
                <h1 className="text-3xl font-medium italic text-accent"> Buy Anything</h1>
                <div className='flex gap-4 text-[30px]'>
                <AiOutlineUser/>
                <div className='relative cursor-pointer' onClick={()=>setShowCart(true)}>
                <AiOutlineShoppingCart/>
                    <CartCountBadge size={"w-[25px] h-[25px]"}/>
                </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default MobNavbar