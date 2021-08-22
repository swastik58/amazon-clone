import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from 'react-currency-formatter'
import { useSession } from "next-auth/client";
import { loadStripe } from '@stripe/stripe-js'
import axios from "axios";

const stripePromise = loadStripe('pk_test_51JQQuKSGbyaZNmmzS2IByfWfAMOlp3HCsgG52K1SDdvaoZUa8g5nXYIvuDPFufnDotJibmYEPd3xk14EnqTPdK1g00BDUzURWS');

function Checkout() {

    const items = useSelector(selectItems);
    const [session] = useSession();
    const total = useSelector(selectTotal);

    const createCheckout = async () => {
        const stripe  = await stripePromise;

        // call the backend to create a checkout session...
        const checkoutSession = await axios.post('/api/create-checkout-session', {
            items: items,
            email: session.user.email
        });

        // redirect the user to stripe checkout  
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        })
        if(result.error) {
            alert(result.error.message);
        }
    };

    return (
        <div className="bg-gray-900">
            <Head>
                <link rel="icon" href="/images.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Tenali+Ramakrishna&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Prompt&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,300&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet" />
                <title>Amazon 2.0 Checkout</title>
            </Head>
            <Header />
            
            <main className="lg:flex max-w-screen-2xl mx-auto">
                {/* left section */}
                <div className="bg-gray-900 flex-grow m-5 shadow-sm">
                    <Image src="https://links.papareact.com/ikj" 
                            width={1020} height={250} 
                            objectFit="contain"  
                            alt="Amazon advertisement"      
                    />
                    <div className="flex flex-col p-5 space-y-10">
                        <h1 className="text-white font-space text-3xl border-b pb-4">
                            {items.length === 0 ? 'Your Basket is empty' : "Shopping Basket"}
                        </h1>

                            {items.map((item, i) => (
                                <CheckoutProduct 
                                    key={i}
                                    id={item.id} 
                                    title={item.title} 
                                    rating={item.rating}
                                    price={item.price}
                                    description={item.description} 
                                    category={item.category} 
                                    image={item.image} 
                                    hasPrime={item.hasPrime}
                                />
                            ))}

                    </div>
                </div>
                {/* right section */}
                <div className=" flex flex-col bg-gray-600 text-white p-10 shadow-md">
                    {items.length > 0 && (
                        <>
                            <h2 className="whitespace-nowrap font-varela">
                                Subtotal ({items.length} items) : {" "}
                                <span className="font-bold">
                                    <Currency quantity={(total)*75} currency="INR" />
                                </span>
                            </h2>
                            <button disabled={!session} role="link"
                                onClick={createCheckout}
                                className={`button text-black mt-4 ${!session && 'from-gray-300 to-gray-500 border-gray-200 pt-2 text-white cursor-not-allowed'}`}> 
                                {!session ? 'Sign In to Checkout' : 'Proceed to Checkout'}
                            </button>
                        </>
                    )}
                </div>
            </main>

            <Footer />

        </div>
    )
}

export default Checkout
