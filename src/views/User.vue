<template>
  <div class="user">
    <Navbar></Navbar>
    <Login></Login>
    <Logout></Logout>
    <MiniCart></MiniCart>

    <div class="container">
      <h3 class="text-center">My personal data</h3> 
      <div class="profile-content" v-for="u in userCheckP" :key="u" @click="editData(u)">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="card mb-3 c">
                <div class="card-body cb">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                     {{u.userName}} <i class="fas fa-pencil-alt"></i>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{u.userMail}} <i class="fas fa-pencil-alt"></i>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{u.userPhone}} <i class="fas fa-pencil-alt"></i>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Gender</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{u.userSex}} <i class="fas fa-pencil-alt"></i>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Birthday</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{u.userBirthday}} <i class="fas fa-pencil-alt"></i>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{u.userAddress}} {{u.userBus}}, {{u.userPostcode}} {{u.userCity}} <i class="fas fa-pencil-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="profile" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
      <div class="modal-dialog modal-mdialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel">Your data</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-8">
                <div class="form-group">
                  <input type="text" placeholder="Name" v-model="profile.userName" class="form-control">
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <input type="text" placeholder="Birthday" v-model="profile.userBirthday" class="form-control">
                </div>
              </div>
              <div class="col-md-8">
                <div class="form-group">
                  <input type="text" placeholder="Mail" v-model="profile.userMail" class="form-control">
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <input type="text" placeholder="Sex" v-model="profile.userSex" class="form-control">
                </div>
              </div>
              <div class="col-md-5">
                <div class="form-group">
                  <input type="text" placeholder="Phone" v-model="profile.userPhone" class="form-control">
                </div>
              </div>
              <div class="col-md-7">
                <div class="form-group">
                  <input type="text" placeholder="Address" v-model="profile.userAddress" class="form-control">
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <input type="text" placeholder="Bus" v-model="profile.userBus" class="form-control">
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <input type="text" placeholder="Postcode" v-model="profile.userPostcode" class="form-control">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input type="text" placeholder="City" v-model="profile.userCity" class="form-control">
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button @click="updateData()" type="button" class="btn btn-primary" >Apply changes</button>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-4">
      <h3 class="text-center">My order overview</h3> 
      <div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4" v-for="order in userCheckO" :key="order" data-aos="fade-up">
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
                <button class="btn btn-light" @click="descr(order)"><strong>See this order > </strong></button>
              </div>
              <div class="card-footer">
                <a><strong>Total Price:</strong> € {{order.totalPrice}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="orderDescr" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="spiceDescr"><strong>Order: {{selectedOrder.orderNr}}</strong></h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row" v-for="(order,index) in selectedOrder.productName" :key="index">
              <div class="col text-center">
                <img style="width: 100px; margin-left: auto; margin-right: auto;" :src=selectedOrder.productImage[index]>
              </div>
              <div class="col">
                <p><strong>{{selectedOrder.productName[index]}}</strong></p>
                <p>{{selectedOrder.productAmount[index]}}</p>
                <p>{{selectedOrder.productCrush[index]}}</p>
              </div>
              <div class="col text-center">
                <p><strong>Quantity</strong></p>
                <p>{{selectedOrder.productQuantity[index]}}</p>
              </div>
              <div class="col text-center">
                <p><strong>Price</strong></p>
                <p>€ {{selectedOrder.productPrice[index]}}</p>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" style="background-color: #AC0818; color: white" data-dismiss="modal">Close</button>
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
  name: "User",
  components: {
    VueEditor
  },
  props: {
    msg: String
  },
  data(){
      return{
          name:null,
          email:null,
          orders: [],
          order: {
            productName: null,
            productAmount: null,
            productQuantity: null,
            productPrice: null,
            totalPrice: null
          },
          userdata: [],
          profile: {
            userName: null,
            userMail: null,
            userAddress: null,
            userBus: null,
            userPostcode: null,
            userCity: null,
            userPhone: null,
            userBirthday: null,
            userSex: null
          },
          modal: null,
          nieuweUser: true,
          selectedOrder: ''
      }
  },
  firestore(){
    return {
        orders: db.collection('orders'),
        userdata: db.collection('userdata')
    }
  },
  methods:{
    editData(user) {
      this.modal = 'edit';
      this.profile = user;
      $('#profile').modal('show');
    },
    updateData() {
      this.$firestore.userdata.doc(this.profile.id).update(this.profile);
      $('#profile').modal('hide');
    },
    descr(order) {
      $('#orderDescr').modal('show');
      this.selectedOrder = order;
    }
  },
  created(){
      let user = fb.auth().currentUser;
      this.email = user.email;
      if (this.email != null && this.email != undefined) {
        this.nieuweUser = false;
      }
  },
  computed: {
    userCheckO: function () {
      const activeUserMail = fb.auth().currentUser.email;
      activeUserMail.toLowerCase();
      return this.orders.filter(order => order.userMail.toLowerCase() === activeUserMail.toLowerCase());
    },
    userCheckP: function () {
      const activeUserMail = fb.auth().currentUser.email;
      activeUserMail.toLowerCase();
      return this.userdata.filter(u => u.userMail.toLowerCase() === activeUserMail.toLowerCase());
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
