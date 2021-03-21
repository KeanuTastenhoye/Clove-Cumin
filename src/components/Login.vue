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
                  <input type="email" v-model="loginEmail" class="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder="Email adres *">
                </div>
                <div class="form-group">
                  <input type="password" @keyup.enter="login" v-model="loginPassword" class="form-control" id="loginPassword" placeholder="Wachtwoord *">
                </div>
                <div class="form-group text-center">
                  <button class="btn" style="background-color:#64A425; color:white;" @click="login">Login</button>
                </div>
              </div>

              <!--Sign up form-->
              <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">
                <h5 class="text-center">Maak een nieuw account</h5>
                <div class="form-group">
                  <input type="text" v-model="userdata.userName" class="form-control" placeholder="Je voornaam en achternaam *">
                </div>
                <div class="form-group">
                  <input type="email" v-model="userdata.userMail" class="form-control" aria-describedby="emailHelp" placeholder="Je email adres *">
                </div>
                <div class="form-group">
                  <input type="password" v-model="password" class="form-control" placeholder="Je wachtwoord *" required>
                </div>
                <div class="form-group">
                  <input type="tel" v-model="userdata.userPhone" class="form-control" pattern="0[0-9]{9}" placeholder="Je telefoonnummer *">
                </div>
                <div class="form-group">
                  <label for="sex">Geslacht *:</label>
                  <select id="sex" name="sex" v-model="userdata.userSex" class="form-control">
                    <option value="" selected disabled hidden>Duid je geslacht hier aan</option>
                    <option value="Man">Man</option>
                    <option value="Vrouw">Vrouw</option>
                    <option value="Anders">Anders</option>
                  </select>
                </div>
                <div class="form-group">
                  <input type="date" v-model="userdata.userBirthday" class="form-control" placeholder="Je geboortedatum *">
                </div>
                <div class="form-group">
                  <input type="text" v-model="userdata.userAddress" class="form-control" placeholder="Je adres *">
                </div>
                <div class="form-group">
                  <input type="text" v-model="userdata.userBus" class="form-control" placeholder="Je bus">
                </div>
                <div class="form-group">
                  <input type="text" v-model="userdata.userPostCode" class="form-control" placeholder="Je postcode *">
                </div>
                <div class="form-group">
                  <input type="text" v-model="userdata.userCity" class="form-control" placeholder="Je stad/gemeente *">
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
      if (this.userdata.userName === null ||
          this.password === null ||
          this.userdata.userMail === null ||
          this.userdata.userPhone === null ||
          this.userdata.userSex === null ||
          this.userdata.userBirthday === null ||
          this.userdata.userAddress === null ||
          this.userdata.userPostCode === null ||
          this.userdata.userCity === null) {      
        Swal.fire({
          title: 'Oops',
          text: "Je hebt niet al de velden ingevuld. Vul al de velden met een '*' in alsjeblief.",
          type: 'warning',
          confirmButtonColor: '#64A425',
          confirmButtonText: 'Ok'
        })
      } else {
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
        }
    },
    login() {
      if (this.loginEmail === null ||
          this.loginPassword === null) {      
        Swal.fire({
          title: 'Oops',
          text: "Je hebt niet al de velden ingevuld. Vul al de velden met een '*' in alsjeblief.",
          type: 'warning',
          confirmButtonColor: '#64A425',
          confirmButtonText: 'Ok'
        })
      } else {
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
  }
};
</script>

<style scoped lang="scss">
</style>