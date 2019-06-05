<template>
  <div class="category">  <!-- Существующая категория (кружок наш )-->
    <div class="category_title"><slot name="nameOfCategory"></slot></div>
    <div class="category_icon">    <!-- " Кружок " -->
      <slot name="categoryIcon"></slot>
    </div>
    <div class="category_amount"> <!-- Баланс -->
      <slot name="categoryBalance"></slot>
    </div>
  </div>
</template>

<script>
// export default {
//
// }
</script>

<style>
  .category {
    display: -ms-flexbox;
    display: flex;
    position: relative;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-align: center;
    align-items: center;
    width: 120px;
    margin: 0 3px 15px;
    z-index: 1;
  }
  .category_icon {
    position: relative;
    margin: 10px 0;
    overflow: hidden;
    border-radius: 50%;
    cursor: pointer;
  }
  .category_amount {
    padding: 4px 0;
    height: 40px;
    box-sizing: border-box;
    text-align: center;
    line-height: 16px;
    font-weight: 500;
    font-size: 16px;
  }
  .category_title {
    min-width: 60%;
    height: 38px;
    border-radius: 7px;
    overflow: hidden;
    line-height: 38px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 500;
    color: #4f4f4f;
    background-color: rgba(242, 230, 201, 0.5)
  }
</style>
