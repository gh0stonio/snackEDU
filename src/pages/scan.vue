<script setup lang="ts">
  import { BrowserBarcodeReader } from '@zxing/library';

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

      //TODO: check db for existing data
      const snackDetails = null;
      if (!snackDetails) {
        isFetchingProductData.value = true;
        console.log('start fetching product data for barcode:', barcode);

        const { data } = await fetchProductData(barcode);
        console.log('API response:', data);

        isFetchingProductData.value = false;

        // Reset the code reader and stop continuous decode
        codeReader.reset();
        codeReader.stopContinuousDecode();

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

    <div class="flex flex-col h-full justify-end bg-gray-200 rounded-2xl my-4">
      <video ref="videoEl" class="w-full h-full"></video>
      <p v-if="barcodeData">Scanned Barcode: {{ barcodeData }}</p>
      <p v-if="isFetchingProductData">LOADING...</p>
    </div>
  </main>
</template>
