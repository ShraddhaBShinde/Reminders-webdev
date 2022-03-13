import React from 'react';
import SignUpPage from '../SignUpPage/SignUpPage';

const HomePageSm = () => {
    return(
        <>
        <div className='flex mt-3'>
            <div className='flex flex-col justify-center align-center gap-2 border rounded-md shadow-lg'>
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
                   <button className="flex font-semibold text-xl rounded-full bg-[#2D31FA] px-3 py-2 text-white w-[150px] mt-5 hover:shadow-lg delay-200 justify-center align-center">SignUp</button>
                   </div>
                </div>
            </div>

        </div>
        </>
    )
};

const HomePageLg = () => {
    return(
        <>
        <div className='flex justify-center align-center w-full mt-10'>
            <div className='flex flex-row gap-5 border rounded-md shadow-lg'>
                <div className='flex justify-center'>
                <img className="w-[450px] h-[350]" src='https://images.unsplash.com/photo-1628692945421-21162c93a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVtaW5kZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
                </div>
                <div className='flex flex-col p-5 gap-2'>
                    <h1 className='font-serif font-bold text-3xl text-[#2D31FA]'>Is there something you forgot?</h1>
                    <h2 className='font-serif text-2xl'>Are you a person who requires someone to remind about your tasks?</h2>
                    <h1 className='font-serif text-2xl mt-5'>Don't worry! <span className='font-serif font-bold text-3xl text-[#2D31FA]'>Daily Reminder</span> is there to remind you everything!</h1>
                    <h1 className='font-serif text-2xl mt-5'>Just <span className='font-serif font-bold text-2xl text-[#2D31FA]'>SignUp</span> to add you tasks and get relieved</h1>
                    <button onClick={SignUpPage} className="font-semibold text-xl rounded-full bg-[#2D31FA] px-3 py-2 text-white w-[150px] mt-5 hover:shadow-lg delay-200">SignUp</button>
                </div>
            </div>
        </div>
        </>
    )
}

const HomePage = () => {
    return(
        <homepage>
                <div className='lg:hidden'>
                    <HomePageSm />
                </div>
                <div className='hidden lg:flex'>
                    <HomePageLg />
                </div>
                
        </homepage>
        
    );
};

export default HomePage;