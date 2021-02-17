<template>
  <div class="login">
    <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="loginTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">

            <!--Login Buttons: Login or sign up-->
            <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item">
                <a class="nav-link" id="pills-logout-tab" data-toggle="pill" href="#pills-logout" role="tab" aria-controls="pills-logout" aria-selected="false">Logout</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="pills-register-tab" data-toggle="pill" href="#pills-register" role="tab" aria-controls="pills-register" aria-selected="false">Signup</a>
              </li>
            </ul>

            <div class="tab-content" id="pills-tabContent">

              <!--Logout form-->
              <div class="tab-pane fade" id="pills-logout" role="tabpanel" aria-labelledby="pills-logout-tab">
                <h5 class="text-center">Are you sure?</h5>
                <div class="form-group">
                  <button class="btn btn-primary" @click="logout">Logout</button>
                </div>
              </div>

              <!--Login form-->
              <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
                <h5 class="text-center">Login Please</h5>
                <div class="form-group">
                  <label for="loginEmail">Email address</label>
                  <input type="email" v-model="loginEmail" class="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                  <label for="loginPassword">Password</label>
                  <input type="password" @keyup.enter="login" v-model="loginPassword" class="form-control" id="loginPassword" placeholder="Enter password">
                </div>
                <div class="form-group">
                  <button class="btn btn-primary" @click="login">Login</button>
                </div>
              </div>

              <!--Sign up form-->
              <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">
                <h5 class="text-center">Create New Account</h5>
                <div class="form-group">
                  <label for="name">Your name</label>
                  <input type="text" v-model="name" class="form-control" id="name" placeholder="Your nice name">
                </div>
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input type="email"  v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
                </div>
                <div class="form-group">
                  <button class="btn btn-primary" @click="register">Signup</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {fb} from '../firebase'
export default {
  name: "Login",
  props: {
    msg: String
  },
  data() {
    return {
      //? Data that visitor enters when they sign up
      name: null,
      email: null,
      password: null,
      loginEmail: null,
      loginPassword: null
    }
  },
  methods: {
    register(){
      fb.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
            console.log(this.name + ' is succesfully signed in');
            //? Hides the Account menu
            $('#login').modal('hide');
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }

            console.log(error);
        });
    },
    login() {
      fb.auth().signInWithEmailAndPassword(this.loginEmail, this.loginPassword)
        .then((user) => {
            console.log(this.loginEmail + ' is succesfully logged in');
            //? Hides the Account menu
            $('#login').modal('hide');
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode == 'auth/wrong-password') {
                alert('The entered password is incorrect.');
            } else {
                alert(errorMessage);
            }

            console.log(error);
        });
    },
    logout() {
      fb.auth().signOut()
        .then(() => { 
            console.log(this.name + ' is succesfully logged out');
            //? Hides the Account menu
            $('#login').modal('hide');
        })
        .catch((error) => { console.log(error); });
    }
  }
};
</script>

<style scoped lang="scss">
</style>