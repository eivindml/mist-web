import { useState } from "react";
import { NextPage } from "next";
import cs from "classnames";

type Status = {
  message: String;
  isError: boolean;
};

const SignUp: NextPage = () => {
  const [email, setEmail] = useState<null | string>(null);
  const [status, setStatus] = useState<Status | null>(null);

  async function handleClick(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    fetch("/api/signup", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => {
        if (res.status === 201) {
          setStatus({
            message:
              "You will hear from us when we have something ready for you. 🥳",
            isError: false,
          });
        } else {
          setStatus({
            message:
              "There where some problems with the signup. Make sure the email is correct, or that you haven't already signed up. 🧐",
            isError: true,
          });
        }
      })
      .catch((error) => {
        console.warn(error);
        setStatus({
          message:
            "There where some problems with the signup. Make sure the email is correct, or that you haven't already signed up. 🧐",
          isError: true,
        });
      });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  return (
    <div className="">
      <form className="flex">
        <input
          className="rounded-lg bg-transparent-light-gray  py-2 px-4 mr-4 w-full text-black"
          type="email"
          id="email"
          name="email"
          placeholder="amazing@email.address"
          onChange={handleChange}
        />
        <input
          className="text-white bg-black py-2 px-4 rounded-lg cursor-pointer transform transition-transform duration-300 ease-in-out hover:translate-x-1 will-change-transform"
          type="submit"
          value="Notify me"
          onClick={handleClick}
        />
      </form>
      {status && (
        <p
          className={cs("text-center mt-4", {
            "text-red": status.isError,
            "": !status.isError,
          })}
        >
          {status.message}
        </p>
      )}
    </div>
  );
};

export default SignUp;
