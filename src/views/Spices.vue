<template>
  <div class="spices">
    <Navbar></Navbar>
    <Login></Login>
    <MiniCart></MiniCart>
    <div class="container">
      <br>
      <div class="card-deck" style="margin-left:1rem; margin-right: 1rem;">
        <div class="card" style="width: 18rem;" v-for="(spice, index) in spices" :key="index">
          <img class="card-img-top" :src="spice.image" alt="Card image" style="width: auto; height: auto; margin-left: auto; margin-right: auto;">
          <div class="card-body text-center">
            <h5 class="card-title">{{spice.name}}</h5>
            <p class="card-text">{{spice.origin}} <br> {{spice.price | currency('€ ')}} </p>
            <!--
            <select v-model="spice.gr">
              <option default></option>
              <option v-for="(gram, index) in spice.amounts" :key="index" @select="updateData">{{gram}}</option>
            </select>-->
            <!--<add-to-cart :gr="spice.gr" :price="spice.price" :origin="spice.origin" :name="spice.name"> </add-to-cart>-->
            <add-to-cart :price="spice.price" :origin="spice.origin" :name="spice.name"> </add-to-cart>
          </div>
        </div>
      </div>
    </div>
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
          origin: null,
          price:null,
          //gr: null,
          image:null,
          amounts:[],
          images:[]
        },
        activeItem: null,
    }
  },
  firestore(){
    return {
      spices: db.collection('spices'),
    }
  },
  methods: {
    /*
    updateData() {
      this.spice = spice.data();
      this.activeItem = spice.id;
      db.collection('spices'.doc(this.activeItem).update(this.spice))
    }
    */
  }
};
</script>
 
<style scoped lang="scss">
</style>