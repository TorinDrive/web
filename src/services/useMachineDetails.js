// ./composables/useMachineDetails.js
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

export function useMachineDetails() {
  const route = useRoute();
  const machineData = ref(null);
  const isLoading = ref(true);
  const error = ref(null);

  // Pega os parâmetros da rota
  const tableName = route.params.tableName;
  const machineId = route.params.id;

  const pageTitle = computed(() => {
    if (machineData.value) {
      return `Detalhes: ${machineData.value.codigo}`;
    }
    return 'Detalhes da Máquina';
  });

  const fetchMachineDetails = async () => {
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
      error.value = err.response?.data?.detail || err.message || "Não foi possível conectar à API.";
    } finally {
      isLoading.value = false;
    }
  };

  return {
    machineData,
    isLoading,
    error,
    pageTitle,
    fetchMachineDetails,
  };
}