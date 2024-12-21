import React, { useContext, useState } from 'react'
import { FaXmark } from "react-icons/fa6";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Context } from '../context/Context';

const ModalPopUp = ({ setClose, handleClose }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        department: '',
        designation: '',
        dateOfJoining: null,
        salary: '',
        image: null,
      });

    const { setSubmittedData }  = useContext(Context);

      const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
          ...formData,
          [name]: files ? files[0] : value,
        });
      };

      const handleDateChange = (date) => {
        setFormData({
          ...formData,
          dateOfJoining: date,
        });
      };

      const handleSubmit = () => {
        setSubmittedData((prev)=>[...prev,formData]);
        setClose(false)
      };
    
  return (
    <div className='absolute z-10 w-full border'>
            <div className='flex items-center justify-center mt-2'>
        <div className='px-2 py-1 w-[300px] sm:w-[400px] rounded-md bg-white'>
            <div className='flex items-center justify-between'>
            <h1 className='text-sm sm:text-base font-medium'>Create New Employee</h1>
            <FaXmark onClick={handleClose} className='px-0.5 py-0.5 bg-slate-400 text-lg rounded'/>
            </div>
            <div className='mt-2'>
            <div className='flex items-center justify-between gap-5 mb-2'>
                <div className='w-60'>
                <label className='block text-xs sm:text-sm'>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder='Enter First Name' className='w-full px-1 py-0.5 border rounded focus:outline-none placeholder:text-xs sm:placeholder:text-sm' />
                </div>
                <div className='w-60'>
                <label className='block text-xs sm:text-sm'>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder='Enter Last Name' className='w-full px-1 py-0.5 border rounded focus:outline-none placeholder:text-xs sm:placeholder:text-sm' />
                </div>
            </div>
            <div className='w-full mb-2'>
                <label className='block text-xs sm:text-sm'>Department</label>
                <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder='Enter DepartMent' className='w-full px-1 py-0.5 border rounded focus:outline-none placeholder:text-xs sm:placeholder:text-sm' />
            </div>
            <div className='w-full mb-2'>
                <label className='block text-xs sm:text-sm'>Designation</label>
                <input type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder='Enter Designation' className='w-full px-1 py-0.5 border rounded focus:outline-none placeholder:text-xs sm:placeholder:text-sm' />
            </div>
            <div className='w-full mb-2'>
                <label className='block text-xs sm:text-sm'>Date Of Joining</label>
                <DatePicker type="text" name="dateOfJoining" selected={formData.dateOfJoining} dateFormat="dd/MM/yyyy" onChange={handleDateChange} placeholder='Select Date Of Joining' className='w-full px-1 py-0.5 border rounded focus:outline-none placeholder:text-xs sm:placeholder:text-sm' />
            </div>
            <div className='w-full mb-2'>
                <label className='block text-xs sm:text-sm'>Salary</label>
                <input type="text" name="salary" value={formData.salary} onChange={handleChange} placeholder='Enter Salary' className='w-full px-1 py-0.5 border rounded focus:outline-none placeholder:text-xs sm:placeholder:text-sm' />
            </div>
            <div className='w-full mb-2'>
                <label className='block mb-0.5'>image</label>
                <input type="file" name="image" onChange={handleChange} className=' text-xs' />
            </div>
            <button onClick={handleSubmit} className='float-end px-2 py-0.5 rounded-2xl bg-blue-950 text-white text-sm'>Create</button>
            </div>
         
        </div>
    </div>
    </div>

  )
}

export default ModalPopUp