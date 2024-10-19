// eslint-disable-next-line react/prop-types
const ServiceCard = ({ imageSrc, textContent }) => {
  return (
    <div className="flex flex-col items-center bg-blue-100 p-5 rounded-xl">
      <div className="w-20">
        <img src={imageSrc} alt="" />
      </div>
      <div className="font-urbanist-bold text-lg mt-3">{textContent}</div>
    </div>
  );
};

export default ServiceCard;
