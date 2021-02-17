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
    //gr: String
  },
  data(){
      return {
          item :{
            spiceName: this.name,
            spiceOrigin: this.origin,
            spicePrice: this.price,
            //spiceGr: this.gr,
            spiceQuantity: 1,
          }
      }
  },
  methods:{
    addToCart(){
      $('#miniCart').modal('show');
      this.$store.commit('addToCart', this.item)
    }
  }
};
</script>

<style scoped lang="scss">

</style>
