<template>
  <div class="chekout">
    <Navbar></Navbar>
    <Login></Login>
    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col-md-8">
          <h4 class="py-4">Checkout page</h4>
          <ul>
            <li v-for="item in this.$store.state.cart" :key="item" class="media">
              <img :src="item.spiceImage" width="80px" class="align-self-center mr-3" alt="">
              <div class="media-body">
                <h5 class="mt-0">{{item.spiceName}} <span class='float-right' @click="$store.commit('removeFromCart',item)">X</span> </h5>
                  <p class="mt-0">{{item.spiceOrigin}}</p>
                  <p class="mt-0">{{item.spicePrice | currency('€ ')}}</p>
                  <p class="mt-0">{{item.spiceAmount}}</p>
                  <p class="dropdown">
                    <a class="dropdown-toggle text-secondary" data-toggle="dropdown">Quantity: {{item.spiceQuantity}} </a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a @click="$store.commit('changeQuantity1', item)">1</a></li>
                      <li><a @click="$store.commit('changeQuantity2', item)">2</a></li>
                      <li><a @click="$store.commit('changeQuantity3', item)">3</a></li>
                      <li><a @click="$store.commit('changeQuantity4', item)">4</a></li>
                      <li><a @click="$store.commit('changeQuantity5', item)">5</a></li>
                      <li><a @click="$store.commit('changeQuantity6', item)">6</a></li>
                      <li><a @click="$store.commit('changeQuantity7', item)">7</a></li>
                      <li><a @click="$store.commit('changeQuantity8', item)">8</a></li>
                      <li><a @click="$store.commit('changeQuantity9', item)">9</a></li>
                      <li><a @click="$store.commit('changeQuantity10', item)">10</a></li>
                    </ul>
                  </p>
                <hr>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <form v-on:submit.prevent="saveData">
            <div class="form-row">
              <div class="col-md-12">
                <label for="validMail"></label>
                <input type="text" id="validMail" v-model="checkout.userMail" placeholder="Email" class="form-control" required>
              </div>
              <div class="col-md-12">
                <label for="validName"></label>
                <input type="text" id="validName" v-model="checkout.userName" placeholder="Naam" class="form-control" required>  
              </div>
              <div class="col-md-12">
                <label for="validPhone"></label>
                <input type="text" id="validPhone" v-model="checkout.userPhone" placeholder="Gsm nr" class="form-control" required>
              </div>
              <div class="col-md-6">
                <label for="validSex"></label>
                <input type="text" id="validSex" v-model="checkout.userSex" placeholder="Geslacht" class="form-control" required>
              </div>
              <div class="col-md-6">
                <label for="validBirthday"></label>
                <input type="text" id="validBirthday" v-model="checkout.userBirthday" placeholder="Geboortedatum" class="form-control" required>
              </div>
              <div class="col-md-12">
                <label for="validAddress"></label>
                <input type="text" id="validAddress" v-model="checkout.userAddress" placeholder="Address" class="form-control" required>
              </div>
              <div class="col-md-4">
                <label for="validPostCode"></label>
                <input type="text" id="validPostCode" v-model="checkout.userPostCode" placeholder="Postcode" class="form-control" required>
              </div>
              <div class="col-md-8">
                <label for="validCity"></label>
                <input type="text" id="validCity" v-model="checkout.userCity" placeholder="City/Gemeente" class="form-control" required>
              </div>
              <div class="col-md-12 mt-4">
                <label for="save"></label>
                <input type="submit" id="save" value="Opslaan" class="btn btn-primary w-100">
              </div>
            </div>
          </form>
          <br>
          <p><strong>Total price: </strong> {{this.$store.getters.totalPrice | currency('€ ')}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { fb, db} from '../firebase';

export default {
  name: "checkout",
  components: {
    VueEditor
  },
  props: {
    msg: String
  },
  data () {
    return {
        checkout: {
          userMail: null,
          userName: null,
          userSex: null,
          userBirthday: null,
          userAddress: null,
          userPostCode: null,
          userCity: null,
          userPhone: null,
          productName: [],
          productQuantity: [],
          productPrice: [],
          productAmount: [],
          totalPrice: null
        },
    }
  },
  firestore(){
    return {
        orders: db.collection('orders')
    }
  },
  methods: {
    saveData() {
      this.checkout.totalPrice = this.$store.getters.totalPrice;
      
      this.$store.state.cart.forEach(item => {
        this.checkout.productName.push(item.spiceName);
        this.checkout.productQuantity.push(item.spiceQuantity);
        this.checkout.productPrice.push(item.spicePrice);
        this.checkout.productAmount.push(item.spiceAmount);
      });
      db.collection('orders').add(this.checkout);
      this.checkout.productName.forEach(item => {
        this.$store.commit('emptyCart');
      })
    },
  }
}
</script>

<style>
</style>