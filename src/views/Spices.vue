<template>
  <div class="spices">
    <Navbar></Navbar>
    <div class="container">
      <div class="card-deck" style="margin-left:1rem; margin-right: 1rem;">
        <div class="card text-gray bg-light" style="width: 18rem;" v-for="(spice, index) in spices" :key="index">
          <img class="card-img-top" :src="spice.image" alt="Card image" style="width: auto; height: auto; margin-left: auto; margin-right: auto;">
          <div class="card-body text-center">
            <h5 class="card-title">{{spice.name}}</h5>
            <p class="card-text">{{spice.origin}}</p>
            <select v-model="spice.amountP" class="mb-2">
              <option v-for="gr in spice.amountPrice" :key="gr">{{gr[0]}} gram - {{gr[1] | currency('€ ')}}</option>
            </select>
            <add-to-cart :amountP="spice.amountP" :image="spice.image" :origin="spice.origin" :name="spice.name"> </add-to-cart>
          </div>
        </div>
      </div>
    </div>
    <Login></Login>
    <MiniCart></MiniCart>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { fb, db} from '../firebase';

export default {
  name: "Spices",
  components: {
    VueEditor
  },
  props: {
    msg: String
  },
  data(){
    return {
        spices: [],
        spice: {
          name:null,
          origin:null,
          price:null,
          amount:null,
          image:null,
          amounts:[],
          images:[]
        },
        activeItem:null,
    }
  },
  firestore(){
    return {
      spices: db.collection('spices'),
    }
  }
};
</script>
 
<style scoped lang="scss">
  .spices {
    background-color: bisque;
    padding-top: 7rem;
    width: 100%;
  }
</style>