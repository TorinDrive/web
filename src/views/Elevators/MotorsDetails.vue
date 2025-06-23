<template>
  <BackGround color1Intensity="40" color2Intensity="60">
    <MenuElevator />
    <SectionHeader :title="pageTitle" />

    <div class="max-w-7xl mx-auto px-4 lg:px-6 py-8 min-h-screen">
      <!-- Usando o componente LoadingSpinner enquanto os dados são buscados -->
      <div v-if="isLoading" class="flex flex-col justify-center items-center h-96">
        <LoadingSpinner color="red" message="A carregar detalhes da máquina..." />
      </div>

      <!-- Exibindo uma mensagem de erro se a busca falhar -->
      <div v-else-if="error" class="bg-red-100 border-l-4 border-red-500 text-red-700 p-6 rounded-lg shadow-md mx-auto max-w-4xl">
        <h3 class="font-bold text-xl mb-2">Ocorreu um Erro</h3>
        <p>Não foi possível carregar os dados para o ID solicitado.</p>
        <p class="text-sm mt-3 bg-red-200 p-2 rounded font-mono">Detalhe: {{ error }}</p>
      </div>
      
      <!-- Conteúdo Principal (quando os dados estão carregados com sucesso) -->
      <div v-else-if="machineData" class="space-y-8">
        <!-- Cabeçalho principal com informações e imagens -->
        <div class="bg-white shadow-xl rounded-xl p-6 flex flex-col lg:flex-row justify-between items-start gap-6">
          <div class="space-y-2 text-sm text-gray-700">
            <h2 class="text-3xl font-bold text-black">{{ machineData.codigo }}</h2>
            <ul class="list-disc ml-5 pt-2">
              <li><strong>Tração Nominal:</strong> {{ machineData.tracao_nominal || 'N/A' }}</li>
              <li><strong>Carga Estática:</strong> {{ machineData.carga_estatica || 'N/A' }}</li>
              <li><strong>Alimentação do Freio:</strong> {{ machineData.alimentacao_freio || 'N/A' }}</li>
              <li><strong>Peso Aproximado:</strong> {{ machineData.peso_aproximado || 'N/A' }}</li>
              <li><strong>Resgate Manual Remoto:</strong> {{ machineData.resgate_manual_remoto || 'N/A' }}</li>
              <li><strong>Instalação:</strong> {{ machineData.instalacao || 'N/A' }}</li>
              <li><strong>Aplicação:</strong> {{ machineData.aplicacao || 'N/A' }}</li>
            </ul>
          </div>
          <div class="flex-shrink-0 flex gap-4 mt-4 lg:mt-0">
            <img :src="machineData.url_da_foto" alt="Máquina" class="w-24 h-24 sm:w-32 sm:h-32 object-contain bg-gray-100 p-2 rounded-lg border" />
            <img :src="machineData.url_do_desenho_tecnico" alt="Desenho Técnico" class="w-24 h-24 sm:w-32 sm:h-32 object-contain bg-gray-100 p-2 rounded-lg border" />
          </div>
        </div>

        <!-- Tabela Ficha de Dados -->
        <div class="overflow-x-auto rounded-t-2xl shadow-md">
          <div class="bg-gray-800 text-white text-center py-3 rounded-t-2xl">
            <h2 class="text-lg font-semibold">Ficha de Dados</h2>
          </div>
          <table class="w-full text-sm text-center text-gray-800 border-x border-b border-gray-300">
            <thead class="bg-gray-200 font-semibold">
              <tr>
                <th class="py-2 px-2">Capacidade</th>
                <th class="py-2 px-2">Velocidade</th>
                <th class="py-2 px-2">Potência</th>
                <th class="py-2 px-2">Polos</th>
                <th class="py-2 px-2">Tensão</th>
                <th class="py-2 px-2">Corrente</th>
                <th class="py-2 px-2">Rotação</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white">
                <td class="py-2 px-2">{{ machineData.capacidade_kg }} kg</td>
                <td class="py-2 px-2">{{ machineData.velocidade_ms }} m/s</td>
                <td class="py-2 px-2">{{ machineData.potencia_kw }} kW</td>
                <td class="py-2 px-2">{{ machineData.polos }}</td>
                <td class="py-2 px-2">{{ machineData.tensao_alimentacao_vca }} VAC</td>
                <td class="py-2 px-2">{{ machineData.corrente_a || '-' }} A</td>
                <td class="py-2 px-2">{{ machineData.rotacao_motor_rpm }} rpm</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Grid de Cards com todos os detalhes adicionais -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Card TIPO -->
          <div class="rounded-xl border shadow bg-white">
            <div class="bg-gray-700 text-white font-semibold text-sm px-4 py-2 rounded-t-xl">Tipo</div>
            <div class="text-sm text-gray-800 px-4 py-3 space-y-1">
              <ul class="list-disc list-inside">
                <li>Máquina {{ machineData.reducao ? 'Com' : 'Sem' }} Engrenagem</li>
                <li>Tração {{ machineData.tracao_nominal || 'N/A' }}</li>
              </ul>
            </div>
          </div>
          <!-- Card POLIA -->
          <div class="rounded-xl border shadow bg-white">
            <div class="bg-gray-700 text-white font-semibold text-sm px-4 py-2 rounded-t-xl">Polia</div>
            <div class="text-sm text-gray-800 px-4 py-3 space-y-1">
              <ul class="list-disc list-inside">
                <li>Diâmetro: {{ machineData.diametro }} mm</li>
                <li>Qtde. Cabos: {{ machineData.cabo_numero }}</li>
                <li>Diâmetro do Cabo: {{ machineData.diametro_externo }} mm</li>
                <li>Passo: {{ machineData.passo || 'N/A' }}</li>
              </ul>
            </div>
          </div>
          <!-- Card CARGA ESTÁTICA -->
           <div class="rounded-xl border shadow bg-white">
            <div class="bg-gray-700 text-white font-semibold text-sm px-4 py-2 rounded-t-xl">Carga Estática</div>
            <div class="text-sm text-gray-800 px-4 py-3">• {{ machineData.carga_estatica || 'N/A' }}</div>
          </div>
          <!-- Card MOTOR -->
          <div class="rounded-xl border shadow bg-white">
              <div class="bg-gray-700 text-white font-semibold text-sm px-4 py-2 rounded-t-xl">Motor</div>
              <div class="text-sm text-gray-800 px-4 py-3">• Torque Nominal: {{ machineData.torque_nominal || 'N/A' }}</div>
          </div>
          <!-- Card APLICAÇÃO -->
          <div class="rounded-xl border shadow bg-white">
              <div class="bg-gray-700 text-white font-semibold text-sm px-4 py-2 rounded-t-xl">Aplicação</div>
              <div class="text-sm text-gray-800 px-4 py-3">• {{ machineData.aplicacao || 'N/A' }}</div>
          </div>
          <!-- Card EFICIÊNCIA -->
          <div class="rounded-xl border shadow bg-white">
              <div class="bg-gray-700 text-white font-semibold text-sm px-4 py-2 rounded-t-xl">Eficiência do Motor</div>
              <div class="text-sm text-gray-800 px-4 py-3">• {{ machineData.eficiencia_motor || 'N/A' }}</div>
          </div>
          <!-- Card DADOS DO ENCODER -->
          <div class="rounded-xl border shadow bg-white md:col-span-2 lg:col-span-1">
            <div class="bg-gray-700 text-white font-semibold text-sm px-4 py-2 rounded-t-xl">Dados do Encoder</div>
            <div class="text-sm text-gray-800 px-4 py-3 space-y-1">
              <ul class="list-disc list-inside">
                <li>Modelo: {{ machineData.encoder_modelo || 'N/A' }}</li>
                <li>Tipo: {{ machineData.encoder_tipo || 'N/A' }}</li>
                <li>Nº Pulsos: {{ machineData.encoder_pulsos || 'N/A' }}</li>
                <li>Tensão: {{ machineData.encoder_tensao || 'N/A' }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Se você tiver um componente separado para o Encoder com mais lógica -->
        <!-- <Encoder v-if="machineData" :data="machineData" /> -->
      </div>
    </div>
    
    <Footer />
  </BackGround>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from 'vue-router'; // Importa o hook para acessar a rota atual
import axios from "axios";

// Importe seus componentes
import BackGround from "@/components/BackGround.vue";
import Footer from "@/components/Footer.vue";
import MenuElevator from "@/components/Menus/MenuElevator.vue";
import SectionHeader from "@/components/SectionHeader.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
// import Encoder from "@/components/Encoder.vue";

// Estados reativos
const machineData = ref(null);
const isLoading = ref(true);
const error = ref(null);

// Acessa a rota atual para obter os parâmetros da URL
const route = useRoute();

// Computada para o título da página
const pageTitle = computed(() => {
  if (machineData.value) {
    return `Detalhes da Máquina: ${machineData.value.codigo}`;
  }
  return 'Detalhes da Máquina';
});

// Função para buscar os dados do item específico
const fetchMachineDetails = async () => {
  const tableName = route.params.tableName;
  const machineId = route.params.id;

  if (!tableName || !machineId) {
    error.value = "Tipo ou ID da máquina não fornecido na URL.";
    isLoading.value = false;
    return;
  }

  isLoading.value = true;
  error.value = null;

  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/${tableName}/${machineId}`);
    machineData.value = response.data;
  } catch (err) {
    console.error("Erro ao buscar detalhes da máquina:", err);
    error.value = err.message || "Não foi possível conectar à API.";
  } finally {
    isLoading.value = false;
  }
};

// Busca os dados quando o componente é montado
onMounted(fetchMachineDetails);
</script>
