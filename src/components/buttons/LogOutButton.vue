<template>
  <div class="log-in_profile">
    <button class="log-in-button" style="z-index: 1; overflow: hidden;" @click="onLogOut">Log Out
      <span class="log-in_link-spacer"></span>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    onLogOut () {
      this.$store.dispatch('logOutUser')
      this.$router.push('/')
    }
  }
}
</script>

<style>
  .log-in_profile{
    position:relative;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    font-size:15px;
    color:#333;
    height:39px;
    line-height:39px;
    padding:0 14px;
    cursor:default
  }
  .log-in-button{
    background-color: #f2e6c9  ;
    border: none;
    color: #534e44;
    border-radius:11px;
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
  }
  .log-in_profile .log-in_link-spacer{
    display:block;
    background-color:#434343;
    width:100%;
    height:1px;
    position:relative;
    left:-100%;
    opacity:0;
    z-index:-1;
    bottom:1px;
    transition:all .5s ease
  }
  .log-in_profile:hover .log-in_link-spacer{
    left:0;
    opacity:1
  }
</style>
