const InAndOutCardContent = ({
  image,
  name,
  date,
  time,
  incomeType,
  money,
  ...props
}) => {
  const incomColor = 'text-green-600'
  const expenseColor = 'text-red'
  return (
    <div {...props}>
      <div className="bg-slate-100 flex items-center justify-around py-3 shadow-md border border-slate-300">
        <div className="w-16">
          <img src={image} alt="" />
        </div>
        <div className="font-urbanist-bold">{name}</div>
        <div>{date}</div>
        <div>{time}</div>
        <div className={incomeType === 'income' ? incomColor : expenseColor}>{incomeType}</div>
        <div>{money}</div>
      </div>
    </div>
  );
};

export default InAndOutCardContent;
