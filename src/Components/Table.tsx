

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
            <td>{props.id}</td>
            <td>{props.timestamp}</td>
            <td> ₹ {props.amount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
