<template>
  <div class="dashleft">
    <div class="wrap">
      <div>
        <img class="image2" src="@/assets/Group.svg" alt="" srcset="" />
      </div>
      <div class="details">
        <div class="cats">
          <img class="image1" src="@/assets/Vector(17).svg" alt="" srcset="" />
          <router-link to="/dash"><h2>Dashboard</h2></router-link>
        </div>
        <div class="cats">
          <img class="image1" src="@/assets/Vector(20).svg" alt="" srcset="" />
          <router-link to="/inventory"><h2>Inventory</h2></router-link>
        </div>
        <div class="cats">
          <img class="image1" src="@/assets/Vector(19).svg" alt="" srcset="" />
          <h2>Categories</h2>
        </div>
        <div class="cats">
          <img class="image1" src="@/assets/Vector(21).svg" alt="" srcset="" />
          <h2>Account Settings</h2>
        </div>
      </div>

      <div class="catss">
        <a href="">Logout</a>
        <img class="image1" src="@/assets/Vector(21).svg" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>
<script>
import dashboard from "@/components/dashboard.vue";
export default {
  name: "LoginView",

  components: { dashboard },
};
</script>
<style scoped>
.person {
  height: 80px;
  margin-right: 0px;

  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02);
}
.text1,
.text2 {
  margin-right: 900px;
}
.text2 {
  margin-top: 90px;
  margin-left: 50px;
}
.image1 {
  width: 26px;
  height: 26px;
}
button {
  background-color: #151923;
  border: none;
}
button.hover {
  background-color: #2656d1;
}
h4 {
  font-family: "Overpass";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 150%;
  /* identical to box height, or 54px */
  margin-left: 50px;
  margin-top: 32px;
  margin-bottom: 26px;
  letter-spacing: -0.04em;

  color: #1d2128;
}
.overview {
  width: 184px;
  height: 99px;
  margin-right: 16px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  padding-top: 16px;
  padding-left: 32px;
}
.mainoverview {
  display: flex;
  margin-left: 50px;
}
.dashright {
  background: #f3f3f3;
}
p {
  left: 0px;
}
.cats {
  width: 263px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  gap: 10px;
}
.cats:hover {
  background-color: #2656d1;
}
.details {
}
.image2 {
  margin-bottom: 120px;
}
h1 {
}
a {
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  text-decoration: none;
  color: #ffffff;
}
.catss {
  margin-top: 160px;
  display: flex;
  justify-content: center;
  justify-content: space-around;
}
.dash {
  display: flex;
}
.dashleft {
  width: 320px;
  height: 100vh;
  background-color: #151923;
}
.wrap {
  width: calc(100% - 56px);
  margin: 0 auto;
  padding: 34px 0 145px 0;
}
h2 {
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #ffffff;
  text-align: center;
}
h2:hover {
  background: #2656d1;
  border-radius: 8px;
}
h3 {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  /* or 19px */

  color: #595f69;
}
h5 {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  /* */
  color: #000000;
}
.ay {
  margin-left: 800px;
  display: flex;
  justify-content: center;
  padding-top: 26px;
  gap: 10px;
}
button {
  background: #b2bdfa;
  color: #4057d3;
  border-radius: 50px;
  padding: 3px 3px;
}
</style>
