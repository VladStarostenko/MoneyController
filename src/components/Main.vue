<template>
  <div>
    <appHeader>
      <appLogInButton slot="Button"></appLogInButton>
    </appHeader>
    <div class="main_page-body">
      <div class="main_page-body-container">
        <h1 class="main_page-body-title">
          Control your expenses!
        </h1>
        <div>
          <div class="main_page-body-registration-text">
            And manage your finances with MoneyController.<br>Share costs with your friends! Let’s try?
          </div>
          <appTryNowButton></appTryNowButton>
        </div>
        <div class="main_page-landing-chart"></div>
      </div>
    </div>
    <appFooterMain></appFooterMain>
  </div>
</template>

<script>
import Header from '@/components/elements/Header'
import LogInButton from '@/components/buttons/LogInButton'
import TryNow from '@/components/buttons/TryNowButton'
import FooterMain from '@/components/elements/FooterMain'

export default {
  components: {
    appHeader: Header,
    appLogInButton: LogInButton,
    appTryNowButton: TryNow,
    appFooterMain: FooterMain
  }
}
</script>

<style>
  .main_page-body{
    min-height: calc(100vh - 98px - 70px);
    margin: 88px 20% 0px 20%;
    padding: 60px 50px;
    max-width: 1280px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .main_page-body-container {
    font-size: 18px;
    width: 100%;
    font-family: 'Circe',Helvetica,sans-serif;
    text-align: center;
  }
  .main_page-body-title {
    font-size: 64px;
    line-height: 66px;
    margin: 10px auto 12px;
    font-family: 'Avenir Next',Helvetica,sans-serif;
    font-weight: 700;
    text-align: center;
    color: #404040;
  }
  .main_page-body-registration-text {
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 29px;
    text-align: center;
    color: #757575;
  }
  .main_page-landing-chart{
    margin-top: 35px;
    margin-bottom: -60px;
    position: relative;
    background-image: url('../assets/money-1673582_1280.png');
    background-size: 70% auto ;
    background-position: center;
    width: 100%;
    height: 345px;
    background-repeat: no-repeat;
  }
</style>
