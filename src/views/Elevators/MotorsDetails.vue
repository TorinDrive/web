<template>
  <div v-if="showModal" @click="showModal = false" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
    <img :src="modalImageUrl" alt="Visualização ampliada" class="max-w-full max-h-full object-contain rounded-lg" @click.stop />
    <button class="absolute top-4 right-4 text-white text-3xl font-bold">&times;</button>
  </div>

  <BackGround :color1Intensity="20" :color2Intensity="90">
    <MenuElevator />
    <SectionHeader :title="pageTitle" />

    <div class="max-w-7xl mx-auto py-8 min-h-screen w-full md:px-5">
      <div class="mb-6">
        <button @click="goBack" class="flex items-center text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
          Voltar para a lista
        </button>
      </div>

      <div v-if="isLoading" class="flex flex-col justify-center items-center h-96">
        <LoadingSpinner color="red" message="A carregar detalhes da máquina..." />
      </div>

      <div v-else-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-6 rounded-lg shadow-md mx-auto max-w-4xl">
        <h3 class="font-bold text-xl mb-2">Ocorreu um Erro</h3>
        <p>Não foi possível carregar os dados.</p>
        <p class="text-sm mt-3 bg-red-200 p-2 rounded font-mono">Detalhe: {{ error }}</p>
        <button @click="fetchMachineDetails" class="mt-4 bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition-colors">
          Tentar Novamente
        </button>
      </div>

      <div v-else-if="machineData" class="space-y-12">
        <div class="bg-white shadow-xl rounded-xl mx-3 lg:mx-0 p-6 md:p-8 flex flex-col lg:flex-row justify-between items-start gap-8">
          <div class="flex-grow space-y-4">
            <h2 class="text-2xl lg:text-3xl font-bold text-slate-800">{{ machineData.codigo }}</h2>
            <p class="text-slate-600 max-w-prose">
              Visão geral das especificações mais importantes para a máquina de tração modelo <strong>{{ machineData.codigo }}</strong>.
            </p>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 pt-4 text-sm">
              <div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" /></svg><strong>Capacidade:</strong> {{ formatValue(machineData.capacidade_kg, 'kg') }}</div>
              <div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg><strong>Velocidade:</strong> {{ formatValue(machineData.velocidade_ms, 'm/s') }}</div>
              <div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" /></svg><strong>Carga Estática:</strong> {{ formatValue(machineData.carga_estatica) }}</div>
              <div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4" /></svg><strong>Peso:</strong> {{ formatValue(machineData.peso_aproximado) }}</div>
              <div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.594 3.94c.09-.542.56-1.007 1.11-1.226.554-.22 1.197-.243 1.75-.084l.658.281 1.757-.88a1.125 1.125 0 011.245.243l1.5 1.5a1.125 1.125 0 01.243 1.245l-.88 1.757.282.658c.16.553.136 1.2-.083 1.75l-1.226 1.11a1.125 1.125 0 01-1.62.083l-.88-1.757-.658.282c-.553.16-1.2.136-1.75-.083l-1.11-1.226a1.125 1.125 0 01.083-1.62l1.757-.88z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg><strong>Aplicação:</strong> {{ formatValue(machineData.aplicacao) }}</div>
            </div>
          </div>
          <div class="flex-shrink-0 flex gap-4 mt-4 lg:mt-0">
            <img v-if="machineData.url_da_foto" :src="machineData.url_da_foto" alt="Foto da Máquina" @click="openImageModal(machineData.url_da_foto)" class="w-28 h-28 sm:w-36 sm:h-36 object-contain bg-slate-100 p-2 rounded-lg border cursor-pointer hover:shadow-md hover:scale-105 transition-all" />
            <img v-if="machineData.url_do_desenho_tecnico" :src="machineData.url_do_desenho_tecnico" alt="Desenho Técnico" @click="openImageModal(machineData.url_do_desenho_tecnico)" class="w-28 h-28 sm:w-36 sm:h-36 object-contain bg-slate-100 p-2 rounded-lg border cursor-pointer hover:shadow-md hover:scale-105 transition-all" />
          </div>
        </div>

        <div class="bg-white shadow-xl rounded-xl overflow-hidden lg:mx-0 mx-3">
           <h3 class="bg-slate-700 text-white font-semibold text-lg px-6 py-4">Ficha Técnica</h3>
           <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
             <div class="p-6 border-b md:border-b-0 md:border-r border-slate-200">
                <h4 class="font-bold text-slate-800 mb-4">Dados Gerais</h4>
                <dl class="text-sm space-y-3">
                  <div class="flex justify-between"><dt class="text-slate-600">Capacidade</dt><dd class="font-medium text-slate-800">{{ formatValue(machineData.capacidade_kg, 'kg') }}</dd></div>
                  <div class="flex justify-between"><dt class="text-slate-600">Velocidade</dt><dd class="font-medium text-slate-800">{{ formatValue(machineData.velocidade_ms, 'm/s') }}</dd></div>
                  <div class="flex justify-between"><dt class="text-slate-600">Redução</dt><dd class="font-medium text-slate-800">{{ formatValue(machineData.reducao) }}</dd></div>
                  <div class="flex justify-between"><dt class="text-slate-600">Tração Nominal</dt><dd class="font-medium text-slate-800">{{ formatValue(machineData.tracao_nominal) }}</dd></div>
                </dl>
             </div>
             <div class="p-6 border-b md:border-b-0 lg:border-r border-slate-200">
                <h4 class="font-bold text-slate-800 mb-4">Motor</h4>
                <dl class="text-sm space-y-3">
                  <div class="flex justify-between"><dt class="text-slate-600">Potência</dt><dd class="font-medium text-slate-800">{{ formatValue(machineData.potencia_kw, 'kW') }}</dd></div>
                  <div class="flex justify-between"><dt class="text-slate-600">Polos</dt><dd class="font-medium text-slate-800">{{ formatValue(machineData.polos) }}</dd></div>
                  <div class="flex justify-between"><dt class="text-slate-600">Tensão</dt><dd class="font-medium text-slate-800">{{ formatValue(machineData.tensao_alimentacao_vca, 'Vca') }}</dd></div>
                  <div class="flex justify-between"><dt class="text-slate-600">Corrente</dt><dd class="font-medium text-slate-800">{{ formatValue(machineData.corrente_a, 'A') }}</dd></div>
                  <div class="flex justify-between"><dt class="text-slate-600">Rotação</dt><dd class="font-medium text-slate-800">{{ formatValue(machineData.rotacao_motor_rpm, 'rpm') }}</dd></div>
                </dl>
             </div>
             <div class="p-6">
                <h4 class="font-bold text-slate-800 mb-4">Freio e Instalação</h4>
                <dl class="text-sm space-y-3">
                  <div class="flex justify-between"><dt class="text-slate-600">Alimentação do Freio</dt><dd class="font-medium text-slate-800">{{ formatValue(machineData.alimentacao_freio) }}</dd></div>
                  <div class="flex justify-between"><dt class="text-slate-600">Instalação</dt><dd class="font-medium text-slate-800">{{ formatValue(machineData.instalacao) }}</dd></div>
                </dl>
             </div>
           </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-0 mx-3">
          <DetailCard title="Polia e Cabos">
            <ul class="space-y-2 text-sm">
              <li class="flex justify-between"><span>Diâmetro da Polia:</span> <strong>{{ formatValue(machineData.diametro, 'mm') }}</strong></li>
              <li class="flex justify-between"><span>Número de Cabos:</span> <strong>{{ formatValue(machineData.cabo_numero) }}</strong></li>
              <li class="flex justify-between"><span>Diâmetro do Cabo:</span> <strong>{{ formatValue(machineData.diametro_externo, 'mm') }}</strong></li>
              <li class="flex justify-between"><span>Passo:</span> <strong>{{ formatValue(machineData.passo) }}</strong></li>
            </ul>
          </DetailCard>

          <DetailCard title="Segurança e Resgate">
             <ul class="space-y-2 text-sm list-disc list-inside">
                <li><strong>Carga Estática Máxima:</strong> {{ formatValue(machineData.carga_estatica) }}</li>
                <li><strong>Resgate Manual:</strong> {{ formatValue(machineData.resgate_manual_remoto) }}</li>
             </ul>
          </DetailCard>

          <DetailCard title="Informações Adicionais">
            <ul class="space-y-2 text-sm list-disc list-inside">
              <li><strong>Peso Aproximado:</strong> {{ formatValue(machineData.peso_aproximado) }}</li>
              <li><strong>Aplicação:</strong> {{ formatValue(machineData.aplicacao) }}</li>
              <li>Máquina <strong>{{ machineData.reducao ? 'com' : 'sem' }}</strong> engrenagem (Gearless)</li>
            </ul>
          </DetailCard>
        </div>
      </div>
    </div>
    
    <Footer />
  </BackGround>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router';
import { useMachineDetails } from "../../services/useMachineDetails"; 

// Componentes
import BackGround from "@/components/BackGround.vue";
import Footer from "@/components/Footer.vue";
import MenuElevator from "@/components/Menus/MenuElevator.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import DetailCard from "@/components/DetailCard.vue"; 

const router = useRouter();

// Usando o composable para obter estado e lógica
const { machineData, isLoading, error, pageTitle, fetchMachineDetails } = useMachineDetails();

// Estado para o modal de imagem
const showModal = ref(false);
const modalImageUrl = ref('');

// Função para abrir o modal
const openImageModal = (url) => {
  if (!url) return;
  modalImageUrl.value = url;
  showModal.value = true;
};

// Função para formatar valores nulos ou vazios, adicionando unidade
const formatValue = (value, unit = '') => {
  if (value === null || value === undefined || value === '') {
    return 'N/A';
  }
  // Remove a unidade se ela já estiver no valor (ex: "195kg")
  const valueWithoutUnit = String(value).replace(/kg|m\/s|rpm|vca|a/i, '').trim();
  return `${valueWithoutUnit}${unit ? ' ' + unit : ''}`;
};

// Função para voltar à página anterior
const goBack = () => {
  router.back();
};

// Busca os dados quando o componente é montado
onMounted(fetchMachineDetails);
</script>