<template>
  <div class="Dash">
    <Navbar></Navbar>
    <Login></Login>
    <Logout></Logout>
    <MiniCart></MiniCart>

    <div class="container py-4">
      <h3 class="text-center">Dashboard</h3> 
      <button class="btn btn-success" style="margin-left: auto; margin-right: auto;" @click="orderChart">Show Dashboard</button>
      <div class="row">
        <div class="col">
          <GChart type="PieChart" :data="sexOrderData" :options="sexOrderTitle"/>
        </div>
        <div class="col">
          <GChart type="PieChart" :data="codeOrderData" :options="codeOrderTitle"/>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <GChart type="ColumnChart" :data="ageOrderData" :options="ageOrderTitle"/>
        </div>
        <div class="col">
          <GChart type="ColumnChart" :data="articleOrderData" :options="articleOrderTitle"/>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <GChart type="ColumnChart" :data="sizeOrderData" :options="sizeOrderTitle"/>
        </div>
        <div class="col">
          <GChart type="BarChart" :data="biryaniOrderData" :options="biryaniOrderTitle"/>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <GChart type="Gauge" :data="OrderData" :options="OrderTitle"/>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
import {fb,db} from '../firebase';

export default {
  name: "Dash",
  components: {
      GChart
  },
  props: {
    msg: String
  },
  data() {
      return {
        orders: [],
        sexOrderData: [],
        ageOrderData: [],
        codeOrderData: [],
        articleOrderData: [],
        sizeOrderData: [],
        biryaniOrderData: [],
        OrderData: [],
        sexOrderTitle: {title: null},
        ageOrderTitle: {title: null},
        codeOrderTitle: {title: null},
        articleOrderTitle: {title: null},
        sizeOrderTitle: {title: null},
        biryaniOrderTitle: {title: null},
        OrderTitle: {title: null},
      };
  },
  firestore(){
    return {
        orders: db.collection('orders'),
    }
  },
  mounted() {
    this.orderChart();
  },
  methods: {
    orderChart: function() { 
      this.sexOrderData = [
                              ["Geslacht", "# Bestellingen"],
                              ["Man", (this.orders.filter(order => order.userSex === "Man")).length],
                              ["Vrouw", (this.orders.filter(order => order.userSex === "Vrouw")).length],
                              ["Anders", (this.orders.filter(order => order.userSex === "Anders")).length]
                        ]
      this.sexOrderTitle.title = 'Bestellingen per geslacht';

      this.ageOrderData = [
                              ["Leeftijd", "", { role: 'style' }],
                              ["0-20", (this.orders.filter(order => parseInt(order.userBirthday.substring(0, 4)) <= 2021 && parseInt(order.userBirthday.substring(0, 4)) >= 2001)).length, 'pink'],
                              ["20-30", (this.orders.filter(order => parseInt(order.userBirthday.substring(0, 4)) < 2001 && parseInt(order.userBirthday.substring(0, 4)) >= 1991)).length, 'red'],
                              ["30-40", (this.orders.filter(order => parseInt(order.userBirthday.substring(0, 4)) < 1991 && parseInt(order.userBirthday.substring(0, 4)) >= 1981)).length, 'brown'],
                              ["40-50", (this.orders.filter(order => parseInt(order.userBirthday.substring(0, 4)) < 1981 && parseInt(order.userBirthday.substring(0, 4)) >= 1971)).length, 'green'],
                              ["50+", (this.orders.filter(order => parseInt(order.userBirthday.substring(0, 4)) < 1971)).length, 'blue']
                        ]
      this.ageOrderTitle.title = 'Bestellingen per leeftijd';

      this.codeOrderData = [
                              ["Code", ""],
                              ["Geen", (this.orders.filter(order => order.userPromo === "" || order.userPromo === null)).length],
                              ["Soullie", (this.orders.filter(order => order.userPromo != null && order.userPromo.toUpperCase() === "SOULLIE")).length],
                              ["Friends", (this.orders.filter(order => order.userPromo != null && order.userPromo.toUpperCase() === "FRIENDS")).length],
                              ["SFLeuven", (this.orders.filter(order => order.userPromo != null && order.userPromo.toUpperCase() === "SFLEUVEN")).length],
                              ["Jonas", (this.orders.filter(order => order.userPromo != null && order.userPromo.toUpperCase() === "JONAS")).length],
                              ["Taste", (this.orders.filter(order => order.userPromo != null && order.userPromo.toUpperCase() === "TASTE")).length]
                        ]
      this.codeOrderTitle.title = 'Promo code gebruikt per bestelling';

      this.articleOrderData = [
                              ["Artikel", ""],
                              ["Biryani", (this.orders.filter(order => order.productName.includes("Biryani"))).length],
                              ["Aztec Mix", (this.orders.filter(order => order.productName.includes("Aztec Rub"))).length],
                              ["Norse Mix", (this.orders.filter(order => order.productName.includes("Norse Rub"))).length],
                              ["Spicy Mamma Mia Mix", (this.orders.filter(order => order.productName.includes("Spicy Mamma Mia"))).length],
                              ["Groene Kardemom", (this.orders.filter(order => order.productName.includes("Groene Kardemom"))).length],
                              ["Kruidnagel", (this.orders.filter(order => order.productName.includes("Kruidnagel"))).length],
                              ["Nootmuskaat", (this.orders.filter(order => order.productName.includes("Nootmuskaat"))).length],
                              ["Lookgranulaat", (this.orders.filter(order => order.productName.includes("Lookgranulaat"))).length],
                              ["Koriander", (this.orders.filter(order => order.productName.includes("Koriander"))).length],
                              ["Pilli Pilli Poeder", (this.orders.filter(order => order.productName.includes("Chilli poeder"))).length],
                              ["Gember Poeder", (this.orders.filter(order => order.productName.includes("Gember Poeder"))).length],
                              ["Fenegriek Zaad", (this.orders.filter(order => order.productName.includes("Fenegriek Zaad"))).length],
                              ["Paprika Poeder", (this.orders.filter(order => order.productName.includes("Paprika Poeder"))).length],
                              ["Komijn", (this.orders.filter(order => order.productName.includes("Komijn"))).length],
                              ["Tijm", (this.orders.filter(order => order.productName.includes("Tijm"))).length],
                              ["Pilli Pilli Vlokken", (this.orders.filter(order => order.productName.includes("Rode Chilli Vlokken"))).length],
                              ["Zwarte Kardemom", (this.orders.filter(order => order.productName.includes("Zwarte Kardemom"))).length],
                              ["Rozemarijn", (this.orders.filter(order => order.productName.includes("Rozemarijn"))).length],
                              ["Zwarte Peper", (this.orders.filter(order => order.productName.includes("Zwarte Peper"))).length],
                              ["Kaneel Stokken", (this.orders.filter(order => order.productName.includes("Kaneel Stokken"))).length],
                              ["Laurier Blad", (this.orders.filter(order => order.productName.includes("Laurier Blad"))).length],
                              ["Oregano", (this.orders.filter(order => order.productName.includes("Oregano"))).length],
                              ["Zee Zout", (this.orders.filter(order => order.productName.includes("Zee zout"))).length],
                              ["Cayenne Peper", (this.orders.filter(order => order.productName.includes("Cayenne Peper"))).length],
                              ["Venkel Zaad", (this.orders.filter(order => order.productName.includes("Venkel Zaad"))).length],
                              ["Ster Anijs", (this.orders.filter(order => order.productName.includes("Ster anijs"))).length],
                              ["Mosterd Zaad", (this.orders.filter(order => order.productName.includes("Mosterd Zaad"))).length],
                              ["Basilicum", (this.orders.filter(order => order.productName.includes("Basilicum"))).length],
                              ["Turmeric", (this.orders.filter(order => order.productName.includes("Turmeric"))).length],
                              ["Nigelle Zaad", (this.orders.filter(order => order.productName.includes("Nigelle Zaad"))).length],
                        ]
      this.articleOrderTitle.title = 'Bestellingen per artikel';

      var aantalAztecSmall = 0;
      var aantalAztecBig = 0;
      var aantalNorseSmall = 0;
      var aantalNorseBig = 0;
      var aantalSMMSmall = 0;
      var aantalSMMBig = 0;

      var i;
      for (i = 0; i < this.orders.length; i++) {
        if (this.orders[i].productName.includes("Aztec Rub")) {
          var j;
          for (j = 0; j <= this.orders[i].productName.length; j++) {
            if (this.orders[i].productName[j] === "Aztec Rub") {
              if (this.orders[i].productAmount[j] === "50 gram") {
                aantalAztecSmall += 1;
              } else if (this.orders[i].productAmount[j] === "100 gram") {
                aantalAztecBig += 1;
              } else {

              }
            }
          }
        }
        if (this.orders[i].productName.includes("Norse Rub")) {
          var j;
          for (j = 0; j <= this.orders[i].productName.length; j++) {
            if (this.orders[i].productName[j] === "Norse Rub") {
              if (this.orders[i].productAmount[j] === "50 gram") {
                aantalNorseSmall += 1;
              } else if (this.orders[i].productAmount[j] === "100 gram") {
                aantalNorseBig += 1;
              } else {

              }
            }
          }
        }
        if (this.orders[i].productName.includes("Spicy Mamma Mia")) {
          var j;
          for (j = 0; j <= this.orders[i].productName.length; j++) {
            if (this.orders[i].productName[j] === "Spicy Mamma Mia") {
              if (this.orders[i].productAmount[j] === "25 gram") {
                aantalSMMSmall += 1;
              } else if (this.orders[i].productAmount[j] === "50 gram") {
                aantalSMMBig += 1;
              } else {

              }
            }
          }
        }
        else {

        }
      }

      this.sizeOrderData = [
                              ["Artikel", "Klein", "Groot"],
                              ["Aztec Rub", aantalAztecSmall, aantalAztecBig],
                              ["Norse Rub", aantalNorseSmall, aantalNorseBig],
                              ["Spicy Mamma Mia", aantalSMMSmall, aantalSMMBig],
                        ]
      this.sizeOrderTitle.title = 'Portie verdeling van main artikels';

      this.biryaniOrderData = [
                              ["Artikel", ""],
                              ["2 Porties", (this.orders.filter(order => order.productName.includes("Biryani") && order.productAmount.includes("2 porties"))).length],
                              ["4 Porties", (this.orders.filter(order => order.productName.includes("Biryani") && order.productAmount.includes("4 porties"))).length],
                              ["6 Porties", (this.orders.filter(order => order.productName.includes("Biryani") && order.productAmount.includes("6 porties"))).length],
                        ]
      this.biryaniOrderTitle.title = 'Portie verdeling Biryani';
    }
  }
};
</script>

<style scoped lang="scss">
  .Dash {
    padding-top: 7rem;
    width: 100%;
  }
</style>
