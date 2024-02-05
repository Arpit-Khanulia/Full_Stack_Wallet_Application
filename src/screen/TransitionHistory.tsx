import { useParams } from "react-router-dom";
import LastDay from "../Components/LastDay";
import LastMonth from "../Components/LastMonth";
import LastYear from "../Components/LastYear";
import LastHour from "../Components/LastHour";
import TableHeading from "../Components/TableHeading";

const TransitionHistory = () => {
  const { tquery } = useParams();

  let componentToRender;

  switch (tquery) {
    case 'lastday':
      componentToRender = <LastDay />;
      break;
    case 'lastmonth':
      componentToRender = <LastMonth />;
      break;
    case 'lastyear':
      componentToRender = <LastYear />;
      break;
    case 'lasthour':
      componentToRender = <LastHour />;
      break;
    default:
      componentToRender = <LastMonth />;
  }

  return (
    <div>
      <TableHeading/>
      {componentToRender}
    </div>
  );
};

export default TransitionHistory;
