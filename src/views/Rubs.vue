<template>
  <div class="rubs">
    <Navbar></Navbar>
    <Login></Login>
    <MiniCart></MiniCart>
    <div class="container">
      <br>
      <div class="card-deck" style="margin-left:1rem; margin-right: 1rem;">
        <div class="card" style="width: 18rem;" v-for="(rub, index) in rubs" :key="index">
          <img class="card-img-top" :src="rub.image" alt="Card image" style="width: auto; height: auto; margin-left: auto; margin-right: auto;">
          <div class="card-body text-center">
            <h5 class="card-title">{{rub.name}}</h5>
            <p class="card-text">{{rub.origin}} <br> {{rub.price | currency('€ ')}} </p>
            <!--<select v-model="rub.amount" class="mb-2"  @change="updateAmount(rub.name, rub.amount)">-->
            <select v-model="rub.amount" class="mb-2">
              <option v-for="gram in rub.amounts" :key="gram">{{gram}}</option>
            </select>
            <add-to-cart :amount="rub.amount" :image="rub.image" :price="rub.price" :origin="rub.origin" :name="rub.name"> </add-to-cart>
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
  name: "Rubs",
  components: {
    VueEditor
  },
  props: {
    msg: String
  },
  data(){
    return {
        rubs: [],
        rub: {
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
      rubs: db.collection('rubs'),
    }
  },
  methods: {
    /*updateAmount(nme, amt) {
      this.rubs.forEach(sp => {
        if (sp.name === nme) {
          sp.amount = amt;
        }
      });
    }*/
  }
};
</script>
 
<style scoped lang="scss">
</style>