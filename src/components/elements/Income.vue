<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" style="min-width: 40%;">
      <v-btn slot="activator" class="create_transaction primary, rgb(129, 128, 128)--text" color="rgb(242, 230, 201)">Add income!</v-btn>
      <v-slide-y-transition mode="out-in">
        <v-container class="container" justify-center align-center>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="quota" :rules="quotaRules" label="Quota" required></v-text-field>
            <v-menu v-model="menuDate" :close-on-content-click="false" :nudge-right="40" :nudge-top="40" lazy transition="scale-transition" offset-y full-width min-width="290px">
              <v-text-field slot="activator" v-model="date" label="Select date" prepend-icon="event" readonly></v-text-field>
              <v-date-picker v-model="date" @input="menuDate = false"></v-date-picker>
            </v-menu>
            <v-textarea v-model="comments" :counter="20" label="Comments"></v-textarea>
            <v-btn :disabled="!valid" @click="createTransaction" color="rgb(242, 230, 201)">Add income</v-btn>
            <v-btn @click="reset" color="rgb(205, 179, 152)">Reset Form</v-btn>
          </v-form>
          <v-divider></v-divider>
        </v-container>
      </v-slide-y-transition>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      selectedFrom: null,
      selectedTo: null,
      quota: 0,
      date: new Date().toISOString().substr(0, 10),
      menuDate: false,
      comments: '',
      positive: true,
      valid: false,
      quotaRules: [
        v => !!v || 'Quota is required',
        v => ((/^[0-9]/.test(v) || /^[0-9]+.^[0-9]/.test(v)) && (v >= 0)) || 'Quota must be digit and positive'
      ]
    }
  },
  methods: {
    reset () {
      this.$refs.form.reset()
    },
    createTransaction () {
      if (this.$refs.form.validate()) {
        const transaction = {
          selectedFrom: this.selectedFrom,
          selectedTo: this.selectedTo,
          quota: this.quota,
          date: this.date,
          comments: this.comments,
          positive: this.positive
        }
        this.$store.dispatch('createTransaction', transaction)
        this.dialog = false
      }
    }
  }
}
</script>

<style>
  .create_transaction{
    height: 66px;
    width: 120%;
    font-size: 22px;
    border-radius: 5px;
    box-shadow:2px 2px 9px rgba(0,0,0,.13);
    position: relative;
    font-family: 'Circe',Helvetica,sans-serif;
    font-weight: 350;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
  }
  .container{
    background-color: white;
    padding: 25px 25px 0px 25px;
    border: 3px solid rgb(242, 230, 201);
    border-radius: 5px;
  }
</style>
