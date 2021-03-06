<template>
  <div>
  <footer>
    <div>
    <div class="card">
        <div class="row mb-4 ">
            <div class="col-md-4 col-sm-11 col-xs-11">
                <div class="footer-text">
                    <div class="d-flex">
                        <img src="/img/CloveCuminT.png" style="width:200px; margin-left:auto; margin-right:auto;" alt="logo">
                    </div>
                </div>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-4">
                <h5 class="heading">Shop</h5>
                <ul>
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>Spice mixes (rubs)</li>
                    <li>Spices</li>
                </ul>
            </div>
            <div class="col-md-3 col-sm-4 col-xs-4">
                <h5 class="heading">Menu</h5>
                <ul class="card-text">
                    <li>Login / Log out / Sign up</li>
                    <li>Profile data</li>
                    <li>Order history</li>
                </ul>
            </div>
            <div class="col-md-3 col-sm-4 col-xs-4">
                <h5 class="heading">Contact us</h5>
                <ul class="card-text">
                    <li>letscook@clovencumin.com</li>
                    <li>0475 86 25 80</li>
                    <div class="social mt-2 mb-3">
                      <i class="fab fa-facebook fa-3x"></i>
                      <i class="fab fa-instagram fa-3x"></i>
                      <i class="fab fa-linkedin fa-3x"></i>
                    </div>
                </ul>
            </div>
        </div>
        <div class="divider mb-4"> </div>
        <div class="row" style="font-size:10px;">
            <div class="col-md-6 col-sm-6 col-xs-6">
                <div class="pull-left">
                    <p><i class="fa fa-copyright"></i> Clove & Cumin</p>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6">
                <div class="pull-right mr-4 d-flex policy">
                    <div>Terms of Use</div>
                    <div>Privacy Policy</div>
                    <div>Cookie Policy</div>
                </div>
            </div>
        </div>
    </div>
</div>
  </footer>
  </div>
</template>

<script>
import {fb} from '../firebase'
export default {
  name: "Footer",
  props: {
    msg: String
  },
};
</script>

<style scoped lang="scss">


@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@700&display=swap');

body {
    background-color: #f3f6fd;
    font-size: 11.5px;
    font-weight: bold;
    color: rgb(189, 196, 203)
}

.card {
    padding: 2% 7%;
    color: #646771;
    background-color: #16151a
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0
}

ul>li {
    padding: 4px
}

ul>li:hover {
    color: #957bda;
    cursor: pointer
}

hr {
    border-width: 3px
}

.social>i {
    padding: 1%;
    font-size: 30px
}

.social>i:hover {
    color: #957bda;
    cursor: pointer
}

.policy>div {
    padding: 4px
}

.heading {
    font-family: 'Titillium Web', sans-serif;
    color: white
}

.divider {
    border-top: 2px solid rgba(189, 196, 203, 0.5);
}
</style>
