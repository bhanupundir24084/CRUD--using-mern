import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

export default function Update() {

    const [StudentValue, setStudentValue] = useState({
        Student_id:null,
        StudentID: null,
        StudentName: null,
        StudentClass: null,
        StudentEnrollmentDate: null,
        StudentFeesStatus: null,
    })


    const { id } = useParams('id')

    // handle update

    async function onSubmitUpdate(e) {
        e.preventDefault();
        const resp = await fetch('http://localhost:8000/update',{
            method:"PUT",
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify({_id:StudentValue.Student_id,StudentData:StudentValue})
        })

        const response = await resp.json();
        const { result } = await response
        alert(result)
    }

    const [recordStatus,setRecordStatus]=useState(null);

    // 
    useEffect(() => {
        //  get student data
        async function getSingleRecord() {
            const resp = await fetch("http://localhost:8000/get-single-data", {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ _id: id })
            })
            const response = await resp.json();
            const { result,Status } = await response
            // setStudentValue({ ...StudentValue, StudentID: result.StudentID })
            // setStudentValue({ ...StudentValue, StudentName: result.StudentName })
            
            if(Status){
                setStudentValue({
                    Student_id:result._id,
                    StudentID: result.StudentID,
                    StudentName: result.StudentName,
                    StudentClass: result.StudentClass,
                    StudentEnrollmentDate:result.StudentEnrollmentDate,
                    StudentFeesStatus: result.StudentFeesStatus,
                })

                setRecordStatus(true);
            }else{
                setRecordStatus(false);
            }


            
        }

        getSingleRecord();
    }, [])


    return (
        <>
            <div>
                

                {
                    recordStatus==null?
                        "loading...."
                        :
                        <>
                            {
                                recordStatus?
                                <>
                                    <form onSubmit={onSubmitUpdate} method='POST'>
                    

                    <div className="max-w-md mx-auto mt-10  p-10 border-4 ">
                        <h1 className='text-2xl text-blue-600 font-bold my-4'>Update Student Record: </h1>
                        <div className="relative z-0 w-full mb-5 group">
                            <input value={StudentValue.StudentID} type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e) => setStudentValue({ ...StudentValue, StudentID: e.target.value })} />
                            <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Student ID: </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input value={StudentValue.StudentName} type="text" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={(e) => setStudentValue({ ...StudentValue, StudentName: e.target.value })} />
                            <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Name: </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input value={StudentValue.StudentClass} onChange={(e) => setStudentValue({ ...StudentValue, StudentClass: e.target.value })} type="text" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">student class</label>
                        </div>

                        <div className=" my-5">
                            <div className="">
                                {/* <input value={StudentValue.StudentEnrollmentDate} onChange={(e) => setStudentValue({ ...StudentValue, StudentEnrollmentDate: e.target.value })} type="date" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enrollment date</label> */}
                                <div className="w-full">
                                    <span className="block font-bold">Enrollment Date:</span>
                                    <span className="block text-xs mx-3">{StudentValue.StudentEnrollmentDate}</span>

                                </div>
                            </div>
                        </div>




                        <div className="relative z-0 w-full mb-5 group">
                            <label for="countries" class="block mb-2 text-sm font-medium text-">Select an option</label>
                            <select value={StudentValue.StudentFeesStatus} onChange={(e) => setStudentValue({ ...StudentValue, StudentFeesStatus: e.target.value })} id="countries" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">

                                <option value="FeesPaid">Fees paid</option>
                                <option value="FeesNotPaid" selected>Fess not paid</option>

                            </select>
                        </div>

                        <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>
                </form>
                                </>
                                    :
                                    <NotFound/>
                            }
                        </>
                }

            </div>
            



        </>
    )
}