<template>
  <div class="rubs">
    <Navbar></Navbar>
    <div class="container pb-5">
      <div class="card-deck" style="margin-left:1rem; margin-right: 1rem;">
        <div class="card text-gray bg-light" style="width: 18rem;" v-for="(rub, index) in rubs" :key="index">
          <img class="card-img-top" :src="rub.image" alt="Card image" style="width: auto; height: auto; margin-left: auto; margin-right: auto;">
          <div class="card-body text-center">
            <h5 class="card-title">{{rub.name}}</h5>
            <p class="card-text">{{rub.origin}}</p>
            <select v-model="rub.amountP" class="mb-2">
              <option v-for="gr in rub.amountPrice" :key="gr">{{gr[0]}} gram - {{gr[1] | currency('€ ')}}</option>
            </select>
            <div class="row">
              <div class="col">
                <add-to-cart :amountP="rub.amountP" :image="rub.image" :origin="rub.origin" :name="rub.name"> </add-to-cart>
              </div>
              <div class="col">
                <button class="btn btn-secondary" @click="info(rub)">More info</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="rubInfo" tabindex="-1" role="dialog" aria-hidden="true">
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
                <img :src="selectedRub.image" alt="spice image">
              </div>
              <div class="col">
                <h5><strong>{{selectedRub.name}}</strong></h5>
                <p><u>Origin:</u> {{selectedRub.origin}}</p>
                <p><u>Soorten opties:</u></p>
                <ul v-for="ap in selectedRub.amountPrice" :key="ap"> 
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
        selectedRub: ''
    }
  },
  firestore(){
    return {
      rubs: db.collection('rubs'),
    }
  },
  methods: {
    info(rub) {
      $('#rubInfo').modal('show');
      this.selectedRub = rub;
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