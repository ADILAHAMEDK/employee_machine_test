import React, { useContext } from "react";
import { FaXmark } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Context } from "../context/Context";
import { useFormik } from "formik";
import * as Yup from "yup";

const ModalPopUp = ({ setClose, handleClose }) => {
  const { setSubmittedData } = useContext(Context);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      department: "",
      designation: "",
      dateOfJoining: null,
      salary: "",
      image: null,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      department: Yup.string().required("Department is required"),
      designation: Yup.string().required("Designation is required"),
      dateOfJoining: Yup.date()
        .required("Date of Joining is required")
        .nullable()
        .typeError("Invalid date format"),
      salary: Yup.number()
        .required("Salary is required")
        .positive("Salary must be positive"),
      image: Yup.mixed()
        .nullable()
        .test(
          "fileType",
          "Image is not required",
          (value) => value === null || value instanceof File
        ),
    }),
    onSubmit: (values) => {
      setSubmittedData((prev) => [...prev, values]);
      setClose(false);
    },
  });

  return (
    <div className="absolute z-10 w-full mx-auto">
      <div className="flex items-center justify-center mt-2 mr-6 sm:mr-0">
        <div className="px-2 py-1 w-[300px] sm:w-[400px] rounded-md bg-white shadow-md">
          <div className="flex items-center justify-between">
            <h1 className="text-sm sm:text-base font-medium">
              Create New Employee
            </h1>
            <FaXmark
              onClick={handleClose}
              className="px-0.5 py-0.5 bg-slate-400 text-lg rounded"
            />
          </div>
          <div className="mt-2">
            <form onSubmit={formik.handleSubmit}>
              <div className="flex items-center justify-between gap-5 mb-2">
                <div className="w-60">
                  <label className="block text-xs sm:text-sm">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter First Name"
                    className="w-full px-1 py-0.5 border rounded focus:outline-none placeholder:text-xs sm:placeholder:text-sm"
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <div className="text-red-500 text-xs">
                      {formik.errors.firstName}
                    </div>
                  )}
                </div>
                <div className="w-60">
                  <label className="block text-xs sm:text-sm">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter Last Name"
                    className="w-full px-1 py-0.5 border rounded focus:outline-none placeholder:text-xs sm:placeholder:text-sm"
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <div className="text-red-500 text-xs">
                      {formik.errors.lastName}
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full mb-2">
                <label className="block text-xs sm:text-sm">Department</label>
                <input
                  type="text"
                  name="department"
                  value={formik.values.department}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter Department"
                  className="w-full px-1 py-0.5 border rounded focus:outline-none placeholder:text-xs sm:placeholder:text-sm"
                />
                {formik.touched.department && formik.errors.department && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.department}
                  </div>
                )}
              </div>
              <div className="w-full mb-2">
                <label className="block text-xs sm:text-sm">Designation</label>
                <input
                  type="text"
                  name="designation"
                  value={formik.values.designation}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter Designation"
                  className="w-full px-1 py-0.5 border rounded focus:outline-none placeholder:text-xs sm:placeholder:text-sm"
                />
                {formik.touched.designation && formik.errors.designation && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.designation}
                  </div>
                )}
              </div>
              <div className="w-full mb-2">
                <label className="block text-xs sm:text-sm">
                  Date Of Joining
                </label>
                <DatePicker
                  name="dateOfJoining"
                  selected={formik.values.dateOfJoining}
                  dateFormat="dd/MM/yyyy"
                  onChange={(date) =>
                    formik.setFieldValue("dateOfJoining", date)
                  }
                  placeholder="Select Date Of Joining"
                  className="w-full px-1 py-0.5 border rounded focus:outline-none placeholder:text-xs sm:placeholder:text-sm"
                />
                {formik.touched.dateOfJoining &&
                  formik.errors.dateOfJoining && (
                    <div className="text-red-500 text-xs">
                      {formik.errors.dateOfJoining}
                    </div>
                  )}
              </div>
              <div className="w-full mb-2">
                <label className="block text-xs sm:text-sm">Salary</label>
                <input
                  type="number"
                  name="salary"
                  value={formik.values.salary}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter Salary"
                  className="w-full px-1 py-0.5 border rounded focus:outline-none placeholder:text-xs sm:placeholder:text-sm"
                />
                {formik.touched.salary && formik.errors.salary && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.salary}
                  </div>
                )}
              </div>
              <div className="w-full mb-2">
                <label className="block mb-0.5">Image<span className="text-xs"> (Optional)</span></label>
                <input
                  type="file"
                  name="image"
                  onChange={(e) =>
                    formik.setFieldValue("image", e.target.files[0])
                  }
                  onBlur={formik.handleBlur}
                  className="text-xs"
                />
                {formik.touched.image && formik.errors.image && (
                  <div className="text-red-500 text-xs">
                    {formik.errors.image}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="float-end px-2 py-0.5 rounded-2xl bg-blue-950 text-white text-sm"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPopUp;
