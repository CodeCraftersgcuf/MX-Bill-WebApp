import { icons } from "../../constants";
import ServiceCard from "./ServiceCard";
const Services = () => {
  return (
    <div className="mx-[34px]">
      <div className="flex justify-between my-5">
        <h1 className="font-urbanist-extra-bold text-3xl ">Our Services</h1>
        <button className="font-urbanist-bold bg-primary text-white hover:bg-blue-800 transition-colors rounded-xl px-3">
          View All
        </button>
      </div>
      <div className="grid grid-cols-5 gap-10">
        <ServiceCard imageSrc={icons.airbnb} textContent="AirTime" />
        <ServiceCard imageSrc={icons.television} textContent="AirTime" />
        <ServiceCard imageSrc={icons.airbnb} textContent="AirTime" />
        <ServiceCard imageSrc={icons.airbnb} textContent="AirTime" />
        <ServiceCard imageSrc={icons.airbnb} textContent="AirTime" />
        <ServiceCard imageSrc={icons.airbnb} textContent="AirTime" />
        <ServiceCard imageSrc={icons.airbnb} textContent="AirTime" />
        <ServiceCard imageSrc={icons.airbnb} textContent="AirTime" />
        <ServiceCard imageSrc={icons.airbnb} textContent="AirTime" />
        <ServiceCard imageSrc={icons.airbnb} textContent="AirTime" />
        <ServiceCard imageSrc={icons.airbnb} textContent="AirTime" />
        <ServiceCard imageSrc={icons.airbnb} textContent="AirTime" />
      </div>
      {/* <div className="flex mt-8">
        <ServiceCard imageSrc={icons.airbnb} textContent="AirTime" />
        <ServiceCard imageSrc={icons.airbnb} textContent="AirTime" />
      </div> */}
    </div>
  );
};

export default Services;
