import logo from "../../assets/images/logo.png";
const AuthCardTop = ({ topHeading }) => {
  return (
    <div>
      <div className="flex justify-center mb-4">
        <img src={logo} alt="logo" className="" width={100} />
      </div>
      <h1 className="text-3xl text-center font-bold mb-8 text-black">
        {topHeading}
      </h1>
    </div>
  );
};

export default AuthCardTop;
