import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';
import FooterLg from '../Footer/FooterLg';
import Navbar from '../Navbar/Navbar';
import Carousel from './Carousel';

const HomePageSm = () => {
    let history = useHistory();

    return (
        <>
            <div className="flex flex-col gap-5 pt-5 md:w-[750px] md:flex md:justify-center ">
                <div className='flex mt-3 '>
                    <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" className='flex flex-col justify-center align-center gap-2 border rounded-md shadow-lg md:flex md:justify-center'>
                        <div className="flex justify-center">
                            <img className="w-[650px] h-[150] rounded-md mt-2" src='https://images.unsplash.com/photo-1628692945421-21162c93a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVtaW5kZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
                        </div>

                        <div className='flex flex-col mt-5 p-2 gap-2 justify-center'>
                            <h1 className='flex font-serif font-bold text-xl text-[#2D31FA]'>Is there something you forgot?</h1>
                            <h2 className='flex font-serif  justify-center'>Are you a person who requires someone to remind about your tasks?</h2>
                            <div className='text-left'>
                                <h1 className='font-serif mt-2'>Don't worry! <span className='font-serif font-bold text-xl text-[#2D31FA] mx-2'>Daily Reminder</span> is there to remind you everything!</h1>
                            </div>
                            <div className='text-left'>
                                <h1 className='flex font-serif mt-2 '>Just <span className='font-serif font-bold text-2xl text-[#2D31FA] mx-2'> SignUp</span> to add you tasks and get relieved</h1>
                            </div>
                            <div className='flex justify-center'>
                                <button onClick={() => { history.push("/signup") }} className="flex font-semibold text-xl rounded-full bg-[#2D31FA] px-3 py-2 text-white w-[150px] mt-5 hover:shadow-lg delay-200 justify-center align-center">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-in" data-aos-offset="200" data-aos-duration="1000" className="container mx-auto mt-15 px-15 pb-10">
                    <h1 className="flex justify-center text-2xl pl-12 mt-10 mb-5 font-bold">Daily Reminder!!</h1>
                    <Carousel />
                </div>
            </div>
        </>
    )
};

const HomePageLg = () => {


    let history = useHistory();

    return (
        <>
            <div className="flex w-full justify-center align-center flex-col gap-20 pt-5 bg-[#2D31FA]">
                <div className=''>
                    <div className='flex justify-center align-center w-full mt-10 bg-[#2D31FA]'>
                        <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" className='flex flex-row gap-5 border rounded-md shadow-lg bg-white'>
                            <div className='flex justify-center'>
                                <img className="w-[450px] h-[350]" src='https://images.unsplash.com/photo-1628692945421-21162c93a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVtaW5kZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
                            </div>
                            <div className='flex flex-col p-5 gap-2'>
                                <h1 className='font-serif font-bold text-3xl text-[#2D31FA]'>Is there something you forgot?</h1>
                                <h2 className='font-serif text-2xl'>Are you a person who requires someone to remind about your tasks?</h2>
                                <h1 className='font-serif text-2xl mt-5'>Don't worry! <span className='font-serif font-bold text-3xl text-[#2D31FA]'>Daily Reminder</span> is there to remind you everything!</h1>
                                <h1 className='font-serif text-2xl mt-5'>Just <span className='font-serif font-bold text-2xl text-[#2D31FA]'>SignUp</span> to add you tasks and get relieved</h1>
                                <button onClick={() => { history.push("/signup") }} className="font-semibold text-xl rounded bg-[#2D31FA] px-3 py-2 text-white w-[150px] mt-5 hover:shadow-lg delay-200">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white'>
                    <div data-aos="fade-in" data-aos-offset="200" data-aos-duration="1000" className="container mx-auto mt-12 px-15 pb-10">
                        <h1 className="flex justify-center text-2xl pl-12 mb-5 font-bold">Daily Reminder!!</h1>
                        <Carousel />
                    </div>
                </div>
                <div>
                    <FooterLg />
                </div>
            </div>
        </>
    )
}

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className='lg:hidden'>
                <HomePageSm />
            </div>
            <div className='hidden lg:flex'>
                <HomePageLg />
            </div>
            <Footer />
        </div>

    );
};

export default HomePage;