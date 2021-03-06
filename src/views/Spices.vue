<template>
  <div class="spices">
    <Navbar></Navbar>

    <div class="container pb-5">
      <div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4" v-for="(spice, index) in spices" :key="index">
          <div class="card-deck" style="margin-left:1rem; margin-right: 1rem;">
            <div class="card text-gray bg-light border-danger con" style="width: 18rem;">
              <img class="card-img-top image" :src="spice.image" alt="Card image" style="width: 250; margin-left: auto; margin-right: auto;" @click="info(spice)">
              <div class="card-header bg-light">
                <h4 class="text-center" @click="info(spice)">{{spice.name}}</h4>
              </div>
              <div class="hovIco">
                <div class="icoontje"><i class="fas fa-cart-plus fa-4x" @click="info(spice)"></i></div>
              </div>
              <div class="card-body">
                <p>Lorem ipsum dolor sit amet conse...</p>
                <button class="btn btn-light" @click="descr(spice)"><strong>Read More > </strong></button>
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
                <h5><strong>{{selectedSpice.name}}</strong></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col">
                <img :src="selectedSpice.image" alt="spice image" style="width: 200px; margin-left: auto; margin-right: auto;">
              </div>
              <div class="col">
                <p><u>Origin:</u> {{selectedSpice.origin}}</p>
                <p class="float-left pt-2">Wich option would you like?</p>
                <div v-for="gr in selectedSpice.amountPrice" :key="gr" class="pl-2 float-left">
                  <input type="radio" :id="gr" :value="gr" v-model="selectedSpice.amountP">
                  <label class="pl-1" :for="gr">{{gr[0]}} gram - € {{gr[1]}}</label>
                </div>
                <p class="float-left pt-2">In what form would you like it?</p>
                <div v-for="optie in selectedSpice.crushed" :key="optie" class="pl-2 float-left">
                  <input type="radio" :id="optie" :value="optie" v-model="selectedSpice.crushS">
                  <label class="pl-1" :for="optie">{{optie}}</label>
                </div>              
              </div>
            </div>
            <add-to-cart class="float-left pl-5 pt-2" :crushS="selectedSpice.crushS" :amountP="selectedSpice.amountP" :image="selectedSpice.image" :origin="selectedSpice.origin" :name="selectedSpice.name"> </add-to-cart>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="spiceDescr" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="spiceDescr">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsum facere delectus ipsam temporibus alias mollitia quibusdam ut, magni, debitis consequuntur. Minus enim excepturi dolorum laboriosam aut nostrum ullam eveniet!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsum facere delectus ipsam temporibus alias mollitia quibusdam ut, magni, debitis consequuntur. Minus enim excepturi dolorum laboriosam aut nostrum ullam eveniet!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsum facere delectus ipsam temporibus alias mollitia quibusdam ut, magni, debitis consequuntur. Minus enim excepturi dolorum laboriosam aut nostrum ullam eveniet!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsum facere delectus ipsam temporibus alias mollitia quibusdam ut, magni, debitis consequuntur. Minus enim excepturi dolorum laboriosam aut nostrum ullam eveniet!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsum facere delectus ipsam temporibus alias mollitia quibusdam ut, magni, debitis consequuntur. Minus enim excepturi dolorum laboriosam aut nostrum ullam eveniet!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsum facere delectus ipsam temporibus alias mollitia quibusdam ut, magni, debitis consequuntur. Minus enim excepturi dolorum laboriosam aut nostrum ullam eveniet!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsum facere delectus ipsam temporibus alias mollitia quibusdam ut, magni, debitis consequuntur. Minus enim excepturi dolorum laboriosam aut nostrum ullam eveniet!</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="info(selectedSpice)">Buy</button>
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
      $('#spiceDescr').modal('hide');
      this.selectedSpice = spice;
    },
    descr(spice) {
      $('#spiceDescr').modal('show');
      $('#spiceInfo').modal('hide');
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

.con {
  position: relative;
  width: 50%;
}

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.hovIco {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.icoontje {
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}

.con:hover .image{
  opacity: 0.3;
}

.con:hover .hovIco {
  opacity: 1;
}

img {
  width: 250px;
}

</style>