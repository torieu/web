<template>
  <div class="about">
    <div class="container">
        <img style= "width:20%" :src="yellow_postit" alt="yellow_postit" />
        <div class="centered"><h2>kdo jsem?</h2>
        </div>
    </div>
    <div class="subtitle">
      Baví mě zkoušet nové věci, <br> vzdělávat mladé lidi 
      a šířit good vibes. 
    </div>
    <p class= "w-60">
      Bakalářské studium jsem věnovala matematice na Přírodovědecké fakultě Masarkyovy univerzity. Při výběru magisterského oboru jsem si ale uvědomila, že potřebuju změnu. 
      Více než věda, mě baví práce s lidmi a kreativita. 
      <br>
      Baví mě tvořit hodnoty i vtipné předměty, proto pracuju s <a href="https://www.fablabuniversity.cz/">pojízdné dílně</a> <a href="https://www.fablabbrno.cz/">FabLabu Brno</a>, kde se žáci základních škol učí ovládat digitální řemeslo.  
      <br>
      Ve volném čase se věnuji brněnské
      <a href="https://knihovnaveci.mladiinfo.cz/">knihovně věcí</a>, projektu sdíleného inventáře, kam si každý může přijít půjčit obvyklé i neobvyklé předměty.
    </p>




    <h2 class="centered-text">napiš mi ✏️</h2>
    
  </div>


</template>
 

 <script>
import yellow_postit from '@/assets/postit-yellow.svg';

export default {
  data() {
    return {
      yellow_postit,
    };
  },
};
</script>
