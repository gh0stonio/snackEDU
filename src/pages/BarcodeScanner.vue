<template>
    <div class="scanner">
      <h1>Barcode Scanner</h1>
      <video ref="video" class="video"></video>
      <p v-if="barcodeData">Scanned Barcode: {{ barcodeData }}</p>
  
      <FoodFacts :product="product" />
  
      <div v-if="error">
        <p>{{ error }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { BrowserBarcodeReader } from '@zxing/library';
  import FoodFacts from '~/components/FoodFacts.vue';
  import { fetchProductData } from '@/services/openFoodFactsService';
  
  export default {
    components: {
      FoodFacts,
    },
    data() {
      return {
        barcodeData: null,
        product: null,
        error: null,
        codeReader: null,
        scanDone: false, // track state of scanning
      };
    },
    mounted() {
      this.codeReader = new BrowserBarcodeReader();
      this.startScanner();
    },
    beforeDestroy() {
      if (this.codeReader) {
        this.codeReader.reset();
      }
    },
    methods: {
      async startScanner() {
        try {
          console.log('Starting scanner...');
          const videoElement = this.$refs.video;
          const result = await this.codeReader.decodeOnceFromVideoDevice(undefined, videoElement);
          console.log('Barcode detected:', result.text);
          this.barcodeData = result.text;
          await this.getProductData(this.barcodeData);
        } catch (error) {
          console.error('Error scanning barcode: ', error);
        }
      },
      async getProductData(barcode) {
        try {
          this.error = null;
          // track state of scanning
          this.scanDone = false;
          console.log('Fetching product data for barcode:', barcode);
          const data = await fetchProductData(barcode);
          console.log('API response:', data);
          if (data && data.product) {
            this.product = data.product;
          } else {
            this.product = null;
            this.error = 'No product data found';
          }
        } catch (error) {
          console.error('Error fetching product data:', error);
          this.error = 'Error fetching product data';
        } finally {
          this.scanDone = true;
        }

      },
    },
  };
  </script>
  
  <style scoped>
  .scanner {
    text-align: center;
  }
  
  .video {
    width: 100%;
    max-width: 600px;
    border: 1px solid #ddd;
  }
  </style>  