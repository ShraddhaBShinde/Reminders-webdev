import React from "react";

const FooterLg = () => {
    return (
        <div className="footer-container mt-14">
            <div className="flex flex-row justify-center gap-20 bg-white border rounded-lg shadow-lg pt-5 h-full pb-10">
                <div className="flex flex-row justify-center gap-2 mt-12">
                    <img className="h-9 w-9" src="https://cdn-icons.flaticon.com/png/128/1886/premium/1886830.png?token=exp=1647098723~hmac=d58f7943f5a4c546f52c7579df44e912" />
                    <h1 className="font-serif text-3xl font-bold pt-2">Daily Reminder</h1>
                </div>
                <div className="flex justify-between gap-10">
                <div className="flex flex-col justify-center mt-8">
                    <h1 className="text-2xl font-bold text-center">Company</h1>
                    <ul class="mt-3 gap-2">
                        <li>
                            <button><h1 className=" aboutus-btn text-md">About Us</h1></button>
                        </li>
                        <li>
                            <button><h1 className="blog-btn text-md hover:text-grey-400">Blog</h1></button>
                        </li>
                    </ul>
                </div>
                <div className="flex flex col justify-center mt-8">
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold text-center">Support</h1>
                        <ul class="mt-3 gap-2">
                            <li>
                                <button><h1 className=" aboutus-btn text-md">Contact Us</h1></button>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
};

export default FooterLg;