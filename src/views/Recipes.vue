<template>
  <div class="recipes">
    <Navbar></Navbar>
    <Login></Login>
    <MiniCart></MiniCart>
    <div class="container">
      <br>
      <div class="card-deck" style="margin-left:1rem; margin-right: 1rem;">
        <div class="card" style="width: 18rem;" v-for="(recipe, index) in recipes" :key="index">
          <img class="card-img-top" :src="recipe.image" alt="Card image" style="width: auto; height: auto; margin-left: auto; margin-right: auto;">
          <div class="card-body text-center">
            <h5 class="card-title">{{recipe.name}}</h5>
            <p class="card-text">{{recipe.origin}}</p>
            <select v-model="recipe.servingPrice.serving" class="mb-2">
              <option v-for="serving in recipe.servingPrice.serving" :key="serving">Portie voor {{serving}}</option>
            </select>
            <!--
            <div class="row">
              <div class="col">
                <div class="form-check form-check" v-for="(serving, index) in recipe.servingPrice.serving" :key="index">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" name="serving">
                  <label class="form-check-label" for="inlineCheckbox1">Portie voor: {{serving}}</label>
                </div>
              </div>
              <div class="col">
                <div v-for="(price, index) in recipe.servingPrice.price" :key="index">
                  <p class="form-check-label" for="inlineCheckbox1">{{price | currency('€ ')}}</p>
                </div>
              </div>
            </div>
            -->
            <add-to-cart :serving="recipe.servingPrice.serving" :image="recipe.image" :origin="recipe.origin" :name="recipe.name"> </add-to-cart>
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
          serving:null,
          image:null,
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
</style>