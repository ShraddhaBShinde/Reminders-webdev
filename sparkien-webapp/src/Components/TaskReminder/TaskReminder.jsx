import React, { useState} from 'react';
import { BsFillPlusCircleFill } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Navbar from '../Navbar/Navbar';


const TaskReminderLgSm = () => {
    const [inputData, setInputData] = useState('');
    const [reminders, setReminders] = useState([]);

    const addReminders = () => {
        if (!inputData) {

        } else {
            setReminders([...reminders, inputData]);
            setInputData('')
        }
    }
    const deleteReminder = (id) => {
        console.log(id);
        const updatedReminders = reminders.filter((elem, ind) => {
            return ind !== id;
        });
        setReminders(updatedReminders);
    }

    return (
        <div data-aos="fade-in" data-aos-offset="200" data-aos-duration="1000" className='reminder-container w-full mt-10 p-2 '>
            <div className=' flex justify-center '>
                <div className='flex flex-col font-serif'>
                    <h1 className='flex justify-center font-bold text-2xl justify-center text-[#2D31FA]'>Daily Reminder</h1>
                    <div className='add-reminders flex flex-row gap-2'>
                        <input type="text" placeholder='Add Reminders'
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)} />
                        <div className='flex'>
                            <button onClick={addReminders}><BsFillPlusCircleFill className='w-10 h-10 text-[#2D31FA]' /></button>
                        </div>
                    </div>
                    <div className='allReminders'>
                        {
                            reminders.map((elem, ind) => {
                                return (
                                    <div className='reminder flex flex-row justify-between mt-3' key={ind}>
                                        <h1 className='flex border h-[20px] p-2 rounded'>{elem} </h1>
                                        <button className='font-semibold text-xl rounded bg-[#2D31FA] text-white w-10 h-10 hover:shadow-lg delay-200"'><RiDeleteBin5Fill className='w-full flex justify-center' onClick={() => deleteReminder(ind)} /></button>    
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='flex justify-center'>
                    <button className="text-xl rounded bg-[#2D31FA] px-3 py-2 text-white w-[150px] mt-5 hover:shadow-lg delay-200">Check list</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const TaskReminder = () => {
    return (
        <>
            <div>
                <Navbar />                   
                <div className='lg:flex justify-center'>
                    <TaskReminderLgSm />
                </div>
            </div>
        </>
    )
}

export default TaskReminder;