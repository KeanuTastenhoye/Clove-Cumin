<template>
  <div class="orders">
    <div class="container">
      <h3>Order Overview</h3>
      <div>
        <p>Order</p>
        <div v-for="(order, index) in orderSort" :key="order">
            <p>Order {{index}} <br> {{order.totalPrice}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import {db} from '../firebase';

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
          productQuantity: null,
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
    orderSort: function() {
      const productNames= [];
      const productQuantities= [];
        return this.orders.forEach(orderFE => {
          orderFE.productName.forEach(name => {
            productNames.push(name);
          });
          productNames.push('end');
          orderFE.productQuantity.forEach(quantity => {
            productQuantities.push(quantity);
          });
          productQuantities.push('end');
        });
    }
  }
};
</script>

<style scoped lang="scss">
</style>