import InAndOutCardContent from "./InAndOutCardContent";
import { DUMMY_PAY } from "../../util/DummyUserPayment";
const InAndOutCard = () => {
  return (
    <div className="mt-5">
      {DUMMY_PAY.map((data) => (
        <InAndOutCardContent
          image={data.image}
          name={data.name}
          date={data.time}
          time={data.time}
          incomeType={data.incomeType}
          money={data.money}
          className='mb-3'
        />
      ))}
    </div>
  );
};

export default InAndOutCard;
