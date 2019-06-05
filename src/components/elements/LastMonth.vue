<template>
  <div class="last-month">
    <div class="last-month-slice">
      <div class="last-month_header ">
        <div class="last-month_title">Last Month:</div>
      </div>
      <div class="last-month-body ">
        <div class="last-month_title transaction_type_positive">  <!-- Титул категории-->
          <div class="last-month_name">Income</div> <!-- Название титула -->
          <div class="last-transaction_amount">{{totalIncome}}</div>
        </div>
        <div class="last-month_title transaction_type_negative">  <!-- Титул категории-->
          <div class="last-month_name">Expenses</div> <!-- Название титула -->
          <div class="last-transaction_amount">{{totalExpenses}}</div>
        </div>
        <div v-bind:class="[totalBalance > 0 ? 'transaction_type_positive' :  'transaction_type_negative']" class="last-month_title">  <!-- Титул категории-->
          <div class="last-month_name">Balance</div> <!-- Название титула -->
          <div class="last-transaction_amount">{{Math.abs(totalBalance)}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    transactions () {
      return this.$store.getters.transactions
    },
    totalIncome () {
      let val = 0
      for (let i = 0; i < this.transactions.length; i++) {
        let date = new Date()
        date.setMonth(date.getMonth() - 1)
        let date1 = new Date(this.transactions[i].date)
        if (this.transactions[i].positive && (date <= date1)) {
          val += parseFloat(this.transactions[i].quota)
        }
      }
      return val
    },
    totalExpenses () {
      let val = 0
      for (let i = 0; i < this.transactions.length; i++) {
        let date = new Date()
        date.setMonth(date.getMonth() - 1)
        let date1 = new Date(this.transactions[i].date)
        if (!this.transactions[i].positive && (date <= date1)) {
          val += parseFloat(this.transactions[i].quota)
        }
      }
      return val
    },
    totalBalance () {
      let val = 0
      for (let i = 0; i < this.transactions.length; i++) {
        let date = new Date()
        date.setMonth(date.getMonth() - 1)
        let date1 = new Date(this.transactions[i].date)
        if (date <= date1) {
          if (this.transactions[i].positive) {
            val += parseFloat(this.transactions[i].quota)
          } else {
            val -= parseFloat(this.transactions[i].quota)
          }
        }
      }
      return val
    }
  }
}
</script>

<style>
  .last-month{
    background-color: #fff;
    border-radius: 4px;
  }
  .last-month-slice{
    background-color: rgba(242, 230, 201, .7);
    border-radius: 4px;
    margin-bottom: 20px;
    padding-bottom: 1px;
  }
  .last-month_header{
    padding: 20px 20px 5px 20px;
  }
  .last-month_header, .last-month-body{
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: start;
    align-items: flex-start;
    max-height: 140px;
    font-weight: 400;
    margin-bottom: 12px;
    font-size: 21px;
    color: #696868;
    text-align: left;
  }
  .last-month-body{
    padding: 10px 10px 10px 10px;
  }
  .last-month-body {
    background-color: #fff;
    margin: 0px 20px 20px 20px;
    border-radius: 4px;
    font-size: 16px;
  }
</style>
