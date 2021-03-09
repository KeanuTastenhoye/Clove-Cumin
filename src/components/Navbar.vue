<template>
  <div>
   <nav class="navbar custom-nav fixed-top navbar-expand-lg navbar-light">
      <router-link class="navbar-brand pl-2" to="/">
        <h7 class="font-weight-bold mr-2 px-3" style="font-size: 150%; color:#16151a; background-color:#FBBC0E"> Clove</h7>
        <h7 style="font-size: 150%; color: #FBBC0E">& Cumin</h7>
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
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <a class="btn btn-outline my-2 my-sm-0" style="border-color:#64A425; color:#64A425; font-weight: bold" data-toggle="modal" data-target="#login" v-if="!user">Login</a>
            <a class="btn btn-outline my-2 my-sm-0" style="border-color:#AC0818; color:#AC0818; font-weight: bold" data-toggle="modal" data-target="#logout" v-if="user">Logout</a>
            <a class="btn btn-outline-info border-0 mx-2 my-2 my-sm-0" data-toggle="modal" data-target="#miniCart">
              <i class="fas fa-shopping-cart fa-2x" style="color:#FBBC0E;"></i>
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
      background-color: #3A2F25;
      color: white;
      font-weight: bold;
    }
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
/*
.link--elara {
    font-family: aktiv-grotesk-extended, sans-serif;
    font-size: 1.375rem;
}

.link--elara::before {
    transform-origin: 50% 100%;
    transition: clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
    clip-path: polygon(0% 0%, 0% 100%, 0 100%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%, 100% 100%, 100% 0%);
}

.link--elara:hover::before {
    transform: translate3d(0, 2px, 0) scale3d(1.08, 3, 1);
    clip-path: polygon(0% 0%, 0% 100%, 50% 100%, 50% 0, 50% 0, 50% 100%, 50% 100%, 0 100%, 100% 100%, 100% 0%);
}

.link--elara span {
    display: inline-block;
    transition: transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
}

.link--elara:hover span {
    transform: translate3d(0, -2px, 0);
}
*/

</style>
