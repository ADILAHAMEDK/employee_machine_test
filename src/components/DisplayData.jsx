import React, { useContext } from 'react'
import { FaUserEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Context } from '../context/Context';

const DisplayData = () => {
    const { submittedData }  = useContext(Context);

    const getFirstLastName = (firstName, lastName) => {
        const first = firstName.charAt(0).toUpperCase();
        const last = lastName.charAt(0).toUpperCase();
        return `${first}${last}`;
      };

  return (
    <div className='mt-3'>
           <div className='rounded-lg grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5 gap-4 '>
        {submittedData.map((item,index)=>(
                   <div key={index} className='border px-2 py-1 bg-white rounded-md shadow-md'>
                   <h3 className=' px-1 py-1 bg-blue-950 inline text-white text-xs rounded'>{`#Emp0000${index +1}`}</h3>
                   <div className='flex flex-col items-center mt-3 '>
                       {item.image ? (<img src={URL.createObjectURL(item.image)} alt="img" className='w-12 h-12 rounded-full border-2 border-b-green-600' />) :
                         (<div className='w-12 h-12 rounded-full bg-blue-950 text-white flex items-center justify-center'>
                         <span className='text-lg'>{getFirstLastName(item.firstName, item.lastName)}</span>
                       </div>)}
                       <h2>{item.firstName}{item.lastName}</h2>
                       <span className='text-[#666] mb-2'>abcd@gmail.com</span>
                   </div>
                   <div className='flex items-center justify-between text-[#666] mb-3'>
                   <FaUserEdit />
                   <FaEye />
                   <MdDelete />
                   </div>
                   <div className='flex items-center justify-center gap-2 mb-2'>
                       <div className=''>
                           <span className='block text-sm text-center'>{item.department}</span>
                           <span className='block text-sm text-[#666]'>Department</span>
                       </div>
                       <div>
                           <span className='block text-sm text-center'>{item.designation}</span>
                           <span className='block text-sm text-[#666]'>Designation</span>
                       </div>
                   </div>
                   <div className='flex items-center justify-center gap-2'>
                       <div className='pr-5'>
                           <span className='block text-sm text-center'>{item.dateOfJoining ? new Date(item.dateOfJoining).toLocaleDateString() : 'N/A'}</span>
                           <span className='block text-sm text-[#666]'>Date Of Joining</span>
                       </div>
                       <div>
                           <span className='block text-sm text-center'>${item.salary}</span>
                           <span className='block text-sm text-[#666]'>Salery</span>
                       </div>
                   </div>
               </div>
        ))}

 
    </div>
    </div>
 
  )
}

export default DisplayData