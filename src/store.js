import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let cart = window.localStorage.getItem('cart');

export default new Vuex.Store({
    state: {
      //cart: cart ? JSON.parse(cart) : [],
      cart: JSON.parse(cart),
    },
    getters: {
      totalPrice: state => {
        let total = 0;
        state.cart.filter((item) => {
            total += (item.spicePrice * item.spiceQuantity);
        });
        return total.toFixed(2);
      }
    },
    mutations:{
      addToCart(state, item){
          if (window.localStorage.getItem('cart') == null) {
            var varr = '[]';
            var obj = JSON.parse(varr);
            obj.push(item);
            window.localStorage.setItem('cart', JSON.stringify(obj));
          } else {
              var arr = JSON.parse(window.localStorage.getItem('cart'));
              var found = false;
              var i;
              for (i = 0; i < arr.length; i++) {
                if (arr[i].spiceAmount == item.spiceAmount && arr[i].spiceName == item.spiceName && arr[i].spiceCrush == item.spiceCrush) {
                  arr[i].spiceQuantity++;
                  found = true;
                  break;
                } 
              }

              if (arr === [] || !found) {
                arr.push(item);
              }
              window.localStorage.setItem('cart', JSON.stringify(arr));
          }
         /*
         var found = false;
         var i;
         for (i = 0; i < state.cart.length; i++) {
            if (state.cart[i].spiceAmount == item.spiceAmount && state.cart[i].spiceName == item.spiceName) {
              console.log('i: ' + state.cart[i].spiceName + ' ' + state.cart[i].spiceAmount);
              state.cart[i].spiceQuantity++;
              found = true;
              break;
            }
         }
         if (state.cart === [] || !found) {
           state.cart.push(item);
         }
         this.commit('saveData');
         */
      },
      saveData(state){
        window.localStorage.setItem('cart', JSON.stringify(state.cart));
      },
      removeFromCart(state, item){
          let index = state.cart.indexOf(item);
          state.cart.splice(index,1);
        this.commit('saveData');
      },
      emptyCart(state) {
        state.cart.splice(0,1);
        this.commit('saveData');
      },
      changeQuantity1(state, item) {
        let found = state.cart.find(spice => spice.spiceName == item.spiceName && spice.spiceAmount == item.spiceAmount);

        if(found){
          found.spiceQuantity=1;
        } else{
          state.cart.push(item);
        }
        this.commit('saveData');
      },
      changeQuantity2(state, item) {
        let found = state.cart.find(spice => spice.spiceName == item.spiceName && spice.spiceAmount == item.spiceAmount);

        if(found){
          found.spiceQuantity=2;
        } else{
          state.cart.push(item);
        }
        this.commit('saveData');
      },
      changeQuantity3(state, item) {
        let found = state.cart.find(spice => spice.spiceName == item.spiceName && spice.spiceAmount == item.spiceAmount);
        if(found){
          found.spiceQuantity=3;
        } else{
          state.cart.push(item);
        }
        this.commit('saveData');
      },
      changeQuantity4(state, item) {
        let found = state.cart.find(spice => spice.spiceName == item.spiceName && spice.spiceAmount == item.spiceAmount);

        if(found){
          found.spiceQuantity=4;
        } else{
          state.cart.push(item);
        }
        this.commit('saveData');
      },
      changeQuantity5(state, item) {
        let found = state.cart.find(spice => spice.spiceName == item.spiceName && spice.spiceAmount == item.spiceAmount);

        if(found){
          found.spiceQuantity=5;
        } else{
          state.cart.push(item);
        }
        this.commit('saveData');
      },
      changeQuantity6(state, item) {
        let found = state.cart.find(spice => spice.spiceName == item.spiceName && spice.spiceAmount == item.spiceAmount);

        if(found){
          found.spiceQuantity=6;
        } else{
          state.cart.push(item);
        }
        this.commit('saveData');
      },
      changeQuantity7(state, item) {
        let found = state.cart.find(spice => spice.spiceName == item.spiceName && spice.spiceAmount == item.spiceAmount);

        if(found){
          found.spiceQuantity=7;
        } else{
          state.cart.push(item);
        }
        this.commit('saveData');
      },
      changeQuantity8(state, item) {
        let found = state.cart.find(spice => spice.spiceName == item.spiceName && spice.spiceAmount == item.spiceAmount);

        if(found){
          found.spiceQuantity=8;
        } else{
          state.cart.push(item);
        }
        this.commit('saveData');
      },
      changeQuantity9(state, item) {
        let found = state.cart.find(spice => spice.spiceName == item.spiceName && spice.spiceAmount == item.spiceAmount);

        if(found){
          found.spiceQuantity=9;
        } else{
          state.cart.push(item);
        }
        this.commit('saveData');
      },
      changeQuantity10(state, item) {
        let found = state.cart.find(spice => spice.spiceName == item.spiceName && spice.spiceAmount == item.spiceAmount);

        if(found){
          found.spiceQuantity=10;
        } else{
          state.cart.push(item);
        }
        console.log('amount: ' + found.spiceQuantity);
        this.commit('saveData');
      },
    }
  })