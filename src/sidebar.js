import React from "react";
import reactDom from "react-dom";
import undraw from "../src/undraw.svg";

export default function Login() {
  return (
    <main class="main__section">
      <div class="brand-wrap">
        <h1 class="brand-logo">Inven<span class="tory">Tory</span></h1>
      </div>

      <div class="sign-in__wrap">
        <div class="sign-in__col">
          <div class="Login">
            <h1 class="login__title">
              Account <span class="lgn">Login<span class="dot">.</span></span>
            </h1>
            <p class="login-txt">Sign in to start your session</p>
          </div>
          <div class="user-input">
            <div class="email-wrap">
              <i class="fas fa-user-tie"></i>
              <input
                type="text"
                onfocus="emailfocusBackground();"
                onfocusout="emailfocusoutBackground();"
                placeholder="username"
                class="email"
              />
            </div>
            <div class="password-wrap">
              <i class="fas fa-lock"></i>
              <input
                type="password"
                
                onfocus="passfocusBackground();"
                onfocusout="passfocusoutBackground();"
                placeholder="password"
                class="password"
                id="password"
              />
              <i class="far fa-eye passEye" onclick="showHidePass();"></i>
            </div>
          </div>

          <div class="bottom-wrap">
            <button class="continue-btn">Continue</button>
            <span class="sign-not">
              Don't have an account? <a href="#"> Sign Up</a> |
              <a href=""> Forgot Password?</a>
            </span>
          </div>
        </div>

        <div class="sign-up__col">
          <img
            src={undraw}
            alt=""
            height="500px"
            width="500px"
            class="login_svg"
          />
        </div>
      </div>
    </main>
  );
}
