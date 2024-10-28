import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("authToken");
    localStorage.removeItem('user_id');
    navigate("/login");
  }, [navigate]);

  return (
    <>
      <h1>Logging out...</h1>
    </>
  );
};

export default Logout;
