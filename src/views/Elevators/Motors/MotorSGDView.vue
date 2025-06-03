<template>
  <BackGround color1Intensity="40" color2Intensity="60">
    <MenuElevator />
    <SectionHeader title="Maquínas de Tração" />

    <div class="p-6 bg-gray-100 min-h-screen">
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
      <div class="overflow-auto bg-white shadow rounded-xl">
        <table class="min-w-full text-sm text-center">
          <thead class="bg-gray-200">
            <tr>
              <th class="p-2">Código</th>
              <th class="p-2">Capacidade (kg)</th>
              <th class="p-2">Velocidade (m/s)</th>
              <th class="p-2">Potência (kW)</th>
              <th class="p-2">Polos</th>
              <th class="p-2">Redução</th>
              <th class="p-2">Tensão de Alimentação (Vca)</th>
              <th class="p-2">Corrente (A)</th>
              <th class="p-2">Rotação Motor (rpm)</th>
              <th class="p-2">Diâmetro</th>
              <th class="p-2">Cabo #</th>
              <th class="p-2">Ø</th>
              <th class="p-2">Passo</th>
              <th class="p-2">Detalhes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in machineData" :key="index" class="border-t">
              <td class="p-2">{{ item.codigo }}</td>
              <td class="p-2">{{ item.capacidade_kg }}</td>
              <td class="p-2">{{ item.velocidade_ms }}</td>
              <td class="p-2">{{ item.potencia_kw }}</td>
              <td class="p-2">{{ item.polos }}</td>
              <td class="p-2">{{ item.reducao }}</td>
              <td class="p-2">{{ item.tensao_alimentacao_vca }}</td>
              <td class="p-2">{{ item.corrente_a }}</td>
              <td class="p-2">{{ item.rotacao_motor_rpm }}</td>
              <td class="p-2">{{ item.diametro }}</td>
              <td class="p-2">{{ item.cabo_numero }}</td>
              <td class="p-2">{{ item.diametro_externo}}</td>
              <td class="p-2">{{ item.passo}}</td>
              <td class="p-2 text-blue-600 underline cursor-pointer">
                Clique aqui para ver detalhadamente
              </td>
            </tr>
          </tbody>
        </table>
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
import Table from "@/components/Table.vue";

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
