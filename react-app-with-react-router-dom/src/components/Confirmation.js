import React from "react";
import { useLocation } from "react-router-dom";

const Confirmation = () => {
  const { state } = useLocation();
  return (
    <div className="container">
      <h1>Thank You!</h1>

      {state && (
        <>
          <p>
            <strong>{state.name}</strong>You'r now registered for Red30 Tech.
          </p>
          <p>
            We've sent more details to <strong>{state.email}</strong>
          </p>
        </>
      )}
    </div>
  );
};

export default Confirmation;
