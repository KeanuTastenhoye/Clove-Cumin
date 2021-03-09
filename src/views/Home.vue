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


.parallax {
  background-image: url("/img/teamFoto.png");
  min-height: 300px;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.paraI {
  width: 300px;
}


/*
.content {
  position: absolute;
  //top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //height: 160px;
  height: 80px;
  overflow: hidden;
  
  line-height: 40px;
  color: #ecf0f1;
  
  &__container {
    font-weight: 600;
    overflow: hidden;
    height: 40px;
    padding: 0 40px;

    &__text {
      display: inline;
      float: left;
      margin: 0;
    }

    &__list {
      margin-top: 0;
      float: left;
      text-align: left;
      list-style: none;
      
      -webkit-animation-name: change;
      -webkit-animation-duration: 10s;
      -webkit-animation-iteration-count: infinite;
      animation-name: change;
      animation-duration: 10s;
      animation-iteration-count: infinite;

      &__item {
        line-height:40px;
        margin:10;
      }
    }
  }
}

@-webkit-keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-webkit-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

@-o-keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-o-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

@-moz-keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@-moz-keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}

@keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}
*/
</style>