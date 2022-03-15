import React, { useState } from 'react';
import { BsFillPlusCircleFill } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";

const TaskDashboardLg = () => {
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
            return ind != id;
        });
        setReminders(updatedReminders);
    }

    return (
        <div className='reminder-container '>
            <div className=' flex justify-center'>
                <div className='flex flex-col font-serif'>
                    <h1 className='flex justify-center'>Reminder</h1>
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
                                    <div className='reminder flex flex-row gap-2' key={ind}>
                                        <h1 className='flex border h-[20px]'>{elem} </h1>
                                        <button><RiDeleteBin5Fill className='' onClick={() => deleteReminder(ind)} /></button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className="font-semibold text-xl rounded bg-[#2D31FA] px-3 py-2 text-white w-[150px] mt-5 hover:shadow-lg delay-200">Check list</button>
                </div>
            </div>
        </div>
    )
}

const TaskDashboard = () => {
    return (
        <>
            <div>
                <div className=''>
                    <TaskDashboardLg />
                </div>
            </div>
        </>
    )
}

export default TaskDashboard;