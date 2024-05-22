<!-- src/components/FoodFacts.vue -->
<template>
    <div v-if="product">
      <h2>{{ product.product_name }}</h2>
      <p><strong>Brands:</strong> {{ product.brands }}</p>
      <p><strong>Ingredients:</strong> {{ product.ingredients_text }}</p>
      <p><strong>Nutrition facts:</strong></p>
      <ul>
        <li v-for="(value, key) in product.nutriments" :key="key">{{ key }}: {{ value }}</li>
      </ul>
    </div>
    <div v-else-if="scanDone">
      <p>No product data available.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: false,
        default: null,
      },
      scanDone: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  };
  </script>