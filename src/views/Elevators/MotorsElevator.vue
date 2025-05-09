<template>
  <BackGround color1Intensity="40" color2Intensity="60">
    <MenuElevator />
    <SectionHeader title="Maquínas de Tração" />

    <div class="w-full px-4 lg:px-6">
      <section
        class="flex flex-col lg:flex-row items-center justify-center py-16 gap-12 w-full max-w-7xl mx-auto"
      >
        <!-- Coluna da esquerda - Com engrenagem -->
        <div class="w-full bg-white rounded-xl p-8 shadow-lg">
          <h2 class="text-2xl font-bold text-red-600 mb-8">Com engrenagem</h2>
          <div class="space-y-6">
            <div
              v-for="(item, index) in comEngrenagem"
              :key="index"
              class="flex items-center gap-4"
            >
              <RouterLink
                :to="item.to"
                class="flex-1 flex justify-between items-center bg-gradient-to-r from-gray-600 to-gray-400 text-white px-6 py-4 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg"
              >
                <span>{{ item.title }}</span>
                <span class="text-2xl">→</span>
              </RouterLink>

              <img
                v-if="item.img"
                :src="item.img"
                alt="Ícone do motor"
                class="w-24 h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <!-- Coluna da direita - Sem engrenagem -->
        <div class="w-full bg-white rounded-xl p-8 shadow-lg">
          <h2 class="text-2xl font-bold text-red-600 mb-8">Sem engrenagem</h2>
          <div class="space-y-6">
            <div
              v-for="(item, index) in semEngrenagem"
              :key="index"
              class="flex items-center gap-4"
            >
              <RouterLink
                :to="item.to"
                class="flex-1 flex justify-between items-center bg-red-700 text-white px-6 py-4 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg"
              >
                <span v-html="item.title"></span>
                <span class="text-2xl">→</span>
              </RouterLink>

              <img
                v-if="item.img"
                :src="item.img"
                alt="Ícone do motor"
                class="w-24 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <SectionHeader
        title="RELAÇÃO DE TRANSFORMAÇÃO: TRAÇÃO 1:1 <-> TRAÇÃO 2:1 "
      />
      <img
        src="../../assets/images/Motors/Relationship.png"
        alt="Relação de
      transformação"
        class="w-full max-w-7xl mx-auto my-8 rounded-lg shadow-lg"
      />
      <SectionHeader title="TABELAS DE UNIDADES " />
      <Table />

      <SectionHeader title="DIFERENCIAIS TORINDRIVE" />
      <img src="../../assets/images/Motors/diference.png" alt="Relação de
      transformação" class="w-full max-w-7xl mx-auto my-8 rounded-lg shadow-lg"
    </div>

    <Footer />
  </BackGround>
</template>

<script setup>
import BackGround from "@/components/BackGround.vue";
import Footer from "@/components/Footer.vue";
import MenuElevator from "@/components/Menus/MenuElevator.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import Table from "@/components/Table.vue";

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
    to: "/com-engrenagem/sgd",
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
    to: "/sem-engrenagem/sgl",
    img: "/src/assets/images/Motors/sgl_motor.png", // Corrigido aqui para sgl_motor.png
  },
];
</script>
