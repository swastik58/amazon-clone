import moment from "moment"
import Currency  from 'react-currency-formatter'

function Order({ id, amount, amountShipping, items, timestamp, images }) {
    return (
        <div className='relative border rounded-md'>
            <div className='flex items-center space-x-10 p-5 bg-gray-600 text-sm text-white'> 
                <div className='font-varela'>
                    <p className="font-bold text-sm">ORDERS PLACED</p>
                    <p>{moment.unix(timestamp).format('DD MM YYYY')}</p>
                </div>
                <div className="font-varela">
                    <p className="font-bold text-sm">TOTAL</p>
                    <p>
                        <Currency quantity={amount} currency="INR" /> - Next Day Delivery {" "}
                        <Currency quantity={amountShipping} currency="INR" />
                    </p>
                </div>
                <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right font-varela text-white">
                    {items.length} Item(s)
                </p>
                <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs font-varela whitespace-nowrap">ORDER #{id}</p>
            </div>
            <div className='p-5 sm:p-10'>
                <div className='flex space-x-6 overflow-x-auto'>
                    {images.map((image) => (
                        <img src={image} alt="" className="h-20 object-contain sm:h-32" />
                    ))}
                    <br />
                </div>
                <p className="font-varela pt-4">Order Id : {id}</p>
            </div>
        </div>
    )
}

export default Order
