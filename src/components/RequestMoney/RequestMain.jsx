import PeopleList from "../PeopleList";
import SearchField from "../SearchField";
import { icons } from "../../constants";

const RequestForMoney = () => {
  return <>
  <div className="w-3/5 px-[34px]">
    <div className="mt-8 flex justify-between items-center">
      <h1 className="text-xl font-urbanist-bold">Request Money</h1>
      <SearchField icon={icons.search} />
    </div>
    <PeopleList />
  </div>
</>
};

export default RequestForMoney; 