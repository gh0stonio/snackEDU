<script setup lang="ts">
useHead({
  title: "snackEDU",
  meta: [{ name: "theme-color", content: "#FFFFFF" }],
});
</script>

<template>
  <VitePwaManifest />

  <div class="h-screen bg-white flex flex-col py-6 font-outfit">
    <slot />
  </div>
</template>
