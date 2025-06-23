<template>
  <div class="flex flex-col justify-center items-center py-10">
    <!-- O elemento do spinner -->
    <div 
      class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4"
      :class="spinnerColorClass"
    ></div>
    
    <!-- A mensagem opcional abaixo do spinner -->
    <p v-if="message" class="mt-4 text-lg font-semibold text-gray-700">
      {{ message }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// Define as propriedades que o componente pode receber
const props = defineProps({
  /**
   * A cor do spinner. Aceita 'red', 'blue', 'gray', etc.
   * Corresponde às classes de borda do Tailwind CSS (ex: border-red-600).
   */
  color: {
    type: String,
    default: 'red'
  },
  /**
   * A mensagem a ser exibida abaixo do spinner.
   */
  message: {
    type: String,
    default: 'A carregar...'
  }
});

// Propriedade computada que retorna a classe de cor correta do Tailwind
const spinnerColorClass = computed(() => {
  return `border-${props.color}-600`;
});
</script>

<style scoped>
/* Estilos específicos podem ser adicionados aqui se necessário.
   O 'animate-spin' do Tailwind já cuida da animação. */
</style>