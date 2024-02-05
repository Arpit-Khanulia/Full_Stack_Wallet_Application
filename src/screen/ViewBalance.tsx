import { useFormik } from "formik";
import { useEffect } from "react";
import Loading from "../Components/Loading";
import { viewBalanceSchema } from "../Schemas";
import { useViewbalanceMutation } from "../Redux/Slices/Auth";

interface initialValuestype {
  password:string;
}

const initialValues:initialValuestype={
  password:"",
}

const ViewBalance = () => {


    const [getbalance,{data,isSuccess,isError,isLoading}] = useViewbalanceMutation();


  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    validationSchema:viewBalanceSchema,
    initialValues:initialValues,
    onSubmit:async(values,action)=>{
      
      await getbalance(values);
      console.log(values);
      action.resetForm();
    }
  })

    useEffect(()=>{
        console.log(data);
        
        if(isSuccess){
            alert(`Your Balance is ₹ ${data?.balance} `);
        }
        if(isError){
            alert('Can not fetch Balance');
        }

    },[isSuccess,isError])


    return (
      <div className="relative mx-auto w-full bg-white  ">

        {isLoading ? <Loading/>:
        <div className="grid min-h-screen grid-cols-10">
          <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
            <div className="mx-auto w-full max-w-lg">
              <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                View Balance
                <span className="mt-2 block h-1 w-10 bg-gray-600 sm:w-20"></span>
              </h1>
              <form onSubmit={handleSubmit}  className="mt-10 flex flex-col space-y-4">
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
              <p className="mt-10 text-center text-sm font-semibold text-gray-500">
              Click on ViewBalance to fetch your Account Balance{' '}
              </p>
              <button
                type="submit"
                className="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-gray-500 sm:text-lg"
              >
                View Balance
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
  
  export default ViewBalance;
  