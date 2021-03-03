<template>
  <div class="addToCart">
    <button class="btn btn-secondary" @click="addToCart"> Add to Cart </button>    
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
      console.log('this c: ' + this.crushS);
      var array = this.amountP.split('-');
      this.item.spiceAmount = array[0].trim();
      this.item.spicePrice = array[1].substring(2).trim();
      this.item.spiceCrush = this.crushS;
      console.log('item c: ' + this.item.spiceName + ' ' + this.item.spiceCrush);
      this.$store.commit('addToCart', this.item)
      $('#miniCart').modal('show');
    }
  },
};
</script>

<style scoped lang="scss">

</style>
