import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import React from 'react'
import { getSession, useSession } from "next-auth/client";
import db from "../../firebase";
import moment from "moment";
import Order from "../components/Order";

// we do a server side render to get the orders

function Orders({ orders }) {

    const [session] = useSession();

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
                <title>Amazon 2.0 Orders</title>
            </Head>
            <Header />
            <main className="text-white max-w-screen-lg mx-auto p-10">
                <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-500 font-merri">Your Orders</h1>
                
                {session ? (
                    <h2>{orders.length} Order(s)</h2>
                ) : (
                    <h2>Please Sign In to see your orders</h2>
                )}

                <div className="mt-5 space-y-4">
                    {orders?.map((
                        {id, amount, amountShipping, items, timestamp, images}) => (
                        <Order 
                            key={id}
                            id={id}
                            amount={amount}
                            amountShipping={amountShipping}
                            items={items}
                            timestamp={timestamp}
                            images={images}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Orders

export async function getServerSideProps(context) {

    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    // get the users logged in credentials

    const session = await getSession(context);

    if(!session) {
        return {
            props: {}
        };
    }

    // firebase database
    const stripeOrders = await db.collection('users').doc(session.user.email).collection('orders').orderBy('timestamp', 'desc').get();

    // stripe orders
    const orders = await Promise.all(
        stripeOrders.docs.map(async (order) => ({
            id: order.id,
            amount: order.data().amount,
            amountShipping: order.data().amount_shipping,
            images: order.data().images,
            timestamp: moment(order.data().timestamp.toDate()).unix(),
            items: (
                await stripe.checkout.sessions.listLineItems(order.id, {
                    limit: 100,
                })
            ).data,
        }))
    );

    return {
        props: {
            orders,
            session,
        }
    }
}