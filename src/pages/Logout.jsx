import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("authToken");
    navigate("/login");
  }, [navigate]);

  return (
    <>
      <h1>Logging out...</h1>
    </>
  );
};

export default Logout;
