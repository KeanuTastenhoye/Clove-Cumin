<template>
  <div class="rubs">
    <Navbar></Navbar>

    <!--
    <Disclaimer></Disclaimer>
    -->

    <div class="container pb-5">
      <div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4" v-for="(rub, index) in rubs" :key="index" data-aos="fade-up">
          <div class="card-deck" style="margin-left:1rem; margin-right: 1rem;">
            <div class="card text-gray bg-light con" style="width: 18rem;">

              <div :id="rub.origin" class="carousel" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li :data-target="getRubIDForCarrousel(rub)" data-slide-to="0" class="active"></li>
                  <li :data-target="getRubIDForCarrousel(rub)" data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="card-img-top image" :src="rub.imageU" alt="Card image" style="width: 250; margin-left: auto; margin-right: auto;" @click="info(rub)">
                  </div>
                  <div class="carousel-item">
                    <img class="card-img-top image" :src="rub.imageM" alt="Card image" style="width: 250; margin-left: auto; margin-right: auto;" @click="info(rub)">
                  </div>
                </div>
                <a class="carousel-control-prev" :href="getRubIDForCarrousel(rub)" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" :href="getRubIDForCarrousel(rub)" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>

              <!--<img class="card-img-top image" :src="rub.image" alt="Card image" style="width: 250; margin-left: auto; margin-right: auto;" @click="info(rub)">-->
              <div class="card-header bg-light">
                <h4 class="text-center" @click="info(rub)">{{rub.name}}</h4>
              </div>
              <div class="hovIco">
                <div class="icoontje"><i class="fas fa-cart-plus fa-4x" @click="info(rub)"></i></div>
              </div>
              <div class="card-body">
                <p></p>
                <button class="btn btn-light" @click="descr(rub)"><strong>Lees meer > </strong></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="rubInfo" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
                <h4><strong>{{selectedRub.name}}</strong></h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col">
                <div id="SelectedRubIndicators" class="carousel" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#SelectedRubIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#SelectedRubIndicators" data-slide-to="1"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="card-img-top image" :src="selectedRub.imageU" alt="Card image" style="width: 200; margin-left: auto; margin-right: auto;">
                    </div>
                    <div class="carousel-item">
                      <img class="card-img-top image" :src="selectedRub.imageM" alt="Card image" style="width: 200; margin-left: auto; margin-right: auto;">
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#SelectedRubIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#SelectedRubIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div class="col text-center">
                <p class="text-center">Hoeveelheid</p>
                <hr>
                <div v-for="gr in selectedRub.amountPrice" :key="gr">
                  <input type="radio" :id="gr" :value="gr" v-model="selectedRub.amountP">
                  <label class="pl-1" :for="gr">{{gr[0]}} - € {{gr[1]}}</label>
                </div>      
              </div>
            </div>
            <add-to-cart class="float-left pl-5 pt-2" crushS="Mixed" :amountP="selectedRub.amountP" :image="selectedRub.imageM" :origin="selectedRub.origin" :name="selectedRub.name"> </add-to-cart>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="rubDescr" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="rubDescr"><strong>{{selectedRub.name}}</strong></h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h6><strong>Inhoud</strong></h6>
            <p>{{selectedRub.inhoud}}</p>
            <hr>
            <h6><strong>Extra</strong></h6>
            <p>{{selectedRub.pastBij}}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" style="background-color: #AC0818; color: white" data-dismiss="modal">Sluit</button>
            <button type="button" class="btn" style="background-color: #64A425; color: white" @click="info(selectedRub)">Kopen</button>
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
          crushS:null,
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
      $('#rubDescr').modal('hide');
      this.selectedRub = rub;
    },
    descr(rub) {
      $('#rubDescr').modal('show');
      $('#rubInfo').modal('hide');
      this.selectedRub = rub;
    },
    getRubIDForCarrousel(rub) {
      return "" + "#" + rub.origin;
    }
  }
};
</script>
 
<style scoped lang="scss">
  .rubs {
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

/*
.form .plan input, .form input, .form input{
	display: none;
}

.form .plan input:checked + label, .form input:checked + label, .form input:checked + label{
	border: 3px solid #333;
	background-color: #2fcc71;
}

.form .plan input:checked + label:after, form input:checked + label:after, .form input:checked + label:after{
	content: "\2713";
	border-radius: 100%;
	border: 2px solid #333;
	background-color: #2fcc71;
	position: absolute;
}
*/
</style>