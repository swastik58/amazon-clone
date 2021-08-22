import Image from "next/image"
import {useState} from "react"
import {StarIcon} from "@heroicons/react/solid"
import Currency from 'react-currency-formatter'
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  
    const dispatch = useDispatch();

    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING +1)) + MIN_RATING
    );

    const [hasPrime] = useState(Math.random() < 0.5 )

    const addItemToBasket = () => {
        {/* product to be added to the basket */}
        const product = { id, title, price, rating, description, category, image, hasPrime }

        {/* push item to basket */}
        // sending product as an action to REDUX store... basket slice
        dispatch(addToBasket(product));
        //this product is available at action.payload
    }
  
    return (
        <div className="relative flex flex-col m-5 bg-gray-600 text-white z-30 p-8 rounded-md">
            <p className="absolute pb-2 top-2 right-2 text-xs italic text-white">{category}</p>

            <Image src={image} height={200} width={200} objectFit="contain" />

            <h4 className="my-3 text-base font-merri">{title}</h4>

            <div className="flex">
                {Array(rating).fill().map((_, i) => (
                     <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>

            <p className="text-sm font-varela my-2 line-clamp-3">{description}</p>

            <div className="mb-5">
                <Currency quantity={(price)*75} currency="INR" />
            </div>

            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12 mt-2 mb-3" src="https://links.papareact.com/fdw" alt="prime" />
                    <p className="text-xs text-white font-varela">FREE NEXT DAY DELIVERY</p>
                </div>
            )}
            <button onClick={addItemToBasket} className="mt-auto button text-black "><p className="font-prompt">ADD TO BASKET</p></button>
        </div>
    )
}

export default Product
