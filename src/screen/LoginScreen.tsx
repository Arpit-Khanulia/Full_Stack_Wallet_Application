import { Link, useNavigate } from "react-router-dom";
import {validationloginSchema} from "../Schemas";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useAppDispatch } from "../Redux/Hooks";
import { useLoginMutation } from "../Redux/Slices/Auth";
import { saveUserAndToken } from "../Redux/Slices/User";

interface initialValuestype  {


  username:string
  email:string
  password:string


}
const initialValues:initialValuestype = {
  username:"",
  email:"",
  password:"",

}


const LoginScreen = () => {

  const dispatch = useAppDispatch();
  
  const navigate = useNavigate();
  const [newuser,{data:loginData,isError:isLoginError,isSuccess:isLoginSuccess}] = useLoginMutation();


  useEffect(()=>{
    
    if(isLoginError){
      alert('Wrong Credentials')

    }
  
    if(isLoginSuccess){
      console.log('user logged in successfully frontend');

      // yaha par data store me save karna he 
      dispatch(saveUserAndToken(loginData));

      navigate('/pay');
      // alert('User Logged In Successfully')
  }
},[isLoginSuccess,isLoginError]);



  const {values,errors,touched,handleBlur,handleChange,handleSubmit} =   useFormik({
    initialValues:initialValues,
    validationSchema:validationloginSchema,
    onSubmit : async(values,action)=>{

       console.log(values );
       await newuser(values);
       action.resetForm();
       
    }
  })

  console.log(errors);
  
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
        
          src="https://cdn3d.iconscout.com/3d/premium/thumb/payment-security-7042564-5727735.png?f=webp"
          alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm">

        <form onSubmit={handleSubmit} >

        <input name="username" value={values.username} onChange={handleChange} onBlur={handleBlur} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Username" />
          <div className="text-red-500 text-xs mt-1">
            {errors.username && touched.username ? <p>{errors.username}</p> : null}
          </div>
          <input name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Email Address" />
          <div className="text-red-500 text-xs mt-1">
            {errors.email && touched.email ? <p>{errors.email}</p> : null}
          </div>
          <input name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
          <div className="text-red-500 text-xs mt-1">
            {errors.password && touched.password ? <p>{errors.password}</p> : null}
          </div>
            

            <div className="text-center md:text-left">
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
            </div>

        </form>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have an account? <Link className="text-red-600 hover:underline hover:underline-offset-4" to="/register">Register</Link>
        </div>
      </div>
    </section>
  );
};

export default LoginScreen;
