<template>
  <footer class="main_footer">
    <div class="main_footer-container">
      <div class="main_footer-group">
        <div class="main_footer-group-title">
          Money Controller
        </div>
        <ul class="main_footer-group-menu">
          <li class="main_footer-item">
            <a @click="logIn" class="main_footer-link">
              Log in
            </a>
          </li>
          <li class="main_footer-item">
            <a @click="signUp" class="main_footer-link">
              Sign up
            </a>
          </li>
          <li class="main_footer-item">
            <a class="main_footer-link" href="#">
              Privacy policy
            </a>
          </li>
        </ul>
      </div>
      <div class="main_footer-group">
        <div class="main_footer-group-title">
          <a href="#" class="main_footer-title-link">
            Information
          </a>
        </div>
        <ul class="main_footer-group-menu">
          <li class="main_footer-item">
            <a class="main_footer-link" href="#">
              Help Center
            </a>
          </li>
          <li class="main_footer-item">
            <a class="main_footer-link" href="#">
              Facebook
            </a>
          </li>
          <li class="main_footer-item">
            <a class="main_footer-link" href="#">
              Telegram
            </a>
          </li>
        </ul>
      </div>
      <div class="main_footer-group">
        <div class="main_footer-group-title">
          <a href="#" class="main_footer-title-link">
            About us
          </a>
        </div>
        <ul class="main_footer-group-menu">
          <li class="main_footer-item">
            <a class="main_footer-link" href="#">
              Our Team
            </a>
          </li>
          <li class="main_footer-item">
            <a class="main_footer-link" href="mailto:vlad.starostenko.0501@gmail.com">
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    logIn () {
      this.$router.push('/LogIn')
    },
    signUp () {
      this.$router.push('/SignUp')
    }
  }
}
</script>

<style>
  .main_footer {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 20px;
    width: 100%;
    min-height: 100px;
    font-family: 'Circe',Helvetica,sans-serif;
    background: #f0f0f0;
  }
  .main_footer-container {
    width: 100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }
  .main_footer-group {
    padding: 26px 15px 26px 30px;
  }
  .main_footer-group-title {
    height: 29px;
    margin-bottom: 15px;
    line-height: 29px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
    font-size: 22px;
    font-weight: 500;
    color: #404040;
  }
  .main_footer-title-link {
    color: #404040;
    text-decoration: none;
  }
  a{
    cursor: pointer;
  }
  .main_footer-link {
    color: #757575;
    line-height: 26px;
    font-size: 16px;
  }
  .main_footer-group-menu {
    padding: 0;
    border-top: none;
  }
  ul{
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
</style>
