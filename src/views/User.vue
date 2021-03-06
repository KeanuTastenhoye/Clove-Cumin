<template>
  <div class="user">
    <Navbar></Navbar>
    <Login></Login>
    <Logout></Logout>
    <MiniCart></MiniCart>

    <div class="container">
      <h3 class="text-center">Profile Data</h3>
      <div class="profile-content">
        <div class="container">
          <div class="row">
            <div class="col">
              <div v-for="u in userCheckP" :key="u">
                <div class="row">
                  <div class="col text-right">
                    <p>{{u.userName}} <br> {{u.userMail}} <br> {{u.userPhone}} <br> {{u.userSex}} <br> {{u.userBirthday}} </p>
                  </div>
                  <div class="col text-left">
                    <p>{{u.userAddress}} {{u.userBus}} <br>{{u.userPostcode}} {{u.userCity}} </p>
                  </div>
                </div>
                <div class="text-center">
                  <button @click="editData(u)" class="btn btn-primary"> Edit </button>
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
            <h5 class="modal-title" id="editLabel">Profile data</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-8">
                <div class="form-group">
                  <input type="text" placeholder="User Name" v-model="profile.userName" class="form-control">
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <input type="text" placeholder="User Birthday" v-model="profile.userBirthday" class="form-control">
                </div>
              </div>
              <div class="col-md-8">
                <div class="form-group">
                  <input type="text" placeholder="User Mail" v-model="profile.userMail" class="form-control">
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <input type="text" placeholder="User Sex" v-model="profile.userSex" class="form-control">
                </div>
              </div>
              <div class="col-md-5">
                <div class="form-group">
                  <input type="text" placeholder="User Phone" v-model="profile.userPhone" class="form-control">
                </div>
              </div>
              <div class="col-md-7">
                <div class="form-group">
                  <input type="text" placeholder="User Address" v-model="profile.userAddress" class="form-control">
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <input type="text" placeholder="User Bus" v-model="profile.userBus" class="form-control">
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group">
                  <input type="text" placeholder="User Postcode" v-model="profile.userPostcode" class="form-control">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input type="text" placeholder="User City" v-model="profile.userCity" class="form-control">
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
    <hr style="height:1px;border-width:0;color:gray;background-color:gray;width:50%">
    <div class="container py-4">
      <h3 class="text-center">Order Overview</h3>
      <div>
        <div v-for="order in userCheckO" :key="order">
          <div class="row">
            <div class="col text-center">
              <p><strong>Name</strong></p>
              <p v-for="pn in order.productName" :key="pn">{{pn}}</p>
            </div>
            <div class="col text-center">
              <p><strong>Amount</strong></p>
              <p v-for="pa in order.productAmount" :key="pa">{{pa}}</p>
            </div>
            <div class="col text-center">
              <p><strong>Form?</strong></p>
              <p v-for="pc in order.productCrush" :key="pc">{{pc}}</p>
            </div>
            <div class="col text-center">
              <p><strong>Quantity</strong></p>
              <p v-for="pq in order.productQuantity" :key="pq">{{pq}}</p>
            </div>
            <div class="col text-center">
              <p><strong>Price</strong></p>
              <p v-for="pp in order.productPrice" :key="pp">€ {{pp}}</p>
            </div>
          </div>
          <div class="text-center">
            <p><strong>Total Price:</strong> € {{order.totalPrice}}</p>
          </div>
          <hr>
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
      return this.orders.filter(order => order.userMail.toLowerCase() === activeUserMail);
    },
    userCheckP: function () {
      const activeUserMail = fb.auth().currentUser.email;
      activeUserMail.toLowerCase();
      return this.userdata.filter(u => u.userMail.toLowerCase() === activeUserMail.toLowerCase());
    },
  }
};
</script>

<style>
  .user {
    background-color: bisque;
    padding-top: 7rem;
    width: 100%;
  }
</style>
