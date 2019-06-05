<template>
  <div>
    <div class="personal-page_background"></div>
    <appHeader>
      <appLogInButton slot="Button"></appLogInButton>
    </appHeader>
    <div class="sign-up_body"><!--    Добавить стили, кнопку забыл пароль и так далее. -->
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md5>
          <v-card class="elevation-12">
            <v-toolbar class="sign-up_button" style="width: calc(100% - 20px); margin-left: 10px; margin-top: 10px">
              <v-toolbar-title class="sign-up_button_title">Registration</v-toolbar-title>
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
                <v-text-field
                  prepend-icon="repeat"
                  v-model="confirmPassword"
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  :rules="confirmPasswordRules"
                  :counter="6"
                ></v-text-field>
                <v-checkbox
                  v-model="checkbox"
                  :rules="[v => !!v || 'You must agree to continue!']"
                  label="Do you agree with rules?"
                  required
                ></v-checkbox>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                class="sign-up_button"
                style="overflow: hidden;"
                @click="onSubmit"
                :loading="loading"
                :disabled="!valid || loading">Create account</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
    <appFooter></appFooter>
  </div>
</template>

<script>
import Header from '@/components/elements/Header'
import LogInButton from '@/components/buttons/LogInButton'
import Footer from '@/components/elements/Footer'

export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      computed: {
        loading () {
          return this.$store.getters.loading
        }
      },
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be bigger  than 6 characters'
      ],
      confirmPasswordRules: [
        v => !!v || 'Password is required',
        v => v === this.password || 'Password should match'
      ]
    }
  },
  components: {
    appHeader: Header,
    appLogInButton: LogInButton,
    appFooter: Footer
  },
  computed: {
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
        this.$store.dispatch('registerUser', user)
          .then(() => {
            this.$router.push('/')
          })
          .catch(() => {})
      }
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
  .sign-up_body {
    padding: 44px 55px;
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
  .sign-up_button{
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
  .sign-up_button_title{
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
