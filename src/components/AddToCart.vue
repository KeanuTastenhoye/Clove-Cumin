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
    image: String,
    amountP: String,
    crushS: String,
  },
  data(){
      return {
          item :{
            spiceName: this.name,
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
      if (this.item.spiceAmount === null ||
          this.item.spiceCrush === null) {      
        Swal.fire({
          title: 'Oops',
          text: "Je hebt niet al de velden ingevuld. Vul al de velden met een '*' in alsjeblief.",
          type: 'warning',
          confirmButtonColor: '#64A425',
          confirmButtonText: 'Ok'
        })
      } else {
          this.item.spiceAmount = this.amountP[0];
          this.item.spicePrice = this.amountP[1];
          this.item.spiceCrush = this.crushS;
          this.item.spiceImage = this.image;
          this.item.spiceName = this.name;
          this.$store.commit('addToCart', this.item);
          $('#spiceInfo').modal('hide');
          $('#rubInfo').modal('hide');
          $('#recipeInfo').modal('hide');
          $('#miniCart').modal('show');
      }
    }
  },
};
</script>

<style scoped lang="scss">

</style>
