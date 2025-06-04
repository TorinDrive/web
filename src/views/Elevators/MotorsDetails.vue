<template>
  <BackGround color1Intensity="40" color2Intensity="60">
    <MenuElevator />
    <SectionHeader title="Máquinas de Tração - Linha SGL" />

    <div class="pt-6 max-w-7xl mx-auto min-h-screen">
      <!-- Modelo da máquina -->
      <div class="bg-gray-300 text-center py-2 rounded-md font-semibold text-sm mb-4">
        SGL23S-62P0-10MM-LV-ERN1387
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Ficha de Dados -->
        <div class="bg-white rounded shadow p-4">
          <h2 class="text-center font-bold border-b pb-2 mb-4">Ficha de Dados</h2>
          <div class="overflow-x-auto">
            <table class="w-full text-sm text-left border border-gray-300">
              <thead class="bg-gray-100">
                <tr>
                  <th class="px-3 py-2 border">Capacidade</th>
                  <th class="px-3 py-2 border">Velocidade</th>
                  <th class="px-3 py-2 border">Potência</th>
                  <th class="px-3 py-2 border">Polos</th>
                  <th class="px-3 py-2 border">Tensão de Alimentação</th>
                  <th class="px-3 py-2 border">Corrente</th>
                  <th class="px-3 py-2 border">Rotação do Motor</th>
                  <th class="px-3 py-2 border">Tensão do Freio</th>
                  <th class="px-3 py-2 border">Corrente do Freio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-3 py-2 border">630 kg</td>
                  <td class="px-3 py-2 border">2,00 m/s</td>
                  <td class="px-3 py-2 border">8,4 kW</td>
                  <td class="px-3 py-2 border">32</td>
                  <td class="px-3 py-2 border">220 VAC</td>
                  <td class="px-3 py-2 border">36,8 A</td>
                  <td class="px-3 py-2 border">192 rpm</td>
                  <td class="px-3 py-2 border">110 Vcc</td>
                  <td class="px-3 py-2 border">2x1 28 A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Desenho Técnico -->
        <div class="space-y-4">
          <div class="bg-white rounded shadow p-4">
            <h2 class="text-center font-bold border-b pb-2 mb-4">Desenho Técnico</h2>
            <img src="" alt="Desenho Técnico" class="mx-auto rounded" />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <img src="" alt="Encoder" class="rounded shadow" />
            <img src="" alt="Motor" class="rounded shadow" />
          </div>
        </div>
      </div>

      <!-- Cards Técnicos -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div class="bg-white shadow rounded p-3 text-sm">
          <p><strong>Tipo:</strong> Máquina Sem Engrenagem, Tração 2:1</p>
        </div>
        <div class="bg-white shadow rounded p-3 text-sm">
          <p><strong>Polia:</strong> Ø400mm, ØCabo: 8, ØCabo: 10mm, Passo: 16mm</p>
        </div>
        <div class="bg-white shadow rounded p-3 text-sm">
          <p><strong>Torque Nominal:</strong> 420 Nm</p>
        </div>
        <div class="bg-white shadow rounded p-3 text-sm">
          <p><strong>Eficiência:</strong> 82,8%</p>
        </div>
        <div class="bg-white shadow rounded p-3 text-sm">
          <p><strong>Percurso Máximo:</strong> 90,0 m</p>
        </div>
        <div class="bg-white shadow rounded p-3 text-sm">
          <p><strong>Carga Estática:</strong> 3.000 kg</p>
        </div>
        <div class="bg-white shadow rounded p-3 text-sm">
          <p><strong>Fator de Potência:</strong> 0,914</p>
        </div>
        <div class="bg-white shadow rounded p-3 text-sm">
          <p><strong>Sem Casa de Máquina:</strong> Sim</p>
        </div>
        <div class="bg-white shadow rounded p-3 text-sm">
          <p><strong>Abertura Remota do Freio:</strong> Não Incluso</p>
        </div>
        <div class="bg-white shadow rounded p-3 text-sm">
          <p><strong>Embalagem:</strong> 500×500×833 mm / Caixa de Madeira</p>
        </div>
        <div class="bg-white shadow rounded p-3 text-sm">
          <p><strong>Peso:</strong> Bruto: 323 kg / Líquido: 315 kg</p>
        </div>
      </div>

      <!-- Dados do Encoder -->
      <div class="bg-white rounded shadow p-4 mt-6">
        <h3 class="text-center font-semibold border-b pb-2 mb-2">ENCODER PADRÃO</h3>
        <p class="text-sm mb-1">• Encoder: Interno</p>
        <div class="mt-2">
          <h4 class="font-semibold mb-1">DADOS DO ENCODER</h4>
          <ul class="text-sm list-disc list-inside">
            <li>Modelo: Heidenhain ERN-1387</li>
            <li>Tipo: Senoidal</li>
            <li>n Pulsos: 2.048</li>
            <li>Tensão de Alimentação: 5V</li>
            <li>Comprimento Cabo: 10m</li>
            <li>Lado Inversor: Cabo</li>
            <li>Lado Encoder: Conector</li>
          </ul>
        </div>
        <img src="" alt="Tabela Encoder" class="w-full mt-2 rounded" />
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


</script>
