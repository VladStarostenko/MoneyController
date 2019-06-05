<template>
  <header class="header">  <!-- Весь хедер -->
      <div class="header_container">    <!-- Блок информативный в хэдере -->
        <div class="header_left">                        <!-- Левая часть хедера(логотип, название) -->
          <a @click="onSubmit" class="header_logo"></a>      <!-- Сылка на логотип -->
        </div>
        <div class="header_right">                    <!-- Правая часть хедера (Логованье) -->
          <slot name="Button"></slot>
        </div>
      </div>
  </header>
</template>

<script>
export default {
  methods: {
    onSubmit () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
  .header{
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    height:88px;
    background-color:#fff;
    box-shadow:0 2px 9px rgba(0,0,0,.13);
    z-index:14;
    display: block;
  }
  .header_container {
    height: 100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    max-width: 1280px;
    padding: 0 45px;
  }
  .header_left{
    height:100%;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    margin-left: 5%;
  }
  .header_right{
    position: fixed;
    right: 45px;
    height:100%;
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items:center;
  }
  .header_logo{
    background-image:url('../../assets/logo.png');
    background-size: 165px auto;
    background-position: center top -5px;
    width:120px;
    height:60px;
    border-radius:11px;
    box-shadow:2px 2px 9px rgba(0,0,0,.13);
    margin-right:18px
  }
</style>
