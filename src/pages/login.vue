<script setup lang="ts">
  import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
  import { useFirebaseAuth } from 'vuefire';

  definePageMeta({
    layout: false,
  });

  const route = useRoute();
  const router = useRouter();
  const auth = useFirebaseAuth();

  const error = ref<string | null>(null);

  async function logIn() {
    if (!auth) return;

    const userCredentials = await signInWithPopup(auth, new GoogleAuthProvider());

    // if (userCredentials.user.email?.split('@')[1] !== 'datadoghq.com') {
    //   error.value = 'You must use a datadoghq.com email to log in.';
    //   await signOut(auth);
    //   return;
    // }

    router.push({ path: (route.params.redirect as string) || '/' });
  }
</script>

<template>
  <div class="h-[calc(100dvh)] bg-white flex flex-col pt-4 pb-3 font-outfit">
    <h1 class="text-3xl text-black font-bold flex items-center justify-center pt-1">snackEDU</h1>

    <div class="flex flex-1 justify-center items-center overflow-hidden">
      <img src="~/assets/images/bg.png" alt="background" class="object-fill w-full h-5/6" />
    </div>

    <div class="px-8 w-full flex flex-col">
      <section class="h-36 flex items-center justify-center flex-col">
        <h3 class="text-4xl text-black font-semibold flex items-center justify-center w-full">Get the</h3>
        <h3 class="text-4xl text-gray-400 font-semibold flex items-center justify-center w-full">best snack !</h3>
      </section>

      <div class="w-full flex flex-col">
        <p v-if="error" class="h-6 text-sm text-red-500">{{ error }}</p>
        <p v-else class="h-6" />

        <button
          type="button"
          @click="logIn"
          class="inline-block rounded-3xl h-[52px] bg-black px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-gray-200 mx-16"
        >
          Log In
        </button>
      </div>
    </div>
  </div>
</template>
