<template>
  <div class="spices">
    <Navbar></Navbar>
    
    <div class="container pb-5">
      <div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4" v-for="(spice, index) in spices" :key="index">
          <div class="card-deck" style="margin-left:1rem; margin-right: 1rem;">
            <div class="card text-gray bg-light" style="width: 18rem;">
              <img class="card-img-top" :src="spice.image" alt="Card image" style="width: 250; margin-left: auto; margin-right: auto;">
              <div class="card-body text-center">
                <h5 class="card-title">{{spice.name}}</h5>
                <p class="card-text">{{spice.origin}}</p>
                <select v-model="spice.amountP" class="mb-2">
                  <option v-for="gr in spice.amountPrice" :key="gr">{{gr[0]}} gram - € {{gr[1]}}</option>
                </select>
                <br>
                <a>Crushed:</a>
                <div v-for="optie in spice.crushed" :key="optie" class="d-inline pl-2">
                  <input type="radio" :id="optie" :value="optie" v-model="spice.crushS">
                  <label class="pl-1" :for="optie">{{optie}}</label>
                </div>
                <div class="row">
                  <div class="col">
                    <add-to-cart :crushS="spice.crushS" :amountP="spice.amountP" :image="spice.image" :origin="spice.origin" :name="spice.name"> </add-to-cart>
                  </div>
                  <div class="col">
                    <button class="btn btn-secondary" @click="info(spice)">More info</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="spiceInfo" tabindex="-1" role="dialog" aria-hidden="true">
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
                <img :src="selectedSpice.image" alt="spice image">
              </div>
              <div class="col">
                <h5><strong>{{selectedSpice.name}}</strong></h5>
                <p><u>Origin:</u> {{selectedSpice.origin}}</p>
                <p><u>Soorten opties:</u></p>
                <ul v-for="ap in selectedSpice.amountPrice" :key="ap"> 
                  <li>{{ap[0]}} gram - € {{ap[1]}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Login></Login>
    <Logout></Logout>
    <MiniCart></MiniCart>
    <Footer></Footer>
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
          crushS:null,
          image:null,
          amounts:[],
          images:[]
        },
        activeItem:null,
        selectedSpice: '',
    }
  },
  firestore(){
    return {
      spices: db.collection('spices'),
    }
  },
  methods: {
    info(spice) {
      $('#spiceInfo').modal('show');
      this.selectedSpice = spice;
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