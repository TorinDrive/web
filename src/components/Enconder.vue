<template>
  <div class="overflow-x-auto p-4">
    <table class="min-w-full border border-gray-300 text-sm text-left text-gray-800">
      <thead class="bg-gray-100">
        <tr>
          <th colspan="3" class="border border-gray-300 p-2 text-center font-semibold">Lado do Inversor</th>
          <th colspan="2" class="border border-gray-300 p-2 text-center font-semibold">Lado do Encoder</th>
        </tr>
        <tr>
          <th class="border border-gray-300 p-2">Função</th>
          <th class="border border-gray-300 p-2">Ponta de cabo solta</th>
          <th class="border border-gray-300 p-2">Cor de cada via do cabo</th>
          <th class="border border-gray-300 p-2">Conector 12 pinos - PCB</th>
          <th class="border border-gray-300 p-2">Pino</th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr v-for="(row, index) in tableData" :key="index" class="hover:bg-gray-50">
          <td class="border border-gray-300 p-2">{{ row.funcao }}</td>
          <td class="border border-gray-300 p-2 text-center">-</td>
          <td class="border border-gray-300 p-2">{{ row.cor }}</td>
          <td class="border border-gray-300 p-2 text-center">-</td>
          <td class="border border-gray-300 p-2 text-center">{{ row.pino }}</td>
        </tr>
        <tr class="bg-gray-50">
          <td class="border border-gray-300 p-2">Malha de Blindagem</td>
          <td class="border border-gray-300 p-2 text-center">Malha de Blindagem</td>
          <td class="border border-gray-300 p-2"></td>
          <td class="border border-gray-300 p-2 text-center">-</td>
          <td class="border border-gray-300 p-2 text-center">-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const tableData = [
  { funcao: 'A+', cor: 'Verde/Preto', pino: 2 },
  { funcao: 'A-', cor: 'Amarelo/Preto', pino: 11 },
  { funcao: 'B+', cor: 'Azul/Preto', pino: 4 },
  { funcao: 'B-', cor: 'Vermelho/Preto', pino: 9 },
  { funcao: 'DATA+', cor: 'Cinza', pino: 12 },
  { funcao: 'DATA-', cor: 'Rosa', pino: 1 },
  { funcao: 'CLOCK+', cor: 'Roxo', pino: 8 },
  { funcao: 'CLOCK-', cor: 'Amarelo', pino: 5 },
  { funcao: '+5V', cor: 'Marrom/Verde', pino: 7 },
  { funcao: 'GND', cor: 'Branco/Verde', pino: 10 },
  { funcao: '+5V SENSOR', cor: 'Branco', pino: 6 },
  { funcao: '0V SENSOR', cor: 'Azul', pino: 3 }
];
</script>
