<template>
  <div class="logout">
    <div class="modal fade" id="logout" tabindex="-1" role="dialog" aria-labelledby="logoutTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="tab-content text-center" id="pills-tabContent">
              <h4 class="pb-3">Ben je zeker dat je wilt uitloggen?</h4>
              <button class="btn px-5 mr-3" style="background-color:#64A425; color:white;" @click="logout">Ja</button>
              <button class="btn px-5 ml-3" style="background-color:#AC0818; color:white;" data-dismiss="modal">Neen</button>
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
  name: "Logout",
  props: {
    msg: String
  },
  methods: {
    logout() {
      fb.auth().signOut()
        .then(() => { 
            //? Hides the Account menu
            $('#logout').modal('hide');
            window.localStorage.setItem('userName', '');
            this.$router.push('/');
        })
        .catch((error) => { console.log(error); });
    }
  }
};
</script>

<style scoped lang="scss">
</style>