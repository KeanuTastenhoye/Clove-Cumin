<template>
  <div class="addToCart text-center">
    <button class="btn btn-secondary" @click="addToCart"> Add to cart</button>
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
    crushS: String,
  },
  data(){
      return {
          item :{
            spiceName: this.name,
            spiceOrigin: this.origin,
            spiceCrush: this.crushS,
            spicePrice: this.price,
            spiceImage: this.image,
            spiceAmount: this.amount,
            spiceQuantity: 1,
          }
      }
  },
  methods:{
    addToCart(){
      this.item.spiceAmount = this.amountP[0] + ' gram';
      this.item.spicePrice = this.amountP[1];
      this.item.spiceCrush = this.crushS;
      this.item.spiceImage = this.image;
      this.item.spiceName = this.name;
      this.item.spiceOrigin = this.origin;
      this.$store.commit('addToCart', this.item)
      $('#miniCart').modal('show');
    }
  },
};
</script>

<style scoped lang="scss">

</style>
