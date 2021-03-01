<template>
  <div>
  <!-- Footer -->
  <footer>
    <!--
      <div class="container">
      <div class="row pt-3">
        <div class="col-lg-4 col-md-6 mb-lg-0 text-center"><img src="/img/CloveCumin.png" alt="Clove&Cumin logo" width="180" class="mb-3">
          <p class="font-italic text-muted">Hi, we are a student company, kindly follow us </p>
        </div>
        <div class="col-lg-2 col-md-6 mb-lg-0 pt-3">
          <h6 class="text-uppercase font-weight-bold mb-4">Shop</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#" class="text-muted">Recipe boxes</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Gift boxes</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Spice mixes/ rubs</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Spices</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0 pt-3">
          <h6 class="text-uppercase font-weight-bold mb-4">Company</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#" class="text-muted">Login</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Register</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Home </a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 mb-lg-0 pt-3">
          <h6 class="text-uppercase font-weight-bold mb-4">Newsletter</h6>
          <p class="text-muted mb-4">Subscribe to pur email listing for Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nostrum corrupti animi fugiat deserunt sint facilis cupiditate.</p>
          <div class="p-1 rounded border">
            <div class="input-group">
              <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" class="form-control border-0 shadow-0">
              <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-link"><i class="fa fa-paper-plane"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row text-center">
        <div class="col mb-s0 py-2">
          <a href="#" target="_blank" title="linkedin"><i class="fab fa-linkedin fa-2x"></i></a>
        </div>
        <div class="col">
         <a href="#" target="_blank" title="facebook"><i class="fab fa-facebook fa-2x"></i></a>
        </div>
        <div class="col">
          <a href="#" target="_blank" title="instagram"><i class="fab fa-instagram fa-2x"></i></a>
        </div>
      </div>
    </div>

    <div class="bg-light">
      <div class="container text-center">
        <p class="text-muted mb-0 py-2">© 2019 Bootstrapious All rights reserved.</p>
      </div>
    </div> 
    -->

    <div>
    <div class="card">
        <div class="row mb-4 ">
            <div class="col-md-4 col-sm-11 col-xs-11">
                <div class="footer-text pull-left">
                    <div class="d-flex">
                      
                        <h1 class="font-weight-bold mr-2 px-3" style="color:#16151a; background-color:#957bda"> Clove</h1>
                        <h1 style="color: #957bda">& Cumin</h1>
                    </div>
                    <p class="card-text">* disclaimer* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur numquam animi nam at impedit odit nisi.</p>
                    <div class="social mt-2 mb-3"> <i class="fab fa-facebook fa-3x"></i> <i class="fab fa-instagram fa-3x"></i> <i class="fab fa-linkedin fa-3x"></i></div>
                </div>
            </div>
            <div class="col-md-2 col-sm-1 col-xs-1 mb-2"></div>
            <div class="col-md-2 col-sm-4 col-xs-4">
                <h5 class="heading">Shop</h5>
                <ul>
                    <li>Home</li>
                    <li>Recipie</li>
                    <li>Spice mixes (rubs)</li>
                    <li>Spcies</li>
                </ul>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-4">
                <h5 class="heading">Menu</h5>
                <ul class="card-text">
                    <li>Login/ log out/ sign up</li>
                    <li>Profile data</li>
                    <li>Order history</li>
                </ul>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-4">
                <h5 class="heading">Contact us</h5>
                <ul class="card-text">
                    <li>email@gmail.com</li>
                    <li>TEL: 047852495132</li>
                    <li>FAQ</li>
                </ul>
            </div>
        </div>
        <div class="divider mb-4"> </div>
        <div class="row" style="font-size:10px;">
            <div class="col-md-6 col-sm-6 col-xs-6">
                <div class="pull-left">
                    <p><i class="fa fa-copyright"></i> 2020 thezpdesign</p>
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
