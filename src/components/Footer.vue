<template>
  <div>
  <footer>
    <div>
    <div class="card">
        <div class="row mb-4 ">
            <div class="col-md-4 col-sm-11 col-xs-11">
                <div class="footer-text">
                    <div class="d-flex">
                        <img src="/img/CloveCuminT.png" style="margin-left:auto; margin-right:auto;" alt="logo">
                    </div>
                </div>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-4 text-center divS">
                <h4 class="heading pt-5">Shop</h4>
                <ul class="card-text ulS pt-4">
                    <!--
                    <li class="px-2">
                        <router-link to="/boxes">Boxes</router-link>
                    </li>
                    -->
                    <li class="px-2">
                        <router-link to="/recipes">Recepten</router-link>
                    </li>
                    <br>
                    <li class="px-2">
                        <router-link to="/rubs">Mixes</router-link>
                    </li>
                    <li class="px-2">
                        <router-link to="/spices">Kruiden</router-link>
                    </li>
                </ul>
            </div>
            <div class="col-md-3 col-sm-4 col-xs-4 text-center divS">
                <h4 class="heading pt-5">Contacteer ons</h4>
                <ul class="card-text ulS pt-4">
                    <li class="px-2">letscook@clovencumin.com</li>
                    <br>
                    <li class="px-2">0475 86 25 80</li>
                </ul>
            </div>
            <div class="col-md-3 col-sm-4 col-xs-4 text-center">
                <h4 class="heading pt-5">Volg Ons!</h4>
                <ul class="card-text pt-3">
                    <div class="social mt-2 mb-3">
                      <i class="fab fa-facebook fa-3x px-2"></i>
                      <i class="fab fa-instagram fa-3x px-2"></i>
                    </div>
                </ul>
            </div>
        </div>
        <div class="divider mb-4"> </div>
        <div class="row" style="font-size:10px;">
            <div class="col">
                <div class="pull-left">
                    <p><i class="fa fa-copyright"></i> Clove & Cumin</p>
                </div>
            </div>
            <div class="col text-center">
                <div class="policy">
                    <div>Privacy Policy</div>
                </div>
            </div>
            <div class="col text-right">
                <img src="/img/VLAJO.jpg" style="width:40px">
            </div>
        </div>
    </div>
</div>
  </footer>
  </div>
</template>

<script>
import {fb} from '../firebase'
export default {
  name: "Footer",
  props: {
    msg: String
  },
};
</script>

<style scoped lang="scss">


@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@700&display=swap');

  @media (max-width: 992px) { 
    img {
      width: 50px;
      height: 50px;
    }
  }  
  
  @media (min-width: 992px) { 
    img {
      width: 200px;
    }
  }

body {
    background-color: #f3f6fd;
    font-size: 11.5px;
    font-weight: bold;
    color: rgb(189, 196, 203)
}

a {
    color: white ;
    text-decoration: none;
}

a:hover {
    color: #FBBC0E;
    cursor: pointer
}

.card {
    padding: 2% 7%;
    color: white;
    background-color: #3A2F25 
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0
}

ul>li {
    padding: 4px;
}

ul>li:hover {
    color: #FBBC0E;
    cursor: pointer
}

hr {
    border-width: 3px
}

.social>i {
    padding: 1%;
    font-size: 30px
}

.social>i:hover {
    color: #AC0818 ;
    cursor: pointer
}

.policy>div {
    padding: 4px
}

.heading {
    font-family: 'Titillium Web', sans-serif;
    color: #FBBC0E
}

.divider {
    border-top: 2px solid rgba(189, 196, 203, 0.5);
}

i {
    color:#FBBC0E;
}

.divS {
    display: inline;
}

.ulS li {
    display: inline;
}
</style>
