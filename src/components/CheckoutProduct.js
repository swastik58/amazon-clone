import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from 'react-currency-formatter'
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({id, title, price, rating, description, category, image, hasPrime}) {

    const dispatch = useDispatch();

    const addItemToBasket = () => {

        const product = {id, title, price, rating, description, category, image, hasPrime};

        // push item to redux store
        dispatch(addToBasket(product));
    };

    const removeItemFromBasket = () => {
        // remove item from redux store
        dispatch(removeFromBasket({ id }));
        // the id is passed as an action payload
    }

    return (
        <div className="grid grid-cols-5 bg-gray-600 rounded-md">
            <Image src={image} height={200} width={200} objectFit="contain" />
            {/* middile or description section */}
            <div className="col-span-3 mx-5 bg-gray-600 rounded-md">
                <p className="text-white py-2 text-base font-merri">{title}</p>
                <div className="flex px-2 py-1">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>
                <p className="text-sm my-2 line-clamp-3 font-varela text-white ">{description}</p>
                <p className="text-white"><Currency quantity={(price)*75} currency="INR" /></p>

                {hasPrime && (
                    <div className="flex items-center py-2 space-x-2">
                        <img loading="lazy" className="w-12" src="https://links.papareact.com/fdw" alt="Prime" />
                        <p className="text-xm text-white font-varela">FREE Next day Delivery</p>
                    </div>
                )}
            </div>
            {/* add and remove buttons */}
            <div className="flex flex-col space-y-2 mx-2 my-auto justify-self-end">
                <button className="button" onClick={addItemToBasket}>Add to Basket</button>
                <button className="button" onClick={removeItemFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
