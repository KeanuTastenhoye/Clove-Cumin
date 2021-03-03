<template>
  <div class="orderConfirmation">
    <Navbar></Navbar>
      <div class="container">
        <div class="text-center">
          <a><i class="fas fa-check fa-7x"></i></a>
          <h3>Order succesfully made</h3>
        </div>
        <div class="row pt-3">
          <div class="col">
            <p> You will find an overview of you order in your inbox.
                Also check you spam please.
                <br>
                We would like to thank you for your trust in our company.
                <br>
                As of this moment we are busy handling your order with the best care we can possibly offer.
            </p>
          </div>
          <div class="col">
            <p>
                <strong>Contact us:</strong>
                <br>
                <u>Email:</u> letscook@clovencumin.com
                <br>
                <u>Phone:</u> 04 75 86 25 80
            </p>
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

export default {
  name: "orderConfirmation",
};
</script>

<style scoped lang="scss">
.orderConfirmation {
    background-color: bisque;
    padding-top: 7rem;
    width: 100%;
}
i {
    color: green;
}
</style>