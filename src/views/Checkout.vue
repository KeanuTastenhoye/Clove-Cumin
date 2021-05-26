<template>
  <div class="chekout">
    <Navbar></Navbar>
    <Login></Login>
    <Logout></Logout>
    <MiniCart></MiniCart>
    <div class="container pb-3">
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
                <p><strong>Aantal</strong></p>
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
                <p>€ {{item.spicePrice.toFixed(2)}}</p>
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
                <label for="validName"></label>
                <input type="text" id="validName" v-model="checkout.userName" placeholder="Voornaam en achternaam *" class="form-control" required>  
              </div>
              <div class="col-md-12">
                <label for="validMail"></label>
                <input type="email" id="validMail" v-model="checkout.userMail" placeholder="Email adres *" class="form-control" requried>
              </div>
              <div class="col-md-12">
                <label for="validPhone"></label>
                <input type="tel" id="validPhone" v-model="checkout.userPhone" placeholder="Telefoonnummer (Formaat = 0475862580)*" class="form-control" pattern="(0[0-9]{9}|\+32[0-9]{9})" required>
              </div>
              <div class="col-md-6 pt-2">
                <label for="validSex">Geslacht *</label>
                <select id="sex" name="sex" v-model="checkout.userSex" class="form-control" required>
                    <option value="" selected disabled hidden>Duid je geslacht hier aan</option>
                    <option value="Man">Man</option>
                    <option value="Vrouw">Vrouw</option>
                    <option value="Anders">Anders</option>
                  </select>
              </div>
              <div class="col-md-6 pt-2">
                <label for="validBirthday">Geboortedatum *</label>
                <input type="date" id="validBirthday" v-model="checkout.userBirthday" placeholder="Geboortedatum *" class="form-control" required>
              </div>
              <div class="col-md-12">
                <label for="validAddress"></label>
                <input type="text" id="validAddress" v-model="checkout.userAddress" placeholder="Adres *" class="form-control" required>
              </div>
              <div class="col-md-12">
                <label for="validBus"></label>
                <input type="text" id="validBus" v-model="checkout.userBus" placeholder="Bus" class="form-control">
              </div>
              <div class="col-md-4">
                <label for="validPostCode"></label>
                <input type="number" id="validPostCode" v-model="checkout.userPostCode" placeholder="Postcode *" class="form-control" required>
              </div>
              <div class="col-md-8">
                <label for="validCity"></label>
                <input type="text" id="validCity" v-model="checkout.userCity" placeholder="Stad/gemeente *" class="form-control" required>
              </div>
              <div class="col-md-12">
                <label for="validPromo"></label>
                <input type="text" id="validPromo" v-model="checkout.userPromo" placeholder="Promo Code " class="form-control">
              </div>
              <div class="col-md-12 pt-3">
                <form>
                  <p>Cadeau optie</p>
                  <input type="checkbox" name="cadeau" value="Cadeau" v-model="checkout.cadeau">
                  <label class="pl-1 pr-2">Cadeau (€5.00)</label>
                  <br>
                  <div v-if="checkout.cadeau === true">
                    <label for="textAreaGift">Berichtje: </label>
                    <textarea class="form-control" id="textAreaGift" v-model="checkout.cadeauBericht"></textarea>
                  </div>
                </form>
              </div>
              <div class="col-md-12 pt-3">
                <form>
                  <p>Leverings opties *</p>
                  <input type="radio" name="levering" value="Thuis" checked="checked" v-model="checkout.levering">
                  <label class="pl-1 pr-2">Thuis (€5.70)</label>
                  <br>
                  <input type="radio" name="levering" value="Afhaalpunt" v-model="checkout.levering">
                  <label class="pl-1 pr-2">Dichtstbijzijnde afhaalpunt (€4.40)</label>
                </form>
              </div>
              <div class="col-md-12 mt-4">
                <label for="save"></label>
                <input type="submit" id="save" value="Plaats bestelling" class="btn w-100" style="background-color:#64A425; color:white;">
              </div>
            </div>
          </form>
          <br>
          <div v-if="user">
            <div v-for="x in (userdata)" :key="x">
              <p v-if="user.email == x.userMail"><strong>Naam: </strong> {{x.userName}}</p>
              <p v-if="user.email == x.userMail"><strong>Email adres: </strong> {{x.userMail}}</p>
              <p v-if="user.email == x.userMail"><strong>Adres: </strong>{{x.userAddress}} {{x.userBus}}, {{x.userPostCode}} {{x.userCity}}</p>
            </div>
            <div>
              <label for="validPromo"></label>
              <input type="text" id="validPromo" v-model="checkoutB.userPromo" placeholder="Promo Code " class="form-control">
            </div>
            <div class="col-md-12 pt-3">
              <form>
                <p>Cadeau optie</p>
                <input type="checkbox" name="cadeau" value="Cadeau" v-model="checkoutB.cadeau">
                <label class="pl-1 pr-2">Cadeau (€5.00)</label>
                <br>
                <div v-if="checkoutB.cadeau === true">
                  <label for="textAreaGiftB">Berichtje: </label>
                  <textarea class="form-control" id="textAreaGiftB" v-model="checkoutB.cadeauBericht"></textarea>
                </div>
              </form>
            </div>
            <div class="pt-3">
              <form>
                <p>Leverings opties *</p>
                <input type="radio" name="levering" value="Thuis" checked="checked" v-model="checkoutB.levering">
                <label class="pl-1 pr-2">Thuis (€5.70)</label>
                <br>
                <input type="radio" name="levering" value="Afhaalpunt" v-model="checkoutB.levering">
                <label class="pl-1 pr-2">Dichtstbijzijnde afhaalpunt (€4.40)</label>
              </form>
            </div>
          </div>
          <p class="mt-3" v-if="checkoutB.levering === null && checkout.levering === null"><strong>Totaal prijs (incl verzending): </strong> € {{(parseFloat(this.$store.getters.totalPrice)).toFixed(2)}}</p>

          <p class="mt-3" v-if="checkoutB.levering === 'Thuis' && this.$store.getters.totalPrice >= 30"><strong>Totaal prijs (incl verzending): </strong> € {{(parseFloat(this.$store.getters.totalPrice)).toFixed(2)}}</p>
          <p class="mt-3" v-if="checkoutB.levering === 'Thuis' && this.$store.getters.totalPrice < 30"><strong>Totaal prijs (incl verzending): </strong> € {{(parseFloat(this.$store.getters.totalPrice) + parseFloat(5.70)).toFixed(2)}}</p>
          <p class="mt-3" v-if="checkoutB.levering === 'Afhaalpunt' && this.$store.getters.totalPrice >= 30"><strong>Totaal prijs (incl verzending): </strong> € {{(parseFloat(this.$store.getters.totalPrice)).toFixed(2)}}</p>
          <p class="mt-3" v-if="checkoutB.levering === 'Afhaalpunt' && this.$store.getters.totalPrice < 30"><strong>Totaal prijs (incl verzending): </strong> € {{(parseFloat(this.$store.getters.totalPrice) + parseFloat(4.40)).toFixed(2)}}</p>

          <p class="mt-3" v-if="checkout.levering === 'Thuis' && this.$store.getters.totalPrice >= 30"><strong>Totaal prijs (incl verzending): </strong> € {{(parseFloat(this.$store.getters.totalPrice)).toFixed(2)}}</p>
          <p class="mt-3" v-if="checkout.levering === 'Thuis' && this.$store.getters.totalPrice < 30"><strong>Totaal prijs (incl verzending): </strong> € {{(parseFloat(this.$store.getters.totalPrice) + parseFloat(5.70)).toFixed(2)}}</p>
          <p class="mt-3" v-if="checkout.levering === 'Afhaalpunt' && this.$store.getters.totalPrice >= 30"><strong>Totaal prijs (incl verzending): </strong> € {{(parseFloat(this.$store.getters.totalPrice)).toFixed(2)}}</p>
          <p class="mt-3" v-if="checkout.levering === 'Afhaalpunt' && this.$store.getters.totalPrice < 30"><strong>Totaal prijs (incl verzending): </strong> € {{(parseFloat(this.$store.getters.totalPrice) + parseFloat(4.40)).toFixed(2)}}</p>

          <button class="btn" style="background-color:#64A425; color:white;" @click="save()" v-if="user">Plaats bestelling</button>
        </div>
      </div>
    </div>

    <div class="modal fade" id="orderConf" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
                <h4><strong>Bevestig je bestelling</strong></h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col">
                <h5 class="text-center">Persoonlijke gegevens</h5>
                <p>{{checkout.userName}}</p>
                <p>{{checkout.userMail}}</p>
                <p>{{checkout.userAddress}}<a v-if="checkout.userBus != null"> {{checkout.userBus}}</a>, {{checkout.userPostCode}} {{checkout.userCity}}</p>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col">
                <h5 class="text-center">Bestelling</h5>
                <div class="row" v-for="(x,index) in checkout.productName" :key="index">
                  <div class="col">
                    <p><strong>{{checkout.productName[index]}}</strong></p>
                    <p>{{checkout.productAmount[index]}}</p>
                    <p>{{checkout.productCrush[index]}}</p>
                  </div>
                  <div class="col text-center">
                    <p><strong>Aantal</strong></p>
                    <p>{{checkout.productQuantity[index]}}</p>
                  </div>
                  <div class="col text-center">
                    <p><strong>Prijs</strong></p>
                    <p>€ {{checkout.productPrice[index]}}</p>
                  </div>
                  <hr>
                </div>
                <hr>
                <p><strong>Totaal (excl verzending): </strong>€ {{checkout.totalPrice}}</p>
                <p v-if="checkout.cadeau === true"><strong>Cadeau: </strong>€ 5.00</p>
                <p v-if="checkout.cadeau === true"><strong>Berichtje: </strong>{{checkout.cadeauBericht}}</p>
                <p v-if="checkout.levering != null && checkout.levering == 'Thuis'"><strong>Verzending: </strong>€ 5.70</p>
                <p v-if="checkout.levering != null && checkout.levering == 'Afhaalpunt'"><strong>Verzending: </strong>€ 4.40</p>
                <p v-if="checkout.levering != null && checkout.levering == 'Thuis' && checkout.userPromo != null && ((checkout.totalPrice - checkout.totalInclShipping) + 5.70).toFixed(2) != '0.00'"><strong>Korting: </strong>€ {{((checkout.totalPrice - checkout.totalInclShipping) + 5.70).toFixed(2)}} (Korting door code {{checkout.userPromo}})</p>
                <p v-if="checkout.levering != null && checkout.levering == 'Afhaalpunt' && checkout.userPromo != null && ((checkout.totalPrice - checkout.totalInclShipping) + 4.40).toFixed(2) != '0.00'"><strong>Korting: </strong>€ {{((checkout.totalPrice - checkout.totalInclShipping) + 4.40).toFixed(2)}} (Korting door code {{checkout.userPromo}})</p>
                <p v-if="checkout.totalInclShipping != null"> <strong>Totaal (incl verzending): </strong>€ {{checkout.totalInclShipping}}</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn" style="background-color:#64A425; color:white;" @click="order()">Plaats bestelling</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="orderConfB" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
                <h4><strong>Bevestig je bestelling</strong></h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col">
                <h5 class="text-center">Persoonlijke gegevens</h5>
                <p>{{checkoutB.userName}}</p>
                <p>{{checkoutB.userMail}}</p>
                <p>{{checkoutB.userAddress}}</p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <h5 class="text-center">Bestelling</h5>
                <div class="row" v-for="(x,index) in checkoutB.productName" :key="index">
                  <div class="col">
                    <p><strong>{{checkoutB.productName[index]}}</strong></p>
                    <p>{{checkoutB.productAmount[index]}}</p>
                    <p>{{checkoutB.productCrush[index]}}</p>
                  </div>
                  <div class="col text-center">
                    <p><strong>Aantal</strong></p>
                    <p>{{checkoutB.productQuantity[index]}}</p>
                  </div>
                  <div class="col text-center">
                    <p><strong>Prijs</strong></p>
                    <p>€ {{checkoutB.productPrice[index]}}</p>
                  </div>
                  <hr>
                </div>
                <hr>
                <p><strong>Totaal (excl verzending): </strong>€ {{checkoutB.totalPrice}}</p>
                <p v-if="checkoutB.cadeau === true"><strong>Cadeau: </strong>€ 5.00</p>
                <p v-if="checkoutB.cadeau === true"><strong>Berichtje: </strong>{{checkoutB.cadeauBericht}}</p>
                <p v-if="checkoutB.levering != null && checkoutB.levering == 'Thuis'"><strong>Verzending: </strong>€ 5.70</p>
                <p v-if="checkoutB.levering != null && checkoutB.levering == 'Afhaalpunt'"><strong>Verzending: </strong>€ 4.40</p>
                <p v-if="checkoutB.levering != null && checkoutB.levering == 'Thuis' && checkoutB.userPromo != null && ((checkoutB.totalPrice - checkoutB.totalInclShipping) + 5.70).toFixed(2) != '0.00'"><strong>Korting: </strong>€ {{((checkoutB.totalPrice - checkoutB.totalInclShipping) + 5.70).toFixed(2)}} (Korting door code {{checkoutB.userPromo}})</p>
                <p v-if="checkoutB.levering != null && checkoutB.levering == 'Afhaalpunt' && checkoutB.userPromo != null && ((checkoutB.totalPrice - checkoutB.totalInclShipping) + 4.40).toFixed(2) != '0.00'"><strong>Korting: </strong>€ {{((checkoutB.totalPrice - checkoutB.totalInclShipping) + 4.40).toFixed(2)}} (Korting door code {{checkoutB.userPromo}})</p>
                <p v-if="checkoutB.totalInclShipping != null"> <strong>Totaal (incl verzending): </strong>€ {{checkoutB.totalInclShipping}}</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn" style="background-color:#64A425; color:white;" @click="orderB()">Plaats bestelling</button>
          </div>
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
          userPromo: null,
          productName: [],
          productQuantity: [],
          productPrice: [],
          productAmount: [],
          productCrush: [],
          productImage: [],
          totalPrice: null,
          totalInclShipping: null,
          orderNr: null,
          date: null,
          finished: null,
          levering: null,
          cadeau: null,
          cadeauBericht: null,
          //bestelMap: new Map(),
          //bestelling: new Map(),
          //i: 0,
        },
        checkoutB: {
          userMail: null,
          userPromo: null,
          productName: [],
          productQuantity: [],
          productPrice: [],
          productAmount: [],
          productCrush: [],
          productImage: [],
          totalPrice: null,
          totalInclShipping: null,
          orderNr: null,
          date: null,
          finished: null,
          userName: null,
          userAddress: null,
          levering: null,
          cadeau: null,
          cadeauBericht: null,
        },
        userdata: [],
        user: null,
        userDataName: null,
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
      if (this.checkout.userName === null ||
          this.checkout.userMail === null ||
          this.checkout.userPhone === null ||
          this.checkout.userSex === null ||
          this.checkout.userBirthday === null ||
          this.checkout.userAddress === null ||
          this.checkout.userPostCode === null ||
          this.checkout.userCity === null || 
          this.checkout.levering === null) {
        Swal.fire({
          title: 'Oops',
          text: "Je hebt niet al de velden ingevuld. Vul al de velden met een '*' in alsjeblief.",
          type: 'warning',
          confirmButtonColor: '#64A425',
          confirmButtonText: 'Ok'
        })
      } else {
          this.checkout.totalPrice = this.$store.getters.totalPrice;

          if (this.checkout.userPromo != null) {
            if (this.checkout.userPromo.toUpperCase() === 'FRIENDS') {
              if (this.checkout.levering === 'Thuis') {
                if (this.checkout.cadeau === true) {
                  this.checkout.totalInclShipping = (parseFloat(this.checkout.totalPrice) + parseFloat(5.70) + parseFloat(5.00));
                  this.checkout.totalInclShipping = this.checkout.totalInclShipping - parseFloat(5.70);
                } else {
                  this.checkout.totalInclShipping = (parseFloat(this.checkout.totalPrice) + parseFloat(5.70));
                  this.checkout.totalInclShipping = this.checkout.totalInclShipping - parseFloat(5.70);
                }
              } else {
                if (this.checkout.cadeau === true) {
                  this.checkout.totalInclShipping = (parseFloat(this.checkout.totalPrice) + parseFloat(4.40) + parseFloat(5.00));
                  this.checkout.totalInclShipping = this.checkout.totalInclShipping - parseFloat(4.40);
                } else {
                  this.checkout.totalInclShipping = (parseFloat(this.checkout.totalPrice) + parseFloat(4.40))
                  this.checkout.totalInclShipping = this.checkout.totalInclShipping - parseFloat(4.40);
                }
              }
            } 
            else if (this.checkout.userPromo.toUpperCase() === 'SFLEUVEN' || this.checkout.userPromo.toUpperCase() === 'SOULLIE' || this.checkout.userPromo.toUpperCase() === 'JONAS' || this.checkout.userPromo.toUpperCase() === 'TASTE') {
              if (this.checkout.levering === 'Thuis') {
                if (this.checkout.totalPrice >= 30) {
                  if (this.checkout.cadeau === true) {
                    this.checkout.totalInclShipping = (parseFloat(this.checkout.totalPrice) + parseFloat(5.00));
                  } else {
                    this.checkout.totalInclShipping = parseFloat(this.checkout.totalPrice);
                  }
                } else {
                    if (this.checkout.cadeau === true) {
                      this.checkout.totalInclShipping = (parseFloat(this.checkout.totalPrice) + parseFloat(5.70) + parseFloat(5.00));
                    } else {
                      this.checkout.totalInclShipping = (parseFloat(this.checkout.totalPrice) + parseFloat(5.70));
                    }
                }
                this.checkout.totalInclShipping = (parseFloat(this.checkout.totalInclShipping) - parseFloat((this.checkout.totalInclShipping * 0.05)));
              } else {
                if (this.checkout.totalPrice >= 30) {
                  if (this.checkout.cadeau === true) {
                    this.checkout.totalInclShipping = (parseFloat(this.checkout.totalPrice) + parseFloat(5.00));
                  } else {
                    this.checkout.totalInclShipping = parseFloat(this.checkout.totalPrice);
                  }
                } else {
                    if (this.checkout.cadeau === true) {
                      this.checkout.totalInclShipping = (parseFloat(this.checkout.totalPrice) + parseFloat(4.40) + parseFloat(5.00));
                    } else {
                      this.checkout.totalInclShipping = (parseFloat(this.checkout.totalPrice) + parseFloat(4.40));
                    }
                }
                this.checkout.totalInclShipping = (parseFloat(this.checkout.totalInclShipping) - parseFloat((this.checkout.totalInclShipping * 0.05)));
              }
            } 
            else {
              if (this.checkout.levering === 'Thuis') {
                if (this.checkout.totalPrice >= 30) {
                  if (this.checkout.cadeau === true) {
                    this.checkout.totalInclShipping = (parseFloat(this.checkout.totalPrice) + parseFloat(5.00));
                  } else {
                    this.checkout.totalInclShipping = parseFloat(this.checkout.totalPrice);
                  }
                } else {
                  if (this.checkout.cadeau === true) {
                    this.checkout.totalInclShipping = (parseFloat(this.checkout.totalPrice) + parseFloat(5.70) + parseFloat(5.00));
                  } else {
                    this.checkout.totalInclShipping = (parseFloat(this.checkout.totalPrice) + parseFloat(5.70));
                  }
                }
              } else {
                if (this.checkout.totalPrice >= 30) {
                  if (this.checkout.cadeau === true) {
                    this.checkout.totalInclShipping = (parseFloat(this.checkout.totalPrice) + parseFloat(5.00));
                  } else {
                    this.checkout.totalInclShipping = parseFloat(this.checkout.totalPrice);
                  }
                } else {
                  if (this.checkout.cadeau === true) {
                    this.checkout.totalInclShipping = (parseFloat(this.checkout.totalPrice) + parseFloat(4.40) + parseFloat(5.00));
                  } else {
                    this.checkout.totalInclShipping = (parseFloat(this.checkout.totalPrice) + parseFloat(4.40));
                  }
                }
              }
            }
          }
          else {
            if (this.checkout.levering === 'Thuis') {
              if (this.checkout.totalPrice >= 30) {
                if (this.checkout.cadeau === true) {
                  this.checkout.totalInclShipping = (parseFloat(this.checkout.totalPrice) + parseFloat(5.00));
                } else {
                  this.checkout.totalInclShipping = parseFloat(this.checkout.totalPrice);
                }
              } else {
                if (this.checkout.cadeau === true) {
                  this.checkout.totalInclShipping = (parseFloat(this.checkout.totalPrice) + parseFloat(5.70) + parseFloat(5.00));
                } else {
                  this.checkout.totalInclShipping = (parseFloat(this.checkout.totalPrice) + parseFloat(5.70));
                }
              }
            } else {
              if (this.checkout.totalPrice >= 30) {
                if (this.checkout.cadeau === true) {
                  this.checkout.totalInclShipping = (parseFloat(this.checkout.totalPrice) + parseFloat(5.00));
                } else {
                  this.checkout.totalInclShipping = parseFloat(this.checkout.totalPrice);
                }
              } else {
                if (this.checkout.cadeau === true) {
                  this.checkout.totalInclShipping = (parseFloat(this.checkout.totalPrice) + parseFloat(4.40) + parseFloat(5.00));
                } else {
                  this.checkout.totalInclShipping = (parseFloat(this.checkout.totalPrice) + parseFloat(4.40));
                }
              }
            }
          }

          this.checkout.orderNr = "" + (Math.floor(Math.random() * 999) + 100) + (Math.floor(Math.random() * 999) + 100);
          this.checkout.date = new Date().toLocaleString();
          this.checkout.finished = false;

          window.localStorage.setItem('userName', this.checkout.userName);
          window.localStorage.setItem('bedrag', this.checkout.totalInclShipping.toFixed(2));
          window.localStorage.setItem('orderNr', this.checkout.orderNr);

          this.checkout.totalInclShipping = this.checkout.totalInclShipping.toFixed(2);

          this.checkout.productName = [];
          this.checkout.productQuantity = [];
          this.checkout.productPrice = [];
          this.checkout.productAmount = [];
          this.checkout.productCrush = [];
          this.checkout.productImage = [];

          this.$store.state.cart.forEach(item => {
            this.checkout.productName.push(item.spiceName);
            this.checkout.productQuantity.push(item.spiceQuantity);
            this.checkout.productPrice.push(item.spicePrice);
            this.checkout.productAmount.push(item.spiceAmount);
            this.checkout.productCrush.push(item.spiceCrush);
            this.checkout.productImage.push(item.spiceImage);
          });

          $('#orderConf').modal('show');

      }
    },
    save() {
      if (this.checkoutB.levering === null) {
        Swal.fire({
          title: 'Oops',
          text: "Je hebt niet al de velden ingevuld. Vul al de velden met een '*' in alsjeblief.",
          type: 'warning',
          confirmButtonColor: '#64A425',
          confirmButtonText: 'Ok'
        })
      } else {
          this.checkoutB.totalPrice = this.$store.getters.totalPrice;

           if (this.checkoutB.userPromo != null) {
            if (this.checkoutB.userPromo.toUpperCase() === 'FRIENDS') {
              if (this.checkoutB.levering === 'Thuis') {
                if (this.checkoutB.cadeau === true) {
                  this.checkoutB.totalInclShipping = (parseFloat(this.checkoutB.totalPrice) + parseFloat(5.70) + parseFloat(5.00));
                  this.checkoutB.totalInclShipping = this.checkoutB.totalInclShipping - parseFloat(5.70);
                } else {
                  this.checkoutB.totalInclShipping = (parseFloat(this.checkoutB.totalPrice) + parseFloat(5.70));
                  this.checkoutB.totalInclShipping = this.checkoutB.totalInclShipping - parseFloat(5.70);
                }
              } else {
                if (this.checkoutB.cadeau === true) {
                  this.checkoutB.totalInclShipping = (parseFloat(this.checkoutB.totalPrice) + parseFloat(4.40) + parseFloat(5.00));
                  this.checkoutB.totalInclShipping = this.checkoutB.totalInclShipping - parseFloat(4.40);
                } else {
                  this.checkoutB.totalInclShipping = (parseFloat(this.checkoutB.totalPrice) + parseFloat(4.40))
                  this.checkoutB.totalInclShipping = this.checkoutB.totalInclShipping - parseFloat(4.40);
                }
              }
            } 
            else if (this.checkoutB.userPromo.toUpperCase() === 'SFLEUVEN' || this.checkoutB.userPromo.toUpperCase() === 'SOULLIE' || this.checkoutB.userPromo.toUpperCase() === 'JONAS' || this.checkoutB.userPromo.toUpperCase() === 'TASTE') {
              if (this.checkoutB.levering === 'Thuis') {
                if (this.checkoutB.totalPrice >= 30) {
                  if (this.checkoutB.cadeau === true) {
                    this.checkoutB.totalInclShipping = (parseFloat(this.checkoutB.totalPrice) + parseFloat(5.00));
                  } else {
                    this.checkoutB.totalInclShipping = parseFloat(this.checkoutB.totalPrice);
                  }
                } else {
                    if (this.checkoutB.cadeau === true) {
                      this.checkoutB.totalInclShipping = (parseFloat(this.checkoutB.totalPrice) + parseFloat(5.70) + parseFloat(5.00));
                    } else {
                      this.checkoutB.totalInclShipping = (parseFloat(this.checkoutB.totalPrice) + parseFloat(5.70));
                    }
                }
                this.checkoutB.totalInclShipping = (parseFloat(this.checkoutB.totalInclShipping) - parseFloat((this.checkoutB.totalInclShipping * 0.05)));
              } else {
                if (this.checkoutB.totalPrice >= 30) {
                  if (this.checkoutB.cadeau === true) {
                    this.checkoutB.totalInclShipping = (parseFloat(this.checkoutB.totalPrice) + parseFloat(5.00));
                  } else {
                    this.checkoutB.totalInclShipping = parseFloat(this.checkoutB.totalPrice);
                  }
                } else {
                    if (this.checkoutB.cadeau === true) {
                      this.checkoutB.totalInclShipping = (parseFloat(this.checkoutB.totalPrice) + parseFloat(4.40) + parseFloat(5.00));
                    } else {
                      this.checkoutB.totalInclShipping = (parseFloat(this.checkoutB.totalPrice) + parseFloat(4.40));
                    }
                }
                this.checkoutB.totalInclShipping = (parseFloat(this.checkoutB.totalInclShipping) - parseFloat((this.checkoutB.totalInclShipping * 0.05)));
              }
            } 
            else {
              if (this.checkoutB.levering === 'Thuis') {
                if (this.checkoutB.totalPrice >= 30) {
                  if (this.checkoutB.cadeau === true) {
                    this.checkoutB.totalInclShipping = (parseFloat(this.checkoutB.totalPrice) + parseFloat(5.00));
                  } else {
                    this.checkoutB.totalInclShipping = parseFloat(this.checkoutB.totalPrice);
                  }
                } else {
                  if (this.checkoutB.cadeau === true) {
                    this.checkoutB.totalInclShipping = (parseFloat(this.checkoutB.totalPrice) + parseFloat(5.70) + parseFloat(5.00));
                  } else {
                    this.checkoutB.totalInclShipping = (parseFloat(this.checkoutB.totalPrice) + parseFloat(5.70));
                  }
                }
              } else {
                if (this.checkoutB.totalPrice >= 30) {
                  if (this.checkoutB.cadeau === true) {
                    this.checkoutB.totalInclShipping = (parseFloat(this.checkoutB.totalPrice) + parseFloat(5.00));
                  } else {
                    this.checkoutB.totalInclShipping = parseFloat(this.checkoutB.totalPrice);
                  }
                } else {
                  if (this.checkoutB.cadeau === true) {
                    this.checkoutB.totalInclShipping = (parseFloat(this.checkoutB.totalPrice) + parseFloat(4.40) + parseFloat(5.00));
                  } else {
                    this.checkoutB.totalInclShipping = (parseFloat(this.checkoutB.totalPrice) + parseFloat(4.40));
                  }
                }
              }
            }
          }
          else {
            if (this.checkoutB.levering === 'Thuis') {
              if (this.checkoutB.totalPrice >= 30) {
                if (this.checkoutB.cadeau === true) {
                  this.checkoutB.totalInclShipping = (parseFloat(this.checkoutB.totalPrice) + parseFloat(5.00));
                } else {
                  this.checkoutB.totalInclShipping = parseFloat(this.checkoutB.totalPrice);
                }
              } else {
                if (this.checkoutB.cadeau === true) {
                  this.checkoutB.totalInclShipping = (parseFloat(this.checkoutB.totalPrice) + parseFloat(5.70) + parseFloat(5.00));
                } else {
                  this.checkoutB.totalInclShipping = (parseFloat(this.checkoutB.totalPrice) + parseFloat(5.70));
                }
              }
            } else {
              if (this.checkoutB.totalPrice >= 30) {
                if (this.checkoutB.cadeau === true) {
                  this.checkoutB.totalInclShipping = (parseFloat(this.checkoutB.totalPrice) + parseFloat(5.00));
                } else {
                  this.checkoutB.totalInclShipping = parseFloat(this.checkoutB.totalPrice);
                }
              } else {
                if (this.checkoutB.cadeau === true) {
                  this.checkoutB.totalInclShipping = (parseFloat(this.checkoutB.totalPrice) + parseFloat(4.40) + parseFloat(5.00));
                } else {
                  this.checkoutB.totalInclShipping = (parseFloat(this.checkoutB.totalPrice) + parseFloat(4.40));
                }
              }
            }
          }

          this.checkoutB.userMail = fb.auth().currentUser.email;
          this.checkoutB.orderNr = "" + (Math.floor(Math.random() * 999) + 100) + (Math.floor(Math.random() * 999) + 100);
          this.checkoutB.date = new Date().toLocaleString();
          this.checkoutB.userName = window.localStorage.getItem('userName');

          this.userdata.forEach(ud => {
            if (ud.userMail == this.user.email) {
              if (ud.userBus != null) {              
                var addy = "" + ud.userAddress + " " + ud.userBus + ", " + ud.userPostCode + " " + ud.userCity;
                window.localStorage.setItem('addy', addy);
              } else {
                  var addy = "" + ud.userAddress + ", " + ud.userPostCode + " " + ud.userCity;
                  window.localStorage.setItem('addy', addy);
              }

            }
          })

          this.checkoutB.userAddress = window.localStorage.getItem('addy');
          this.checkoutB.finished = false;

          window.localStorage.setItem('userName', this.checkoutB.userName);
          window.localStorage.setItem('bedrag', this.checkoutB.totalInclShipping.toFixed(2));
          window.localStorage.setItem('orderNr', this.checkoutB.orderNr);

          this.checkoutB.totalInclShipping = this.checkoutB.totalInclShipping.toFixed(2);

          this.checkoutB.productName = [];
          this.checkoutB.productQuantity = [];
          this.checkoutB.productPrice = [];
          this.checkoutB.productAmount = [];
          this.checkoutB.productCrush = [];
          this.checkoutB.productImage = [];

          this.$store.state.cart.forEach(item => {
            this.checkoutB.productName.push(item.spiceName);
            this.checkoutB.productQuantity.push(item.spiceQuantity);
            this.checkoutB.productPrice.push(item.spicePrice);
            this.checkoutB.productAmount.push(item.spiceAmount);
            this.checkoutB.productCrush.push(item.spiceCrush);
            this.checkoutB.productImage.push(item.spiceImage);
          });

          $('#orderConfB').modal('show');
        }
    },
    order() {
       db.collection('orders').add(this.checkout);

       this.checkout.productName.forEach(item => {
         this.$store.commit('emptyCart');
       })
            
       $('#orderConf').modal('hide');

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
    orderB() {
       db.collection('orders').add(this.checkoutB);

       this.checkoutB.productName.forEach(item => {
         this.$store.commit('emptyCart');
       })
            
       $('#orderConfB').modal('hide');

       this.$router.push('/orderConfirmation');
    }
  },
  created () { 
    this.user = fb.auth().currentUser || false;
  }
}
</script>

<style>
  @media (max-width: 992px) { 
    .container {
      font-size: 70%;
    }

    img {
      width: 50px;
    }

  }

  .chekout {
    padding-top: 9rem;
    width: 100%;
  }
</style>