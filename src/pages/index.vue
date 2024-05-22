<script setup lang="ts">
useHead({
  title: "SnackEDU",
  meta: [{ name: "theme-color", content: "#FFFFFF" }],
});
</script>

<template>
  <VitePwaManifest />

  <div class="h-screen bg-white flex flex-col py-6 font-outfit justify-between">
    <h1
      class="text-3xl text-black font-bold flex items-center justify-center uppercase pt-1"
    >
      SnackEDU
    </h1>

    <div class="flex-1 justify-center items-center overflow-hidden">
      <img
        src="~/assets/images/bg.png"
        alt="background"
        class="object-fill w-full h-full"
      />
    </div>

    <div class="px-8 w-full flex flex-col">
      <section class="h-36 flex items-center justify-center flex-col">
        <h3
          class="text-4xl text-black font-semibold flex items-center justify-center w-full"
        >
          Get the
        </h3>
        <h3
          class="text-4xl text-gray-400 font-semibold flex items-center justify-center w-full"
        >
          best snack !
        </h3>
      </section>
      <button
        type="button"
        class="inline-block rounded-3xl h-[52px] bg-black px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-200"
      >
        Log In
      </button>
    </div>
  </div>
</template>
