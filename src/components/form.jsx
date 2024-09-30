import { useForm } from "react-hook-form"
export default  function ResumeForm(){
 const {
    register,
    handleSubmit,
    formState:{errors}
 }=useForm();
   const onSubmit = (data) => {
    console.log(data);
  };
    return(
        <>
       



    <div className="min-h-screen flex items-center justify-center bg-offWhite">
      <div className="w-full max-w-lg bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-primaryBlue mb-6">Build Your Resume</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-primaryBlue font-medium mb-1">Full Name</label>
            <input
              type="text"
              {...register('fullName', { required: true })}
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:outline-none"
              placeholder="John Doe"
            />
            {errors.fullName && <span className="text-red-600 text-sm">Full name is required</span>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-primaryBlue font-medium mb-1">Email</label>
            <input
              type="email"
              {...register('email', { required: true })}
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:outline-none"
              placeholder="you@example.com"
            />
            {errors.email && <span className="text-red-600 text-sm">Email is required</span>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-primaryBlue font-medium mb-1">Phone</label>
            <input
              type="text"
              {...register('phone', { required: true })}
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:outline-none"
              placeholder="(123) 456-7890"
            />
            {errors.phone && <span className="text-red-600 text-sm">Phone number is required</span>}
          </div>

          {/* Address */}
          <div>
            <label className="block text-primaryBlue font-medium mb-1">Address</label>
            <input
              type="text"
              {...register('address', { required: true })}
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:outline-none"
              placeholder="123 Street Name, City, Country"
            />
            {errors.address && <span className="text-red-600 text-sm">Address is required</span>}
          </div>

          {/* Summary */}
          <div>
            <label className="block text-primaryBlue font-medium mb-1">Summary</label>
            <textarea
              {...register('summary', { required: true })}
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-primaryBlue focus:outline-none"
              placeholder="Brief summary about you..."
            />
            {errors.summary && <span className="text-red-600 text-sm">Summary is required</span>}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-primaryBlue text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>



        </>
    )
}