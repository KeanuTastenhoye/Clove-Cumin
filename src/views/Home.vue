<template>
  <div class="home">
    <Navbar></Navbar>
    <IntroPage/>
      <div class="container h-100">
        <div class="row p-5 h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <img src="/img/svg/product.svg" alt="" width="400">
          </div>
          <div class="col-md-6">
            <h3>Learn More About us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis 
              magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas exercitationem ratione consectetur et!
            </p>
          </div>
        </div>
      </div>
    <Login></Login>
    <MiniCart></MiniCart>
  </div>
</template>

<script>
import IntroPage from "@/components/IntroPage.vue";

export default {
  name: "Home",
  components: {
    IntroPage
  }
};
</script>

<style>
</style>