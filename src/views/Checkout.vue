<template>
  <div class="chekout">
    <Navbar></Navbar>
    <Login></Login>
    <Logout></Logout>
    <MiniCart></MiniCart>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h4 class="py-4">Checkout page</h4>
          <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Origin</th>
                <th scope="col">Portion</th>
                <th scope="col">Form</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Delete?</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in this.$store.state.cart" :key="item">
                <th><img :src="item.spiceImage" width="80px" class="align-self-center mr-3" alt=""></th>
                <td>{{item.spiceName}}</td>
                <td>{{item.spiceOrigin}}</td>
                <td>{{item.spiceAmount}}</td>
                <td>{{item.spiceCrush}}</td>
                <td>€ {{item.spicePrice}}</td>
                <td>
                  <a class="dropdown-toggle text-secondary" data-toggle="dropdown">{{item.spiceQuantity}} </a>
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
                </td>
                <td class="text-center" @click="$store.commit('removeFromCart',item)">X</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
        <div class="col-md-4">
          <form v-on:submit.prevent="saveData" id="checkoutForm" name="checkoutForm" v-if="!user">
            <div class="form-row">
              <div class="col-md-12">
                <label for="validMail"></label>
                <input type="email" id="validMail" v-model="checkout.userMail" placeholder="Email" class="form-control" required>
              </div>
              <div class="col-md-12">
                <label for="validName"></label>
                <input type="text" id="validName" v-model="checkout.userName" placeholder="Naam" class="form-control" required>  
              </div>
              <div class="col-md-12">
                <label for="validPhone"></label>
                <input type="tel" id="validPhone" v-model="checkout.userPhone" placeholder="Gsm nr" class="form-control" pattern="0[0-9]{9}" required>
              </div>
              <div class="col-md-6">
                <label for="validSex"></label>
                <input type="text" id="validSex" v-model="checkout.userSex" placeholder="Geslacht" class="form-control" required>
              </div>
              <div class="col-md-6">
                <label for="validBirthday"></label>
                <input type="date" id="validBirthday" v-model="checkout.userBirthday" placeholder="Geboortedatum" class="form-control" required>
              </div>
              <div class="col-md-12">
                <label for="validAddress"></label>
                <input type="text" id="validAddress" v-model="checkout.userAddress" placeholder="Address" class="form-control" required>
              </div>
              <div class="col-md-12">
                <label for="validBus"></label>
                <input type="text" id="validBus" v-model="checkout.userBus" placeholder="Bus" class="form-control">
              </div>
              <div class="col-md-4">
                <label for="validPostCode"></label>
                <input type="number" id="validPostCode" v-model="checkout.userPostCode" placeholder="Postcode" class="form-control" required>
              </div>
              <div class="col-md-8">
                <label for="validCity"></label>
                <input type="text" id="validCity" v-model="checkout.userCity" placeholder="City/Gemeente" class="form-control" required>
              </div>
              <div class="col-md-12 mt-4">
                <label for="save"></label>
                <input type="submit" id="save" value="Plaats bestelling" class="btn btn-primary w-100">
              </div>
            </div>
          </form>
          <br>
          <p><strong>Total price: </strong> € {{this.$store.getters.totalPrice}}</p>
          <button class="btn btn-secondary" @click="save()" v-if="user">Place order</button>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

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
          userBus: null,
          userCity: null,
          userPhone: null,
          productName: [],
          productQuantity: [],
          productPrice: [],
          productAmount: [],
          productCrush: [],
          totalPrice: null,
        },
        checkoutB: {
          userMail: null,
          productName: [],
          productQuantity: [],
          productPrice: [],
          productAmount: [],
          productCrush: [],
          totalPrice: null,
        },
        user: null,
    }
  },
  firestore(){
    return {
        orders: db.collection('orders'),
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
        this.checkout.productCrush.push(item.spiceCrush);
      });
      db.collection('orders').add(this.checkout);
      this.checkout.productName.forEach(item => {
        this.$store.commit('emptyCart');
      })
      this.checkout.userMail = "";
      this.checkout.userName = "";
      this.checkout.userSex = "";
      this.checkout.userBirthday = "";
      this.checkout.userAddress = "";
      this.checkout.userBus = "";
      this.checkout.userPostCode = "";
      this.checkout.userCity = "";
      this.checkout.userPhone = "";
      this.$router.push('/orderConfirmation');
    },
    save() {
      this.checkoutB.totalPrice = this.$store.getters.totalPrice;
      this.checkoutB.userMail = fb.auth().currentUser.email;
      
      this.$store.state.cart.forEach(item => {
        this.checkoutB.productName.push(item.spiceName);
        this.checkoutB.productQuantity.push(item.spiceQuantity);
        this.checkoutB.productPrice.push(item.spicePrice);
        this.checkoutB.productAmount.push(item.spiceAmount);
        this.checkoutB.productCrush.push(item.spiceCrush);
      });
      db.collection('orders').add(this.checkoutB);
      this.checkoutB.productName.forEach(item => {
        this.$store.commit('emptyCart');
      })
      this.$router.push('/orderConfirmation');
    }
  },
  created () { 
    this.user = fb.auth().currentUser || false;
  }
}
</script>

<style>
  .chekout {
    background-color: bisque;
    padding-top: 7rem;
    width: 100%;
  }
</style>