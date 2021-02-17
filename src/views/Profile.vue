<template>
  <div class="profile">
    <div class="container">
      <h3>Profile Data</h3>
      <div class="profile-content">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p><strong>Your data</strong></p>
              <div v-for="order in userCheck" :key="order">
                <p>{{order.userName}} <br> {{order.userMail}} <br> {{order.userPhone}} <br> {{order.userSex}} <br> {{order.userBirthday}} </p>
              </div>
            </div>
            <div class="col-md-6">
              <p><strong>Your address</strong></p>
              <div v-for="order in userCheck" :key="order">
                <p>{{order.userAddress}} <br> {{order.userPostCode}} {{order.userCity}} </p>
                <p></p>
              </div>
            </div>
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
  name: "Profile",
  components: {
    VueEditor
  },
  props: {
    msg: String
  },
  data(){
    return {
        info: [],
        profile: {
          name: null,
          mail: null,
          sex: null,
          birthday: null,
          phone: null,
          address: null,
          city: null,
          postCode: null
        },
    }
  },
  firestore(){
    return {
        info: db.collection('orders')
    }
  },
  computed: {
    userCheck: function () {
      const activeUserMail = fb.auth().currentUser.email;
      activeUserMail.toLowerCase();
      return this.info.filter(order => order.userMail.toLowerCase() === activeUserMail);
    }
  }
};
</script>

<style scoped lang="scss">
</style>