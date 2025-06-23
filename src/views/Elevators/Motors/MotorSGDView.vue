<template>
  <BackGround color1Intensity="40" color2Intensity="60">
    <MenuElevator />
    <SectionHeader title="Máquinas de Tração" />

    <div class="max-w-7xl mx-auto py-8 min-h-screen">
      <!-- Usando o novo componente LoadingSpinner -->
      <div v-if="isLoading" class="flex flex-col justify-center items-center h-96">
        <LoadingSpinner color="red" message="A carregar modelos..." />
      </div>

      <!-- Estado de Erro -->
      <div v-else-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-6 rounded-lg shadow-md mx-auto max-w-4xl">
        <h3 class="font-bold text-xl mb-2">Ocorreu um Erro</h3>
        <p>Não foi possível carregar os dados. Verifique a API ou a conexão.</p>
        <p class="text-sm mt-3 bg-red-200 p-2 rounded font-mono">Detalhe: {{ error }}</p>
      </div>
      
      <!-- Conteúdo Principal (quando os dados estão carregados) -->
      <div v-else>
        <!-- Cabeçalho da máquina -->
        <div
          v-if="headerData"
          class="bg-white shadow rounded-xl p-6 flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6"
        >
          <div class="space-y-2 text-sm text-gray-700">
            <h2 class="text-2xl font-bold text-black">{{ headerData.codigo }}</h2>
            <ul class="list-disc ml-5">
              <li><strong>Tração Nominal:</strong> {{ headerData.tracao_nominal }}</li>
              <li><strong>Carga Estática:</strong> {{ headerData.carga_estatica }}</li>
              <li><strong>Alimentação do Freio:</strong> {{ headerData.alimentacao_freio }}</li>
              <li><strong>Peso Aproximado:</strong> {{ headerData.peso_aproximado }}</li>
              <li><strong>Resgate Manual Remoto:</strong> {{ headerData.resgate_manual_remoto }}</li>
              <li><strong>Instalação:</strong> {{ headerData.instalacao }}</li>
              <li><strong>Aplicação:</strong> {{ headerData.aplicacao }}</li>
            </ul>
          </div>

          <!-- Imagens -->
          <div class="flex gap-4 mt-4 lg:mt-0">
            <img :src="headerData.url_da_foto" alt="Máquina" class="w-40 h-24 object-contain" />
            <img :src="headerData.url_do_desenho_tecnico" alt="Desenho Técnico" class="w-40 h-24 object-contain" />
          </div>
        </div>

        <!-- Tabela de dados APRIMORADA -->
        <div class="w-full">
          <div class="overflow-x-auto shadow-xl rounded-xl">
            <table class="min-w-full text-sm text-center bg-white">
              <thead class="bg-gray-800 text-white uppercase tracking-wider text-xs">
                <tr>
                  <th class="px-4 py-3">Código</th>
                  <th class="px-4 py-3">Capacidade (kg)</th>
                  <th class="px-4 py-3">Velocidade (m/s)</th>
                  <th class="px-4 py-3">Potência (kW)</th>
                  <th class="px-4 py-3">Polos</th>
                  <th class="px-4 py-3">Redução</th>
                  <th class="px-4 py-3">Tensão (Vca)</th>
                  <th class="px-4 py-3">Corrente (A)</th>
                  <th class="px-4 py-3">Rotação (rpm)</th>
                  <th class="px-4 py-3">Diâmetro</th>
                  <th class="px-4 py-3">Cabo #</th>
                  <th class="px-4 py-3">Ø</th>
                  <th class="px-4 py-3">Passo</th>
                  <th class="px-4 py-3 sticky right-0 bg-gray-800 z-10">Detalhes</th>
                </tr>
              </thead>
              <tbody class="text-gray-700">
                <tr
                  v-for="item in machineData"
                  :key="item.id"
                  class="border-t even:bg-gray-50 hover:bg-red-50 transition-colors duration-200"
                >
                  <td class="px-4 py-3 whitespace-nowrap font-semibold text-gray-900">{{ item.codigo }}</td>
                  <td class="px-4 py-3 whitespace-nowrap">{{ item.capacidade_kg }}</td>
                  <td class="px-4 py-3 whitespace-nowrap">{{ item.velocidade_ms }}</td>
                  <td class="px-4 py-3 whitespace-nowrap">{{ item.potencia_kw }}</td>
                  <td class="px-4 py-3 whitespace-nowrap">{{ item.polos }}</td>
                  <td class="px-4 py-3 whitespace-nowrap">{{ item.reducao || '-' }}</td>
                  <td class="px-4 py-3 whitespace-nowrap">{{ item.tensao_alimentacao_vca }}</td>
                  <td class="px-4 py-3 whitespace-nowrap">{{ item.corrente_a || '-' }}</td>
                  <td class="px-4 py-3 whitespace-nowrap">{{ item.rotacao_motor_rpm }}</td>
                  <td class="px-4 py-3 whitespace-nowrap">{{ item.diametro }}</td>
                  <td class="px-4 py-3 whitespace-nowrap">{{ item.cabo_numero }}</td>
                  <td class="px-4 py-3 whitespace-nowrap">{{ item.diametro_externo }}</td>
                  <td class="px-4 py-3 whitespace-nowrap">{{ item.passo || '-' }}</td>
                  <td class="px-4 py-3 whitespace-nowrap sticky right-0 bg-white md:bg-transparent z-0">
                    <RouterLink
                      :to="`/elevators/com-engrenagem/details/${item.id}`"
                      class="inline-flex items-center text-red-600 hover:text-red-800 font-bold hover:underline"
                    >
                      Ver
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </RouterLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </BackGround>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import BackGround from "@/components/BackGround.vue";
import Footer from "@/components/Footer.vue";
import MenuElevator from "@/components/Menus/MenuElevator.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue"; // <<-- IMPORTADO AQUI

// Estados reativos para os dados, carregamento e erros
const machineData = ref([]);
const isLoading = ref(true);
const error = ref(null);

// Propriedade computada para obter os dados do primeiro item para o cabeçalho
const headerData = computed(() => {
  return machineData.value.length > 0 ? machineData.value[0] : null;
});

// Busca os dados da API quando o componente é montado
onMounted(async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/mr_sgd00");
    machineData.value = response.data;
  } catch (err) {
    console.error("Erro ao buscar dados da API:", err);
    error.value = err.message || "Não foi possível conectar à API.";
  } finally {
    isLoading.value = false;
  }
});
</script>
