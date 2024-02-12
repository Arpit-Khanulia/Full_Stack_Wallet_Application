const TableHeading = () => {
    return (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="w-1/3 text-center" >Transition Id</th>
                <th className="w-1/3 text-center" >TimeStamp</th>
                <th className="w-1/3 text-center" >Amount</th>
              </tr>
            </thead>
          </table>
        </div>
      );
}

export default TableHeading
