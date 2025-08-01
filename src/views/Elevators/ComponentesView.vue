<template>
  <div v-if="showModal" @click="showModal = false" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
    <img :src="modalImageUrl" alt="Visualização ampliada" class="max-w-full max-h-full object-contain rounded-lg" @click.stop />
    <button class="absolute top-4 right-4 text-white text-3xl font-bold">&times;</button>
  </div>

  <BackGround :color1Intensity="20" :color2Intensity="90">
    <MenuElevator />
    <SectionHeader title="Componentes do Elevador" />

    <main class="py-12 px-4">
      <div class="max-w-screen-xl mx-auto">
        
        <div class="hidden lg:flex flex-row items-start justify-center gap-6">
          <div class="w-1/3 flex flex-col items-end gap-y-8 pt-10">
            <div v-for="component in leftComponents" :key="component.id" class="w-full flex items-center justify-end gap-4 group cursor-pointer">
              <div class="bg-white backdrop-blur-sm p-4 rounded-lg shadow-lg text-center flex-shrink-0 min-w-[180px] transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-2xl group-hover:z-10">
                <div class="flex justify-center items-center gap-2 mb-2 h-20">
                  <img v-for="img in component.images" :key="img" :src="img" :alt="component.title" class="max-h-full max-w-full object-contain">
                </div>
                <h3 class="text-sm font-semibold text-gray-800 uppercase tracking-wider transition-colors duration-300 group-hover:font-bold group-hover:text-red-600">{{ component.title }}</h3>
              </div>
              <div class="flex-grow h-px bg-red-400"></div>
            </div>
          </div>

          <div class="w-1/4 flex-shrink-0 self-stretch">
            <img src="@/assets/images/VisualElevator.png" alt="Sistema de Elevador" class="max-w-full h-auto object-contain mx-auto">
          </div>

          <div class="w-1/3 flex flex-col items-start gap-y-8 pt-10">
            <div v-for="component in rightComponents" :key="component.id" class="w-full flex items-center justify-start gap-4 group cursor-pointer">
              <div class="flex-grow h-px bg-red-400"></div>
              <div class="bg-white backdrop-blur-sm p-4 rounded-lg shadow-lg text-center flex-shrink-0 min-w-[180px] transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-2xl group-hover:z-10">
                <div class="flex justify-center items-center gap-2 mb-2 h-20">
                  <img v-for="img in component.images" :key="img" :src="img" :alt="component.title" class="max-h-full max-w-full object-contain">
                </div>
                <h3 class="text-sm font-semibold text-gray-800 uppercase tracking-wider transition-colors duration-300 group-hover:font-bold group-hover:text-red-600">{{ component.title }}</h3>
              </div>
            </div>
          </div>
        </div>

        <div class="block lg:hidden">
          <div class="flex flex-col items-center gap-6">
            <div 
              v-for="component in allComponents" 
              :key="component.id"
              class="w-full max-w-md bg-white backdrop-blur-sm p-4 rounded-lg shadow-lg text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <div class="flex justify-center items-center gap-2 mb-2 h-24">
                <img v-for="img in component.images" :key="img" :src="img" :alt="component.title" class="max-h-full max-w-full object-contain">
              </div>
              <h3 class="text-base font-semibold text-gray-800 uppercase tracking-wider transition-colors duration-300 hover:font-bold hover:text-red-600">{{ component.title }}</h3>
            </div>
          </div>
        </div>
        
      </div>
    </main>
    
    <Footer />
  </BackGround>
</template>

<script setup>
// ADICIONADO 'computed' PARA UNIR AS LISTAS
import { ref, computed } from 'vue';
import BackGround from "@/components/BackGround.vue";
import Footer from "@/components/Footer.vue";
import MenuElevator from "@/components/Menus/MenuElevator.vue";
import SectionHeader from "@/components/SectionHeader.vue";

// Modal (opcional)
const showModal = ref(false);
const modalImageUrl = ref('');

// --- DADOS DOS COMPONENTES (sem alterações) ---
const leftComponents = ref([
  { id: 'l1', title: 'Controle', images: ['/src/assets/images/components/controle.png'] },
  { id: 'l2', title: 'Limitadores de Velocidade', images: ['/src/assets/images/components/limitadores1.png', '/src/assets/images/components/limitadores2.png']},
  { id: 'l3', title: 'Corrediças / Rollers Guide', images: ['/src/assets/images/components/corredicas1.png', '/src/assets/images/components/corredicas2.png']},
  { id: 'l4', title: 'Guias (Cabina, Contrapeso e Acess)', images: ['/src/assets/images/components/suporte1.png'] },
  { id: 'l5', title: 'Lubrificadores/ Coletores de Óleo', images: ['/src/assets/images/components/lubrificador1.png', '/src/assets/images/components/lubrificador2.png'] },
  { id: 'l6', title: 'Polia de Desvio', images: ['/src/assets/images/components/polias1.png', '/src/assets/images/components/polias2.png'] },
  { id: 'l7', title: 'Freios de Segurança', images: ['/src/assets/images/components/freio1.png', '/src/assets/images/components/freio2.png'] },
  { id: 'l8', title: 'Amortecedores de Fundo de Poço', images: ['/src/assets/images/components/amortecedor1.png', '/src/assets/images/components/amortecedor2.png'] },
]);

const rightComponents = ref([
  { id: 'r1', title: 'Base de Maquina (Completa)', images: ['/src/assets/images/components/base.png'] },
  { id: 'r2', title: 'Tirantes', images: ['/src/assets/images/components/tirantes.png'] },
  { id: 'r3', title: 'Cabos de Aço', images: ['/src/assets/images/components/cabo.png'] },
  { id: 'r4', title: 'Portas de Cabina', images: ['/src/assets/images/components/portas.png'] },
  { id: 'r5', title: 'Exaustor', images: ['/src/assets/images/components/placeholder.png'] },
  { id: 'r6', title: 'Operador de Porta', images: ['/src/assets/images/components/placeholder.png', '/src/assets/images/components/placeholder.png'] },
  { id: 'r7', title: 'Caixa de Passagem e Cabos', images: ['/src/assets/images/components/placeholder.png', '/src/assets/images/components/placeholder.png'] },
  { id: 'r8', title: 'Painel de Operação', images: ['/src/assets/images/components/placeholder.png', '/src/assets/images/components/placeholder.png', '/src/assets/images/components/placeholder.png'] },
  { id: 'r9', title: 'Interfones', images: ['/src/assets/images/components/placeholder.png', '/src/assets/images/components/placeholder.png'] },
]);

const allComponents = computed(() => {
  return [...leftComponents.value, ...rightComponents.value];
});
</script>