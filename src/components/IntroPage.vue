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
              <img class="d-block w-100" src="/img/slideshow/test.jpg" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                  <h5>testtt</h5>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo voluptates praesentium eaque repellat, harum quisquam doloribus eveniet iste? Doloribus repellendus, distinctio est voluptatibus dicta et exercitationem vero omnis cupiditate!.</p>
                </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/img/slideshow/first.jpg" alt="Second slide">
                <div class="carousel-caption d-none d-md-block">
                  <h5>This is the second photo</h5>
                  <p>yeah looks mad cool bruh</p>
                </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="/img/slideshow/Second.jpg" alt="Third slide">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Last</h5>
                  <p>I am the best pîcture</p>
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
  .introPage{
    padding-top: 7rem;
    width: 100%;
    text-align: left;
  }
</style>