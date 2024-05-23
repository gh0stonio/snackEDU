<script setup lang="ts">
  const rankedProducts = ref<string[]>([]); // To store the ranked product barcodes

  onMounted(async () => {
    try {
      const products = await rankProducts();
      rankedProducts.value = products.filter(
        (product) => product !== undefined && product !== null && product.trim() !== '',
      );
    } catch (error) {
      console.error('Failed to fetch ranked products:', error);
    }
  });
</script>

<template>
  <main class="px-6 flex flex-1 flex-col justify-between w-full h-full">
    <section class="pt-6">
      <h3 class="text-3xl text-black font-semibold w-full">One snack to</h3>
      <div class="flex w-full gap-2">
        <h3 class="text-3xl text-black font-semibold">rule</h3>
        <h3 class="text-3xl text-gray-400 font-semibold">them all!</h3>
      </div>
    </section>

    <div class="flex flex-col h-full justify-start items-start bg-gray-50 rounded-2xl my-4">
      <ul class="text-black">
        <li v-for="(name, index) in rankedProducts" :key="index">{{ index + 1 }}. {{ name }}</li>
      </ul>
    </div>
  </main>
</template>
