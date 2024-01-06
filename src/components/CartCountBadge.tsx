import { useCartContext } from "../context/cartContext";

interface propsType{
    size:string;
}
const CartCountBadge: React.FC<propsType>=({size})=> {
  const {product}=useCartContext();
  return (
    <div className={`absolute bg-red-600 text-white ${size} text-[14px] rounded-full -right-3 -top-1 grid
     place-items-center `}>{product.length}</div>
  )
}

export default CartCountBadge