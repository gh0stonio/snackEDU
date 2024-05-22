<script setup lang="ts">
  useHead({
    title: 'snackEDU',
    meta: [{ name: 'theme-color', content: '#FFFFFF' }],
  });
</script>

<template>
  <div class="h-[calc(100dvh)] bg-white flex flex-col pt-4 pb-3 font-outfit">
    <VitePwaManifest />

    <header>
      <h1 class="text-3xl text-black font-bold flex items-center justify-center pt-1">snackEDU</h1>
    </header>

    <slot />

    <footer>
      <Nav />
    </footer>
  </div>
</template>
