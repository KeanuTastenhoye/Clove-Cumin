<template>
  <div class="spices">
    <Navbar></Navbar>
    <Disclaimer></Disclaimer>

    <div class="container pb-5">
      <div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4" v-for="(spice, index) in spices" :key="index" data-aos="fade-up">
          <div class="card-deck" style="margin-left:1rem; margin-right: 1rem;">
            <div class="card text-gray bg-light con" style="width: 18rem;">
              <img class="card-img-top image" :src="spice.image" alt="Card image" style="width: 250; margin-left: auto; margin-right: auto;" @click="info(spice)">
              <div class="card-header bg-light">
                <h4 class="text-center" @click="info(spice)">{{spice.name}}</h4>
              </div>
              <div class="hovIco">
                <div class="icoontje"><i class="fas fa-cart-plus fa-4x" @click="info(spice)"></i></div>
              </div>
              <div class="card-body">
                <p></p>
                <button class="btn btn-light" @click="descr(spice)"><strong>Lees meer > </strong></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="spiceInfo" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
                <h4><strong>{{selectedSpice.name}}</strong></h4>
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
                <p class="text-center">Hoeveelheid *</p>
                <hr>
                <div v-for="gr in selectedSpice.amountPrice" :key="gr">
                  <input type="radio" :id="gr" :value="gr" v-model="selectedSpice.amountP">
                  <label class="pl-1" :for="gr"> {{gr[0]}} </label> 
                  <label class="pr-2 float-right" :for="gr"> € {{gr[1]}}</label>
                </div>
                <hr>
                <p class="text-center">Vorm van de kruiden * <i class="far fa-question-circle iconQ"  title="De smaak van de kruiden komt meer tot zijn recht als het net voor gebruik gecrushed wordt."></i></p>
                <hr>
                <div v-for="optie in selectedSpice.crushed" :key="optie" class="mx-auto d-inline">
                  <input type="radio" :id="optie" :value="optie" v-model="selectedSpice.crushS">
                  <label class="pl-1 pr-2" :for="optie">{{optie}}</label>
                  <br>
                </div>
              </div>
            </div>
            <add-to-cart class="float-left pl-5 pt-2" :crushS="selectedSpice.crushS" :amountP="selectedSpice.amountP" :image="selectedSpice.image" :name="selectedSpice.name"> </add-to-cart>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="spiceDescr" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="spiceDescr"><strong>{{selectedSpice.name}}</strong></h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h6><strong>Land van herkomst</strong></h6>
            <p>{{selectedSpice.origin}}</p>
            <hr>
            <h6><strong>Beschrijving</strong></h6>
            <p>We zijn momenteel druk bezig met een accurate, informatieve en een aangenaam om te lezen beschrijving te ontwikkelen voor elk van onze kruiden. </p>
            <p>Kom binnenkort nog eens kijken!</p>
            <hr>
            <h6><strong>Keukens</strong></h6>
            <p>...</p>
            <hr>
            <h6><strong>Smaak</strong></h6>
            <p>...</p>
            <hr>
            <h6><strong>Hoe te gebruiken</strong></h6>
            <p>...</p>
            <hr>
            <h6><strong>Wordt gebruikt in</strong></h6>
            <p>...</p>
            <hr>
            <h6><strong>Beschrijving plant</strong></h6>
            <p>...</p>
            <hr>
            <h6><strong>Hoe bewaren</strong></h6>
            <p>...</p>
            <hr>
            <h6><strong>Past goed bij</strong></h6>
            <p>...</p>
            <hr>
            <h6><strong>Weetjes</strong></h6>
            <p>...</p>
            <hr>
            <h6><strong>Geschiedenis</strong></h6>
            <p>...</p>
            <hr>
            <h6><strong>Gezondheids voordelen</strong></h6>
            <p>...</p>
            <hr>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" style="background-color: #AC0818; color: white" data-dismiss="modal">Close</button>
            <button type="button" class="btn" style="background-color: #64A425; color: white" @click="info(selectedSpice)">Buy</button>
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
  @media (max-width: 992px) { 
    .iconQ {
      visibility: hidden;
    }
  }

.spices {
    padding-top: 7rem;
    width: 100%;
}

.modal-header {
  background-color: #FBBC0E;
  color:white;
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


// Imports
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');

// Varibles
$main-font: 'Roboto',sans-serif;
$primary-color: #64A425;
$light-gray: #f8f8f8;
$main-font-color: #808080;
$main-font-weight: 300;

// Basic
body {
  background-color: $light-gray;
  font-family: $main-font;
  font-weight: $main-font-weight;
}


// Tables
.card {
  border: 0;
  border-radius: 0px;
  -webkit-box-shadow: 0 3px 0px 0 rgba(0, 0, 0, .08);
  box-shadow: 0 3px 0px 0 rgba(0, 0, 0, .08);
  transition: all .3s ease-in-out;
  //padding: 2.25rem 0;
  position: relative;
  will-change:transform; 
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 5px;
    background-color: $primary-color;
    transition: 0.5s;
  }
  
  &:hover {
    transform: scale(1.05);
    -webkit-box-shadow: 0 20px 35px 0 rgba(0, 0, 0, .08);
    box-shadow: 0 20px 35px 0 rgba(0, 0, 0, .08);
    
    &:after {
      width: 100%;
    }
    
  }

}
</style>