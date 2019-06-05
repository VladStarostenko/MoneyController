<template>
  <div style="height: 100%">
    <div class="personal-page_background"></div>
    <appHeader>
      <appSignUpButton slot="Button"></appSignUpButton>
    </appHeader>
    <div class="log-in_body"><!--    Добавить стили, кнопку забыл пароль и так далее. -->
      <v-layout align-center justify-center style="margin-top: 17px; margin-bottom: 17px; margin-left: 20%">
        <v-flex xs12 sm8 md5>
          <v-card class="elevation-12">
            <v-toolbar class="log-in_button" style="width: calc(100% - 20px); margin-left: 10px; margin-top: 10px">
              <v-toolbar-title class="log-in_button_title">Log In</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  prepend-icon="person"
                  v-model="email"
                  label="Email"
                  name="email"
                  type="email"
                  :rules="emailRules"
                ></v-text-field>
                <v-text-field
                  prepend-icon="lock"
                  v-model="password"
                  label="Password"
                  name="password"
                  type="password"
                  :rules="passwordRules"
                  :counter="6"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                class="log-in_button"
                style="overflow: hidden;"
                @click="onSubmit"
                :disabled="!valid">Log In</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
  <!--        <div class="mc-login_meta">-->
  <!--          <div class="mc-login_meta-left">-->
  <!--            <a href="#" class="mc-link">Forgot password?</a>-->
  <!--          </div>-->
  <!--          <div class="mc-login_meta-right">&lt;!&ndash; react-text: 24 &ndash;&gt;Don't have an account?&lt;!&ndash; /react-text &ndash;&gt;&lt;!&ndash; react-text: 25 &ndash;&gt; &lt;!&ndash; /react-text &ndash;&gt;-->
  <!--            <a class="mc-link">Sign up</a>-->
  <!--          </div>-->
  <!--        </div>-->
    </div>
    <appFooter style="position:fixed;
    bootom: 0px;"></appFooter>
  </div>
</template>

<script>
import Header from '@/components/elements/Header'
import SignUpButton from '@/components/buttons/SignUpButton'
import Footer from '@/components/elements/Footer'

export default {
  data () {
    return {
      email: '',
      password: '',
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be bigger  than 6 characters'
      ]
    }
  },
  components: {
    appHeader: Header,
    appSignUpButton: SignUpButton,
    appFooter: Footer
  },
  computer: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('logInUser', user)
          .then(() => {
            this.$router.push('/PersonalPage')
          })
          .catch(() => {})
      }
    }
  },
  created () {
    if (this.$route.query['loginError']) {
      this.$store.dispatch('setError', 'Please log in to access this page')
    }
  }
}
</script>

<style>
  .personal-page_background{
    background-image:url('../assets/background.jpg');
    background-repeat: repeat;
    position:fixed;
    width:100%;
    height:100%;
    background-size:400px;
    z-index:-1;
  }
  .log-in_body {
    padding: 95px 55px;
    min-height: calc(100% - 88px - 88px);
    margin-top: 88px;
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
  .log-in_button{
    background-color: #f2e6c9!important;
    height: 80px;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    width: 100%;
    cursor: pointer;
    border-radius: 10px;
    display: inline-block;
  }
  .log-in_button_title{
    text-transform: uppercase;
    font-size: 27px;
    color: #5f6160;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0 -50% 0 0;
    transform: translate(-50%, -50%)
  }
</style>
