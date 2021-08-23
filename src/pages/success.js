import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function success() {

    const router = useRouter();

    return (
        <div className="bg-gray-900 h-screen">
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
                <title>Amazon 2.0 Success</title>
            </Head>
            <Header />
            <main className="text-white max-w-screen-lg mx-auto mt-5 pb-5 pt-3">
                <div className="flex flex-col p-10 bg-gray-600">
                    <div className="flex items-center space-x-2 mb-5 pt-5">
                        <CheckCircleIcon className="text-green-700 h-10" />
                        <h1 className="text-3xl font-merri">Thank You... Your Order has been places successfully</h1>
                    </div>
                    <p className="font-varela">
                        Thank you for shopping with us. You will be sent an email once
                        your items have been shipped. If you would like to check the status of
                        your order(s), press the button below...
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default success;
