import React from "react";
import MainSection from "../../Components/Main/MainSection";
import "./style.css";

const LoginPage = () => {
  return (
    <div>
      <MainSection className="bg" title="Login" />
      <section className="form-section">
        <div className="container d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center flex-column py-5">
            <div className="login-box p-5 d-flex align-items-center justify-content-center flex-column">
                <h2>Login</h2>
                <form action="" >
                    <input placeholder="Enter email" type="email" />
                    <input placeholder="Password" type="password" />
                    <div className="d-flex justify-content-center">
                        <button className="signBtn">Sign in</button>
                    </div>
                    
                </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
