<template>
  <div
    class="flex flex-col min-h-screen w-full"
    :style="{
      background: `linear-gradient(to bottom, #fff ${color1Intensity}%, #f2f2f2 ${color2Intensity}%)`,
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    color1Intensity: {
      type: Number,
      default: 0, // Intensidade padrão para a primeira cor
    },
    color2Intensity: {
      type: Number,
      default: 67, // Intensidade padrão para a segunda cor
    },
  },
};
</script>
