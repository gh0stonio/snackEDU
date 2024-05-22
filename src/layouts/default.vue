<script setup lang="ts">
  import { signOut } from 'firebase/auth';
  import { useFirebaseAuth } from 'vuefire';

  const router = useRouter();
  const auth = useFirebaseAuth();

  useHead({
    title: 'snackEDU',
    meta: [{ name: 'theme-color', content: '#FFFFFF' }],
  });

  const isMenuOpen = ref(false);

  async function logOut() {
    if (!auth) return;

    await signOut(auth);
    router.push({ path: '/login' });
  }
</script>

<template>
  <div class="h-[calc(100dvh)] bg-white flex flex-col pt-4 pb-3 font-outfit" @click.capture="isMenuOpen = false">
    <VitePwaManifest />

    <header class="w-full relative">
      <h1 class="text-3xl text-black font-bold flex items-center justify-center pt-1">snackEDU</h1>

      <button
        type="button"
        @click="isMenuOpen = !isMenuOpen"
        class="absolute right-4 top-0 rounded-xl h-11 w-11 bg-black flex justify-center items-center"
      >
        <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-gray-200">
          <path
            d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"
          />
        </svg>
      </button>
      <div
        id="dropdown"
        class="absolute right-4 top-12 z-10 bg-black rounded-lg shadow w-24"
        :class="isMenuOpen ? 'block' : 'hidden'"
      >
        <ul class="text-sm text-gray-200 h-9">
          <li class="flex justify-center items-center p-2" @click="logOut">Log Out</li>
        </ul>
      </div>
    </header>

    <slot />

    <footer>
      <Nav />
    </footer>
  </div>
</template>
