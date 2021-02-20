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
    price: String,
    image: String,
    amount: String
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
      this.item.spiceAmount = this.amount;
      this.$store.commit('addToCart', this.item)
    }
  }
};
</script>

<style scoped lang="scss">

</style>
