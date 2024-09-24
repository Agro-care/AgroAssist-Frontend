import React, { useState } from "react";
import "../style.css";

export const EmailForm = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="email">
      <input
        type="email"
        value={email}
        onChange={handleInputChange}
        placeholder="Email"
        className="email-input"
      />
    </div>
  );
};

export default EmailForm;
