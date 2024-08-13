<template>
  <div class="about">
    <div class="container">
            <img style= "width:20%" :src="green_postit" alt="Example SVG" />
            <div class="centered">
              <h2>matika</h2>
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
      můj workshop na <a href="https://docs.google.com/presentation/d/1AnEbUSFjsC_eHRqgoK8-UEnzfMrJpD2B/edit?usp=sharing&ouid=107811872822471771545&rtpof=true&sd=true" target="blank">Teorii informací</a> (Maskot 2022)<br>
      můj workshop Matematický diktát(Maskot 2021)<br>
      moje přednáška Využití AI v matematice (<a href="https://brnoc.cz/" target="blank">Brnoc 11</a>, FIHS 2024)
    </div>
   
    <div style="text-align: right;">
      <h2>
        the life-changing
      </h2>
      semestr na University of Oslo<br>
      předměty na optimalizaci a <br>
      <a href="https://www.uio.no/studier/emner/matnat/ifi/IN3050/index-eng.html" target="blank">biologically-inspired computing</a>
    </div>
   
    <div>
      <h2>
        the LaTeXed
      </h2>
      zápisky z předmětu <a href="https://www.overleaf.com/read/hygnkhqnpnsp#507195" target="blank">Finanční matematika</a><br>
      prezentace zpracované do skript z předmětu <a href="https://www.overleaf.com/read/ckwbvfgpczmy#1e2d84" target="blank">Funkcionální analýza</a><br><br>
      <a href="https://www.overleaf.com/read/ttcfkhdchsmy#ea2879" target="blank">teorie z matematické třídy</a> (nedokončeno)
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