<template>
  <div class="min-h-screen bg-gray-100 font-sans">
    <!-- Cabeçalho Simples -->
    <header class="bg-white shadow-md">
      <nav class="container mx-auto px-6 py-3 flex justify-between items-center">
        <div>
          <a href="#" class="text-xl font-bold text-gray-800 hover:text-gray-700">TORINDRIVE <span class="text-red-600">Brasil</span></a>
        </div>
        <div>
          <a href="#" class="text-gray-800 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
          <a href="#" class="text-gray-800 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Produtos</a>
          <a href="#" class="text-gray-800 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Contato</a>
          <a
            href="#"
            class="ml-4 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-colors"
          >
            Solicite um Orçamento
          </a>
        </div>
      </nav>
    </header>

    <!-- Título da Seção -->
    <div class="bg-red-600">
      <div class="container mx-auto px-6 py-3">
        <h1 class="text-2xl font-semibold text-white">Componentes do Elevador</h1>
      </div>
    </div>

    <!-- Área Principal do Diagrama -->
    <main class="container mx-auto p-4 md:p-8">
      <div class="relative w-full max-w-4xl mx-auto aspect-[3/4] bg-white p-4 rounded-lg shadow-xl border border-gray-200">
        <!-- Imagem Central do Elevador -->
        <img
          :src="elevatorDiagramUrl"
          alt="Diagrama do Elevador"
          class="w-full h-full object-contain"
          @error="onImageError($event, 'Diagrama do Elevador')"
        />

        <!-- Componentes Posicionados -->
        <div
          v-for="component in components"
          :key="component.id"
          class="absolute p-1 bg-white bg-opacity-80 backdrop-blur-sm rounded-md shadow-lg border border-gray-300 transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110 hover:z-10"
          :style="{ top: component.position.top, left: component.position.left, right: component.position.right, bottom: component.position.bottom }"
        >
          <div class="flex flex-col items-center text-center w-28 md:w-32">
            <img
              :src="component.imageUrl"
              :alt="component.name"
              class="w-16 h-16 md:w-20 md:h-20 object-contain mb-1 rounded-sm"
              @error="onImageError($event, component.name)"
            />
            <span class="text-xs md:text-sm font-medium text-gray-700 leading-tight">{{ component.name }}</span>
          </div>
        </div>
      </div>
    </main>

    <!-- Rodapé Simples -->
    <footer class="bg-gray-800 text-white mt-12">
      <div class="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-2">TORINDRIVE Brasil</h3>
          <p class="text-sm text-gray-400">Soluções inovadoras para elevadores.</p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Navegação</h3>
          <ul class="text-sm space-y-1">
            <li><a href="#" class="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Sobre Nós</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Produtos</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Contato</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Contato</h3>
          <p class="text-sm text-gray-400">Email: contato@torindrive.br</p>
          <p class="text-sm text-gray-400">Telefone: (XX) XXXX-XXXX</p>
        </div>
      </div>
      <div class="bg-gray-900 py-4">
        <p class="text-center text-sm text-gray-500">&copy; {{ new Date().getFullYear() }} TORINDRIVE Brasil. Todos os direitos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// URL da imagem central do diagrama do elevador (substitua pela sua imagem real)
const elevatorDiagramUrl = ref('https://placehold.co/600x800/e2e8f0/94a3b8?text=Diagrama+Elevador');

// Dados simulados para os componentes
// As posições (top, left, right, bottom) são em porcentagem e podem precisar de ajuste fino
// para corresponder ao seu diagrama específico.
// O transform -translate-x-1/2 -translate-y-1/2 ajuda a centralizar o componente em seu ponto de ancoragem.
const components = ref([
  {
    id: 1,
    name: 'Painel de Controle',
    imageUrl: 'https://placehold.co/100x100/f87171/ffffff?text=Painel',
    position: { top: '10%', left: '15%' },
  },
  {
    id: 2,
    name: 'Motor de Tração',
    imageUrl: 'https://placehold.co/100x100/fbbf24/ffffff?text=Motor',
    position: { top: '15%', right: '10%' },
  },
  {
    id: 3,
    name: 'Limitador de Velocidade',
    imageUrl: 'https://placehold.co/100x100/a3e635/ffffff?text=Limitador',
    position: { top: '30%', left: '10%' },
  },
  {
    id: 4,
    name: 'Cabos de Aço',
    imageUrl: 'https://placehold.co/100x100/4ade80/ffffff?text=Cabos',
    position: { top: '50%', right: '15%' },
  },
  {
    id: 5,
    name: 'Operador de Porta',
    imageUrl: 'https://placehold.co/100x100/34d399/ffffff?text=Porta',
    position: { top: '65%', left: '20%' },
  },
  {
    id: 6,
    name: 'Guias da Cabine',
    imageUrl: 'https://placehold.co/100x100/2dd4bf/ffffff?text=Guias',
    position: { bottom: '25%', left: '10%' },
  },
  {
    id: 7,
    name: 'Amortecedores',
    imageUrl: 'https://placehold.co/100x100/67e8f9/ffffff?text=Amortecedor',
    position: { bottom: '10%', right: '15%' },
  },
  {
    id: 8,
    name: 'Contrapeso',
    imageUrl: 'https://placehold.co/100x100/a5f3fc/ffffff?text=Contrapeso',
    position: { top: '40%', left: '85%' }, // Exemplo de posicionamento mais à direita
  },
  {
    id: 9,
    name: 'Botoeira da Cabine',
    imageUrl: 'https://placehold.co/100x100/818cf8/ffffff?text=Botoeira',
    position: { top: '75%', left: '50%' }, // Centralizado na parte inferior
  },
]);

// Função para lidar com erro de carregamento de imagem (opcional)
const onImageError = (event, componentName) => {
  console.warn(`Erro ao carregar imagem para: ${componentName}`, event.target.src);
  // Você pode substituir por uma imagem de placeholder padrão aqui, se desejar
  event.target.src = 'https://placehold.co/100x100/cbd5e1/475569?text=Erro+Img';
};

</script>

<style scoped>
/* Estilos adicionais específicos, se necessário. Tailwind deve cobrir a maior parte. */
/* Para garantir que o posicionamento absoluto funcione corretamente dentro do container do diagrama */
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
/* Para ajudar a centralizar os componentes em seu ponto de ancoragem de posicionamento */
.transform.-translate-x-1\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform.-translate-y-1\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
/* Se você não tiver Tailwind JIT, pode precisar definir essas classes de transform manualmente */
</style>