// eslint-disable-next-line react/prop-types
const ServiceCard = ({ imageSrc, textContent }) => {
  return (
    <div className="flex flex-col items-center p-5 transition-transform cursor-pointer hover:scale-110">
      <div className="md:w-3/5">
        <img
          src={imageSrc}
          alt=""
          className=" p-3 rounded-full bg-yellow-500"
          style={{
            filter: "drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25)) invert(1)",
          }}
        />
      </div>
      <div className="font-urbanist-bold md:text-sm lg:text-lg mt-3">{textContent}</div>
    </div>
  );
};

export default ServiceCard;
