<template>
  <div class="content-section">
    <div class="post_it">
            <div class="post_it">
            <img class="post-it-note" :src="green_postit" alt="a green post-it note" />
            <div class="post_it_div"><h2>matika</h2>
            </div>
        </div>
    </div>  
  </div>
  <div class="page">
    <div>
      <h2>
        the grand finale
      </h2>
      <p>
        má <a href="https://is.muni.cz/th/hw9vb/" target="blank">bakalářka</a> na vylepšení algoritmu LLL pomocí kvadratických forem
      </p>
    </div>
    
    <div style="text-align: right;">
      <h2 >
        the non-formal
      </h2>
      <p>
      organizace seznamováku <a href="https://www.math.muni.cz/seznamovaci-kurz" target="blank">MASKOT</a> <br>
      a příprava <a href="https://docs.google.com/spreadsheets/d/13WFu-HO33clo06zwiaGAA9LV1veNPXKWwPoR3RxOOdk/edit?usp=sharing" target="blank">treasure-hunt binga</a> pro prváky
      </p>
    </div>

    <div >
      <h2>
        the fun
      </h2>
      <p>
      můj workshop na <a href="https://docs.google.com/presentation/d/1AnEbUSFjsC_eHRqgoK8-UEnzfMrJpD2B/edit?usp=sharing&ouid=107811872822471771545&rtpof=true&sd=true" target="blank">Teorii informací</a> (Maskot 2022)<br>
      můj workshop Matematický diktát(Maskot 2021)<br>
      moje <a href="https://viktorie.net/FIHS2024.pdf"></a>přednáška Využití AI v matematice (<a href="https://brnoc.cz/" target="blank">Brnoc 11</a>, FIHS 2024)
      </p>
    </div>
   
    <div style="text-align: right;">
      <h2>
        the life-changing
      </h2>
      <p>
      semestr na University of Oslo<br>
      předměty na optimalizaci a <br>
      <a href="https://www.uio.no/studier/emner/matnat/ifi/IN3050/index-eng.html" target="blank">biologically-inspired computing</a>
      </p>
    </div>
   
    <div>
      <h2>
        the LaTeXed
      </h2>
      <p>
      zápisky z předmětu <a href="https://www.overleaf.com/read/hygnkhqnpnsp#507195" target="blank">Finanční matematika</a><br>
      prezentace zpracované do skript z předmětu <a href="https://www.overleaf.com/read/ckwbvfgpczmy#1e2d84" target="blank">Funkcionální analýza</a><br><br>
      <a href="https://www.overleaf.com/read/ttcfkhdchsmy#ea2879" target="blank">teorie z matematické třídy</a> (nedokončeno)
      </p>
    </div>
  </div>
</template>

<script>
import green_postit from '../assets/postit-green.svg';

export default {
    name: 'MatematikaView',
    components: {
        
    },
    data() {
    return {
          green_postit,
    };
  }
}



</script>