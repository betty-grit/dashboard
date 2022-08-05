<template>
  <div class="main">
    <div class="maindash"><maindash /></div>

    <div class="inventory">
      <div class="inventoryright">
        <div class="person">
          <div class="ay">
            <button>AY</button>
            <h5>Ammiel Yawson</h5>
          </div>
        </div>
        <div class="text1"><h4>In-stock</h4></div>
      </div>
      <div class="maintable">
        <div class="inventlist">
          <div><input placeholder="search by name" /></div>
          <div>
            <button @click="addproduct" class="button1">Add Product</button
            ><img src="@/assets/simple.svg" alt="" srcset="" />
          </div>
        </div>
        <div class="table">
          <table id="customers">
            <tr>
              <th><input class="check" type="checkbox" /></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Status</th>
              <th>Category</th>
            </tr>
            <tr v-for="product in AllProducts" :key="product">
              <td><input id="check" type="checkbox" @change="changeDel" /></td>
              <td>{{ product.name }}</td>
              <td>{{ product.quantity }}</td>
              <td>{{ product.unitPrice }}</td>
              <td>
                <div>{{ product.productStatus }}</div>
              </td>
              <td>{{ product.category }}</td>
              <button>delete</button>
            </tr>
          </table>

          <!-- <div>
            <input type="checkbox" /> <label> <h1>Name</h1></label>
          </div>
          <div><h1></h1></div>
          <div><h1></h1></div>
          <div><h1></h1></div>
          <div><h1></h1></div> -->
        </div>
      </div>
      <form @submit.prevent="addproduct">
        <input v-model="productName" type="text" placeholder="name" />
        <input v-model="quantity" type="text" placeholder="quantity" />
        <input v-model="unitPrice" type="text" placeholder="Unit price" />
        <input v-model="status" type="text" placeholder="status" />
        <input v-model="category" type="text" placeholder="Category" />
      </form>
    </div>
  </div>
</template>
<script>
import maindash from "@/components/maindash.vue";
import axios from "axios";
export default {
  name: "inventory",
  components: { maindash },
  data() {
    return {
      productName: "",
      quantity: "",
      unitPrice: "",
      status: "",
      category: "",
      AllProducts: null,
    };
  },
  async updated() {
    await this.products();
  },
  methods: {
    async addproduct() {
      const id = localStorage.getItem("id");
      const response = await axios.post(
        "http://localhost:5000/api/products/add",
        {
          id: id,
          name: this.productName,
          quantity: this.quantity,
          unitPrice: this.unitPrice,
          status: this.status,
          category: this.category,
        }
      );
      console.log(response);
    },
    async products() {
      const id = localStorage.getItem("id");
      const response = await axios.post("http://localhost:5000/api/products", {
        id: id,
      });

      this.AllProducts = response.data.data;
    },
  },
};
</script>
<style scoped>
/* form {
  display: flex;
} */

form {
  position: absolute;
  width: 40px;
  top: 70%;
  display: flex;
}
form input {
  padding: 10px;
  width: 100px;
  margin-top: 10px;
}
.main {
  display: flex;
  background: #f3f3f3;
}
#customers th {
  /* padding-top: 5px;
  padding-bottom: 5px; */
  text-align: left;
  background: #f9f9f9;
  color: black;
  width: 1120px;
  margin-top: 22px;
  height: 56px;
}
.inventlist {
  margin-bottom: 30px;
}
.person {
  margin-right: 0px;
  width: 1020px;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02);
}
.ay {
  margin-left: 800px;
  display: flex;
  justify-content: center;
  padding-top: 26px;
  gap: 10px;
}
.text1,
.text2 {
  margin-right: 800px;
}
.check {
  width: 22px;
  height: 24px;

  background: #f1f1f1;
  border-radius: 4px;
  margin-top: 5px;
}
.button1 {
  width: 147px;
  height: 43px;
  left: 762px;
  top: 15px;
  color: #ffffff;
  background: #2656d1;
  border-radius: 8px;
  margin-right: 22px;
  margin-top: 48px;
  border: none;
}
input {
  width: 274px;
  height: 43px;
  left: 0px;
  top: 15px;
  margin-left: 32px;
  margin-top: 48px;
  background: #f4f4f4;
  border-radius: 8px;
  padding: 10px;
  border: none;
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
  margin-bottom: 16px;

  color: #1d2128;
}
.maintable {
  width: 1024px;

  left: 48px;
  top: 179px;

  background: #ffffff;
  box-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.table {
  display: flex;
  justify-content: space-around;
  position: relative;
}
.inventory {
  height: 100vh;
}
.inventlist {
  display: flex;
  justify-content: space-between;
}
button {
  background: #b2bdfa;
  color: #4057d3;
  border-radius: 50px;
  padding: 3px 3px;
  border: none;
}
@media only screen and (max-width: 390px) {
  .maindash {
    display: none;
  }
}
</style>
