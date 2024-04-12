<template>
  <nav>
    <ul>

      <li><RouterLink  style="float:left" to="/">Viktorie.</RouterLink></li>
      <li><RouterLink to="/">domů.</RouterLink></li>
      <li><RouterLink to="/projects">projekty.</RouterLink></li>
      <li><RouterLink to="/about">kdo jsem?</RouterLink></li>
    </ul>
  </nav>
  <router-view/>
</template>



<script>


</script>
<style>
#app {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style>
nav {
 text-align: right;
 font-family: 'Helvetica', sans-serif;
 margin-bottom: 20px;
}

nav ul {
 list-style-type: none;
 margin: 0;
 padding: 0;
}

nav ul li {
 display: inline;
 margin-left: 20px;
}

nav ul li:first-child {
 margin-left: 0; 
}
nav ul li a {
 font-weight: bold;
 color: black;
 text-decoration: none;
 padding: 5px 10px;
}
nav ul li a:hover {
 text-decoration: underline;
}

</style>