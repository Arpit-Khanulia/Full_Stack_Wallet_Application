import { useAppSelector,useAppDispatch } from "../Redux/Hooks";
import { increament,decreament,byfive } from "../Redux/Slices/data";

const Tempredux = () => {

    const data =  useAppSelector(state=>state.mycounter);
    const dispatch = useAppDispatch();

    console.log(data);
    
  return (<>
  
    <button onClick={()=>dispatch(increament())} >{data}</button>
    <button onClick={()=>dispatch(decreament())} >{data}</button>
    <button onClick={()=>dispatch(byfive(5))} >{data}</button>
  
  </>
  )
}

export default Tempredux 