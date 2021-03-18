<template>
  <div class="home">
    <Navbar></Navbar>
    <IntroPage></IntroPage>
    <!--
            <div class="content">
              <div class="content__container">
                <h3 class="content__container__text">
                  Learn more about
                </h3>
                <ul class="content__container__list">
                  <li class="content__container__list__item"><h3>us!</h3></li>
                  <li class="content__container__list__item"><h3>spices!</h3></li>
                  <li class="content__container__list__item"><h3>recipes!</h3></li>
                  <li class="content__container__list__item"><h3>SBP!</h3></li>
                </ul>
              </div>
            </div>
            -->
            <h3 class="text-center pt-3 pb-3">Learn More About us</h3>
            <div class="row">
              <div class="col pl-5 pb-5">
                <div class="container">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem sed modi tenetur rem facere beatae nobis eligendi, id omnis laborum vero, nostrum ea odio eos similique nisi provident esse asperiores!
                </div>
              </div>
              <div class="col px-5 pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem id nulla mollitia voluptatibus aliquam maxime! Neque pariatur dolores similique non labore quo, explicabo tempora quas libero dolorum cupiditate. At!</div>
            </div>
            <div class="parallax">
              <img src="/img/CloveCuminT.png" class="paraI mx-auto d-block">
            </div>
            <div class="row">
              <div class="col px-5 py-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem sed modi tenetur rem facere beatae nobis eligendi, id omnis laborum vero, nostrum ea odio eos similique nisi provident esse asperiores!</div>
              <div class="col px-5 py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolorem id nulla mollitia voluptatibus aliquam maxime! Neque pariatur dolores similique non labore quo, explicabo tempora quas libero dolorum cupiditate. At!</div>
            </div>
    
    <Login></Login>
    <Logout></Logout>
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

<style scoped lang="scss">
  @media (min-width: 992px) { 
    .parallax {
      background-image: url("/img/Banner-Team.jpg");
      min-height: 300px;
      width: 100%;
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

.paraI {
  width: 300px;
}
</style>