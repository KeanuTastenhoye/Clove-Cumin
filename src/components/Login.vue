<template>
  <div class="login">
    <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="loginTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-body">

            <!--Login Buttons: Login or sign up-->
            <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item mr-2">
                <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true" style="background-color:#64A425; color:white;">Login</a>
              </li>
              <li class="nav-item ml-2">
                <a class="nav-link" id="pills-register-tab" data-toggle="pill" href="#pills-register" role="tab" aria-controls="pills-register" aria-selected="false" style="background-color:#64A425; color:white;">Signup</a>
              </li>
            </ul>

            <div class="tab-content" id="pills-tabContent">

              <!--Login form-->
              <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
                <div class="form-group">
                  <input type="email" v-model="loginEmail" class="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder="Email adres">
                </div>
                <div class="form-group">
                  <input type="password" @keyup.enter="login" v-model="loginPassword" class="form-control" id="loginPassword" placeholder="Wachtwoord">
                </div>
                <div class="form-group text-center">
                  <button class="btn" style="background-color:#64A425; color:white;" @click="login">Login</button>
                </div>
              </div>

              <!--Sign up form-->
              <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">
                <h5 class="text-center">Maak een nieuw account</h5>
                <div class="form-group">
                  <label for="userdata.userName">Naam</label>
                  <input type="text" v-model="userdata.userName" class="form-control" placeholder="Je naam" required>
                </div>
                <div class="form-group">
                  <label for="userdata.userMail">Email adres</label>
                  <input type="email"  v-model="userdata.userMail" class="form-control" aria-describedby="emailHelp" placeholder="Je email adres" required>
                </div>
                <div class="form-group">
                  <label for="password">Wachtwoord</label>
                  <input type="password" v-model="password" class="form-control" placeholder="Je wachtwoord" required>
                </div>
                <div class="form-group">
                  <label for="userdata.userPhone">Telefoonnummer</label>
                  <input type="tel" v-model="userdata.userPhone" class="form-control" pattern="0[0-9]{9}" placeholder="Je telefoonnummer" required>
                </div>
                <div class="form-group">
                  <label for="userdata.userSex">Geslacht</label>
                  <input type="text" v-model="userdata.userSex" class="form-control" placeholder="Je geslacht" required>
                </div>
                <div class="form-group">
                  <label for="userdata.userBirthday">Geboortedatum</label>
                  <input type="date" v-model="userdata.userBirthday" class="form-control" placeholder="Je geboortedatum" required>
                </div>
                <div class="form-group">
                  <label for="userdata.userAddress">Adres</label>
                  <input type="text" v-model="userdata.userAddress" class="form-control" placeholder="Je adres" required>
                </div>
                <div class="form-group">
                  <label for="userdata.userBus">Bus</label>
                  <input type="text" v-model="userdata.userBus" class="form-control" placeholder="Je bus" required>
                </div>
                <div class="form-group">
                  <label for="userdata.userPostCode">Postcode</label>
                  <input type="text" v-model="userdata.userPostCode" class="form-control" placeholder="Je postcode" required>
                </div>
                <div class="form-group">
                  <label for="userdata.userCity">Stad/gemeente</label>
                  <input type="text" v-model="userdata.userCity" class="form-control" placeholder="Je stad/gemeente" required>
                </div>
                <div class="form-group text-center">
                  <button class="btn" style="background-color:#64A425; color:white;" @click="register">Maak mijn account aan!</button>
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
      usernameke: null,
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
            var user = fb.auth().currentUser;
            user.updateProfile({
              displayName: this.userdata.userName
            })
            this.usernameke = this.userdata.userName.split(' ')[0];
            window.localStorage.setItem('userName', this.usernameke);
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
            this.usernameke = fb.auth().currentUser.displayName.split(' ')[0];
            window.localStorage.setItem('userName', this.usernameke);
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