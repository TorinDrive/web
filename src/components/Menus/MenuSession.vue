<template>
  <div
    class="flex flex-row items-center justify-center z-10 text-white px-20 py-4"
  >
    <div
      class="max-w-7xl flex flex-row items-center gap-20 border-b-2 font-semibold border-white w-full justify-between pb-4 mx-auto"
    >
      <router-link
        to="/"
        class="flex items-center justify-center p-2 hover:bg-gray-300 rounded-lg cursor-pointer transition duration-300 ease-in-out"
      >
        <p class="text-2xl text-shadow-2xs"></p>
      </router-link>
      <router-link
        to="/inovation"
        class="flex items-center justify-center p-2 hover:bg-gray-300 rounded-lg cursor-pointer transition duration-300 ease-in-out"
      >
        <p class="text-2xl text-shadow-2xs"></p>
      </router-link>
      <img src="../../assets/images/logo.png" alt="logo" class="w-40 h-full" />
      <router-link
        to="/about"
        class="flex items-center justify-center p-2 hover:bg-gray-300 rounded-lg cursor-pointer transition duration-300 ease-in-out"
      >
        <p class="text-2xl text-shadow-2xs"></p>
      </router-link>
      <router-link
        to="/contact"
        class="flex items-center justify-center p-2 hover:bg-gray-300 rounded-lg cursor-pointer transition duration-300 ease-in-out"
      >
        <p class="text-2xl text-shadow-2xs"></p>
      </router-link>
    </div>
  </div>
</template>

<script setup></script>
