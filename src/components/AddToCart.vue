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
    amountP: String,
  },
  data(){
      return {
          item :{
            spiceName: this.name,
            spiceOrigin: this.origin,
            spicePrice: this.price,
            spiceImage: this.image,
            spiceAmount: this.amount,
            spiceQuantity: 1,
          }
      }
  },
  methods:{
    addToCart(){
      $('#miniCart').modal('show');
      this.item.spiceAmount = this.amountP.substring(0, this.amountP.indexOf('-'));
      this.item.spicePrice = this.amountP.slice(-5);
      this.$store.commit('addToCart', this.item)
    }
  },
};
</script>

<style scoped lang="scss">

</style>
