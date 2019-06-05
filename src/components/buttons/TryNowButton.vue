<template>
  <div class="try-now_container">
    <button class="try-now_button" @click="onSubmit">
      Try now!
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit () {
      this.$router.push('/SignUp')
    }
  }
}
</script>

<style>
  .try-now_container {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .try-now_button {
    width: 175px;
    height: 60px;
    font-size: 22px;
    border-radius: 5px;
    position: relative;
    font-family: 'Circe',Helvetica,sans-serif;
    font-weight: 550;
    background: #fc0;
    color: #404040;
    text-align: center;
    cursor: pointer;
  }
</style>
