<template>
  <BackGround class="w-full">
    <!--Menu-->
    <MenuSession />

    <!--Conteúdo centralizado-->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!--Header-->
      <div class="flex-grow flex flex-col w-full text-white text-center py-10">
        <p class="text-2xl font-semibold text-shadow-2xs">
          Elevação Segura, Inteligente e Durável
        </p>
      </div>

      <!--Cards-->
      <div
        class="flex flex-col lg:flex-row w-full mt-10 lg:mt-20 items-center justify-center gap-10 lg:gap-20"
      >
        <!--Card: Compressor-->
        <div
          class="border-4 border-white rounded-lg shadow-2xl relative overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md h-96 flex items-center justify-center bg-gray-800 opacity-80"
        >
          <div class="text-center px-4">
            <p class="text-lg font-bold text-white mb-2">Compressor de Ar</p>
            <p class="text-yellow-400 font-semibold text-base">Em breve</p>
            <p class="text-sm text-gray-200 mt-2">
              Este recurso está em manutenção e estará disponível em breve.
            </p>
          </div>
        </div>

        <!--Card: Elevador com link-->
        <router-link to="/elevators/home" class="w-full max-w-xs sm:max-w-sm md:max-w-md">
          <div
            class="border-4 border-white rounded-lg shadow-2xl relative overflow-hidden h-96 group -translate-y-1"
          >
            <img
              src="../../assets/images/SessionImages/elevator.png"
              alt="elevator"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              class="absolute inset-x-0 bottom-0 bg-black/80 px-4 py-4 text-white text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
            >
              <p class="text-lg font-bold border-b border-white">Elevadores</p>
              <p class="text-sm mt-2">
                Soluções robustas e seguras para transporte vertical em ambientes exigentes. Projetados para alta performance, nossos elevadores atendem às demandas de indústrias, galpões e empreendimentos com máxima eficiência e durabilidade.
              </p>
            </div>
          </div>
        </router-link>

        <!--Card: Ventilador-->
      <div
          class="border-4 border-white rounded-lg shadow-2xl relative overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md h-96 flex items-center justify-center bg-gray-800 opacity-80"
        >
          <div class="text-center px-4">
            <p class="text-lg font-bold text-white mb-2">Ventilador</p>
            <p class="text-yellow-400 font-semibold text-base">Em breve</p>
            <p class="text-sm text-gray-200 mt-2">
              Este recurso está em manutenção e estará disponível em breve.
            </p>
          </div>
        </div>

      </div>
    </div>

    <Footer />
  </BackGround>
</template>

<script setup>
import BackGround from "@/components/BackGround.vue";
import MenuSession from "@/components/Menus/MenuSession.vue";
import Footer from "@/components/Footer.vue";
</script>
