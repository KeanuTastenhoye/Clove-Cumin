<template>
  <div class="home">
    <Navbar></Navbar>
    <IntroPage></IntroPage>
            <div class="row pt-4">
              <div class="col pl-5 pb-5">
                <div class="container">
                  <h4 class="text-center">Wie?</h4>
                  Wij (Thibaut, Hassan, Keanu & Phloy) zijn 4 laatstejaars studenten van UCLL en hebben samen een bedrijf opgericht. Dit doen we voor ons eindwerk ipv een stage te doen. We hopen hiermee meer bijteleren over ondernemerschap en zo onze kennis te verbreden. Niet alleen door de ervaring die we oprapen, maar ook door te leren van elkaar, want we zijn namelijk 4 studenten van 3 verschillende richtingen. Dit doen we natuurlijk niet alleen, we doen dit onder VLAJO en met advies van enkele ondernemers van de Rotary Club en de steun van Robrecht Van Goolen, Anouk Vermeyen & Serhat Erdogan.
                </div>
              </div>
              <div class="col px-5 pb-5">
                <div class="container">
                  <h4 class="text-center">Wat?</h4>
                  In de eerste instantie verkopen wij receptdozen, gevuld met al de benodigede droge ingrediënten (zoals kruiden en rijst). 
                  <br>
                  We verkopen ook onze eigen kruiden mixes, die super makkelijk te gebruiken zijn en veel meer smaak toeveogen aan al uw gerechten zonder heel veel moeite te moeten doen. Als U goed heeft opgelet, dan heeft U misschien gezien dat de 'Aztec Rub' en de 'Norse Rub' bijna exact dezelfde kruiden bevatten, maar dit wil niet zeggen dat ze gelijkaardig smaken. Door andere hoeveelheden krijg je andere nuances in smaken.
                  <br>
                  Bijkomend verkopen we ook 26 verschillende soorten kruiden. Hieronder sommige die zeer moeilijk te vinden zijn in de grootwarenhuizen.
                </div>
              </div>
            </div>
            <div class="parallax">
              <img src="/img/CloveCuminT.png" class="paraI mx-auto d-block">
            </div>
            <div class="row">
              <div class="col px-5 py-5">
                <div class="container">
                  <h4 class="text-center">Waar?</h4>
                    Elke vrijdag en zaterdag staan wij in de AD Delhaize te Hoeilaart.
                    <br>
                    Zoals je ziet kan je ons ook online vinden. Hou deze website goed in het oog, want we releasen hier regelmatig nieuwe producten.
                    <br>
                    Volg onze instagram pagina voor meer inspiratie.
                </div>
              </div>
              <div class="col px-5 py-5">
                <div class="container">
                  <h4 class="text-center">Waarom?</h4>
                    In tijden van corona merkten we dat mensen het vakantie gevoel misten. Dit willen we graag aan de mensen terug geven aan de hand van kruiden/recepten.
                    <br>
                    Ook merkten we dat het moeilijk was voor mensen om specifieke kruiden te vinden. Wij willen hiervoor de oplossing zijn.
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