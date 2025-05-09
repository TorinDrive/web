<template>
  <div class="relative flex justify-center w-full py-5">
    <div
      class="text-white text-lg font-bold py-3 max-w-7xl w-full mx-auto"
      :class="bgClass"
    >
      <span class="px-5">{{ title }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "Máquinas de Tração",
  },
  bgClass: {
    type: String,
    default: "bg-gradient-to-r from-red-600 to-red-900 clip-banner",
  },
});
</script>

<style scoped>
.clip-banner {
  clip-path: polygon(0 0, 97% 0, 100% 100%, 0 100%);
  background: linear-gradient(to right, #d80000, #7d0000);
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
}
</style>
