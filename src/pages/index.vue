<script setup lang="ts">
  const user = useCurrentUser();
  console.log(user);
</script>

<template>
  <main class="px-6 flex flex-1 flex-col justify-between w-full h-full">
    <section class="pt-6">
      <h3 class="text-3xl text-black font-semibold w-full">What would</h3>
      <div class="flex w-full gap-2">
        <h3 class="text-3xl text-black font-semibold">you</h3>
        <h3 class="text-3xl text-gray-400 font-semibold">like to eat?</h3>
      </div>
    </section>

    <form class="relative pt-4">
      <input
        type="search"
        id="default-search"
        class="block w-full h-10 p-4 text-sm placeholder:text-gray-400 rounded-lg bg-gray-100"
        placeholder="Search snack..."
        required
      />
      <button
        type="submit"
        class="text-white absolute end-0.5 bottom-[6px] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
      >
        <svg
          class="w-3 h-3 text-gray-500 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </button>
    </form>

    <div class="grid grid-cols-2 grid-rows-12 w-full h-full gap-3 py-4">
      <div class="flex flex-col justify-end bg-blue-600 col-start-1 col-end-1 row-start-1 row-end-8 rounded-2xl">
        <div>image</div>
        <div class="bg-white h-7 text-sm flex justify-center items-center mb-2 mx-2 rounded-2xl text-gray-500">
          Salted
        </div>
      </div>
      <div class="flex flex-col justify-end bg-violet-200 col-start-2 col-end-2 row-start-1 row-end-7 rounded-2xl">
        <div>image</div>
        <div class="bg-white h-7 text-sm flex justify-center items-center mb-2 mx-2 rounded-2xl text-gray-500">
          Sweats
        </div>
      </div>
      <div class="flex flex-col justify-end bg-gray-200 col-start-1 col-end-1 row-start-8 row-end-13 rounded-2xl">
        <div>image</div>
        <div class="bg-white h-7 text-sm flex justify-center items-center mb-2 mx-2 rounded-2xl text-gray-500">Tea</div>
      </div>
      <div class="flex flex-col justify-end bg-pink-200 col-start-2 col-end-2 row-start-7 row-end-13 rounded-2xl">
        <div>image</div>
        <div class="bg-white h-7 text-sm flex justify-center items-center mb-2 mx-2 rounded-2xl text-gray-500">
          Coffee / Chocolate
        </div>
      </div>
    </div>
  </main>
</template>
