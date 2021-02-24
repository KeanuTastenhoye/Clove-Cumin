<template>
  <div class="rubs">
    <Navbar></Navbar>
    <div class="container">
      <div class="card-deck" style="margin-left:1rem; margin-right: 1rem;">
        <div class="card text-gray bg-light" style="width: 18rem;" v-for="(rub, index) in rubs" :key="index">
          <img class="card-img-top" :src="rub.image" alt="Card image" style="width: auto; height: auto; margin-left: auto; margin-right: auto;">
          <div class="card-body text-center">
            <h5 class="card-title">{{rub.name}}</h5>
            <p class="card-text">{{rub.origin}}</p>
            <select v-model="rub.amountP" class="mb-2">
              <option v-for="gr in rub.amountPrice" :key="gr">{{gr[0]}} gram - {{gr[1] | currency('€ ')}}</option>
            </select>
            <add-to-cart :amountP="rub.amountP" :image="rub.image" :origin="rub.origin" :name="rub.name"> </add-to-cart>
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
  }
};
</script>
 
<style scoped lang="scss">
  .rubs {
    background-color: bisque;
    padding-top: 7rem;
    width: 100%;
  }
</style>