<template>
  <div class="recipes">
    <Navbar></Navbar>
    <div class="container">
      <div class="card-deck" style="margin-left:1rem; margin-right: 1rem;">
        <div class="card text-gray bg-light" style="width: 18rem;" v-for="(recipe, index) in recipes" :key="index">
          <img class="card-img-top" :src="recipe.image" alt="Card image" style="width: auto; height: auto; margin-left: auto; margin-right: auto;">
          <div class="card-body text-center">
            <h5 class="card-title">{{recipe.name}}</h5>
            <p class="card-text">{{recipe.origin}}</p>
            <select v-model="recipe.amountP" class="mb-2">
              <option v-for="gr in recipe.amountPrice" :key="gr">{{gr[0]}} porties - {{gr[1] | currency('€ ')}}</option>
            </select>
            <add-to-cart :amountP="recipe.amountP" :image="recipe.image" :origin="recipe.origin" :name="recipe.name"> </add-to-cart>
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
  name: "Recipes",
  components: {
    VueEditor
  },
  props: {
    msg: String
  },
  data(){
    return {
        recipes: [],
        recipe: {
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
      recipes: db.collection('recipes'),
    }
  }
};
</script>
 
<style scoped lang="scss">
  .recipes {
    background-color: bisque;
    padding-top: 7rem;
    width: 100%;
  }
</style>