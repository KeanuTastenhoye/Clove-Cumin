<template>
  <div class="home">
    <Navbar></Navbar>
    <IntroPage/>
            <h3 class="text-center pt-3 pb-3">Learn More About us</h3>
            <div class="row">
              <div class="col px-5 pb-5 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem sed modi tenetur rem facere beatae nobis eligendi, id omnis laborum vero, nostrum ea odio eos similique nisi provident esse asperiores!</div>
              <div class="col px-5 pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem id nulla mollitia voluptatibus aliquam maxime! Neque pariatur dolores similique non labore quo, explicabo tempora quas libero dolorum cupiditate. At!</div>
            </div>
            <div class="parallax"></div>
            <div class="row">
              <div class="col px-5 py-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem sed modi tenetur rem facere beatae nobis eligendi, id omnis laborum vero, nostrum ea odio eos similique nisi provident esse asperiores!</div>
              <div class="col px-5 py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem id nulla mollitia voluptatibus aliquam maxime! Neque pariatur dolores similique non labore quo, explicabo tempora quas libero dolorum cupiditate. At!</div>
            </div>
    <Login></Login>
    <MiniCart></MiniCart>
    <Footer></Footer>
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
.home {
  background-color: bisque;
}
.parallax {
  background-image: url("/img/teamPic.jpg");
  min-height: 300px;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>