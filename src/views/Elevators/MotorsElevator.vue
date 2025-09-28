<template>
  <BackGround color1Intensity="40" color2Intensity="60">
    <MenuElevator />
    <SectionHeader title="Máquinas de Tração" />

    <div class="w-full px-4 lg:px-6">
      <section
        class="flex flex-col lg:flex-row items-start justify-center py-8 md:py-16 gap-8 lg:gap-12 w-full max-w-7xl mx-auto -translate-y-10"
      >
        <div v-scroll-animation class="w-full bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-slate-200">
          <h2 class="text-xl sm:text-2xl font-bold text-slate-800 mb-6 lg:mb-8 text-center sm:text-left">Com engrenagem</h2>
          <div class="space-y-4 sm:space-y-6">
            <div
              v-for="(item, index) in comEngrenagem"
              :key="index"
              v-scroll-animation="{ delay: (index + 1) * 100 }"
              class="flex items-center gap-3 sm:gap-4"
            >
              <RouterLink
                :to="item.to"
                class="flex-1 flex justify-between items-center bg-slate-800 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg text-base sm:text-lg font-semibold shadow-md hover:bg-slate-700 hover:-translate-y-0.5 transition-all"
              >
                <span v-html="item.title"></span>
                <ChevronRightIcon class="w-6 h-6 ml-2 flex-shrink-0" />
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

        <div v-scroll-animation="{ delay: 200 }" class="w-full bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-slate-200">
          <h2 class="text-xl sm:text-2xl font-bold text-slate-800 mb-6 lg:mb-8 text-center sm:text-left">Sem engrenagem</h2>
          <div class="space-y-4 sm:space-y-6">
            <div
              v-for="(item, index) in semEngrenagem"
              :key="index"
              v-scroll-animation="{ delay: (index + 1) * 100 }"
              class="flex items-center gap-3 sm:gap-4"
            >
              <RouterLink
                :to="item.to"
                class="flex-1 flex justify-between items-center bg-slate-800 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg text-base sm:text-lg font-semibold shadow-md hover:bg-slate-700 hover:-translate-y-0.5 transition-all"
              >
                <span v-html="item.title"></span>
                <ChevronRightIcon class="w-6 h-6 ml-2 flex-shrink-0" />
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

      <div v-scroll-animation>
        <SectionHeader title="RELAÇÃO DE TRANSFORMAÇÃO: TRAÇÃO 1:1 <-> TRAÇÃO 2:1 " class="-translate-y-8" />
        <img
          :src="relationshipImage"
          alt="Relação de transformação"
          class="w-full max-w-7xl mx-auto my-1 md:my-2 rounded-lg shadow-lg"
        />
      </div>
      
      <div v-scroll-animation>
        <SectionHeader title="TABELAS DE UNIDADES" />
        <Table />
      </div>

      <div v-scroll-animation>
        <SectionHeader title="DIFERENCIAIS TORINDRIVE" />
        <img 
          :src="diferenceImage" 
          alt="Diferenciais" 
          class="w-full max-w-7xl mx-auto my-6 md:my-8 rounded-lg shadow-lg"
        />
      </div>
    </div>

    <Footer />
  </BackGround>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ChevronRightIcon } from '@heroicons/vue/24/solid';

// Componentes da página
import BackGround from "@/components/BackGround.vue";
import Footer from "@/components/Footer.vue";
import MenuElevator from "@/components/Menus/MenuElevator.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import Table from "@/components/Table.vue";

// --- IMPORTAÇÃO DIRETA DAS IMAGENS (Correção Crítica) ---
import sgdMotorImg from "@/assets/images/Motors/sgd_motor.png";
import homeliftMotorImg from "@/assets/images/Motors/homelift_motor.png";
import bglMotorImg from "@/assets/images/Motors/bgl_motor.png";
import rglMotorImg from "@/assets/images/Motors/rgl_motor.png";
import sglMotorImg from "@/assets/images/Motors/sgl_motor.png";
import relationshipImage from "@/assets/images/Motors/Relationship.png";
import diferenceImage from "@/assets/images/Motors/diference.png";

// --- DIRETIVA DE ANIMAÇÃO DE SCROLL (Reutilizada da Home) ---
const vScrollAnimation = {
  mounted: (el, binding) => {
    const options = binding.value || {};
    const delay = options.delay || 0;

    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.style.opacity = 1;
          el.style.transform = 'translateY(0)';
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(el);
  }
};

// --- Dados para o layout (agora usando as imagens importadas) ---
const comEngrenagem = [
  {
    title: "Diferenciais Especificação",
    to: "/elevators/geared-machine",
  },
  {
    title: "Dados Técnicos Solução Completa",
    to: "/em-desenvolvimento",
  },
  {
    title: "Linha SGD",
    to: "/elevators/com-engrenagem/sgd",
    img: sgdMotorImg,
  },
];

const semEngrenagem = [
  {
    title: "Diferenciais Especificação<br />Dados Técnicos",
    to: "/elevators/gearless-machine",
  },
  {
    title: "Solução Completa",
    to: "/em-desenvolvimento",
  },
  {
    title: "Linha DMG e HGL<br />Aplicação Home Lift",
    to: "/elevators/sem-engrenagem/dmg-hgl",
    img: homeliftMotorImg,
  },
  {
    title: "Linha BGL<br />Aplicação com Cinta",
    to: "/elevators/sem-engrenagem/bgl",
    img: bglMotorImg,
  },
  {
    title: "Linha RGL<br />Aplicação com Restrição em Espaço",
    to: "/elevators/sem-engrenagem/rgl",
    img: rglMotorImg,
  },
  {
    title: "Linha SGL<br />Aplicação em Geral",
    to: "/elevators/sem-engrenagem/sgl",
    img: sglMotorImg,
  },
];
</script>