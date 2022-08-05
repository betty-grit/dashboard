<template>
  <div class="signup">
    <div class="signupleft">
      <div class="wrapper">
        <img src="@/assets/logo1.svg" alt="" srcset="" />
        <h1>Login</h1>
        <hr />
        <h2>Sign in to start managing your inventory like a boss.</h2>
        <form>
          <label>Email </label><br />
          <input v-model="email" placeholder="" /><br />

          <label>Password </label><br />
          <input v-model="password" placeholder="" /><br />

          <button @click.prevent="validator">Login</button>
          <h3>
            Don’t have an account?
            <span>
              <router-link to="/"><a>Sign up</a></router-link>
            </span>
          </h3>
        </form>
      </div>
    </div>
    <div class="signright">
      <img src="@/assets/Mobile.svg" alt="" srcset="" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "about",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async validator() {
      let response = await axios.post("http://localhost:5000/api/login", {
        email: this.email,
        password: this.password,
      });
      if (response.data.message === "User login successful") {
        localStorage.setItem("id", response.data.data._id);
        // console.log(Object.keys(response.data.data.user));
        this.$router.push("/dash");
        console.log(response.data.message);
        this.isLoggedin = true;
        console.log(this.isLoggedin);
      }
      console.log(response);
    },
  },
};
</script>
<style scoped>
.signup {
  display: flex;
  /* justify-content: space-between; */
  gap: 0px;
}
.signright {
  background-color: #873ab6;
  width: calc(100% - 478px);
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 100%; */
}

.signupleft {
  width: 478px;
  background: #f5f7fc;
}
.wrapper {
  width: calc(100% - 112px);
  margin: 0 auto;
  padding: 34px 0 145px 0;
}
hr {
  width: 23px;
  /* height: 4px; */
  background-color: black;
}
button {
  width: 100%;
  padding: 14px 0px;

  margin-top: 32px;
  background: #873ab6;

  box-shadow: 0px 16px 24px rgba(38, 86, 209, 0.2);
  border-radius: 8px;
  border: none;
}
a {
  text-decoration: none;
  color: blue;
}
h1 {
  font-family: "Overpass";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 130%;
  /* identical to box height, or 52px */

  letter-spacing: -0.06em;

  color: #1d2128;
}
h2 {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  margin-top: 48px;
  color: #747880;
}
form {
  max-width: 358px;
  margin-top: 48px;
}
label {
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  margin-top: 16px;
  color: #3a3f46;
}
input {
  width: 100%;
  height: 48px;
  margin-bottom: 20px;
  background: #ffffff;
  border: 1px solid #ced1d9;
  border-radius: 4px;
}
@media only screen and (max-width: 390px) {
  .signright {
    display: none;
  }
}
</style>
