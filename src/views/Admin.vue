<template>
  <div class="user">
    <Navbar></Navbar>
    <Login></Login>
    <Logout></Logout>
    <MiniCart></MiniCart>

    <div class="container py-4">
      <h3 class="text-center">Openstaande bestellingen</h3> 
      <div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4" v-for="order in orderCheck" :key="order" data-aos="fade-up">
          <div class="card-deck" style="margin-left:1rem; margin-right: 1rem;">
            <div class="card cardOrder text-gray bg-light con" style="width: 18rem;">
              <div class="card-header bg-light">
                <h4 class="text-center" @click="descr(order)">Order: {{order.orderNr}}</h4>
              </div>
              <div class="hovIco">
                <div class="icoontje"><i class="far fa-eye fa-4x" @click="descr(order)"></i></div>
              </div>
              <div class="card-body">
                <p class= "text-center">{{order.date.split(' ')[0]}} &nbsp; &nbsp; {{order.date.split(' ')[1]}}</p>
                <button class="btn btn-light" @click="descr(order)"><strong>Meer van deze bestelling > </strong></button>
              </div>
              <div class="card-footer">
                <a><strong>Totaal prijs:</strong> € {{order.totalPrice}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="orderDescr" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
      <div class="modal-dialog modal-mdialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <input type="text" placeholder="Bestelnummer" v-model="order.orderNr" class="form-control" disabled>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input type="text" placeholder="Bestel datum" v-model="order.date" class="form-control" disabled>
                </div>
              </div>
            </div>
            <div class="row">
              <div>
                <ul>
                  <li v-for="o in (order.productName)" :key=o>{{o}}</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li v-for="o in (order.productAmount)" :key=o>{{o}}</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li v-for="o in (order.productQuantity)" :key=o>{{o}}</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li v-for="o in (order.productCrush)" :key=o>{{o}}</li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <input type="text" placeholder="Totaal Prijs" v-model="order.totalPrice" class="form-control" disabled>
                </div>
              </div>
              <div class="col-md-8">
                <div class="form-group">
                  <input type="text" placeholder="User Email" v-model="order.userMail" class="form-control" disabled>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <input type="text" placeholder="User Adres" v-model="order.userAddress" class="form-control" disabled>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" style="background-color:#AC0818; color:white;" data-dismiss="modal">Sluit</button>
            <button @click="updateData()" type="button" class="btn" style="background-color:#64A425; color:white;">Klaar voor verzending</button>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import {fb,db} from '../firebase';

export default {
  name: "Admin",
  components: {
    VueEditor
  },
  props: {
    msg: String
  },
  data() {
    return {
        orders: [],
        order: {
          date: null,
          orderNr: null,
          productAmount: [],
          productCrush: [],
          productImage: [],
          productName: [],
          productPrice: [],
          productQuantity: [],
          totalPrice: null,
          userMail: null,
          finished: null
        },
    }
  },
  firestore(){
    return {
        orders: db.collection('orders'),
    }
  },
  methods: {
    updateData() {
      this.order.finished = true;
      this.$firestore.orders.doc(this.order.id).update(this.order);
      $('#orderDescr').modal('hide');
    },
    descr(order) {
      $('#orderDescr').modal('show');
      this.order = order;
    }
  },
  computed: {
    orderCheck: function () {
      return this.orders.filter(order => order.finished === false);
    },
  }
};
</script>

<style scoped lang="scss">
  .user {
    padding-top: 7rem;
    width: 100%;
  }

  .c {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}

.c {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.cb {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}

.con {
  position: relative;
  width: 50%;
}

.hovIco {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 60%;
  left: 70%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.icoontje {
  color: #FBBC0E;
  font-size: 16px;
  padding: 16px 32px;
}

.con:hover .image{
  opacity: 0.3;
}

.con:hover .hovIco {
  opacity: 1;
}

//Imports
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');

// Varibles
$main-font: 'Roboto',sans-serif;
$primary-color: #64A425;
$light-gray: #f8f8f8;
$main-font-color: #808080;
$main-font-weight: 300;

// Basic
body {
  background-color: $light-gray;
  font-family: $main-font;
  font-weight: $main-font-weight;
}


// Tables
.cardOrder {
  border: 0;
  border-radius: 0px;
  -webkit-box-shadow: 0 3px 0px 0 rgba(0, 0, 0, .08);
  box-shadow: 0 3px 0px 0 rgba(0, 0, 0, .08);
  transition: all .3s ease-in-out;
  //padding: 2.25rem 0;
  position: relative;
  will-change:transform; 
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 5px;
    background-color: $primary-color;
    transition: 0.5s;
  }
  
  &:hover {
    transform: scale(1.05);
    -webkit-box-shadow: 0 20px 35px 0 rgba(0, 0, 0, .08);
    box-shadow: 0 20px 35px 0 rgba(0, 0, 0, .08);
    
    &:after {
      width: 100%;
    }
    
  }
}
</style>
