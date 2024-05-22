<template>
  <h1
    class="text-3xl text-black font-bold flex items-center justify-center pt-1"
  >
    snackEDU
  </h1>

  <main class="px-6 flex flex-1 flex-col justify-between w-full h-full">
    <section class="pt-6">
      <h3 class="text-3xl text-black font-semibold w-full">Let's scan</h3>
      <div class="flex w-full gap-2">
        <h3 class="text-3xl text-black font-semibold">this</h3>
        <h3 class="text-3xl text-gray-400 font-semibold">good snack!</h3>
      </div>
    </section>

    <div class="flex flex-col h-full justify-end bg-gray-300 rounded-2xl my-6">
      <div>API barcode scanner</div>
    </div>

    <nav
      class="flex justify-center items-center rounded-full h-16 min-h-16 bg-black px-6 pb-2 pt-2.5 gap-16"
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 fill-gray-500"
      >
        <path
          class="cls-1"
          d="M12.588.191a1,1,0,0,0-1.176,0l-11,8A1,1,0,0,0,1.588,9.809L2,9.509V21a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9.509l.412.3a1,1,0,1,0,1.176-1.618ZM10,22V14h4v8Zm10-1a1,1,0,0,1-1,1H16V14a2,2,0,0,0-2-2H10a2,2,0,0,0-2,2v8H5a1,1,0,0,1-1-1V8.054l8-5.818,8,5.818Z"
        />
      </svg>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="w-8 h-8 fill-zinc-300"
      >
        <path
          d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM4 18V6h16v12z"
        />
        <path
          d="M6 8h2v8H6zm3 0h1v8H9zm8 0h1v8h-1zm-4 0h3v8h-3zm-2 0h1v8h-1z"
        />
      </svg>
    </nav>
  </main>
</template>
