import React from 'react'
import { useDeleteUserMutation, useGetDataQuery } from '../store/user'

const UserDet = () => {
  const {data:userData,isLoading,error}=useGetDataQuery()
  const [deleteUser,{isLoading:Loading,error:isError}]=useDeleteUserMutation()
  console.log(userData);
  


const handleDelete=(userId)=>{
   confirm(`Do you want to delete this user id :${userId} information !`)?deleteUser(userId):console.log("No Problem!");
   
}  
  return (
    <>
    {isLoading?
            <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>:userData === null?"There is no Data":<div className="container mx-auto p-4 md:p-6">
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full w-max md:w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 md:px-6 py-2 md:py-3 border text-center border-gray-300 text-[10px] md:text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">
                  SI NO
                </th>
                <th className="px-4 md:px-6 py-2 md:py-3 border text-center border-gray-300 text-[10px] md:text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">
                 User Photo
                </th>
                <th className="px-4 md:px-6 py-2 md:py-3 border text-center border-gray-300 text-[10px] md:text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">
                  Username
                </th>
                <th className="px-4 md:px-6 py-2 md:py-3 border text-center border-gray-300 text-[10px] md:text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">
                  PassWord
                </th>
                <th className="px-4 md:px-6 py-2 md:py-3 border text-center border-gray-300 text-[10px] md:text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">
                  Edit
                </th>
                <th className="px-4 md:px-6 py-2 md:py-3 border text-center border-gray-300 text-[10px] md:text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
           {isLoading?"isLoading...":error?"error":userData.map((val,index)=>{
            return (
              
              <tr key={index} className="hover:bg-gray-50" >
              <td className="px-4 md:px-6 py-2 md:py-4 border text-center border-gray-300 text-sm">{index+1}</td>
              <td className="px-4 md:px-6 py-2 md:py-4 border text-center border-gray-300 text-sm flex items-center justify-center">
               <div className='w-[14vh] h-[14vh] bg-green-300  overflow-hidden rounded-[50%]'>
               <img key={index} className='object-fill object-center w-full h-full' src={val.image} alt="" />
               </div>
              </td>
              <td className="px-4 md:px-6 py-2 md:py-4 border text-center border-gray-300 uppercase text-sm">{val.username}</td>
              <td className="px-4 md:px-6 py-2 md:py-4 border text-center border-gray-300 text-sm">{val.password}</td>
             
              <td className="px-4 md:px-6 py-2 md:py-4 border text-center border-gray-300">
                <button className='border-2 bg-green-600 text-white px-2 md:px-3 py-1 text-sm rounded-md hover:text-green-600 hover:bg-transparent hover:border-green-600 ' >Edit</button>
              </td>
              <td className="px-4 md:px-6 py-2 md:py-4 border text-center border-gray-300">
                <button className='border-2 bg-red-600 text-white px-2 md:px-3 py-1 text-sm rounded-md hover:text-red-600 hover:bg-transparent hover:border-red-600' onClick={()=>handleDelete(val.id)} >Delete</button>
              </td>
            </tr>
            )
           })}

            </tbody>
          </table>
        </div>
      </div>}
     
    </>
  )
}

export default UserDet