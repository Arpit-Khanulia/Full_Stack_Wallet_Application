const TableHeading = () => {
    return (
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Transition Id</th>
                <th>TimeStamp</th>
                <th>Amount</th>
              </tr>
            </thead>
          </table>
        </div>
      );
}

export default TableHeading
