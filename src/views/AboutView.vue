<template>
  <div class="content-section">
    <div class="post_it">
      <img class="post-it-note" :src="yellow_postit" alt="yellow_postit" />
      <div class="post_it_div">
        <h2>kdo jsem?</h2>
      </div>
    </div>
    <div class="subtitle">
      Baví mě zkoušet nové věci a vzdělávat mladé lidi.
    </div>
    <div>
      <img style="float: right; margin-left: 0px; width: 300px;" :src="vika_postit" alt="photo_of_me" />

      <p class="w-60">
        Bakalářské studium jsem věnovala matematice na Přírodovědecké fakultě Masarykovy univerzity. Více než rigorózní
        věda, mě ale baví práce s lidmi a kreativita. Na magistra jsem proto zamířila na KISK.
        <br>
        Baví mě tvořit hodnoty i výrobky, proto jsem pracovala jako lektorka v <a
          href="https://www.fablabuniversity.cz/" target="blank">pojízdné dílně</a> <a href="https://www.fablabbrno.cz/"
          target="blank">FabLabu Brno</a>, kde se žáci základních škol učí ovládat digitální řemeslo.
        Přesunula jsem se ke vzdělávání dospělých a ukazuju učitelům, jak zapojit umělou inteligenci ve výuce.
        <br>
        Ve volném čase se věnuji brněnské
        <a href="https://knihovnaveci.mladiinfo.cz/" target="blank">knihovně věcí</a>, projektu sdíleného inventáře, kam
        si každý může přijít půjčit obvyklé i neobvyklé předměty.
        <br>
        Ráda se nechávám unášet zvědavostí, otvírám mezi lidmi cestuji po krajinách cizích kultur,
      </p>

    </div>




    <div>
      <a href="https://calendly.com/viktorie-blahova/" target="blank"><h2 class="centered-text">setkejme se 🗓️</h2></a>
      
    </div>
  </div>


</template>


<script>
import yellow_postit from '@/assets/postit-yellow.svg';
import vika_postit from '@/assets/postit-vika.png';

export default {
  data() {
    return {
      yellow_postit, vika_postit
    };
  },
};
</script>
