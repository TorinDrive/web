<template>
  <BackGround color1Intensity="40" color2Intensity="60">
    <MenuElevator />
    <SectionHeader title="Maquínas de Tração" />

    <div class="max-w-7xl right-0 left-0 mx-auto">
      <!-- Cabeçalho da máquina -->
      <div
        class="bg-white shadow rounded-xl p-6 flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6"
      >
        <div class="space-y-2 text-sm text-gray-700">
          <h2 class="text-2xl font-bold text-black">SGL12</h2>
          <ul class="list-disc ml-5">
            <li><strong>Tração Nominal:</strong> 2:1</li>
            <li><strong>Carga Estática:</strong> 2.000kg</li>
            <li>
              <strong>Alimentação do Freio:</strong> 110Vcc/2×0,84A a 450kg
            </li>
            <li><strong>Peso Aproximado:</strong> 190kg</li>
            <li>
              <strong>Resgate Manual Remoto:</strong> Disponível Opcionalmente
            </li>
            <li><strong>Instalação:</strong> Horizontal</li>
            <li><strong>Aplicação:</strong> Em Geral</li>
          </ul>
        </div>

        <!-- Imagens -->
        <div class="flex gap-4 mt-4 lg:mt-0">
          <img src="" alt="Máquina" class="w-24 h-24 object-contain" />
          <img src="" alt="Desenho Técnico" class="w-24 h-24 object-contain" />
        </div>
      </div>

      <!-- Tabela de dados -->
      <div class="w-full">
        <div class="overflow-x-auto shadow rounded-xl mx-auto">
          <table class="min-w-full text-sm text-center bg-white">
            <thead class="bg-gray-200 text-gray-700">
              <tr>
                <th class="px-3 py-2 whitespace-nowrap">Código</th>
                <th class="px-3 py-2 whitespace-nowrap">Capacidade (kg)</th>
                <th class="px-3 py-2 whitespace-nowrap">Velocidade (m/s)</th>
                <th class="px-3 py-2 whitespace-nowrap">Potência (kW)</th>
                <th class="px-3 py-2 whitespace-nowrap">Polos</th>
                <th class="px-3 py-2 whitespace-nowrap">Redução</th>
                <th class="px-3 py-2 whitespace-nowrap">Tensão (Vca)</th>
                <th class="px-3 py-2 whitespace-nowrap">Corrente (A)</th>
                <th class="px-3 py-2 whitespace-nowrap">Rotação (rpm)</th>
                <th class="px-3 py-2 whitespace-nowrap">Diâmetro</th>
                <th class="px-3 py-2 whitespace-nowrap">Cabo #</th>
                <th class="px-3 py-2 whitespace-nowrap">Ø</th>
                <th class="px-3 py-2 whitespace-nowrap">Passo</th>
                <th class="px-3 py-2 whitespace-nowrap">Detalhes</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in machineData"
                :key="index"
                class="border-t hover:bg-gray-50 transition"
              >
                <td class="px-3 py-2 whitespace-nowrap">{{ item.codigo }}</td>
                <td class="px-3 py-2 whitespace-nowrap">{{ item.capacidade_kg }}</td>
                <td class="px-3 py-2 whitespace-nowrap">{{ item.velocidade_ms }}</td>
                <td class="px-3 py-2 whitespace-nowrap">{{ item.potencia_kw }}</td>
                <td class="px-3 py-2 whitespace-nowrap">{{ item.polos }}</td>
                <td class="px-3 py-2 whitespace-nowrap">{{ item.reducao }}</td>
                <td class="px-3 py-2 whitespace-nowrap">{{ item.tensao_alimentacao_vca }}</td>
                <td class="px-3 py-2 whitespace-nowrap">{{ item.corrente_a }}</td>
                <td class="px-3 py-2 whitespace-nowrap">{{ item.rotacao_motor_rpm }}</td>
                <td class="px-3 py-2 whitespace-nowrap">{{ item.diametro }}</td>
                <td class="px-3 py-2 whitespace-nowrap">{{ item.cabo_numero }}</td>
                <td class="px-3 py-2 whitespace-nowrap">{{ item.diametro_externo }}</td>
                <td class="px-3 py-2 whitespace-nowrap">{{ item.passo }}</td>
                <td class="px-3 py-2 whitespace-nowrap">
                  <RouterLink
                  to="/elevators/sem-engrenagem/details"
                  class="text-blue-600 underline cursor-pointer"
                  >
                  Ver detalhes
                  </RouterLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <Footer />
  </BackGround>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import BackGround from "@/components/BackGround.vue";
import Footer from "@/components/Footer.vue";
import MenuElevator from "@/components/Menus/MenuElevator.vue";
import SectionHeader from "@/components/SectionHeader.vue";

const machineData = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/mr_sgd00");
    machineData.value = response.data;
    console.log("Dados da máquina:", machineData.value);
  } catch (error) {
    console.error("Erro ao buscar dados da API:", error);
  }
});
</script>
