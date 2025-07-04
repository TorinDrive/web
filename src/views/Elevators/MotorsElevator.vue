<template>
  <BackGround color1Intensity="40" color2Intensity="60">
    <MenuElevator />
    <SectionHeader title="Máquinas de Tração" />

    <div class="w-full px-4 lg:px-6">
      <section
        class="flex flex-col lg:flex-row items-start justify-center py-8 md:py-16 gap-8 lg:gap-12 w-full max-w-7xl mx-auto -translate-y-10"
      >
        <!-- Coluna da esquerda - Com engrenagem -->
        <div class="w-full bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
          <h2 class="text-xl sm:text-2xl font-bold text-red-600 mb-6 lg:mb-8 text-center sm:text-left">Com engrenagem</h2>
          <div class="space-y-4 sm:space-y-6">
            <div
              v-for="(item, index) in comEngrenagem"
              :key="index"
              class="flex items-center gap-3 sm:gap-4"
            >
              <RouterLink
                :to="item.to"
                class="flex-1 flex justify-between items-center bg-gradient-to-r from-gray-600 to-gray-400 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg text-base sm:text-lg font-semibold shadow-md hover:shadow-lg transition-all"
              >
                <!-- O v-html permite que você use <br> no título -->
                <span v-html="item.title"></span>
                <span class="text-2xl ml-2">→</span>
              </RouterLink>

              <img
                v-if="item.img"
                :src="item.img"
                alt="Ícone do motor"
                class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0"
              />
            </div>
          </div>
        </div>

        <!-- Coluna da direita - Sem engrenagem -->
        <div class="w-full bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg">
          <h2 class="text-xl sm:text-2xl font-bold text-red-600 mb-6 lg:mb-8 text-center sm:text-left">Sem engrenagem</h2>
          <div class="space-y-4 sm:space-y-6">
            <div
              v-for="(item, index) in semEngrenagem"
              :key="index"
              class="flex items-center gap-3 sm:gap-4"
            >
              <RouterLink
                :to="item.to"
                class="flex-1 flex justify-between items-center bg-red-700 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg text-base sm:text-lg font-semibold shadow-md hover:shadow-lg transition-all"
              >
                <span v-html="item.title"></span>
                <span class="text-2xl ml-2">→</span>
              </RouterLink>

              <img
                v-if="item.img"
                :src="item.img"
                alt="Ícone do motor"
                class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain flex-shrink-0"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Seções inferiores -->
      <SectionHeader title="RELAÇÃO DE TRANSFORMAÇÃO: TRAÇÃO 1:1 <-> TRAÇÃO 2:1 " class="-translate-y-8" />
       
      <img
        src="../../assets/images/Motors/Relationship.png"
        alt="Relação de transformação"
        class="w-full max-w-7xl mx-auto my-1 md:my-2 rounded-lg shadow-lg"
      />
      <SectionHeader title="TABELAS DE UNIDADES" />
      <Table />

      <SectionHeader title="DIFERENCIAIS TORINDRIVE" />
      <img 
        src="../../assets/images/Motors/diference.png" 
        alt="Diferenciais" 
        class="w-full max-w-7xl mx-auto my-6 md:my-8 rounded-lg shadow-lg"
      />
    </div>

    <Footer />
  </BackGround>
</template>

<script setup>
// O script permanece o mesmo
import BackGround from "@/components/BackGround.vue";
import Footer from "@/components/Footer.vue";
import MenuElevator from "@/components/Menus/MenuElevator.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import Table from "@/components/Table.vue";

// Dados simulados para o layout
const comEngrenagem = [
  {
    title: "Diferenciais Especificação",
    to: "/com-engrenagem/diferenciais",
  },
  {
    title: "Dados Técnicos Solução Completa",
    to: "/com-engrenagem/tecnicos",
  },
  {
    title: "Linha SGD",
    to: "/elevators/com-engrenagem/sgd",
    img: "/src/assets/images/Motors/sgd_motor.png",
  },
];

const semEngrenagem = [
  {
    title: "Diferenciais Especificação<br />Dados Técnicos",
    to: "/sem-engrenagem/diferenciais",
  },
  {
    title: "Solução Completa",
    to: "/sem-engrenagem/solucao-completa",
  },
  {
    title: "Linha DMG e HGL<br />Aplicação Home Lift",
    to: "/sem-engrenagem/dmg-hgl",
    img: "/src/assets/images/Motors/homelift_motor.png",
  },
  {
    title: "Linha BGL<br />Aplicação com Cinta",
    to: "/sem-engrenagem/bgl",
    img: "/src/assets/images/Motors/bgl_motor.png",
  },
  {
    title: "Linha RGL<br />Aplicação com Restrição em Espaço",
    to: "/sem-engrenagem/rgl",
    img: "/src/assets/images/Motors/rgl_motor.png",
  },
  {
    title: "Linha SGL<br />Aplicação em Geral",
    to: "/elevators/sem-engrenagem/sgl",
    img: "/src/assets/images/Motors/sgl_motor.png",
  },
];
</script>

<style scoped>
/* Estilos adicionais específicos podem ser adicionados aqui, se necessário. */
</style>
