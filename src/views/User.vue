<template>
  <div class="user">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <a id="show-sidebar" @click="closeMenu" class="btn btn-sm btn-dark" href="#">
        <i class="fas fa-bars"></i>
      </a>
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <a href="#">Vue Shop</a>
            <div id="close-sidebar" @click="closeMenu">
              <i class="fas fa-times"></i>
            </div>
          </div>
                
          <!-- sidebar-menu  -->
          <div class=" sidebar-item sidebar-menu">
            <ul>
              <li>
                <router-link to="/user/orders">
                  <i class="fa fa-shopping-cart"></i>
                  <span>Orders</span>
                </router-link>
              </li>
              <li>
                <router-link to="/user/profile">
                  <i class="fa fa-user"></i>
                  <span>Profile</span>
                </router-link>
              </li>
              <li>
                <a href="#" @click="logout()">
                  <i class="fa fa-power-off"></i>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
          
        </div> 
      </nav>

      <!-- sidebar-content  -->
      <main class="page-content">
        <router-view/>
      </main>
      
    </div>
  </div>
</template>

<script>
import IntroPage from "@/components/IntroPage.vue";
import {fb} from '../firebase';

export default {
  name: "User",
  data(){
      return{
          name:null,
          email:null,
      }
  },
  components: {
    IntroPage
  },
  methods:{
      closeMenu(){
        $(".page-wrapper").toggleClass("toggled");
      },
      logout(){
          fb.auth().signOut()
          .then(() => {
              this.$router.replace('/');
          })
          .catch((err) =>{
              console.log(err);
          });
      }
  },
  created(){
      let user = fb.auth().currentUser;
      this.email = user.email;

  }
};
</script>

<style>
</style>
