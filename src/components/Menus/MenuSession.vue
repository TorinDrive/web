<template>
  <div
    class="flex flex-row items-center justify-center z-10 text-white px-4 sm:px-8 md:px-12 lg:px-20 py-2 sm:py-3 md:py-4"
  >
    <div
      class="max-w-7xl flex flex-row items-center gap-4 sm:gap-10 md:gap-16 lg:gap-20 border-b-2 font-semibold border-white w-full justify-between pb-2 sm:pb-3 md:pb-4 mx-auto"
    >
      <router-link
        to="/"
        class="flex items-center justify-center p-1 sm:p-2 hover:bg-gray-300 rounded-lg cursor-pointer transition duration-300 ease-in-out"
      >
        <p class="text-lg sm:text-xl md:text-2xl text-shadow-2xs"></p>
      </router-link>
      <router-link
        to="/inovation"
        class="flex items-center justify-center p-1 sm:p-2 hover:bg-gray-300 rounded-lg cursor-pointer transition duration-300 ease-in-out"
      >
        <p class="text-lg sm:text-xl md:text-2xl text-shadow-2xs"></p>
      </router-link>
      <img src="../../assets/images/logo.png" alt="logo" class="w-40 sm:w-48 md:w-56 h-auto" />
      <router-link
        to="/about"
        class="flex items-center justify-center p-1 sm:p-2 hover:bg-gray-300 rounded-lg cursor-pointer transition duration-300 ease-in-out"
      >
        <p class="text-lg sm:text-xl md:text-2xl text-shadow-2xs"></p>
      </router-link>
      <router-link
        to="/contact"
        class="flex items-center justify-center p-1 sm:p-2 hover:bg-gray-300 rounded-lg cursor-pointer transition duration-300 ease-in-out"
      >
        <p class="text-lg sm:text-xl md:text-2xl text-shadow-2xs"></p>
      </router-link>
    </div>
  </div>
</template>

<script setup></script>
