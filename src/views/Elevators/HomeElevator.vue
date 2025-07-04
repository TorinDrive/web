<template>
  <BackGround :color1Intensity="40" :color2Intensity="60">
    <!-- Navbar -->
    <MenuElevator />
    <!-- Hero Section -->
    <section
      class="flex flex-col lg:flex-row items-center justify-between py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-0 mx-auto max-w-7xl"
    >
      <div class="max-w-xl space-y-6 text-center lg:text-left">
        <h1 class="text-4xl lg:text-5xl font-bold text-red-600">
          Elevando a Qualidade,<br />Peça por Peça
        </h1>
        <p class="text-lg text-gray-800 font-medium leading-relaxed">
          As melhores soluções em peças para elevadores, com confiança,
          agilidade e suporte especializado.<br />
          Mantenha seus elevadores sempre em movimento com peças de alto padrão
          e atendimento que entende do seu dia a dia.
        </p>
        <p class="text-lg text-gray-800">
          Quer conversar com a gente?<br />
          Clique no botão abaixo e preencha o formulário. Nossa equipe está
          pronta pra te atender!
        </p>
        <button
          class="bg-red-600 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 transition text-lg"
        >
          Solicitar atendimento
        </button>
      </div>

      <div class="mt-10 lg:mt-0 lg:ml-16 w-full max-w-3xl relative rounded-2xl">
        <img
          src="@/assets/images/image1.png"
          alt="Elevador"
          class="rounded-2xl shadow-lg w-full object-cover"
        />
        <div
          class="absolute bottom-0 right-0 w-full h-16 bg-red-600 rounded-bl-3xl"
        ></div>
      </div>
    </section>

    <!-- Seção: Por que escolher a TORINDRIVE -->
    <section class="py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-0 mx-auto max-w-7xl">
      <div class="w-full bg-white py-0.5 px-5"></div>
      <h2 class="text-center text-2xl font-bold text-red-600 mb-12 mt-10">
        Por que Escolher a TORINDRIVE?
      </h2>
      <div class="flex flex-col lg:flex-row items-start gap-10">
        <!-- Imagem principal e galeria -->
        <div class="w-full lg:w-1/2 space-y-4">
          <img
            src="@/assets/images/SessionImages/elevator.png"
            alt="Técnico elevador"
            class="rounded-xl shadow-lg w-full object-cover aspect-video"
          />
          <div class="flex space-x-4">
            <img
              src="@/assets/images/SessionImages/elevator.png"
              class="w-24 h-16 object-cover rounded-md"
            />
            <img
              src="@/assets/images/SessionImages/elevator.png"
              class="w-24 h-16 object-cover rounded-md"
            />
            <img
              src="@/assets/images/SessionImages/elevator.png"
              class="w-24 h-16 object-cover rounded-md"
            />
          </div>
        </div>

        <!-- Texto -->
        <div class="w-full lg:w-1/2 space-y-4 text-gray-800">
          <p>
            Inovação, Qualidade e Compromisso com a Excelência.Na TORINDRIVE,
            não oferecemos apenas soluções, mas transformamos a maneira como
            você interage com a mobilidade e climatização. Com um portfólio de
            produtos de última geração, tecnologia inteligente e design moderno,
            estamos prontos para atender às suas necessidades com segurança,
            eficiência e alto desempenho.
          </p>
          <ul class="list-disc ml-6 space-y-2">
            <li>
              <strong>Tecnologia de Ponta:</strong> Integração com as mais novas
              inovações do mercado.
            </li>
            <li>
              <strong>Segurança:</strong> Equipamentos robustos, testados e
              aprovados.
            </li>
            <li>
              <strong>Qualidade Garantida:</strong> Produtos duráveis e de alta
              performance.
            </li>
            <li>
              <strong>Atendimento Personalizado:</strong> Soluções sob medida.
            </li>
            <li>
              <strong>Sustentabilidade:</strong> Práticas que respeitam o meio
              ambiente.
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full bg-white py-0.5 px-5 mt-10"></div>
    </section>

    <!-- Seção: Formulário de Contato -->
    <section
      id="contato"
      class="bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-16 max-w-7xl rounded-2xl border-t mx-auto flex justify-center items-center flex-row"
    >
      <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 p-0 lg:p-8 items-center">
      <!-- Formulário -->
      <div>
        <h3 class="text-xl font-bold mb-6 text-center lg:text-left">
        Vamos conversar sobre seu projeto?
        </h3>

        <div v-if="successMessage" class="mb-4 p-4 text-green-800 bg-green-100 rounded-lg">
        {{ successMessage }}
        </div>
        <div v-if="generalError" class="mb-4 p-4 text-red-800 bg-red-100 rounded-lg">
        {{ generalError }}
        </div>

        <form @submit.prevent="handleFormSubmit" class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
          <input
            type="text"
            placeholder="Primeiro nome"
            class="p-3 rounded border border-gray-400 w-full"
            v-model="form.primeiro_nome"
          />
          <span v-if="errors.primeiro_nome" class="text-red-600 text-sm">{{ errors.primeiro_nome[0] }}</span>
          </div>
          <div>
          <input
            type="text"
            placeholder="Último nome"
            class="p-3 rounded border border-gray-400 w-full"
            v-model="form.ultimo_nome"
          />
          <span v-if="errors.ultimo_nome" class="text-red-600 text-sm">{{ errors.ultimo_nome[0] }}</span>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
          <input
            type="email"
            placeholder="E-mail"
            class="p-3 rounded border border-gray-400 w-full"
            v-model="form.email"
          />
          <span v-if="errors.email" class="text-red-600 text-sm">{{ errors.email[0] }}</span>
          </div>
          <div>
          <input
            type="tel"
            placeholder="Telefone"
            class="p-3 rounded border border-gray-400 w-full"
            v-model="form.telefone"
          />
          <span v-if="errors.telefone" class="text-red-600 text-sm">{{ errors.telefone[0] }}</span>
          </div>
        </div>
        <div>
          <textarea
          rows="4"
          placeholder="Mensagem"
          class="p-3 rounded border border-gray-400 w-full"
          v-model="form.mensagem"
          ></textarea>
          <span v-if="errors.mensagem" class="text-red-600 text-sm">{{ errors.mensagem[0] }}</span>
        </div>
        <button
          type="submit"
          class="w-full bg-gradient-to-r from-red-500 to-red-700 text-white py-3 rounded font-semibold transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="isLoading"
        >
          {{ isLoading ? 'Enviando...' : 'Enviar' }}
        </button>
        </form>
      </div>
      <!-- "Queremos ouvir você" ao lado do formulário -->
      <div class="space-y-4 text-center lg:text-left">
        <h3 class="text-xl font-bold">Queremos ouvir você!</h3>
        <p>
        Preencha o formulário ao lado e nossa equipe entrará em contato o
        mais rápido possível. Seja para dúvidas, orçamento ou saber mais
        sobre nossos serviços.
        </p>
        <p>📞 Atendimento rápido, especializado e com total segurança.</p>
        <div class="space-y-2">
        <p>📱 (99) 9999-9999</p>
        <p>📷 @torindrivedobrasil</p>
        </div>
      </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </BackGround>
</template>

<script setup>
import { ref } from 'vue'; // NOVO
import axios from 'axios'; // NOVO
import BackGround from "@/components/BackGround.vue";
import MenuElevator from "@/components/Menus/MenuElevator.vue";
import Footer from "@/components/Footer.vue";

// --- INÍCIO DA LÓGICA DO FORMULÁRIO (NOVO) ---

// Reativos para os dados do formulário (adaptado para seus campos)
const form = ref({
  primeiro_nome: '',
  ultimo_nome: '',
  email: '',
  telefone: '',
  mensagem: '',
});

// Reativos para controlar o estado da UI
const isLoading = ref(false);
const errors = ref({});
const successMessage = ref('');
const generalError = ref('');

// Função para rolar suavemente até o formulário
const scrollToForm = () => {
  const formSection = document.getElementById('contato');
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleFormSubmit = async () => {
  // Limpa estados antigos
  isLoading.value = true;
  errors.value = {};
  successMessage.value = '';
  generalError.value = '';

  try {
    // Faz a chamada POST para a API do Laravel
    const response = await axios.post('http://127.0.0.1:8000/api/contato', form.value);

    // Sucesso!
    successMessage.value = response.data.message;
    // Limpa o formulário
    Object.keys(form.value).forEach(key => form.value[key] = '');

  } catch (error) {
    if (error.response && error.response.status === 422) {
      // Erro de validação do Laravel
      errors.value = error.response.data.errors;
    } else {
      // Outros erros (servidor, rede)
      generalError.value = 'Não foi possível enviar sua mensagem. Tente novamente.';
      console.error('Erro de API:', error); // Log para depuração
    }
  } finally {
    // Garante que o estado de loading termine
    isLoading.value = false;
  }
};

// --- FIM DA LÓGICA DO FORMULÁRIO ---
</script>