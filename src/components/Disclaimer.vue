<template>
    <div class="container alert alert-danger alert-server" role="alert">
        <button type="button" class="close" data-dismiss="alert">×</button>
        <strong>DISCLAIMER</strong> Wij voorzien een gratis verzending op alles bestellingen boven de €30.
    </div>
</template>

<script>
export default {
  name: "Disclaimer",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">

</style>