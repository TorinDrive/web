<template>
  <div class="py-10 max-w-7xl mx-auto">
    <div v-for="(section, index) in sections" :key="index" class="mb-12">
      <div class="sm:flex sm:items-center mb-4">
        <div class="sm:flex-auto">
          <h1 class="text-lg font-semibold text-gray-900">
            {{ section.title }}
          </h1>
          <p
            v-if="index === sections.length - 1"
            class="mt-2 text-sm text-gray-700"
          >
            Conversão de kW para CV usar como referência o valor de: 1 kW =
            1,341 CV
          </p>
        </div>
      </div>
      <div class="overflow-x-auto rounded-xl shadow-lg bg-white">
        <table class="min-w-full divide-y divide-gray-200 text-sm text-center">
          <thead class="bg-gray-100">
            <tr>
              <th
                scope="col"
                class="py-3.5 px-4 text-sm font-semibold text-gray-900"
              >
                {{ section.headers[0] }}
              </th>
              <th
                v-for="header in section.headers.slice(1)"
                :key="header"
                class="px-4 py-3.5 text-sm font-semibold text-gray-900"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr>
              <td class="py-4 px-4 font-medium text-gray-900">
                {{ section.units }}
              </td>
              <td
                v-for="(value, idx) in section.values"
                :key="idx"
                class="px-4 py-4 text-gray-700"
              >
                {{ value }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          title: "Passageiros",
          headers: [
            "Qtde",
            "2",
            "4",
            "6",
            "8",
            "10",
            "13",
            "14",
            "15",
            "16",
            "20",
            "21",
            "32",
            "73",
          ],
          units: "kg",
          values: [
            "150",
            "300",
            "450",
            "600",
            "750",
            "975",
            "1050",
            "1125",
            "1200",
            "1500",
            "1575",
            "2400",
            "5475",
          ],
        },
        {
          title: "Velocidade",
          headers: [
            "Qtde",
            "2",
            "4",
            "6",
            "8",
            "10",
            "13",
            "14",
            "15",
            "16",
            "20",
            "21",
            "32",
            "73",
          ],
          units: "kg",
          values: [
            "150",
            "300",
            "450",
            "600",
            "750",
            "975",
            "1050",
            "1125",
            "1200",
            "1500",
            "1575",
            "2400",
            "5475",
          ],
        },
        {
          title: "Cabos de Aço",
          headers: [
            "Ç",
            "2",
            "4",
            "6",
            "8",
            "10",
            "13",
            "14",
            "15",
            "16",
            "20",
            "21",
            "32",
            "73",
          ],
          units: "kg",
          values: [
            "150",
            "300",
            "450",
            "600",
            "750",
            "975",
            "1050",
            "1125",
            "1200",
            "1500",
            "1575",
            "2400",
            "5475",
          ],
        },
        {
          title: "POTÊNCIA",
          headers: [
            "Ç",
            "2",
            "4",
            "6",
            "8",
            "10",
            "13",
            "14",
            "15",
            "16",
            "20",
            "21",
            "32",
            "73",
          ],
          units: "kg",
          values: [
            "150",
            "300",
            "450",
            "600",
            "750",
            "975",
            "1050",
            "1125",
            "1200",
            "1500",
            "1575",
            "2400",
            "5475",
          ],
        },
      ],
    };
  },
};
</script>

<style>
@media (max-width: 768px) {
  table {
    font-size: 0.875rem;
  }
  h1 {
    font-size: 1.25rem;
  }
}
</style>
