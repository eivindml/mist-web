import { useState } from "react";
import { NextPage } from "next";

const SignUp: NextPage = () => {
  const [email, setEmail] = useState<null | string>(null);
  const [statusMessage, setStatusMessage] = useState("");

  async function handleClick(e) {
    e.preventDefault();
    fetch("/api/signup", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }), // body data type must match "Content-Type" header
    })
      .then((res) => {
        if (res.status === 201) {
          console.log("success", res.status);
          setStatusMessage("Successfully registered");
        } else {
          console.log("error", res.status);
          setStatusMessage("Unsuccessfully");
        }
      })
      .catch((error) => {
        console.log("error", error);
        setStatusMessage("Error" + error);
      });
  }

  function handleChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="signup">
      <form className="signup__form">
        <input
          className="signup__input"
          type="email"
          id="email"
          name="email"
          placeholder="amazing@email.address"
          onChange={handleChange}
        />
        <input
          className="signup__button"
          type="submit"
          value="Notify me"
          onClick={handleClick}
        />
      </form>
      <p className="signup__message">{statusMessage}</p>
      <style jsx>{`
        .signup__form {
          display: flex;
          height: calc(var(--line-height) * 5);
        }

        .signup__input {
          margin-right: calc(var(--line-height) * 4);
          flex-grow: 1;
          border: none;
          border-radius: var(--line-height);
          padding: 0 calc(var(--line-height) * 2);
          background-color: rgba(18, 18, 17, 0.05);
          color: rgba(18, 18, 17, 0.3);
        }

        .signup__button {
          background-color: orange;
          width: calc(var(--line-height) * 14);
          border-radius: var(--line-height);
          border: none;
          background-color: #121211;
          color: #fcfaf4;
        }

        .signup__message {
          text-align: center;
          margin-top: 0.5em;
        }

        .signup__message--error {
          color: #e64c4c;
        }
        .signup__message--success {
          color: #8adc33;
        }
      `}</style>
    </div>
  );
};

export default SignUp;
