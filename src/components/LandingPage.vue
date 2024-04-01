<template>
    <div class="introduction">
        <p >
            Hola,
            jmenuji se Viktorie a jsem

        </p>
        <h1>
            <TypeWritereffect></TypeWritereffect>
        </h1>
    </div>
</template>

<script>
import TypeWritereffect from './TypeWritereffect.vue';

export default {
    name: 'LandingPage',
    components: {
        TypeWritereffect
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.introduction {
    text-align: left;
    padding: 80px;
    font-size: 2rem;

}

body {
    font-family: 'Helvetica', sans-serif;
}

h1 {
    font-size: 5vw;
    /* Adjusts size based on viewport width */
    min-font-size: 80px;
    /* Ensures font size does not fall below 80px */
}

h2 {
    font-size: 2.5vw;
    min-font-size: 40px;
}

h3 {
    font-size: 2vw;
    min-font-size: 32px;
}

/* Ensure font sizes don't become too large on wider screens */
@media (min-width: 1600px) {
    h1 {
        font-size: 80px;
    }

    h2 {
        font-size: 40px;
    }

    h3 {
        font-size: 32px;
    }
}


h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}
</style>