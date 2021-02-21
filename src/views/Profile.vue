<template>
  <div class="profile">
    <div class="container">
      <h3>Profile Data</h3>
      <div class="profile-content">
        <div class="container">
          <div class="row">
            <div class="col">
              <div v-for="u in userCheck" :key="u">
                <div class="row">
                  <div class="col">
                    <p>{{u.userName}} <br> {{u.userMail}} <br> {{u.userPhone}} <br> {{u.userSex}} <br> {{u.userBirthday}} </p>
                  </div>
                  <div class="col">
                    <p>{{u.userAddress}} {{u.userBus}} <br>{{u.userPostCode}} {{u.userCity}} </p>
                  </div>
                </div>
                <button @click="editData(u)" class="btn btn-primary"> Edit </button>
              </div>
              <button v-if="nieuweUser" @click="addData()" class="btn btn-primary"> Add </button>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div class="modal fade" id="profile" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
        <div class="modal-dialog modal-mdialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editLabel">Profile data</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-8">
                  <div class="form-group">
                    <input type="text" placeholder="User Name" v-model="profile.userName" class="form-control">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <input type="text" placeholder="User Birthday" v-model="profile.userBirthday" class="form-control">
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="form-group">
                    <input type="text" placeholder="User Mail" v-model="profile.userMail" class="form-control">
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <input type="text" placeholder="User Sex" v-model="profile.userSex" class="form-control">
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="form-group">
                    <input type="text" placeholder="User Phone" v-model="profile.userPhone" class="form-control">
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="form-group">
                    <input type="text" placeholder="User Address" v-model="profile.userAddress" class="form-control">
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <input type="text" placeholder="User Bus" v-model="profile.userBus" class="form-control">
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <input type="text" placeholder="User Postcode" v-model="profile.userPostcode" class="form-control">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="text" placeholder="User City" v-model="profile.userCity" class="form-control">
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button @click="saveData()" type="button" class="btn btn-primary" v-if="modal == 'add'">Add data</button>
              <button @click="updateData()" type="button" class="btn btn-primary" v-if="modal == 'edit'">Apply changes</button>
            </div>
          </div>
        </div>
      </div>

  </div>       
</template>

<script>
import { VueEditor } from "vue2-editor";
import { fb, db} from '../firebase';

export default {
  name: "profile",
  components: {
    VueEditor
  },
  props: {
    msg: String
  },
  data(){
    return {
        userdata: [],
        profile: {
          userName: null,
          userMail: null,
          userAddress: null,
          userBus: null,
          userPostcode: null,
          userCity: null,
          userPhone: null,
          userBirthday: null,
          userSex: null
        },
        modal: null,
        nieuweUser: true,
    }
  },
  firestore(){
    return {
        userdata: db.collection('userdata')
    }
  },
  computed: {
    userCheck: function () {
      const activeUserMail = fb.auth().currentUser.email;
      activeUserMail.toLowerCase();
      return this.userdata.filter(u => u.userMail.toLowerCase() === activeUserMail);
    },
  },
  methods: {
    saveData() {
      db.collection('userdata').add(this.profile);
      this.nieuweUser = false;
      $('#profile').modal('hide');
    },
    addData() {
      this.modal = 'add';
      $('#profile').modal('show');
    },
    editData(user) {
      this.modal = 'edit';
      this.profile = user;
      $('#profile').modal('show');
    },
    updateData() {
      this.$firestore.userdata.doc(this.profile.id).update(this.profile);
      $('#profile').modal('hide');
    }
  }
};
</script>

<style scoped lang="scss">
</style>