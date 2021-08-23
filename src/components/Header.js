import Image from "next/image";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline"
import { signIn, signOut, useSession } from 'next-auth/client'
import {useRouter} from "next/router"
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";


function Header() {

    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);
    //this are the items in the basket

    return (
        <header className="sticky top-0 z-50 bg-gray-800" id="header">
            {/* The logo */}
            <div className="pt-4 flex items-center flex-grow">
                    <div className=" pb-1 flex items-center flex-grow sm:flex-grow-0">
                        <Image 
                            onClick={() => router.push('/')}
                            src="https://links.papareact.com/f90"
                            width={150} height={40} objectFit="contain"
                            className="cursor-pointer"
                        />
                    </div>
                
                {/* Search bar */}
                <div className=" mb-2 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-600">
                    <input className="pb-1 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
                    <SearchIcon className="h-12 p-4" />
                </div>
                {/* top right portion */}
                <div className="text-white font-prompt pb-2 flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={!session ? signIn : signOut} className="link">
                        <p className="font-bold md:text-sm">
                            {session ? `Hello, ${session.user.name}` : "Sign In"}
                        </p>
                        <p className="md:text-sm">Account Details & List</p>
                    </div>
                    <div className="link" > 
                        <p className="font-bold md:text-sm">Returns</p>
                        <p>and Orders</p>
                    </div>
                    <div onClick={() => router.push('/checkout')} className="relative flex items-center link pb-2">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">{items.length}</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                </div>
            </div>
            {/* bottom portion below the logo */}
            <div className="flex text-md font-space space-x-8 p-2 pl-6 items-center bg-gray-700 text-white">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1"/>
                    All
                </p>
                <p className="link"><a href="https://www.primevideo.com/">Prime Video</a></p>
                <p className="link"><a href="https://www.amazon.in/gp/goldbox?ref_=nav_cs_gb_5bf06ae8328043a2beb2754f40a54c84">Today's Deals</a></p>
                <p className="link"><a href="https://www.amazon.in/amazonpay/home">Amazon Pay</a></p>
                <p className="link"><a href="https://www.amazon.in/electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics_c5b70a82461a484189e700166599ce9f">Electronics</a></p>
                <p className="link"><a href="https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles_9292c6cb7b394d30b2467b8f631090a7">Mobiles</a></p>
                <p className="link"><a href="https://www.amazon.in/computers-and-accessories/b/?ie=UTF8&node=976392031&ref_=nav_cs_pc_d99b175b1db64d5b968b67ba6e5a72a3">Computers</a></p>
                <p className="link hidden lg:inline-flex"><a href="https://www.amazon.in/Books/b/?ie=UTF8&node=976389031&ref_=nav_cs_books_bc600d0d124d40a3909f96904182b45f">Books</a></p>
                <p className="link hidden lg:inline-flex"><a href="https://www.amazon.in/Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home_5f0a1657ec2a4557a8233992829feaf3">Home and Kitchen</a></p>
                <p className="link hidden lg:inline-flex"><a href="https://www.amazon.in/gp/browse.html?node=6648217031&ref_=nav_cs_fashion_ad6f81eb5d474066bc9e5788a3c19a28">Fashion</a></p>
                <p className="link hidden lg:inline-flex"><a href="https://www.amazon.in/amazon-coupons/b/?_encoding=UTF8&node=10465704031&ref_=nav_cs_coupons_ce0af682243a4823874ce6cde7afb33e">Coupons</a></p>
                <p className="link hidden lg:inline-flex"><a href="https://www.amazon.in/gp/help/customer/contact-us">Customer Service</a></p>
            </div>

        </header>
    )
}

export default Header
