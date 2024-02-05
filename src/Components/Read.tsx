import { useGetUserQuery } from "../Redux/Slices/authSlice"


const Read = () => {

    const userdata = useGetUserQuery();
    console.log(userdata.data);
    
  return (
    <div>

        {userdata.isLoading && <span>Loading...</span>}
        {userdata.isError && <span>Something went wrong</span>}
        {userdata.data && <span>This is data {JSON.stringify(userdata.data)}...</span>}
    
    </div>
  )
}

export default Read
