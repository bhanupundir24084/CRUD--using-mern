import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
const Display = () => {
    const navigate = useNavigate();

    const [studentData, setStudentData] = useState(null);
    const getallrecords = async () => {
        const resp = await fetch('http://localhost:8000/display', {
            method: 'GET',
        })
        const response = await resp.json();
        setStudentData(response)
    }
    useEffect(() => {
        getallrecords();
    }, [])


    // delete record by id
    async function deleteRecord(_id) {
        const resp = await fetch('http://localhost:8000/delete', {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ _id })
        })
        const response = await resp.json();
        const { result, Status } = await response
        console.log(Status)
        if (Status) {
            alert(result)
            getallrecords();
        } else {
            alert(result);
        }
        // if(Status){
        //     navigate("/")
        // }else{
        //     alert(result)
        // }

    }

    const [filter, setFilter] = useState("all");

    return (
        <>
            {
                studentData === null ?
                    "Loading..."
                    :
                    <div>
                        <div>

                            <h1 className='text-center font-bold my-5 text-4xl' > All STUDENT RECORDS </h1>

                            <div className='flex justify-end mx-8'>
                                {/* filter button */}
                                <div className='w-44'>
                                    <select onChange={(e) => {
                                        setFilter(e.target.value)
                                        
                                    }} id="filter" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value ="all" selected>All Records</option>
                                        <option value="FeesNotPaid">Not Paid</option>
                                        <option value="FeesPaid">Fees Paid</option>
                                    </select>
                                </div>

                            </div>




                            <div className="relative overflow-x-auto mx-7 ">

                                <Link to="/create">
                                    <button className=" my-4  mx-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Add
                                    </button>
                                </Link>

                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    Student Name
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Student ID
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Student Class
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Fees Status
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Enrollment Date
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>


                                            {
                                                studentData.map((data, index) =>

                                                    filter == "all" ?
                                                        <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                {data.StudentName}
                                                            </th>
                                                            <td className="px-6 py-4">
                                                                {data.StudentID}
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                {data.StudentClass}
                                                            </td>
                                                            {
                                                                data.StudentFeesStatus == "FeesNotPaid" ?
                                                                    <td className="px-6 py-4 text-red-500">
                                                                        {data.StudentFeesStatus}
                                                                    </td>
                                                                    :
                                                                    <td className="px-6 py-4 text-green-600">
                                                                        {data.StudentFeesStatus}
                                                                    </td>
                                                            }

                                                            <td className="px-6 py-4">
                                                                {data.StudentEnrollmentDate}
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                <button className="p-1 font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e) => deleteRecord(data._id)} >Delete</button>
                                                                <Link to={`/update/${data._id}`} className="p-1 font-medium text-blue-600 dark:text-blue-500 hover:underline">Update</Link>
                                                            </td>
                                                        </tr>
                                                        : <>
                                                            {

                                                                filter == "FeesPaid"
                                                                    ?
                                                                    <>
                                                                        {
                                                                            data.StudentFeesStatus == "FeesPaid" ?
                                                                                <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        {data.StudentName}
                                                                                    </th>
                                                                                    <td className="px-6 py-4">
                                                                                        {data.StudentID}
                                                                                    </td>
                                                                                    <td className="px-6 py-4">
                                                                                        {data.StudentClass}
                                                                                    </td>
                                                                                    {
                                                                                        data.StudentFeesStatus == "FeesNotPaid" ?
                                                                                            <td className="px-6 py-4 text-red-500">
                                                                                                {data.StudentFeesStatus}
                                                                                            </td>
                                                                                            :
                                                                                            <td className="px-6 py-4 text-green-600">
                                                                                                {data.StudentFeesStatus}
                                                                                            </td>
                                                                                    }

                                                                                    <td className="px-6 py-4">
                                                                                        {data.StudentEnrollmentDate}
                                                                                    </td>
                                                                                    <td className="px-6 py-4">
                                                                                        <button className="p-1 font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e) => deleteRecord(data._id)} >Delete</button>
                                                                                        <Link to={`/update/${data._id}`} className="p-1 font-medium text-blue-600 dark:text-blue-500 hover:underline">Update</Link>
                                                                                    </td>
                                                                                </tr>
                                                                                : ""
                                                                        }
                                                                    </>
                                                                    : 
                                                                    <>
                                                                        {
                                                                            data.StudentFeesStatus == "FeesNotPaid" ?
                                                                                <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        {data.StudentName}
                                                                                    </th>
                                                                                    <td className="px-6 py-4">
                                                                                        {data.StudentID}
                                                                                    </td>
                                                                                    <td className="px-6 py-4">
                                                                                        {data.StudentClass}
                                                                                    </td>
                                                                                    {
                                                                                        data.StudentFeesStatus == "FeesNotPaid" ?
                                                                                            <td className="px-6 py-4 text-red-500">
                                                                                                {data.StudentFeesStatus}
                                                                                            </td>
                                                                                            :
                                                                                            <td className="px-6 py-4 text-green-600">
                                                                                                {data.StudentFeesStatus}
                                                                                            </td>
                                                                                    }

                                                                                    <td className="px-6 py-4">
                                                                                        {data.StudentEnrollmentDate}
                                                                                    </td>
                                                                                    <td className="px-6 py-4">
                                                                                        <button className="p-1 font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={(e) => deleteRecord(data._id)} >Delete</button>
                                                                                        <Link to={`/update/${data._id}`} className="p-1 font-medium text-blue-600 dark:text-blue-500 hover:underline">Update</Link>
                                                                                    </td>
                                                                                </tr>
                                                                                : ""
                                                                        }
                                                                    </>
                                                            }
                                                        </>
                                                )
                                            }


                                        </tbody>
                                    </table>
                                </div>



                            </div>
                        </div>
                    </div>
            }


        </>
    )
}

export default Display