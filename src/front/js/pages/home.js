import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import landingImageUrl from "../../img/landing.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="text-center mt-5">
      <h2>4GeeksAcademy</h2>
      <p>
        <img src={landingImageUrl} width="700px" />
      </p>
    </div>
  );
};
