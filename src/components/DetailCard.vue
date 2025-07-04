<template>
  <div class="rounded-xl border shadow bg-white flex flex-col">
    <div class="bg-gray-700 text-white font-semibold text-sm px-4 py-2 rounded-t-xl">
      {{ title }}
    </div>
    <div class="text-sm text-gray-800 px-4 py-3 space-y-1 flex-grow">
      <slot>
        <p class="text-gray-500">Sem informações.</p>
      </slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>