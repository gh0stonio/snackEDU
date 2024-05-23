<script setup lang="ts">
  import type { Product } from '~/types/global';

  definePageMeta({
    layout: false,
  });

  const route = useRoute();
  const router = useRouter();

  const product = ref<Product | undefined>(undefined);
  const barcode = route.query.barcode as string | null;

  onMounted(async () => {
    if (!barcode) {
      router.push('/');
      return;
    }

    const data = await getProduct(barcode);
    product.value = data;
  });
</script>

<template>
  <div class="h-[calc(100dvh)] bg-black flex flex-col font-outfit py-6">
    <header class="w-full h-14 flex justify-between items-center">
      <button class="basis-1/3 flex items-center justify-start h-10 w-10 pl-5" @click="router.back()">
        <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-gray-200">
          <title />
          <path
            d="M39.3756,48.0022l30.47-25.39a6.0035,6.0035,0,0,0-7.6878-9.223L26.1563,43.3906a6.0092,6.0092,0,0,0,0,9.2231L62.1578,82.615a6.0035,6.0035,0,0,0,7.6878-9.2231Z"
          />
        </svg>
      </button>
      <h1 class="basis-1/3 text-lg text-white flex justify-center items-center">Details</h1>
      <div class="basis-1/3"></div>
    </header>

    <main class="w-full px-6 h-full">
      <div class="w-full px-6 h-2/5 my-8 p-4 bg-gray-100 rounded-xl">
        <h2 v-if="product" class="text-2xl font-semibold text-black">{{ product.brand }}</h2>
        <h2 v-else class="text-2xl font-semibold text-black">...</h2>

        <div class="flex text-gray-400 gap-2 text-sm">
          <p>250mg</p>
          <p>-</p>
          <p>Nutriscore E</p>
        </div>
      </div>

      <h2 class="text-xl text-white">Properties</h2>
    </main>
  </div>
</template>
