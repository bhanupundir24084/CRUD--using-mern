// javascript events

//  student id, name, class, enrollment date, fee status: [paid / not paid]
import React, { useState } from 'react';

const Create = () => {

    const [createStatus,setCreateStatus]=useState(false);

    const [studentData, setStudentData] = useState({
        StudentID:"",
        StudentName:"",
        StudentClass:"",
        StudentEnrollmentDate: "",
        StudentFeesStatus:"FeesNotPaid"
    });

    // submit handle
    const onSubmitHandle = async(e) => {        
        setCreateStatus(true);
        // running start
        e.preventDefault();      
        const resp = await fetch("http://localhost:8000/create",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(studentData)
        })        
        const response = await resp.json();
        const {Status,result}=await response;
        if(Status){            
            setStudentData({
                StudentID:"",
                StudentName:"",
                StudentClass:"",
                StudentEnrollmentDate: "",
                StudentFeesStatus:""
            })
            setCreateStatus(false)
            alert(result)

        }else{
            //end
            setCreateStatus(false);
            alert(result)
        }

        
        
    }
    return (
        <>
        <form onSubmit={onSubmitHandle} method='POST'>

            <div className="max-w-md mx-auto mt-10  p-10 border-4 ">
                <h1 className='text-2xl text-blue-600 font-bold my-4'>Insert Student Record: </h1>                
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={studentData.StudentID} onChange={(e)=>setStudentData({...studentData,StudentID:e.target.value})} />
                    <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Student ID: </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={studentData.StudentName} onChange={(e)=>setStudentData({...studentData,StudentName:e.target.value})}  />
                    <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Name: </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input value={studentData.StudentClass} onChange={(e)=>setStudentData({...studentData,StudentClass:e.target.value})} type="text" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">student class</label>
                </div>
                
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input value={studentData.StudentEnrollmentDate} onChange={(e)=>setStudentData({...studentData,StudentEnrollmentDate:e.target.value})} type="date" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enrollment date</label>
                    </div>                    
                </div>

                <div className="relative z-0 w-full mb-5 group">                    
                    <label for="countries" class="block mb-2 text-sm font-medium text-">Select an option</label>
                    <select  value={studentData.StudentFeesStatus} onChange={(e)=>setStudentData({...studentData,StudentFeesStatus:e.target.value})} id="countries" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                 
                    <option value="FeesNotPaid"selected >Fess not paid</option>
                    <option value="FeesPaid">Fees paid</option>
                 
                    </select>
                </div>           
                    <div>
                        
                        {
                            createStatus?
                            <button className="text-white bg-gray-400  focus:ring-4    0 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  00  " disabled>Submit</button>
                            
                            :
                            
                            <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        }
                    </div>

                
            </div>


            </form>
        </>

    )
}

export default Create



// 1st method
// function handle(){

// }


// 2nd method

const handle=()=>{

}