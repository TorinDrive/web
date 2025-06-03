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
      <router-link to="/elevators/motors" class="hover:underline">
        Produtos
      </router-link>
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
