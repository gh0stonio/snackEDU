<script setup lang="ts">
  useHead({
    title: 'snackEDU',
    meta: [{ name: 'theme-color', content: '#FFFFFF' }],
  });
</script>

<template>
  <VitePwaManifest />

  <div class="h-[calc(100dvh)] bg-white flex flex-col py-4 font-outfit">
    <slot />
  </div>
</template>
