<script setup lang="ts">
import type { Product } from '~/types/global';

definePageMeta({
  layout: false,
});

const user = useCurrentUser().value?.uid;
console.log("User:", user);

const route = useRoute();
const router = useRouter();

const product = ref<Product | undefined>(undefined);
const barcode = route.query.barcode as string | null;

const vote = ref<boolean | undefined>(undefined);

const nutriscoreImgPath = computed(() => {
  if (!product.value) {
    return '';
  }

  return `https://raw.githubusercontent.com/openfoodfacts/openfoodfacts-server/master/html/images/misc/nutriscore-${product.value.nutriscore.toLocaleLowerCase()}.svg`;
});

onMounted(async () => {
  if (!barcode) {
    router.push('/');
    return;
  }

  const data = await getProduct(barcode);
  product.value = data;
  const voteData = await getVote(barcode, user!);
  vote.value = voteData?.vote;
});

const saveVote = async (barcode: string | null, user?: string) => {
  if (!user) return;
  if (!barcode) return;

  await addVote(barcode, user, vote.value);
};


</script>

<template>
  <div class="h-[calc(100dvh)] bg-black flex flex-col font-outfit py-6">
    <header class="w-full h-14 flex justify-between items-center">
      <button class="basis-1/3 flex items-center justify-start h-10 w-10 pl-5" @click="router.back()">
        <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-gray-200">
          <title />
          <path
            d="M39.3756,48.0022l30.47-25.39a6.0035,6.0035,0,0,0-7.6878-9.223L26.1563,43.3906a6.0092,6.0092,0,0,0,0,9.2231L62.1578,82.615a6.0035,6.0035,0,0,0,7.6878-9.2231Z" />
        </svg>
      </button>
      <h1 class="basis-1/3 text-lg text-white flex justify-center items-center">Details</h1>
      <div class="basis-1/3"></div>
    </header>

    <main class="w-full px-6 h-full">
      <div class="w-full px-6 h-2/5 my-8 p-4 bg-white rounded-xl flex flex-col items-start justify-between">
        <div class="flex flex-col">
          <div v-if="product">
            <h2 class="text-2xl font-semibold text-black">{{ product.name }}</h2>
          </div>
          <h2 v-else class="text-2xl font-semibold text-black">...</h2>

          <div class="flex text-gray-400 gap-2 text-sm">
            <p v-if="product && product.serving_size">{{ product.serving_size }}</p>
            <p v-else>...</p>
          </div>

          <div class="flex py-4">
            <p v-if="product"><img :src="nutriscoreImgPath" class="h-[50px]" /></p>
            <p v-else>...</p>
          </div>
        </div>

        <div class="flex w-full flex-col">
          <p class="pb-2">Should we keep it ?</p>
          <div class="flex w-full justify-between items-center gap-2">
            <button type="button" @click="vote = false; saveVote(barcode, user);"
              class="basis-1/2 text-red-700 hover:text-white border border-red-700 hover:bg-red-700 outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              :class="{ 'bg-red-700 text-white': vote === false }">
              Of course not
            </button>
            <button type="button" @click="vote = true; saveVote(barcode, user);"
              class="basis-1/2 text-green-700 hover:text-white border border-green-700 hover:bg-green-700 outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              :class="{ 'bg-green-700 text-white': vote === true }">
              Hell yes !
            </button>
          </div>
        </div>
      </div>

      <h2 class="text-xl text-white">Properties</h2>
      <div class="w-full h-2/5 my-8 p-4 bg-gray-100 rounded-xl">
        <p v-if="product" class="text-black">{{ product.description }}</p>
        <p v-else class="text-black">...</p>
      </div>
    </main>
  </div>
</template>
