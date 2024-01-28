import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Redirect() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.getItem("mycode")
      ? navigate("/share/final")
      : navigate(`/${1234567}`);
  });
  return <div>Redirect</div>;
}

export default Redirect;
