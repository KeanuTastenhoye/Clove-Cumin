<template>
  <div class="login">
    <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="loginTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">

            <!--Login Buttons: Login or sign up-->
            <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="pills-register-tab" data-toggle="pill" href="#pills-register" role="tab" aria-controls="pills-register" aria-selected="false">Signup</a>
              </li>
            </ul>

            <div class="tab-content" id="pills-tabContent">

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
                  <label for="userdata.userName">Your name</label>
                  <input type="text" v-model="userdata.userName" class="form-control" placeholder="Your name">
                </div>
                <div class="form-group">
                  <label for="userdata.userMail">Email address</label>
                  <input type="email"  v-model="userdata.userMail" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" v-model="password" class="form-control" placeholder="Password">
                </div>
                <div class="form-group">
                  <label for="userdata.userPhone">Your Phone</label>
                  <input type="text" v-model="userdata.userPhone" class="form-control" placeholder="Your phone">
                </div>
                <div class="form-group">
                  <label for="userdata.userSex">Your Sex</label>
                  <input type="text" v-model="userdata.userSex" class="form-control" placeholder="Your sex">
                </div>
                <div class="form-group">
                  <label for="userdata.userBirthday">Your Birthday</label>
                  <input type="text" v-model="userdata.userBirthday" class="form-control" placeholder="Your birthday">
                </div>
                <div class="form-group">
                  <label for="userdata.userAddress">Your Address</label>
                  <input type="text" v-model="userdata.userAddress" class="form-control" placeholder="Your address">
                </div>
                <div class="form-group">
                  <label for="userdata.userBus">Your Bus</label>
                  <input type="text" v-model="userdata.userBus" class="form-control" placeholder="Your Bus">
                </div>
                <div class="form-group">
                  <label for="userdata.userPostCode">Your PostCode</label>
                  <input type="text" v-model="userdata.userPostCode" class="form-control" placeholder="Your post code">
                </div>
                <div class="form-group">
                  <label for="userdata.userCity">Your City</label>
                  <input type="text" v-model="userdata.userCity" class="form-control" placeholder="Your city">
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
import {fb, db} from '../firebase'
export default {
  name: "Login",
  props: {
    msg: String
  },
  data() {
    return {
      password: null,
      loginEmail: null,
      loginPassword: null,
      userdata: {
        userName: null,
        userMail: null,
        userPhone: null,
        userSex: null,
        userBirthday: null,
        userAddress: null,
        userBus: null,
        userPostCode: null,
        userCity: null
      }
    }
  },
  methods: {
    register(){
      fb.auth().createUserWithEmailAndPassword(this.userdata.userMail, this.password)
        .then(() => {
            console.log(this.userdata.userName + ' is succesfully signed in');
            db.collection('userdata').add(this.userdata);
            //? Hides the Account menu
            $('#login').modal('hide');
            this.$router.push('/');
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
        .then(() => {
            console.log(this.loginEmail + ' is succesfully logged in');
            //? Hides the Account menu
            $('#login').modal('hide');
            this.$router.push('/');
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
    }
  }
};
</script>

<style scoped lang="scss">
</style>