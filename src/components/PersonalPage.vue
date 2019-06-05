<template>
  <div>
    <div class="personal-page_background"></div> <!-- Бекграунд всей страницы -->
    <appHeader>
      <appLogOutButton slot="Button"></appLogOutButton>
    </appHeader>
    <div  class="personal-page_container"> <!-- Все тело сайта-->
      <div class="personal-page_dashboard">  <!-- Блок только с информацией в теле -->
        <div class="personal-page_dashboard_top"><appNewTransaction></appNewTransaction><appIncome></appIncome></div>
        <div class="personal-page_dashboard_body">
          <div class="personal-page_dashboard_column" style="min-width: 45%; margin-right: 5%; margin-left: 5%;" > <!-- Левая коллона -->
            <appCategoryBlock>
              <template slot="categoryName">Accounts</template>
              <appCategories slot="category"><template slot="nameOfCategory" title="Card">Card</template><div slot="categoryIcon" class="personal-page_category_icon icon_card"></div><template slot="categoryBalance">{{totalCard}}</template></appCategories>
              <appCategories slot="category"><template slot="nameOfCategory" title="Cash">Cash</template><div slot="categoryIcon" class="personal-page_category_icon icon_cash"></div><template slot="categoryBalance">{{totalCash}}</template></appCategories>
            </appCategoryBlock>
            <appCategoryBlock>
              <template slot="categoryName">Expenses</template>
              <appCategories slot="category"><template slot="nameOfCategory" title="Food">Food</template><div slot="categoryIcon" class="personal-page_category_icon icon_food"></div><template slot="categoryBalance">{{totalFood}}</template></appCategories>
              <appCategories slot="category"><template slot="nameOfCategory" title="Transport">Transport</template><div slot="categoryIcon" class="personal-page_category_icon icon_transport"></div><template slot="categoryBalance">{{totalTransport}}</template></appCategories>
              <appCategories slot="category"><template slot="nameOfCategory" title="Cafes">Cafes</template><div slot="categoryIcon" class="personal-page_category_icon icon_cafes"></div><template slot="categoryBalance">{{totalCafes}}</template></appCategories>
              <appCategories slot="category"><template slot="nameOfCategory" title="Shopping">Shopping</template><div slot="categoryIcon" class="personal-page_category_icon icon_shopping"></div><template slot="categoryBalance">{{totalShopping}}</template></appCategories>
              <appCategories slot="category"><template slot="nameOfCategory" title="House">House</template><div slot="categoryIcon" class="personal-page_category_icon icon_house"></div><template slot="categoryBalance">{{totalHouse}}</template></appCategories>
              <appCategories slot="category"><template slot="nameOfCategory" title="Entertainments">Entertainments</template><div slot="categoryIcon" class="personal-page_category_icon icon_entertainments"></div><template slot="categoryBalance">{{totalEntertainments}}</template></appCategories>
              <appCategories slot="category"><template slot="nameOfCategory" title="Amenities">Amenities</template><div slot="categoryIcon" class="personal-page_category_icon icon_amenities"></div><template slot="categoryBalance">{{totalAmenities}}</template></appCategories>
            </appCategoryBlock>
          </div>
          <div class="personal-page_dashboard_column">
              <appTransactionList></appTransactionList>
          </div>
        </div>
      </div>
    </div>
    <appFooter class="footerPers"></appFooter>
  </div>
</template>

<script>
import Header from '@/components/elements/Header'
import Footer from '@/components/elements/Footer'
import LogOutButton from '@/components/buttons/LogOutButton'
import Categories from '@/components/elements/Categories'
import CategoryBlock from '@/components/elements/CategoryBlock'
import NewTransaction from '@/components/elements/NewTransaction'
import TransactionList from '@/components/elements/TransactionList'
import Income from '@/components/elements/Income'

export default {
  components: {
    appHeader: Header,
    appLogOutButton: LogOutButton,
    appFooter: Footer,
    appCategories: Categories,
    appCategoryBlock: CategoryBlock,
    appNewTransaction: NewTransaction,
    appTransactionList: TransactionList,
    appIncome: Income
  },
  computed: {
    transactions () {
      return this.$store.getters.transactions
    },
    totalCard () {
      let val = 0
      for (let i = 0; i < this.transactions.length; i++) {
        if (this.transactions[i].selectedFrom === 'Card') {
          val += parseFloat(this.transactions[i].quota)
        }
      }
      return val
    },
    totalCash () {
      let val = 0
      for (let i = 0; i < this.transactions.length; i++) {
        if (this.transactions[i].selectedFrom === 'Cash') {
          val += parseFloat(this.transactions[i].quota)
        }
      }
      return val
    },
    totalFood () {
      let val = 0
      for (let i = 0; i < this.transactions.length; i++) {
        if (this.transactions[i].selectedTo === 'Food') {
          val += parseFloat(this.transactions[i].quota)
        }
      }
      return val
    },
    totalTransport () {
      let val = 0
      for (let i = 0; i < this.transactions.length; i++) {
        if (this.transactions[i].selectedTo === 'Transport') {
          val += parseFloat(this.transactions[i].quota)
        }
      }
      return val
    },
    totalCafes () {
      let val = 0
      for (let i = 0; i < this.transactions.length; i++) {
        if (this.transactions[i].selectedTo === 'Cafes') {
          val += parseFloat(this.transactions[i].quota)
        }
      }
      return val
    },
    totalShopping () {
      let val = 0
      for (let i = 0; i < this.transactions.length; i++) {
        if (this.transactions[i].selectedTo === 'Shopping') {
          val += parseFloat(this.transactions[i].quota)
        }
      }
      return val
    },
    totalHouse () {
      let val = 0
      for (let i = 0; i < this.transactions.length; i++) {
        if (this.transactions[i].selectedTo === 'House') {
          val += parseFloat(this.transactions[i].quota)
        }
      }
      return val
    },
    totalEntertainments () {
      let val = 0
      for (let i = 0; i < this.transactions.length; i++) {
        if (this.transactions[i].selectedTo === 'Entertainments') {
          val += parseFloat(this.transactions[i].quota)
        }
      }
      return val
    },
    totalAmenities () {
      let val = 0
      for (let i = 0; i < this.transactions.length; i++) {
        if (this.transactions[i].selectedTo === 'Amenities') {
          val += parseFloat(this.transactions[i].quota)
        }
      }
      return val
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
  .personal-page_container{
    margin-top: 88px;
    max-width:1280px;
    min-height: 580px;
    -ms-flex-direction:row;
    flex-direction:row;
    -ms-flex-pack:center;
    justify-content:center;
    -ms-flex-align:center;
    align-items:center;
    padding:30px 25px 90px;
    position:relative;
  }
  .personal-page_dashboard{
    width:100%;
    display:-ms-flexbox;
    display:flex;
    -ms-flex-direction:column;
    flex-direction:column;
    -ms-flex-pack:start;
    justify-content:flex-start;
    -ms-flex-align:start;
    align-items:flex-start
  }
  .personal-page_dashboard_top{
    width:100%;
    height:66px;
    position:relative;
    padding: 0px 86px 0 20px;
    margin-top: -10px;
    display:flex;
    -ms-flex-direction:row;
    flex-direction:row;
    -ms-flex-pack:start;
    justify-content:flex-start;
    -ms-flex-align:start;
    align-items:flex-start;
    z-index:3;
  }
  .personal-page_dashboard_body{
    width:100%;
    padding-top:30px;
    display:-ms-flexbox;
    display:flex;
    -ms-flex-direction:row;
    flex-direction:row;
    -ms-flex-pack:justify;
    justify-content:space-between;
    -ms-flex-align:start;
    align-items:flex-start
  }
  .personal-page_dashboard_column{
    width:50%;
    box-sizing:border-box
  }
  .personal-page_category_icon {
    margin: auto;
    background-position: center;
    width: 60px;
    height: 60px;
    background-repeat: no-repeat;
  }
  .ms-category_icon_profit {
    background-image: url('../assets/bitcoin-3024279_1280.jpg');
    background-size: 105px auto;
  }
  .icon_card {
    background-image: url('../assets/credit-2389154_1280.png');
    background-size: 115px auto;
  }
  .icon_cash {
    background-image: url('../assets/wallet-3721156_1280.png');
    background-size: 65px auto;
  }
  .icon_food{
    background-image: url('../assets/food.png');
    background-size: 70px auto;
  }
  .icon_cafes{
    background-image: url('../assets/cafes.png');
    background-size: 85px auto;
  }
  .icon_transport{
    background-image: url('../assets/transport.png');
    background-size: 85px auto;
  }
  .icon_shopping{
    background-image: url('../assets/shopping.png');
    background-size: 85px auto;
  }
  .icon_house{
    background-image: url('../assets/house.png');
    background-size: 65px auto;
  }
  .icon_entertainments{
    background-image: url('../assets/entartaiments.png');
    background-size: 65px auto;
  }
  .icon_amenities{
    background-image: url('../assets/amenities.png');
    background-size: 65px auto;
  }
</style>
