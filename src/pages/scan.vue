<script setup lang="ts">
  import { BrowserBarcodeReader } from '@zxing/library';
  import { doc, getDoc, setDoc } from 'firebase/firestore';

  const db = useFirestore();

  const router = useRouter();

  const videoEl = ref();
  const barcodeData = ref<string | null>(null);

  const codeReader = new BrowserBarcodeReader();

  const isFetchingProductData = ref(false);

  onMounted(async () => {
    try {
      const videoElement = videoEl.value;
      const result = await codeReader.decodeOnceFromVideoDevice(undefined, videoElement);
      const barcode = result.getText();
      console.log('Barcode: ', barcode);

      const product = await getProduct(barcode);
      if (!product) {
        isFetchingProductData.value = true;

        const { data } = await fetchProductData(barcode);
        isFetchingProductData.value = false;

        await setDoc(doc(db, 'Products', barcode), {
          name: data.product.product_name || '',
          brand: data.product.brands || '',
          nutriments: data.product.nutriments || '',
          nutrient_levels: data.product.nutrient_levels || '',
          nova_group: data.product.nova_group || '',
          categories: data.product.categories || '',
          nutriscore: data.product.nutriscore_grade.toUpperCase() || '',
          description: data.product.ecoscore_data.agribalyse.name_en || data.product.categories_old || '',
          serving_size: data.product.serving_size || '',
        });

        // Reset the code reader and stop continuous decode
        codeReader.reset();
        codeReader.stopContinuousDecode();

        router.push({ path: '/details', query: { barcode } });
      } else {
        router.push({ path: '/details', query: { barcode } });
      }
    } catch (error) {
      console.error('Error scanning barcode: ', error);
    }
  });
</script>

<template>
  <main class="px-6 flex flex-1 flex-col justify-between w-full h-full">
    <section class="pt-6">
      <h3 class="text-3xl text-black font-semibold w-full">Let's scan</h3>
      <div class="flex w-full gap-2">
        <h3 class="text-3xl text-black font-semibold">this</h3>
        <h3 class="text-3xl text-gray-400 font-semibold">good snack!</h3>
      </div>
    </section>

    <div class="flex flex-col flex-grow justify-center items-center rounded-2xl py-4 overflow-hidden">
      <video ref="videoEl" class="w-full max-h-[400px] h-full rounded-2xl object-cover"></video>
      <p v-if="barcodeData">Scanned Barcode: {{ barcodeData }}</p>
      <p v-if="isFetchingProductData">LOADING...</p>
    </div>
  </main>
</template>
