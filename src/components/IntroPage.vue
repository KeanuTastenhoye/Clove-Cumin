<template>
  <div class="introPage">
        <div id="carouselExampleIndicators" class="carousel" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner " >
            <div class="carousel-item active">
              <img class="d-block w-100" src="/img/slideshow/Banner.jpg" alt="First slide">
                <div class="carousel-caption d-none d-md-block" style="color:black;">
                  <h5>Missie</h5>
                  <p>Mensen verschillende culturen te laten beleven door middel van verschillende smaken (lekker eten), en dit alles vanuit uw eigen keuken.</p>
                </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/img/slideshow/ADDelhaize.jpg" alt="Second slide">
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/img/slideshow/Banner-Spices.jpg" alt="Second slide">
                <div class="carousel-caption d-none d-md-block" style="color:white;">
                  <h5>Visie</h5>
                  <p>We willen grenzen verleggen en mensen samenbrengen door hun gedeelde passie voor eten. Door de ervaring van het koken en eten van authentieke keukens van over heel de wereld, willen we een appreciatie kweken voor verschillende culturen en diversiteit bevorderen.</p>
                </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
  </div>
</template>

<script>
export default {
  name: "IntroPage",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
  @media (max-width: 992px) { 
    .introPage {
      padding-top: 50px;
    }
   }

  .introPage{
    width: 100%;
    text-align: left;
  }
</style>