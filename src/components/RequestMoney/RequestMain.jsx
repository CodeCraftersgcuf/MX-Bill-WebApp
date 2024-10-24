import PeopleList from "../PeopleList";
import SearchField from "../SearchField";
import { icons } from "../../constants";

const RequestForMoney = () => {
  return <>
  <div className="ps-3">
    <div className="mt-8 flex justify-between items-center">
      <h1 className="text-xl font-urbanist-bold">Request Money</h1>
      <SearchField icon={icons.search} />
    </div>
    <PeopleList />
  </div>
</>
};

export default RequestForMoney; 