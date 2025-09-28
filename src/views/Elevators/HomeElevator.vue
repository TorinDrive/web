<template>
  <div class="bg-slate-50">
    <MenuElevator />

    <div class="bg-slate-900 text-white overflow-hidden">
      <div class="animate-marquee whitespace-nowrap py-3">
        <span class="mx-8 text-sm font-semibold tracking-wider">{{ currentMessage }}</span>
        <span class="mx-8 text-sm font-semibold tracking-wider">{{ currentMessage }}</span>
      </div>
    </div>

    <section class="relative w-full h-[60vh] md:h-[80vh] text-white group">
      <Swiper
        :modules="[Pagination, Autoplay, Navigation]"
        :slides-per-view="1" :space-between="0" :loop="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :pagination="{ clickable: true, el: '.swiper-pagination-custom' }"
        :navigation="{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }"
        class="w-full h-full"
      >
        <SwiperSlide v-for="(slide, index) in carouselSlides" :key="index"
          class="w-full h-full bg-cover bg-center relative"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <div class="absolute inset-0 bg-black/30"></div>
          <div class="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
            <h1 class="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">{{ slide.title }}</h1>
            <p class="mt-4 max-w-2xl text-lg md:text-xl font-light drop-shadow-md">{{ slide.subtitle }}</p>
            <button class="mt-8 bg-gray-800 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition-transform hover:scale-105 text-lg font-semibold">
              Conheça nossas soluções
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="absolute inset-0 z-20 pointer-events-none">
        <button class="swiper-button-prev-custom absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full text-white pointer-events-auto transition-opacity duration-300 group-hover:opacity-100 opacity-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
        </button>
        <button class="swiper-button-next-custom absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full text-white pointer-events-auto transition-opacity duration-300 group-hover:opacity-100 opacity-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
        </button>
      </div>
      <div class="swiper-pagination-custom absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex space-x-2"></div>
    </section>

    <section class="py-20 px-4 sm:px-8 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div v-scroll-animation class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-800">Por que Escolher a TORINDRIVE?</h2>
          <p class="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">Inovação, Qualidade e Compromisso com a Excelência em cada componente.</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div v-scroll-animation>
            <img :src="elevatorImage" alt="Técnico de elevador analisando equipamento"
              class="rounded-xl shadow-2xl object-cover w-full h-full aspect-square lg:aspect-auto"
            />
          </div>
          <div v-scroll-animation class="space-y-6">
            <p class="text-slate-700 leading-relaxed">
              Na TORINDRIVE, não oferecemos apenas produtos; transformamos a maneira como você interage com a mobilidade. Com tecnologia de ponta e design moderno, estamos prontos para atender às suas necessidades com máxima segurança e eficiência.
            </p>
            <ul class="space-y-4">
              <li v-for="item in features" :key="item.title" class="flex items-start">
                <CheckCircleIcon class="w-6 h-6 text-gray-700 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 class="font-semibold text-slate-800">{{ item.title }}</h3>
                  <p class="text-slate-600">{{ item.description }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="contato" class="py-20 px-4 sm:px-8 bg-slate-50 overflow-hidden">
      <div v-scroll-animation class="max-w-6xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 class="text-2xl font-bold mb-6 text-slate-800">Vamos conversar sobre seu projeto?</h3>
          <div v-if="successMessage" class="mb-4 p-4 text-green-800 bg-green-100 rounded-lg">{{ successMessage }}</div>
          <div v-if="generalError" class="mb-4 p-4 text-red-800 bg-red-100 rounded-lg">{{ generalError }}</div>
          <form @submit.prevent="handleFormSubmit" class="space-y-5">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <input type="text" placeholder="Primeiro nome" v-model="form.primeiro_nome" class="p-3 rounded-lg border border-slate-300 w-full transition focus:ring-2 focus:ring-gray-500 focus:border-transparent" />
                <span v-if="errors.primeiro_nome" class="text-red-600 text-sm mt-1">{{ errors.primeiro_nome[0] }}</span>
              </div>
              <div>
                <input type="text" placeholder="Último nome" v-model="form.ultimo_nome" class="p-3 rounded-lg border border-slate-300 w-full transition focus:ring-2 focus:ring-gray-500 focus:border-transparent" />
                <span v-if="errors.ultimo_nome" class="text-red-600 text-sm mt-1">{{ errors.ultimo_nome[0] }}</span>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <input type="email" placeholder="E-mail" v-model="form.email" class="p-3 rounded-lg border border-slate-300 w-full transition focus:ring-2 focus:ring-gray-500 focus:border-transparent" />
                <span v-if="errors.email" class="text-red-600 text-sm mt-1">{{ errors.email[0] }}</span>
              </div>
              <div>
                <input type="tel" placeholder="Telefone" v-model="form.telefone" class="p-3 rounded-lg border border-slate-300 w-full transition focus:ring-2 focus:ring-gray-500 focus:border-transparent" />
                <span v-if="errors.telefone" class="text-red-600 text-sm mt-1">{{ errors.telefone[0] }}</span>
              </div>
            </div>
            <div>
              <textarea rows="4" placeholder="Sua mensagem" v-model="form.mensagem" class="p-3 rounded-lg border border-slate-300 w-full transition focus:ring-2 focus:ring-gray-500 focus:border-transparent"></textarea>
              <span v-if="errors.mensagem" class="text-red-600 text-sm mt-1">{{ errors.mensagem[0] }}</span>
            </div>
            <button type="submit" class="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold transition hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed" :disabled="isLoading">
              {{ isLoading ? 'Enviando...' : 'Enviar Mensagem' }}
            </button>
          </form>
        </div>
        <div class="space-y-6 text-slate-700 p-4 lg:p-8 rounded-lg text-center lg:text-left">
          <h3 class="text-2xl font-bold text-slate-800">Queremos ouvir você!</h3>
          <p class="leading-relaxed">Preencha o formulário e nossa equipe entrará em contato. Seja para tirar dúvidas, solicitar um orçamento ou saber mais sobre nossos serviços.</p>
          <p class="font-semibold text-slate-800">📞 Atendimento rápido, especializado e com total segurança.</p>
          <div class="space-y-2 pt-4 border-t border-slate-200">
            <p class="font-medium">📱 (47) 9 9999-9999</p>
            <p class="font-medium">📷 @torindrivedobrasil</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import MenuElevator from "@/components/Menus/MenuElevator.vue";
import Footer from "@/components/Footer.vue";
import { CheckCircleIcon } from '@heroicons/vue/24/solid';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// --- SOLUÇÃO DEFINITIVA PARA AS IMAGENS ---
import banner1 from '@/assets/images/banner1.jpg';
import banner2 from '@/assets/images/banner2.jpg';
import banner3 from '@/assets/images/banner3.jpg';
import elevatorImage from '@/assets/images/SessionImages/elevator.png';

// --- LÓGICA DO LETREIRO DE ANÚNCIOS ---
const announcementMessages = ref([
  "Entrega técnica especializada em toda Santa Catarina e São Paulo.",
  "Condições especiais para contratos de manutenção preventiva.",
  "Conheça nossa nova linha de motores gearless de alta eficiência.",
  "Atendimento e suporte técnico 24 horas por dia, 7 dias por semana."
]);
const currentMessageIndex = ref(0);
const currentMessage = ref(announcementMessages.value[0]);
let messageInterval = null;

onMounted(() => {
  messageInterval = setInterval(() => {
    currentMessageIndex.value = (currentMessageIndex.value + 1) % announcementMessages.value.length;
    currentMessage.value = announcementMessages.value[currentMessageIndex.value];
  }, 15000);
});

onUnmounted(() => {
  clearInterval(messageInterval);
});

// --- DIRETIVA DE ANIMAÇÃO DE SCROLL ---
const vScrollAnimation = {
  mounted: (el) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
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

// --- DADOS DO CARROSSEL ---
const carouselSlides = ref([
  { image: banner1, title: 'Elevando a Qualidade, Peça por Peça', subtitle: 'As melhores soluções em peças para elevadores, com confiança, agilidade e suporte especializado.'},
  { image: banner2, title: 'Tecnologia e Segurança em Movimento', subtitle: 'Mantenha seus elevadores sempre em movimento com peças de alto padrão e atendimento que entende do seu dia a dia.'},
  { image: banner3, title: 'Suporte que Você Pode Confiar', subtitle: 'Nossa equipe está pronta para te atender com soluções sob medida para o seu projeto.'}
]);

// --- DADOS DA SEÇÃO "POR QUE ESCOLHER" ---
const features = ref([
    { title: 'Tecnologia de Ponta', description: 'Integração com as mais novas inovações do mercado.' },
    { title: 'Segurança Inegociável', description: 'Equipamentos robustos, testados e aprovados para sua tranquilidade.' },
    { title: 'Qualidade Garantida', description: 'Produtos duráveis, de alta performance e com garantia de fábrica.' },
    { title: 'Atendimento Personalizado', description: 'Soluções sob medida para atender as especificidades do seu projeto.' },
    { title: 'Sustentabilidade', description: 'Processos e produtos que respeitam e preservam o meio ambiente.' }
]);

// --- LÓGICA DO FORMULÁRIO ---
const form = ref({ primeiro_nome: '', ultimo_nome: '', email: '', telefone: '', mensagem: '' });
const isLoading = ref(false);
const errors = ref({});
const successMessage = ref('');
const generalError = ref('');

const handleFormSubmit = async () => {
  isLoading.value = true;
  errors.value = {};
  successMessage.value = '';
  generalError.value = '';
  try {
    const response = await axios.post('/api/contato', form.value);
    successMessage.value = response.data.message;
    Object.keys(form.value).forEach(key => form.value[key] = '');
  } catch (error) {
    if (error.response && error.response.status === 422) {
      errors.value = error.response.data.errors;
    } else {
      generalError.value = 'Não foi possível enviar sua mensagem. Tente novamente mais tarde.';
      console.error('Erro de API:', error);
    }
  } finally {
    isLoading.value = false;
  }
};
</script>

<style>
/* Bloco de Estilo Mínimo Necessário */

/* 1. Animação do Letreiro (Marquee) */
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}
.animate-marquee {
  display: inline-block;
  animation: marquee 30s linear infinite;
}

/* 2. Estilos dos Pontos de Paginação do Carrossel */
.swiper-pagination-custom .swiper-pagination-bullet {
    width: 0.75rem; height: 0.75rem;
    background-color: rgba(255,255,255,0.5);
    border-radius: 9999px;
    transition: all 0.3s;
    display: inline-block;
}
.swiper-pagination-custom .swiper-pagination-bullet-active {
    width: 1.25rem;
    background-color: #fff;
}
</style>