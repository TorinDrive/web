<template>
  <BackGround class="w-full bg-white">
    <MenuSession />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="flex flex-col lg:flex-row w-full mt-10 lg:mt-20 items-center justify-center gap-10 lg:gap-20"
      >
        <!--Card: Compressor-->
        <div
          class="border-4 border-white rounded-xl shadow-2xl w-full max-w-md h-96 flex items-center justify-center bg-gray-800 opacity-90 transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
        >
          <div class="text-center px-4">
            <p class="text-2xl font-bold text-white mb-2">Compressor de Ar</p>
            <p class="text-yellow-400 font-semibold text-lg">Em breve</p>
          </div>
        </div>

        <!--Card: Elevador com link-->
        <router-link to="/elevators/home" class="w-full max-w-md">
          <div
            class="border-4 border-white rounded-xl shadow-2xl h-96 flex items-center justify-center bg-gray-800 opacity-90 transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
          >
            <div class="text-center px-4">
              <p class="text-2xl font-bold text-white mb-2">Elevadores</p>
              <p class="text-white text-lg">
                Soluções robustas e seguras para transporte vertical em ambientes exigentes.
              </p>
            </div>
          </div>
        </router-link>

        <!--Card: Ventilador-->
        <div
          class="border-4 border-white rounded-xl shadow-2xl w-full max-w-md h-96 flex items-center justify-center bg-gray-800 opacity-90 transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
        >
          <div class="text-center px-4">
            <p class="text-2xl font-bold text-white mb-2">Ventilador</p>
            <p class="text-yellow-400 font-semibold text-lg">Em breve</p>
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