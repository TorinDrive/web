<template>
  <header
    class="bg-white flex items-center justify-between px-6 md:px-8 py-4 shadow-md"
  >
    <div class="flex items-center space-x-3">
      <img src="@/assets/images/logo.png" alt="Logo" class="h-10" />
    </div>

    <nav class="hidden md:flex items-center text-red-600 font-semibold gap-3">
      <router-link to="/elevators/home" class="hover:underline">
        Home
      </router-link>
      <div class="w-0.5 h-6 bg-red-600 mx-2 rounded"></div>
      <div class="relative group">
        <button
          class="hover:underline focus:outline-none flex items-center gap-1"
        >
          Produtos
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div
          class="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity z-10"
        >
          <router-link
        to="/elevators/motors"
        class="block px-4 py-2 hover:bg-gray-100 text-gray-700"
          >
        Motores
          </router-link>
          <router-link
        to="/elevators/components"
        class="block px-4 py-2 hover:bg-gray-100 text-gray-700"
          >
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

    <button
      class="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition text-sm cursor-pointer"
    >
      Solicite uma Solução
    </button>
  </header>
</template>
