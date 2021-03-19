<template>
  <div class="addToCart text-center float-right">
    <button class="btn btn-block" style="background-color: #64A425; color: white;" @click="addToCart"> Toevoegen aan mandje</button>
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
      this.item.spiceAmount = this.amountP[0];
      this.item.spicePrice = this.amountP[1];
      this.item.spiceCrush = this.crushS;
      this.item.spiceImage = this.image;
      this.item.spiceName = this.name;
      this.item.spiceOrigin = this.origin;
      this.$store.commit('addToCart', this.item);
      $('#spiceInfo').modal('hide');
      $('#rubInfo').modal('hide');
      $('#recipeInfo').modal('hide');
      $('#miniCart').modal('show');
    }
  },
};
</script>

<style scoped lang="scss">

</style>
