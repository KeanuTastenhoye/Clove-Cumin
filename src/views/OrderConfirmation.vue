<template>
  <div class="orderConfirmation">
    <Navbar></Navbar>
      <div class="container">
        <div class="text-center">
          <a><i class="fas fa-check fa-7x"></i></a>
          <h3>Uw bestelling is geregistreerd</h3>
          <p> We zullen zo snel mogelijk beginnen met het klaarmaken van je bestelling. </p>
          <p> Aangezien wij een SBP zijn, moeten wij al de betalingen via een overschrijving laten doen.</p>
          <p> Zouden we je daarom mogen vragen om een betaling met volgende gegevens uit te voeren</p>
          <div>
            <div>
              <p><strong>Rekening nummer: </strong>BE06 0018 9899 0622</p>
              <p><strong>Bedrag: </strong> € {{bedrag}} </p>
              <p><strong>Mededeling: </strong>{{naam}} - {{orderNr}} </p>
            </div>
          </div>
        </div>
      </div>
    <Login></Login>
    <Logout></Logout>
    <MiniCart></MiniCart>
    <Footer></Footer>
  </div>
</template>

<script>

import { VueEditor } from "vue2-editor";
import { fb, db} from '../firebase';

export default {
  name: "orderConfirmation",
  components: {
    VueEditor
  },
  props: {
    msg: String
  },
  data() {
    return {
      orders: [],
      user: null,
      orderNr: null,
      bedrag: null,
      naam: null,
    }
  },
  firestore(){
    return {
        orders: db.collection('orders')
    }
  },
  created() {
    this.user = fb.auth().currentUser;
    this.orderNr = window.localStorage.getItem('orderNr');
    this.naam = window.localStorage.getItem('userName');
    this.bedrag = window.localStorage.getItem('bedrag');
  }
}
</script>

<style scoped lang="scss">
.orderConfirmation {
    padding-top: 7rem;
    width: 100%;
}
i {
    color: green;
}
</style>