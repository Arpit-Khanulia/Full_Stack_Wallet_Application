

interface propss {
    id:string,
    timestamp:string,
    amount:number
}
const Table = (props:propss) => {

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <tbody>
          {/* row 1 */}
          <tr>
            <td className="w-1/3 text-center">{props.id}</td>
            <td className="w-1/3 text-center">{props.timestamp}</td>
            <td className="w-1/3 text-center"> ₹ {props.amount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
