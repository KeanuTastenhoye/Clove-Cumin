<template>
  <div class="introPage">
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-md-5">
          <div class="introPage-content">
            <h1 class="introPage-title">Clove & Cumin</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam tempora, iure delectus totam 
                minus quam aperiam ratione dolores magni voluptates ut necessitatibus odio ipsum fuga, voluptas ab praesentium nihil?
              </p>
          </div>
        </div>
        <div class="float-right">
          <div class="graphic">
            <img src="/img/CloveCumin.png" alt="Clove & Cumin logo" heigh="350" width="350">
          </div>
        </div>
      </div>
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