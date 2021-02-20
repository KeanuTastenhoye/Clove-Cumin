<template>
  <div class="orders">
    <div class="container">
      <h3>Order Overview</h3>
      <div>
        <div v-for="order in userCheck" :key="order">
          <div class="row">
            <div class="col">
              <p><strong>Name</strong></p>
              <p v-for="pn in order.productName" :key="pn">{{pn}}</p>
            </div>
            <div class="col">
              <p><strong>Amount</strong></p>
              <p v-for="pa in order.productAmount" :key="pa">{{pa}}</p>
            </div>
            <div class="col">
              <p><strong>Quantity</strong></p>
              <p v-for="pq in order.productQuantity" :key="pq">{{pq}}</p>
            </div>
            <div class="col">
              <p><strong>Price</strong></p>
              <p v-for="pp in order.productPrice" :key="pp">{{pp | currency('€ ')}}</p>
            </div>
          </div>
          <div>
            <p><strong>Total Price:</strong> {{order.totalPrice | currency('€ ')}}</p>
          </div>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import {fb,db} from '../firebase';

export default {
  name: "Orders",
  components: {
    VueEditor
  },
  props: {
    msg: String
  },
  data(){
    return {
        orders: [],
        order: {
          productName: null,
          productAmount: null,
          productQuantity: null,
          productPrice: null,
          totalPrice: null
        }
    }
  },
  firestore(){
    return {
        orders: db.collection('orders')
    }
  },
  computed: {
    userCheck: function () {
      const activeUserMail = fb.auth().currentUser.email;
      activeUserMail.toLowerCase();
      return this.orders.filter(order => order.userMail.toLowerCase() === activeUserMail);
    }
  }
};
</script>

<style scoped lang="scss">
</style>