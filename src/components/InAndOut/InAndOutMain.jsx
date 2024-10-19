import InOutTop from "./InOutTop";
import InAndOutCard from "./InAndOutCard";
const InAndOutMain = () => {
  return (
    <div className="w-3/5 px-[32px]">
      <InOutTop />
      <div className="mt-5">
        <InAndOutCard />
      </div>
    </div>
  );
};

export default InAndOutMain;
