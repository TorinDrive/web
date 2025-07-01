<template>
  <BackGround color1Intensity="40" color2Intensity="60">
    <MenuElevator />
    <!-- O título agora pode ser mais genérico ou vir de uma prop -->
    <SectionHeader :title="pageTitle" />

    <div class="max-w-7xl mx-auto px-4 lg:px-6 py-8 min-h-screen">
      <!-- Usando o componente LoadingSpinner -->
      <div v-if="isLoading" class="flex flex-col justify-center items-center h-96">
        <LoadingSpinner color="red" message="A carregar todos os modelos..." />
      </div>

      <!-- Estado de Erro -->
      <div v-else-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-6 rounded-lg shadow-md mx-auto max-w-4xl">
        <h3 class="font-bold text-xl mb-2">Ocorreu um Erro</h3>
        <p>Não foi possível carregar os dados. Verifique a API ou a conexão.</p>
        <p class="text-sm mt-3 bg-red-200 p-2 rounded font-mono">Detalhe: {{ error }}</p>
      </div>
      
      <!-- Conteúdo Principal (quando os dados estão carregados) -->
      <div v-else-if="hasData" class="space-y-16">
        
        <!-- Loop para renderizar uma seção de tabela para cada linha de máquina -->
        <div v-for="machineLine in machineLines" :key="machineLine.tableName" v-show="machineLine.data.length > 0">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">{{ machineLine.title }}</h2>
          <div class="w-full">
            <div class="overflow-x-auto shadow-xl rounded-xl">
              <table class="min-w-full text-sm text-center bg-white">
                <thead class="bg-red-700 text-white uppercase tracking-wider text-xs">
                  <tr>
                    <th class="px-4 py-3 whitespace-nowrap">Código</th>
                    <th class="px-4 py-3 whitespace-nowrap">Capacidade (kg)</th>
                    <th class="px-4 py-3 whitespace-nowrap">Velocidade (m/s)</th>
                    <th class="px-4 py-3 whitespace-nowrap">Potência (kW)</th>
                    <th class="px-4 py-3 whitespace-nowrap">Polos</th>
                    <th class="px-4 py-3 whitespace-nowrap">Redução</th>
                    <th class="px-4 py-3 whitespace-nowrap">Tensão (Vca)</th>
                    <th class="px-4 py-3 whitespace-nowrap sticky right-0 bg-red-700 z-10">Detalhes</th>
                  </tr>
                </thead>
                <tbody class="text-gray-700">
                  <tr v-for="item in machineLine.data" :key="item.id" @click="goToDetails(machineLine.tableName, item.id)" class="border-t even:bg-gray-50 hover:bg-red-50 transition-colors duration-200 cursor-pointer">
                    <td class="px-4 py-3 whitespace-nowrap font-semibold text-gray-900">{{ item.codigo }}</td>
                    <td class="px-4 py-3 whitespace-nowrap">{{ item.capacidade_kg }}</td>
                    <td class="px-4 py-3 whitespace-nowrap">{{ item.velocidade_ms }}</td>
                    <td class="px-4 py-3 whitespace-nowrap">{{ item.potencia_kw }}</td>
                    <td class="px-4 py-3 whitespace-nowrap">{{ item.polos }}</td>
                    <td class="px-4 py-3 whitespace-nowrap">{{ item.reducao || '-' }}</td>
                    <td class="px-4 py-3 whitespace-nowrap">{{ item.tensao_alimentacao_vca }}</td>
                    <td class="px-4 py-3 whitespace-nowrap sticky right-0 bg-inherit z-0">
                        <RouterLink :to="`${props.detailsRouteBase}/${machineLine.tableName}/${item.id}`" class="inline-flex items-center text-red-600 hover:text-red-800 font-bold hover:underline">
                        Ver <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </RouterLink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
       <!-- Mensagem se nenhum dado for encontrado -->
      <div v-else class="text-center p-10 bg-yellow-100 rounded-lg shadow">
          <p class="font-semibold text-yellow-800">Nenhum modelo encontrado para estas linhas.</p>
      </div>
    </div>

    <Footer />
  </BackGround>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from 'vue-router';
import axios from "axios";
import BackGround from "@/components/BackGround.vue";
import Footer from "@/components/Footer.vue";
import MenuElevator from "@/components/Menus/MenuElevator.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

// Props para tornar o componente ainda mais flexível
const props = defineProps({
  pageTitle: {
    type: String,
    default: 'Máquinas de Tração'
  },
  detailsRouteBase: {
    type: String,
    default: '/details'
  }
});

const router = useRouter();

// Estados reativos
const isLoading = ref(true);
const error = ref(null);

// Estrutura para armazenar os dados de todas as linhas de máquinas
// Basta adicionar ou remover itens deste array para mudar o que é exibido na página
const machineLines = ref([
  { title: 'Linha SGD00', tableName: 'mr_sgd00', data: [] },
  { title: 'Linha SGD05', tableName: 'mr_sgd05', data: [] },
  { title: 'Linha SGD10', tableName: 'mr_sgd10', data: [] },
  { title: 'Linha SGD13', tableName: 'mr_sgd13', data: [] },
  { title: 'Linha SGD26', tableName: 'mr_sgd26', data: [] },
  { title: 'Linha SGD39', tableName: 'mr_sgd39', data: [] },
  { title: 'Linha SGD125', tableName: 'mr_sgd125', data: [] },
  { title: 'Linha SGD220', tableName: 'mr_sgd220', data: [] },
  // Adicione outras linhas aqui se precisar, como as SGL, RGL, etc.
  // { title: 'Linha SGL12', tableName: 'mr_sgl12', data: [] },
]);

// Propriedade computada para verificar se há algum dado para exibir
const hasData = computed(() => {
  return machineLines.value.some(line => line.data.length > 0);
});

// Busca os dados de TODAS as APIs quando o componente é montado
onMounted(async () => {
  isLoading.value = true;
  error.value = null;
  try {
    const apiUrlBase = "http://127.0.0.1:8000/api";
    
    // Cria um array de promessas de requisição para cada linha de máquina
    const requests = machineLines.value.map(line => 
      axios.get(`${apiUrlBase}/${line.tableName}`).catch(err => {
        // Retorna um erro específico para esta requisição para não parar as outras
        console.warn(`Falha ao buscar dados para ${line.tableName}:`, err.message);
        return { data: [], error: true, tableName: line.tableName };
      })
    );

    // Executa todas as requisições em paralelo
    const responses = await Promise.all(requests);

    // Atribui os dados recebidos ao ref correspondente
    responses.forEach((response, index) => {
      if (!response.error) {
        machineLines.value[index].data = response.data;
      }
    });

  } catch (err) {
    // Este catch pegará erros mais gerais, não relacionados a uma requisição específica
    console.error("Erro geral ao buscar dados das APIs:", err);
    error.value = err.message || "Não foi possível conectar à API.";
  } finally {
    isLoading.value = false;
  }
});

// Função para navegar para a página de detalhes
const goToDetails = (tableName, itemId) => {
  router.push(`${props.detailsRouteBase}/${tableName}/${itemId}`);
};
</script>

<style scoped>
/* Garante que a célula sticky herde a cor de fundo correta ao rolar */
.sticky {
  background-color: inherit; 
}
</style>