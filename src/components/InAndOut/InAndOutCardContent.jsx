const InAndOutCardContent = ({
  image,
  name,
  date,
  time,
  incomeType,
  money,
  ...props
}) => {
  return (
    <div {...props}>
      <div className="bg-slate-100 flex items-center justify-around py-3">
        <div className="w-16">
          <img src={image} alt="" />
        </div>
        <div>{name}</div>
        <div>{date}</div>
        <div>{time}</div>
        <div>{incomeType}</div>
        <div>{money}</div>
      </div>
    </div>
  );
};

export default InAndOutCardContent;
