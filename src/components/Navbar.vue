<template>
  <div>
   <nav class="navbar custom-nav fixed-top navbar-expand-lg navbar-light">
      <router-link class="navbar-brand pl-2" to="/">
      <!--
        <h7 class="font-weight-bold mr-2 px-3" style="font-size: 150%; color:#16151a; background-color:#FBBC0E"> Clove</h7>
        <h7 style="font-size: 150%; color: #FBBC0E">& Cumin</h7>
        -->
        <img src="/img/C&C.png" alt="logo" class="miniLogo">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
     <div class="container">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item px-5">
              <router-link to="/" class="nav-link"><a class="navTekst">Home</a></router-link>
            </li>
            <li class="nav-item px-5">
              <router-link to="/recipes" class="nav-link"><a class="navTekst">Recipes</a></router-link>
            </li>
            <li class="nav-item px-5">
              <router-link to="/rubs" class="nav-link"><a class="navTekst">Rubs</a></router-link>
            </li>
            <li class="nav-item px-5">
              <router-link to="/spices" class="nav-link"><a class="navTekst">Spices</a></router-link>
            </li>
            <li class="nav-item px-5" v-if="user">
              <router-link to="/user" class="nav-link"><a class="navTekst">User</a></router-link>
            </li>
            <li class="nav-item px-5" v-if="user.email == 'teamblackcardamom@cnc.com'">
              <router-link to="/admin" class="nav-link"><a class="navTekst">Admin</a></router-link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <a class="btn btn-outline my-2 my-sm-0" style="border-color:#64A425; color:#64A425; font-weight: bold" data-toggle="modal" data-target="#login" v-if="!user">Login</a>
            <a class="btn btn-outline my-2 my-sm-0" style="border-color:#AC0818; color:#AC0818; font-weight: bold" data-toggle="modal" data-target="#logout" v-if="user">Logout</a>
            <a class="btn btn-outline border-0 mx-2 my-2 my-sm-0" data-toggle="modal" data-target="#miniCart">
              <i class="fas fa-shopping-cart fa-2x kar"></i>
            </a>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import {fb} from '../firebase'
export default {
  name: "Navbar",
  props: {
    msg: String
  },
  created() {
    this.user = fb.auth().currentUser || false;
  }
};
</script>

<style scoped lang="scss">
  @media (min-width: 992px) { 
    .navbar.custom-nav{
      padding-top:16px;
      padding-bottom:16px;
      background-color: #3A2F25;
      color: white;
      font-weight: bold;
    }
   }

   .miniLogo {
     width: 100px;
     height: 50px;
   }

   li {
      display:inline-block;
   }

  .navTekst {
    color:white;
    font-size:150%;
  }

   .navTekst:hover {
      color:#FBBC0E;
      text-decoration: none;
   }

   li:hover {
      transform: scale(1.1);
   }

   .kar {
    color:#FBBC0E;
   }  
   
   .kar:hover {
    color:#64A425;
   }

$primary-color: #64A425;

.navTekst {
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
    height: 2px;
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
