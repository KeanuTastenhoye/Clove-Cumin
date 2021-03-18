<template>
  <div class="miniCart">
    <div class="modal fade" id="miniCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">My Bag</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ul>
              <li v-for="item in this.$store.state.cart" :key="item" class="media">
                <img :src="item.spiceImage" width="80px" class="align-self-center mr-3" alt="">
                <div class="media-body">
                  <h5 class="mt-0">{{item.spiceName}}
                    <span class='float-right' @click="$store.commit('removeFromCart',item)">X</span>
                  </h5>
                  <p class="mt-0">{{item.spiceOrigin}}</p>
                  <p class="mt-0">€ {{item.spicePrice}}</p>
                  <p class="mt-0">{{item.spiceAmount}}</p>
                  <p class="mt-0">Quantity: {{item.spiceQuantity}}</p>
                  <p class="mt-0">{{item.spiceCrush}}</p>
                  <hr>
                </div>
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" style="background-color:#AC0818; color:white;" data-dismiss="modal">Continue Shopping</button>
            <button type="button" class="btn" style="background-color:#64A425; color:white;" @click="checkout">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniCart",
  props: {
    msg: String
  },
  methods:{
    checkout(){
      $('#miniCart').modal('hide');
      this.$router.push('/checkout');
    }
  }
};
</script>

<style scoped lang="scss">
</style>
