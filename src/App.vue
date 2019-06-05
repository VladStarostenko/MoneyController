<template>
  <div id="app" style="height: 100%">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html, body{
    font-family:'Roboto',sans-serif;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    font-weight:400;
    color:#64635f;
    margin: 0 0;
    height: 100%
  }
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    background-color: transparent;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
  }
  div{
    display: block;
  }
</style>
