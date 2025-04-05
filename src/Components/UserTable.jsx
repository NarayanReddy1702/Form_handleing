import React from 'react'
import { useGetDataQuery } from '../store/user'

const UserTable = () => {
    const {Userdata,isLoading,error}=useGetDataQuery()
  return (
     <section className='w-full'>
             <thead>
                <tr>
                    <th>SI NO</th>
                    <th>Name</th>
                    <th>Password</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
             </thead>
             <tbody>
                <tr>
                    <td>1</td>
                    <td>K Narayan Reddy</td>
                </tr>
             </tbody>
     </section>
  )
}

export default UserTable