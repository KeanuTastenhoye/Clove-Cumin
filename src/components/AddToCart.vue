<template>
  <div class="addToCart">
    <button class="btn btn-primary" @click="addToCart"> Add to Cart </button>    
  </div>
</template>

<script>
export default {
  name: "AddToCart",
  props: {
    name: String,
    origin: String,
    image: String,
    amount: String
  },
  data(){
      return {
          item :{
            spiceName: this.name,
            spiceOrigin: this.origin,
            spicePrice: '5',
            spiceImage: this.image,
            spiceAmount: '20',
            spiceQuantity: 1,
          }
      }
  },
  methods:{
    addToCart(){
      $('#miniCart').modal('show');
      //this.item.spiceAmount = this.getAmountPrice;
      this.$store.commit('addToCart', this.item)
    },
    /*
    getPriceAmount() {
      var pr = this.amount.slice(13,18);
      return pr.trim();
    },
    getAmountPrice() {
      var am = this.amount.slice(0,3);
      return am.trim();
    }
    */
  },
};
</script>

<style scoped lang="scss">

</style>
