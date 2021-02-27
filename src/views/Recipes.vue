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
            <div class="row">
              <div class="col">
                <add-to-cart :amountP="recipe.amountP" :image="recipe.image" :origin="recipe.origin" :name="recipe.name"> </add-to-cart>
              </div>
              <div class="col">
                <button class="btn btn-secondary" @click="info(recipe)">More info</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="recipeInfo" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-mdialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col">
                <img :src="selectedRecipe.image" alt="spice image">
              </div>
              <div class="col">
                <h5><strong>{{selectedRecipe.name}}</strong></h5>
                <p><u>Origin:</u> {{selectedRecipe.origin}}</p>
                <p><u>Soorten opties:</u></p>
                <ul v-for="ap in selectedRecipe.amountPrice" :key="ap"> 
                  <li>{{ap[0]}} porties - {{ap[1] | currency('€ ')}}</li>
                </ul>
              </div>
            </div>
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
        selectedRecipe: ''
    }
  },
  firestore(){
    return {
      recipes: db.collection('recipes'),
    }
  },
  methods: {
    info(recipe) {
      $('#recipeInfo').modal('show');
      this.selectedRecipe = recipe;
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