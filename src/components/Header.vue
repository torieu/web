<template>
    <nav>
      <ul>
        <li style="float:left"><a href="#home">Viktorie</a></li>
        <li><a href="#home" class="active">domů.</a></li>
        <li><a href="#projects">projekty.</a></li>
        <li><a href="#about">kdo jsem?</a></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'UpperMenu'
  }
  </script>
  


  
  <style scoped>
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

  