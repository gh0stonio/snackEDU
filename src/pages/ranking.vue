<script setup lang="ts">

definePageMeta({
  layout: false,
});

const rankedProducts = ref<string[]>([]); // To store the ranked product barcodes

onMounted(async () => {
  try {
    rankedProducts.value = await rankProducts();
  } catch (error) {
    console.error("Failed to fetch ranked products:", error);
  }
});
</script>

<template>
  <div class="h-[calc(100dvh)] bg-black flex flex-col font-outfit py-6">
    <header class="w-full h-14 flex justify-between items-center">
      <h1 class="basis-1/3 text-lg text-white flex justify-center items-center">Product Rankings</h1>
      <div class="basis-1/3"></div>
    </header>

    <main class="w-full px-6 h-full">
      <h2 class="text-xl text-white mt-6">Ranked Products</h2>
      <ul class="text-white">
        <li v-for="(barcode, index) in rankedProducts" :key="index">
          {{ index + 1 }}. {{ barcode }}
        </li>
      </ul>
    </main>
  </div>
</template>
