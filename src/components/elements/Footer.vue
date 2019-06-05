<template>
  <footer class="footer">
    <div class="footer-container">
      <a class="footer-contact" href="mailto:vlad.starostenko.0501@gmail.com">Contact with me!</a>
      <p>Developed by Uladzislau Starastsenka</p>
    </div>
  </footer>
</template>

<script>
// export default {
//
// }
</script>

<style>
  .footer{
    width: 100%;
    height:88px;
    background-color:#fff;
    box-shadow:0 2px 9px rgba(0,0,0,.13);
    z-index:14;
    display: block;
  }
  .footer-container{
    height:100%;
    display:-ms-flexbox;
    display:flex;
    -ms-flex-direction:row;
    flex-direction:row;
    -ms-flex-pack:justify;
    justify-content:space-between;
    -ms-flex-align:center;
    align-items:center;
    max-width:1280px;
    padding: 0 35px;
  }
  .footer-contact{
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
  p{
    right: 10px;
  }
</style>
