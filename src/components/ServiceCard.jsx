// eslint-disable-next-line react/prop-types
const ServiceCard = ({ imageSrc, textContent }) => {
  return (
    <div className="text-center bg-slate-200 py-6 px-8 rounded-3xl">
      <div>
        <img className="w-full" src={imageSrc} alt="" />
      </div>
      <div className="font-urbanist-bold text-xl mt-3">{textContent}</div>
    </div>
  );
};

export default ServiceCard;
