<template>
  <div class="category-block">  <!-- Первый блок в левой коллоне -->
    <div class="category-block_name"><slot name="categoryName"></slot></div> <!-- Название титула -->
    <div class="category-block_body"> <!-- Тело категории -->
      <slot name="category"></slot>
    </div>
  </div>
</template>

<script>
import Categories from '@/components/elements/Categories'
export default {
  components: {
    appCategories: Categories
  }
}
</script>

<style>
  .category-block{
    width: 100%;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 2px 2px 9px rgba(0,0,0,.13);
    margin-bottom: 30px;
    position: relative;
  }
  .category-block_name{
    border-radius: 6px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: start;
    align-items: flex-start;
    max-height: 140px;
    padding: 15px 15px 15px 15px;
    font-weight: 400;
    font-size: 20px;
    border-bottom: 1px solid #e8e7e7;
    background-color: rgba(242, 230, 201, .7);
    color: #797878;
    text-transform: uppercase;
  }
  .category-block_body {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 15px 17px 0;
  }
</style>
