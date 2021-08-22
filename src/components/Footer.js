import Image from 'next/image'
import React from 'react'

function Footer() {
    return (
        <div className="pt-3 ">
            <div className="grid grid-flow-row-dense space-x-2 px-4 py-4 lg:px-60 lg:space-x-10 md:grid-cols-4 lg:grid-cols-4 bg-gray-800">
                <div className="text-white font-tenali text-2xl">
                    <p className="font-bold pb-3">Get to Know me</p>
                    <p className="pb-2 link"><a href="https://swastik-portfolio.netlify.app/" target="_blank">About Me</a></p>
                    <p className="pb-2 link"><a href="https://www.linkedin.com/in/swastik-s-697214100/" target="_blank">Linkedin</a></p>
                    <p className="pb-2 link"><a href="https://github.com/swastik58" target="_blank">GitHub</a></p>
                </div>
                <div className="text-white font-tenali text-2xl">
                    <p className="font-bold pb-3">Connect with me</p>
                    <p className="pb-2 link"><a href="https://www.facebook.com/swastik.supakar.58/" target="_blank">Facebook</a></p>
                    <p className="pb-2 link"><a href="https://www.instagram.com/a_wave_with_0_amplitude/?hl=en" target="_blank">Instagram</a></p>
                    <p className="pb-2 link"><a href="mailto:swastiksupakar19@gmail.com" target="_blank">Gmail</a></p>
                    <p className="pb-2 link"><a href="https://twitter.com/SwastikSupakar" target="_blank">Twitter</a></p>
                    <p className="pb-2 link"><a href="https://steamcommunity.com/id/swastiksupakar/" target="_blank">Steam</a></p>
                </div>
                <div className="text-white font-tenali text-2xl">
                   <p className="font-bold pb-3">Make Money with Amazon</p>
                   <p className="pb-2 link"><a href="https://sellercentral.amazon.in/">Sell on Amazon</a></p>
                   <p className="pb-2 link"><a href="https://affiliate-program.amazon.in/">Become an Affiliate</a></p>
                   <p className="pb-2 link"><a href="https://advertising.amazon.com/en-gb">Advertise Your Products</a></p>
                   <p className="pb-2 link"><a href="https://www.amazonpay.in/merchant">Amazon Pay on Merchants</a></p>
                   <p className="pb-2 link"><a href="https://sellercentral.amazon.in/">Fulfilment by Amazon</a></p>
                </div>
                <div className="text-white font-tenali text-2xl">
                    <p className="font-bold pb-3">Let Amazon help you</p>
                    <p className="pb-2 link"><a href="https://play.google.com/store/apps/details?id=in.amazon.mShop.android.shopping&hl=en_IN&gl=US">Amazon App Download</a></p>
                    <p className="pb-2 link"><a href="https://www.amazon.com/aa?_encoding=UTF8&bitCampaignCode=A0027&ref_=bit_v2_surl_a">Amazon Assistant</a></p>
                    <p className="pb-2 link"><a href="https://www.amazon.in/gp/help/customer/display.html?nodeId=202034930">100% Purchase Protection</a></p>
                    <p className="pb-2 link"><a href="https://www.amazon.in/gp/help/customer/contact-us">Help Centre</a></p>
                </div>
            </div>
            <div className="bg-gray-800 pt-2 text-center">
                   <a href="#header">     
                        <Image className="cursor-pointer"
                            src="https://links.papareact.com/f90"
                            width={150} height={50} objectFit="contain"
                        /> 
                    </a>
            </div>
        </div>
    )
}

export default Footer
