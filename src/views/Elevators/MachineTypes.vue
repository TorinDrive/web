//elevators/com-engrenagem/sgd
<template>
  <BackGround color1Intensity="40" color2Intensity="60">
    <MenuElevator />
    <!-- O título agora vem de uma prop, tornando o componente reutilizável -->
    <SectionHeader :title="pageTitle" />

    <div class="max-w-7xl mx-auto  py-8 min-h-screen">
      <!-- Usando o componente LoadingSpinner -->
      <div v-if="isLoading" class="flex flex-col justify-center items-center h-96">
        <LoadingSpinner color="red" :message="`A carregar modelos ${pageTitle}...`" />
      </div>

      <!-- Estado de Erro -->
      <div v-else-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-6 rounded-lg shadow-md mx-auto max-w-4xl">
        <h3 class="font-bold text-xl mb-2">Ocorreu um Erro</h3>
        <p>Não foi possível carregar os dados. Verifique a API ou a conexão.</p>
        <p class="text-sm mt-3 bg-red-200 p-2 rounded font-mono">Detalhe: {{ error }}</p>
      </div>
      
      <!-- Conteúdo Principal -->
      <div v-else-if="machineData.length > 0">
        <!-- Tabela de dados APRIMORADA E COMPLETA -->
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
                  @click="goToDetails(item.id)"
                  class="border-t even:bg-gray-50 hover:bg-red-50 transition-colors duration-200 cursor-pointer"
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
                    <!-- O link para os detalhes agora é construído dinamicamente com as props -->
                    <RouterLink
                      :to="`${detailsRouteBase}/${item.id}`"
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
      <!-- Mensagem se nenhum dado for encontrado -->
      <div v-else class="text-center p-10 bg-yellow-100 rounded-lg shadow">
          <p class="font-semibold text-yellow-800">Nenhum modelo encontrado para esta linha.</p>
      </div>
    </div>

    <Footer />
  </BackGround>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from 'vue-router';
import axios from "axios";
// Importe seus componentes
import BackGround from "@/components/BackGround.vue";
import Footer from "@/components/Footer.vue";
import MenuElevator from "@/components/Menus/MenuElevator.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

// Define as props para tornar o componente reutilizável
const props = defineProps({
  pageTitle: { type: String, required: true },
  apiEndpoint: { type: String, required: true },
  detailsRouteBase: { type: String, required: true }
});

const router = useRouter();

// Estados reativos
const machineData = ref([]);
const isLoading = ref(true);
const error = ref(null);

// Função para buscar os dados da API
const fetchData = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const apiUrlBase = "http://127.0.0.1:8000"; // URL base da sua API Laravel
    // A chamada agora usa o `apiEndpoint` passado como prop
    const response = await axios.get(`${apiUrlBase}${props.apiEndpoint}`);
    machineData.value = response.data;
  } catch (err) {
    console.error("Erro ao buscar dados da API:", err);
    error.value = err.message || "Não foi possível conectar à API.";
  } finally {
    isLoading.value = false;
  }
};

// Observa mudanças nas props. Se a rota mudar para outra página de listagem
// que usa o mesmo componente, os dados serão recarregados.
watch(() => props.apiEndpoint, fetchData, { immediate: true });

// Função para navegar para a página de detalhes ao clicar na linha
const goToDetails = (itemId) => {
  router.push(`${props.detailsRouteBase}/${itemId}`);
};
</script>
