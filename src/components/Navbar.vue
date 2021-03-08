<template>
  <div>
   <nav class="navbar custom-nav fixed-top navbar-expand-lg navbar-light">
     <div class="container">
      <router-link class="navbar-brand" to="/">
        <h7 class="font-weight-bold mr-2 px-3" style="color:#16151a; background-color:#957bda"> Clove</h7>
        <h7 style="color: #957bda">& Cumin</h7>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item px-5">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item px-5">
              <router-link to="/recipes" class="nav-link">Recipes</router-link>
            </li>
            <li class="nav-item px-5">
              <router-link to="/rubs" class="nav-link">Rubs</router-link>
            </li>
            <li class="nav-item px-5">
              <router-link to="/spices" class="nav-link">Spices</router-link>
            </li>
            <li class="nav-item px-5" v-if="user">
              <router-link to="/user" class="nav-link">User</router-link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <a class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#login" v-if="!user">Login</a>
            <a class="btn btn-outline-danger my-2 my-sm-0" data-toggle="modal" data-target="#logout" v-if="user">Logout</a>
            <a class="btn btn-outline-info border-0 mx-2 my-2 my-sm-0" data-toggle="modal" data-target="#miniCart">
              <i class="fas fa-shopping-cart fa-2x"></i>
            </a>
          </form>
        </div>
      </div>
    </nav>
      <div class="container alert alert-danger alert-server" role="alert">
        <button type="button" class="close" data-dismiss="alert">×</button>
        <strong>DISCLAIMER</strong> We offer FREE shipping when the order is above €30.
      </div>
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
      background-color: white;
    }
   }

   li {
      display:inline-block;
   }

   li.nav-item:hover {
     background-color: yellow;
   }

   .alert.alert-server {

    //?Beneden
    /*
    position: fixed;
    bottom: 0;
    margin-bottom: 0;
    border-radius: 0;
    width: 100%;
    */

    //?Boven, over nav
    /*
      position: fixed;
      top: 0;
      z-index: 99999;
    */
   }

</style>
