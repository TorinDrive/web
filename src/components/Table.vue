<template>
  <div class="py-10 max-w-7xl mx-auto ">
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold text-gray-800">Tabelas de Unidades</h1>
    </div>
    <div v-for="(section, index) in sections" :key="index" class="mb-12">
      <div class="sm:flex sm:items-center mb-4">
        <div class="sm:flex-auto">
          <h2 class="text-lg font-semibold bg-red-600 text-white px-4 py-2 rounded-t-lg">
            {{ section.title }}
          </h2>
        </div>
      </div>
      <div class="overflow-x-auto rounded-b-lg shadow-lg bg-white">
        <table class="min-w-full divide-y divide-gray-200 text-sm text-center">
          <thead class="bg-gray-100">
            <tr>
              <!-- Cabeçalho da primeira coluna (ex: "Qtde", "m/s", etc.) -->
              <th scope="col" class="py-3.5 px-4 text-sm font-semibold text-gray-800">
                {{ section.firstHeader }}
              </th>
              <!-- Outros cabeçalhos numéricos -->
              <th
                v-for="header in section.headers"
                :key="header"
                class="px-4 py-3.5 text-sm font-semibold text-gray-800"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 bg-white">
            <!-- Loop para cada linha de dados (ex: uma linha para 'kg', outra para 'm/min', etc.) -->
            <tr v-for="(row, rowIndex) in section.rows" :key="rowIndex">
              <!-- Rótulo da linha (ex: "kg", "m/min") -->
              <td class="py-4 px-4 font-medium text-gray-900 bg-gray-50">
                {{ row.label }}
              </td>
              <!-- Valores da linha -->
              <td
                v-for="(value, valueIdx) in row.values"
                :key="valueIdx"
                class="px-4 py-4 text-gray-700"
              >
                {{ value }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
       <p
        v-if="section.footer"
        class="mt-2 text-xs text-gray-600 px-2"
      >
        {{ section.footer }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const sections = ref([
  {
    title: "PASSAGEIROS",
    firstHeader: 'Qtde',
    headers: ["2", "4", "6", "8", "10", "13", "14", "15", "16", "20", "21", "32", "73"],
    rows: [
      {
        label: "kg",
        values: ["150", "300", "450", "600", "750", "975", "1.050", "1.125", "1.200", "1.500", "1.575", "2.400", "5.475"],
      },
    ],
  },
  {
    title: "VELOCIDADE",
    firstHeader: 'm/s',
    headers: ["0,5", "0,75", "1", "1,25", "1,5", "1,75", "2", "2,5", "3", "4", "5", "6", "7"],
    rows: [

      {
        label: "m/min",
        values: ["30", "45", "60", "75", "90", "105", "120", "150", "180", "240", "300", "360", "420"],
      }
    ],
  },
  {
    title: "CABOS DE AÇO",
    firstHeader: 'mm',
    headers: ["6,0", "6,5", "6,7", "8", "10", "12", "13", "16"],
    rows: [
      {
        label: "polegadas",
        values: ['1/4"', '1/4"', '5/16"', '3/8"', '1/2"', '1/2"', '5/8"', '3/4"'], 
      }
    ],
  },
  {
    title: "POTÊNCIA",
    firstHeader: 'KW',
    headers: ["1,5", "3,5", "4,4", "5,5", "6,4", "7,5", "11", "12,5", "15", "22", "26", "34,5", "75,5"],
    footer: "*Conversão de kW para CV usar como referência o valor de: 1 kW = 1,341 CV",
    rows: [
      {
        label: "CV",
        values: ["2", "4,7", "5,9", "7,4", "8,6", "10", "14,7", "16,8", "20,1", "29,5", "34,9", "46,3", "101,2"],
      }
    ],
  },
]);
</script>
