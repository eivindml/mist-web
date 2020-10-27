import { NextPage } from "next";

const SignUp: NextPage = () => (
  <div className="signup">
    <form className="signup__form">
      <input
        className="signup__input"
        type="email"
        id="email"
        name="email"
        placeholder="amazing@email.address"
      />
      <input className="signup__button" type="submit" value="Notify me" />
    </form>
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
    `}</style>
  </div>
);

export default SignUp;
