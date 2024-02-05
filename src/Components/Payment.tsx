import { useFormik } from "formik";
import { usePayMutation } from "../Redux/Slices/Auth";
import { paymentSchema } from "../Schemas";
import { useEffect } from "react";
import Loading from "./Loading";


interface initialValuestype {

  recipent_username:string;
  password:string;
  transfer_money:number;
}

const initialValues:initialValuestype={
  recipent_username:"",
  password:"",
  transfer_money:0
}

const Payment = () => {

  console.log('page  rendering now');
  
  const [newpayment,{isError,isSuccess,isLoading}] = usePayMutation();


  
  
  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    validationSchema:paymentSchema,
    initialValues:initialValues,
    onSubmit:async(values,action)=>{
      
      console.log(values);
      await newpayment(values);
      action.resetForm();
    }
  })
  
  useEffect(() => {

    if(isSuccess)alert('Transition Succesful');
    if(isError) alert('Transition Failed')

  }, [isSuccess,isError]);
  
  


    return (
      <div className="relative mx-auto w-full bg-white ">

        {isLoading ? <Loading/>:
        <div className="grid min-h-screen grid-cols-10">
          <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
            <div className="mx-auto w-full max-w-lg">
              <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                Make Payment
                <span className="mt-2 block h-1 w-10 bg-gray-600 sm:w-20"></span>
              </h1>
              <form onSubmit={handleSubmit}  className="mt-10 flex flex-col space-y-4">
                <div>
                  <label htmlFor="email" className="text-xs font-semibold text-gray-500">
                    Recipent's Username
                  </label>
                  
                  <input
                    value={values.recipent_username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    name="recipent_username"
                    placeholder="username"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-gray-500"
                  />
                  <div className="text-red-500 text-xs mt-1">
                    {errors.recipent_username && touched.recipent_username ? <p>{errors.recipent_username}</p> : null}
                  </div>
                </div>
                <div className="relative">
                  <label htmlFor="card-number" className="text-xs font-semibold text-gray-500">
                    Password
                  </label>
                  <input
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="password"
                    name="password"
                    placeholder="password"
                    className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-gray-500"
                  />
                  <div className="text-red-500 text-xs mt-1">
                    {errors.password && touched.password ? <p>{errors.password}</p> : null}
                  </div>

                  <img src="/images/uQUFIfCYVYcLK0qVJF5Yw.png" alt="" className="absolute bottom-3 right-3 max-h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500">Transfer Amount</p>
                  <input
                    value={values.transfer_money}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="transfer_money"
                    placeholder="Amount ₹"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-gray-500"
                  />
                  <div className="text-red-500 text-xs mt-1">
                    {errors.transfer_money && touched.transfer_money ? <p>{errors.transfer_money}</p> : null}
                  </div>
                </div>
              <p className="mt-10 text-center text-sm font-semibold text-gray-500">
                Click on Pay to make secure Transactions{' '}
              </p>
              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-gray-500 sm:text-lg"
              >
                Pay
              </button>
              </form>
            </div>
          </div>
          <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
            <div>
              <img
                src="https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="absolute inset-0 h-full w-full object-cover "
              />
              <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-gray-800 to-gray-400 opacity-95"></div>
            </div>
        
          </div>
        </div>
}
      </div>
    );
  };
  
  export default Payment;
  