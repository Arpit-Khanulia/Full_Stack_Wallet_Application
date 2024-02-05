import { useGetLastMonthDataQuery } from "../Redux/Slices/Auth";

import Table from "./Table";

const LastMonth = () => {

    const { data } = useGetLastMonthDataQuery();
    console.log(`this is data ${JSON.stringify(data)} `);

  return (
    <div>
        {data?.map((e)=> (<Table
        
        key={e.timestamp}
        id = {e.id}
        amount = {e.amount}
        timestamp = {e.timestamp}
        
        />))}

    </div>
  )
}

export default LastMonth