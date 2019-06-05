<template>
  <div>
    <appLastMonth></appLastMonth>
    <div v-for="(date, i) in dates.slice().reverse()" :key="i">
      <div class="transaction_date">{{date}}</div>
      <v-card v-for="(transaction, i) in transactions.slice().reverse()" :key="i" class="day-slice_body">
        <template v-if="transaction.date === date">
          <div v-if="transaction.positive === false" class="transaction transaction_type_negative">
            <div class="transaction_body">
              <div class="transaction_categories">
                <div class="transaction_source">{{ transaction.selectedFrom }}</div>
                <div class="transaction_destination">{{ transaction.selectedTo }}</div>
              </div>
              <div class="transaction_data">
                <div class="last-transaction_amount">{{ transaction.quota }}</div>
                <div class="transaction_comment ">{{ transaction.comments }}</div>
              </div>
            </div>
            <div class="transaction_edit">
              <v-btn fab icon small class="transaction_delete" @click="deleteTransaction(transaction)"><v-icon>delete</v-icon></v-btn>
            </div>
          </div>
          <div v-else class="transaction transaction_type_positive">
            <div class="transaction_positive_body">
              <div class="transaction_amount_positive">{{ transaction.quota }}</div>
              <div class="transaction_comment ">{{ transaction.comments }}</div>
            </div>
            <div class="transaction_edit">
              <v-btn fab icon small class="transaction_delete"><v-icon>delete</v-icon></v-btn>
            </div>
          </div>
        </template>
      </v-card>
    </div>
  </div>
</template>

<script>
import LastMonth from '@/components/elements/LastMonth'

export default {
  data () {
    return {
      allTransactions: null,
      allDates: null
    }
  },
  methods: {
    deleteTransaction (transaction) {
      this.$store.dispatch('deleteTransaction', transaction.id)
    },
    allDatesMethod () {
      this.allDates = this.dates
      console.log(this.allDates)
    },
    allTransactionsMethod () {
      this.allTransactions = this.transactions
    }
  },
  computed: {
    transactions () {
      return this.$store.getters.transactions
    },
    dates () {
      let dates = []
      for (let i = 0; i < this.transactions.length; i++) {
        let date = this.transactions[i].date
        let count = 0
        for (let j = 0; j < dates.length; j++) {
          if (dates[j] === date) {
            count++
          }
        }
        if (count === 0) {
          dates.push(date)
        }
      }
      return dates
    }
  },
  components: {
    appLastMonth: LastMonth
  }
}
</script>

<style>
  .day-slice_body {
    margin-bottom: 2px;
    box-shadow: 2px 2px 9px rgba(0,0,0,.13);
    position: relative;
  }
  .transaction {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    position: relative;
    height: 80px;
    border-radius: 4px;
    background-color: #fff;
  }
  .transaction_type_negative .last-transaction_amount:before {
    content: '− ';
  }
  .transaction_type_negative .last-transaction_amount {
    color: #e53935;
  }
  .transaction_type_positive .last-transaction_amount:before, .transaction_type_positive .transaction_amount_positive:before {
    content: '+ ';
  }
  .transaction_type_positive .last-transaction_amount, .transaction_type_positive .transaction_amount_positive {
    color: #07C81F;
  }
  .transaction_positive_body {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    font-size: 21px;
    padding: 6% 40%;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-align: end;
    align-items: flex-end;
  }
  .last-transaction_amount {
    font-size: 17px;
    white-space: nowrap;
    text-align: right;
    color: #64635f;
    cursor: pointer;
  }
  .transaction_amount_positive {
    font-size: 20px;
    white-space: nowrap;
    text-align: center;
    color: #64635f;
    cursor: pointer;
  }
  .transaction_body {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
  }
  .transaction_categories {
    max-width: 48%;
    margin-right: 48px;
    padding: 20px 0 20px 50px;
  }
  .transaction_data {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-align: end;
    align-items: flex-end;
    max-width: 58%;
    padding: 20px 20px 20px 0;
  }
  .transaction_source {
    margin-top: -5px;
    overflow: hidden;
    font-size: 17px;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
  }
  .transaction_destination {
    margin-top: 7px;
    overflow: hidden;
    font-size: 19px;
    font-weight: 550;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
  }
  .transaction_comment {
    margin-top: 4px;
    font-size: 12px;
    font-weight: 300;
    text-align: right;
    white-space: pre-wrap;
    cursor: pointer;
  }
  .transaction_edit {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    position: absolute;
    width: 50px;
    height: 92px;
  }
  .transaction_delete {
    cursor: pointer;
  }
  .transaction_date {
    background-color: #f2e6c9;
    margin-bottom: 22px;
    margin-top: 22px;
    font-size: 22px;
    color: #696868;
    padding: 15px;
    text-align: center;
    font-weight: 500;
    border-radius: 5px;
  }
</style>
