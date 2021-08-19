import React from "react";
import reactDom from "react-dom";
import logo from "../src/avatar.svg";

export default function Profile() {
  return (
    <div class="main__section">

    <main class="content-page">
      <div class="profile-wrap">
        <div class="profile-col">
          <div class="navigation-bar">
          <span class="edit__header"> <i class="fas fa-users"></i> Edit Profile</span>
          <p class="navigator__link">Edit Profile / <a href="index.html">  <i class="fas fa-home"></i> </a>  </p>
        </div>
          <div class="prof-ava-wrap">
            <img
              src={logo}
              class="prof-avatar"
              height="150px"
              width="150px"
              alt=""
              id="avatar"
            />
           
          </div>

          <div class="prof-inputs">
            <label for="First Name">First Name
            <input type="text" placeholder="Your First Name" name="first_name" class="prof-field" />
          </label>

            <label for="last_name">Last Name
            <input type="text" name="last_name" placeholder="Last Name" class="prof-field" />
          </label>

            <label for="email">Email
            <input type="email" name="email" placeholder="example@mail.com" class="prof-field" />
          </label>

            <label for="address">Address
            <input type="text" placeholder="your home address" name="address" class="prof-field" />
          </label>
            <label for="contact_number">Contact Number
            <input type="number" name="contact_number" placeholder="Your phone number" class="prof-field" />
          </label>

            <label for="">State
            <input type="text" placeholder="Enter your state" name="state" class="prof-field" />
          </label>
            <label for="country">Country
            <input type="text" placeholder="e.g Nigeria" name="country" class="prof-field" />
          </label>

            <label for="zip_code">Zip code
            <input type="number" placeholder="Your country postal code" name="zip_code" class="prof-field" />
          </label>

            <label for="password">Password
            <input type="password" placeholder="Password"  name="password" class="prof-field" id="password" />
              <i class="far fa-eye passToggle" onclick="showHidePass();"></i>
          </label>
          </div>
          <button class="btn save-btn" >Save </button>
        </div>
      </div>
     
    </main>
  </div>
  );
}
