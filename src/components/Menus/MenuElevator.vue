<template>
  <div class="py-3 bg-red-gray-500 static">

  </div>
  <header class="bg-white flex items-center justify-between px-6 md:px-8 py-4 shadow-md relative">
    <div class="flex items-center space-x-3">
      <router-link to="/elevators/home">
        <img src="@/assets/images/logo.png" alt="Logo" class="h-18" />
      </router-link>
    </div>

    <nav class="hidden md:flex items-center text-red-600 font-semibold gap-3">
      <router-link to="/elevators/home" class="hover:underline">
        Home
      </router-link>
      <div class="w-0.5 h-6 bg-red-600 mx-2 rounded"></div>
      <div class="relative group">
        <button class="hover:underline focus:outline-none flex items-center gap-1">
          Produtos
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div class="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity z-10">
          <router-link to="/elevators/motors" class="block px-4 py-2 hover:bg-gray-100 text-gray-700">
            Motores
          </router-link>
          <router-link to="/elevators/components" class="block px-4 py-2 hover:bg-gray-100 text-gray-700">
            Componentes
          </router-link>
        </div>
      </div>
      <div class="w-0.5 h-6 bg-red-600 mx-2 rounded"></div>
      <router-link to="/clientes" class="hover:underline">
        Clientes
      </router-link>
      <div class="w-0.5 h-6 bg-red-600 mx-2 rounded"></div>
      <router-link to="/catalogo" class="hover:underline">
        Catálogo
      </router-link>
      <div class="w-0.5 h-6 bg-red-600 mx-2 rounded"></div>
      <router-link to="/contato" class="hover:underline">
        Contatos
      </router-link>
    </nav>
    
    <button class="hidden md:block bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition text-sm cursor-pointer">
      Solicite uma Solução
    </button>

    <div class="md:hidden">
      <button @click="toggleMobileMenu" class="text-red-600 focus:outline-none">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 transform -translate-y-2"
      enter-to-class="opacity-100 transform translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 transform translate-y-0"
      leave-to-class="opacity-0 transform -translate-y-2"
    >
      <nav v-if="isMobileMenuOpen" class="absolute top-full left-0 w-full bg-white shadow-lg md:hidden z-20 p-4">
        <div class="flex flex-col gap-4 text-gray-700 font-semibold">
          <router-link to="/elevators/home" @click="closeMobileMenu" class="hover:text-red-600">Home</router-link>
          
          <div>
            <button @click="toggleProdutosMenu" class="w-full flex justify-between items-center hover:text-red-600">
              <span>Produtos</span>
              <svg class="w-4 h-4 transition-transform" :class="{'rotate-180': isProdutosMenuOpen}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-if="isProdutosMenuOpen" class="mt-2 pl-4 flex flex-col gap-2 font-normal">
              <router-link to="/elevators/motors" @click="closeMobileMenu" class="hover:text-red-600">Motores</router-link>
              <router-link to="/elevators/components" @click="closeMobileMenu" class="hover:text-red-600">Componentes</router-link>
            </div>
          </div>

          <router-link to="/clientes" @click="closeMobileMenu" class="hover:text-red-600">Clientes</router-link>
          <router-link to="/catalogo" @click="closeMobileMenu" class="hover:text-red-600">Catálogo</router-link>
          <router-link to="/contato" @click="closeMobileMenu" class="hover:text-red-600">Contatos</router-link>

          <hr class="my-2"/>
          
          <button @click="closeMobileMenu" class="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition text-sm cursor-pointer w-full">
            Solicite uma Solução
          </button>
        </div>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isMobileMenuOpen = ref(false);
const isProdutosMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (!isMobileMenuOpen.value) {
    isProdutosMenuOpen.value = false;
  }
};

const toggleProdutosMenu = () => {
  isProdutosMenuOpen.value = !isProdutosMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  isProdutosMenuOpen.value = false;
};
</script>