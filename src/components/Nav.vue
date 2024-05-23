<script setup lang="ts">
  const route = useRoute();
</script>

<template>
  <nav class="flex justify-center items-center rounded-full h-11 min-h-11 bg-black px-6 gap-10 mx-16">
    <NuxtLink to="/" class="w-10 h-10 flex items-center justify-center" :replace="true"
      ><svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        :class="route.path === '/' ? 'fill-gray-200' : 'fill-zinc-600'"
      >
        <path
          class="cls-1"
          d="M12.588.191a1,1,0,0,0-1.176,0l-11,8A1,1,0,0,0,1.588,9.809L2,9.509V21a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9.509l.412.3a1,1,0,1,0,1.176-1.618ZM10,22V14h4v8Zm10-1a1,1,0,0,1-1,1H16V14a2,2,0,0,0-2-2H10a2,2,0,0,0-2,2v8H5a1,1,0,0,1-1-1V8.054l8-5.818,8,5.818Z"
        />
      </svg>
    </NuxtLink>
    <NuxtLink to="/request" class="w-10 h-10 flex items-center justify-center" :replace="true">
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        :class="route.path === '/request' ? 'fill-gray-200' : 'fill-zinc-600'"
      >
        <path d="M0 0h48v48H0zm36.62 12L31.1 22z" fill="none" />
        <path
          d="M22 18h4v-6h6V8h-6V2h-4v6h-6v4h6v6zm-8 18c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zm20 0c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zm-19.65-6.5c0-.09.02-.17.06-.24l1.8-3.26h14.9c1.5 0 2.81-.83 3.5-2.06l7.72-14.02L38.83 8h-.01l-2.21 4-5.51 10H17.07l-.26-.54L12.32 12l-1.9-4-1.89-4H2v4h4l7.2 15.17-2.71 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4H14.85c-.28 0-.5-.22-.5-.5z"
        />
      </svg>
    </NuxtLink>
    <NuxtLink to="/ranking" class="w-10 h-10 flex items-center justify-center" :replace="true">
      <svg
        id="Icons"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        :class="route.path === '/ranking' ? 'fill-gray-200' : 'fill-zinc-600'"
      >
        <title />
        <path
          d="M22,7H16.333V4a1,1,0,0,0-1-1H8.667a1,1,0,0,0-1,1v7H2a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V8A1,1,0,0,0,22,7ZM7.667,19H3V13H7.667ZM14.333,8V19H9.667V5h4.666ZM21,19H16.333V9H21Z"
        />
      </svg>
    </NuxtLink>
    <NuxtLink to="/scan" class="w-10 h-10 flex items-center justify-center" :replace="true">
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        :class="route.path === '/scan' ? 'fill-gray-200' : 'fill-zinc-600'"
      >
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM4 18V6h16v12z" />
        <path d="M6 8h2v8H6zm3 0h1v8H9zm8 0h1v8h-1zm-4 0h3v8h-3zm-2 0h1v8h-1z" />
      </svg>
    </NuxtLink>
  </nav>
</template>
