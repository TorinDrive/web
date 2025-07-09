<template>
  <BackGround color1Intensity="40" color2Intensity="60">
    <MenuElevator />
    <SectionHeader :title="pageTitle" />

    <div class="max-w-7xl mx-auto px-4 lg:px-6 py-8 min-h-screen">
      <div v-if="isLoading" class="flex flex-col justify-center items-center h-96">
        <LoadingSpinner color="red" message="A carregar todos os modelos..." />
      </div>

      <div v-else-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-6 rounded-lg shadow-md mx-auto max-w-4xl">
        <h3 class="font-bold text-xl mb-2">Ocorreu um Erro</h3>
        <p>Não foi possível carregar os dados. Verifique a API ou a conexão.</p>
        <p class="text-sm mt-3 bg-red-200 p-2 rounded font-mono">Detalhe: {{ error }}</p>
      </div>
      
      <div v-else-if="hasData" class="space-y-16">
        
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
                  <th class="px-4 py-3 whitespace-nowrap">Pólos</th>
                  <th class="px-4 py-3 whitespace-nowrap">Redução</th>
                  <th class="px-4 py-3 whitespace-nowrap">Tensão de Alimentação (Vca)</th>
                  <th class="px-4 py-3 whitespace-nowrap">Corrente (A)</th>
                  <th class="px-4 py-3 whitespace-nowrap">Rotação Motor (rpm)</th>
                  <th class="px-4 py-3 whitespace-nowrap">Diâmetro</th>
                  <th class="px-4 py-3 whitespace-nowrap">Cabo#</th>
                  <th class="px-4 py-3 whitespace-nowrap">Ø Externo (mm)</th>
                  <th class="px-4 py-3 whitespace-nowrap">Passo</th>
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
                  <td class="px-4 py-3 whitespace-nowrap">{{ item.corrente_a }}</td>
                  <td class="px-4 py-3 whitespace-nowrap">{{ item.rotacao_motor_rpm }}</td>
                  <td class="px-4 py-3 whitespace-nowrap">{{ item.diametro }}</td>
                  <td class="px-4 py-3 whitespace-nowrap">{{ item.cabo_numero }}</td>
                  <td class="px-4 py-3 whitespace-nowrap">{{ item.diametro_externo }}</td>
                  <td class="px-4 py-3 whitespace-nowrap">{{ item.passo }}</td>
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
const isLoading = ref(true);
const error = ref(null);

const machineLines = ref([
  { title: 'Linha DMG211', tableName: 'mr_dmg211', data: [] },
  { title: 'Linha DMG212', tableName: 'mr_dmg212', data: [] },
  { title: 'Linha HGL14',  tableName: 'mr_hgl14',  data: [] },
  { title: 'Linha HGL22',  tableName: 'mr_hgl22',  data: [] },

]);

const hasData = computed(() => {
  return machineLines.value.some(line => line.data.length > 0);
});

onMounted(async () => {
  isLoading.value = true;
  error.value = null;
  try {
     const requests = machineLines.value.map(line => 
      api.get(`/api/${line.tableName}`).catch(err => { 
        console.warn(`Falha ao buscar dados para ${line.tableName}:`, err.message);
        return { data: [], error: true, tableName: line.tableName };
      })
    );

    const responses = await Promise.all(requests);

    responses.forEach((response, index) => {
      if (!response.error) {
        machineLines.value[index].data = response.data;
      }
    });

  } catch (err) {
    console.error("Erro geral ao buscar dados das APIs:", err);
    error.value = err.message || "Não foi possível conectar à API.";
  } finally {
    isLoading.value = false;
  }
});

const goToDetails = (tableName, itemId) => {
  router.push(`${props.detailsRouteBase}/${tableName}/${itemId}`);
};
</script>
