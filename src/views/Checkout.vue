<template>
  <div class="chekout">
    <Navbar></Navbar>
    <Login></Login>
    <Logout></Logout>
    <MiniCart></MiniCart>
    <div class="container pb-5">
      <div class="row">
        <div class="col-md-8">
          <div v-for="item in this.$store.state.cart" :key="item">
            <div class="row">
              <div class="col">
                <img :src="item.spiceImage" width="80px" class="align-self-center mr-3" alt="">
              </div>
              <div class="col">
                <p><strong>{{item.spiceName}}</strong></p>
                <p>{{item.spiceAmount}}</p>
                <p>{{item.spiceCrush}}</p>
              </div>
              <div class="col">
                <p><strong>Quantity</strong></p>
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
              </div>
              <div class="col">
                <p>€ {{item.spicePrice}}</p>
              </div>
              <div class="col">
                <p @click="$store.commit('removeFromCart',item)">X</p>
              </div>
            </div>
            <hr>
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
          <div v-if="user">
            <div v-for="x in (userdata)" :key="x">
              <p v-if="user.email == x.userMail"><strong>Name: </strong> {{x.userName}}</p>
              <p v-if="user.email == x.userMail"><strong>Address: </strong>{{x.userAddress}} {{x.userBus}}, {{x.userPostCode}} {{x.userCity}}</p>
            </div>
          </div>
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
          productImage: [],
          totalPrice: null,
          orderNr: null,
          date: null,
          finished: null,
        },
        checkoutB: {
          userMail: null,
          productName: [],
          productQuantity: [],
          productPrice: [],
          productAmount: [],
          productCrush: [],
          productImage: [],
          totalPrice: null,
          orderNr: null,
          date: null,
          finished: null,
        },
        userdata: [],
        user: null,
        userDataName: null,
        userDataAddress: null,
    }
  },
  firestore(){
    return {
        orders: db.collection('orders'),
        userdata: db.collection('userdata')
    }
  },
  methods: {
    saveData() {
      this.checkout.totalPrice = this.$store.getters.totalPrice;

      this.checkout.orderNr = "" + (Math.floor(Math.random() * 999) + 100) + (Math.floor(Math.random() * 999) + 100);
      this.checkout.date = new Date().toLocaleString();
      this.checkout.finished = false;

      this.$store.state.cart.forEach(item => {
        this.checkout.productName.push(item.spiceName);
        this.checkout.productQuantity.push(item.spiceQuantity);
        this.checkout.productPrice.push(item.spicePrice);
        this.checkout.productAmount.push(item.spiceAmount);
        this.checkout.productCrush.push(item.spiceCrush);
        this.checkout.productImage.push(item.spiceImage);
      });
      db.collection('orders').add(this.checkout);
      this.checkout.productName.forEach(item => {
        this.$store.commit('emptyCart');
      })
      /*
      db.collection("mail").add({to: this.checkout.userMail, 
                                 message: {subject: "Your order from Clove & Cumin",
                                           text: "You ordered following items:",
                                           html: "<table><thead><tr><th>Name</th></tr></thead><tbody><tr v-for=item in this.checkout.productName :key=item><td>{{item.spiceName}}</td></tr></tbody></table>"
                                          }
                                }
                               )*/
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
      
      this.checkoutB.orderNr = "" + (Math.floor(Math.random() * 999) + 100) + (Math.floor(Math.random() * 999) + 100);
      this.checkoutB.date = new Date().toLocaleString();

      this.checkoutB.finished = false;
      
      this.$store.state.cart.forEach(item => {
        this.checkoutB.productName.push(item.spiceName);
        this.checkoutB.productQuantity.push(item.spiceQuantity);
        this.checkoutB.productPrice.push(item.spicePrice);
        this.checkoutB.productAmount.push(item.spiceAmount);
        this.checkoutB.productCrush.push(item.spiceCrush);
        this.checkoutB.productImage.push(item.spiceImage);
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
  },
  mounted() {
    this.userdata.forEach(u => {
      if (u.userMail == this.user) {
        this.userDataName = u.userName;
        this.userDataAddress = u.userAddress + " " + u.userBus + ", " + u.userPostCode + " " + u.userCity;
      }
    });
  }
}
</script>

<style>
  .chekout {
    padding-top: 9rem;
    width: 100%;
  }
</style>