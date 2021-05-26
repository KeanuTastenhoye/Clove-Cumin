<template>
  <div class="home">
    <Navbar></Navbar>
    <IntroPage></IntroPage>
            <div class="row pt-4">
              <div class="col pl-5 pb-5">
                <div class="container">
                  <h4 class="text-center">Wie?</h4>
                  Wij (Thibaut, Hassan, Keanu & Phloy) zijn 4 laatstejaars studenten van UCLL en hebben samen een bedrijf opgericht. We doen dit als eindwerk i.p.v een stage. We hopen hiermee meer bij te leren over ondernemerschap en zo onze kennis te verbreden. Niet alleen door de ervaring die we op doen, maar ook door te leren van elkaar, want we zijn namelijk 4 studenten van 3 verschillende richtingen. We doen dit natuurlijk niet alleen, maar onder VLAJO en met advies van enkele ondernemers van de Rotary Club en de steun van Robrecht Van Goolen, Anouk Vermeyen & Serhat Erdogan.
                </div>
              </div>
              <div class="col px-5 pb-5">
                <div class="container">
                  <h4 class="text-center">Wat?</h4>
                  In eerste instantie verkopen wij receptdozen, gevuld met al de nodige droge ingrediënten (zoals kruiden en rijst). 
                  <br>
                  We verkopen ook onze eigen kruidenmixes, die super makkelijk te gebruiken zijn en veel meer smaak toevoegen aan al uw gerechten zonder heel veel moeite te moeten doen. 
                  <br>
                  Bijkomend verkopen we ook 26 verschillende soorten kruiden. Hieronder sommige die zeer moeilijk te vinden zijn in de grootwarenhuizen. Bij sommige van deze kruiden heeft U de optie om ze in de hele vorm of in de poeder vorm te bestellen.
                  We geven deze optie omdat de kruiden hun natuurlijke smaken beter behouden als ze net voor gebruik vermalen worden. 
                </div>
              </div>
            </div>
            <div class="parallax">
              <img src="/img/CloveCuminT.png" class="paraI mx-auto d-block">
            </div>
            <div class="row pt-4">
              <div class="col pl-5 pb-5">
                <div class="container">
                  <h4 class="text-center">Waar?</h4>
                  Elke vrijdag en zaterdag staan wij in de AD Delhaize te Hoeilaart.
                  Zoals je ziet kan je ons ook online vinden. Hou deze website goed in het oog, want we releasen hier regelmatig nieuwe producten.
                  Volg onze instagram pagina voor meer inspiratie.
                </div>
              </div>
              <div class="col px-5 pb-5">
                <div class="container">
                  <h4 class="text-center">Waarom?</h4>
                  In tijden van corona merkten we op dat mensen het vakantie gevoel misten. Dit willen we graag aan de mensen teruggeven aan de hand van kruiden en recepten.
                  <br>
                  We merkten ook op dat het moeilijk was voor mensen om specifieke kruiden te vinden. Wij willen hiervoor de oplossing zijn.
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
import IntroPage from "@/components/IntroPage.vue";

export default {
  name: "Home",
  components: {
    IntroPage
  }
};
</script>

<style scoped lang="scss">
  @media (min-width: 992px) { 
    .parallax {
      background-image: url("/img/Banner-Team.jpg");
      min-height: 300px;
      width: 100%;
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

.paraI {
  width: 300px;
}
</style>