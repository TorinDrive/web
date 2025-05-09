<template>
  <BackGround class="mx-auto">
    <!--Menu-->
    <MenuSession />
    <!--Header-->
    <div class="flex-grow flex-col w-full text-white text-center py-10">
      <p class="text-2xl font-semibold text-shadow-2xs">
        Elevação Segura, Inteligente e Durável
      </p>
    </div>

    <div class="flex flex-row w-full mt-20 items-center justify-center gap-20">
      <div
        class="border-4 border-white rounded-lg shadow-2xl relative overflow-hidden w-96 h-96 group"
      >
        <img
          src="../../assets/images/SessionImages/compressor.png"
          alt="compressor"
          class="w-96 h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div
          class="absolute inset-x-0 bottom-0 bg-black/80 px-4 py-4 text-white text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
        >
          <p class="text-lg font-bold border-b border-white">
            Compressor de Ar
          </p>
          <p class="text-sm mt-2">
            Potência, eficiência e confiabilidade para o seu processo
            industrial. Nossos compressores garantem alto desempenho com
            economia de energia, atendendo às mais diversas aplicações com
            máxima segurança e produtividade.
          </p>
        </div>
      </div>

      <router-link to="/elevators/home">
        <div
          class="border-4 border-white rounded-lg shadow-2xl relative overflow-hidden w-96 h-auto group -translate-y-20"
        >
          <img
            src="../../assets/images/SessionImages/elevator.png"
            alt="compressor"
            class="w-96 h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div
            class="absolute inset-x-0 bottom-0 bg-black/80 px-4 py-4 text-white text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
          >
            <p class="text-lg font-bold border-b border-white">Elevadores</p>
            <p class="text-sm mt-2">
              Soluções robustas e seguras para transporte vertical em ambientes
              exigentes. Projetados para alta performance, nossos elevadores
              atendem às demandas de indústrias, galpões e empreendimentos com
              máxima eficiência e durabilidade.
            </p>
          </div>
        </div>
      </router-link>

      <div
        class="border-4 border-white rounded-lg shadow-2xl relative overflow-hidden w-96 h-96 group"
      >
        <img
          src="../../assets/images/SessionImages/fan.png"
          alt="compressor"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div
          class="absolute inset-x-0 bottom-0 bg-black/80 px-4 py-4 text-white text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
        >
          <p class="text-lg font-bold border-b border-white">Ventiladores</p>
          <p class="text-sm mt-2">
            Soluções robustas e seguras para transporte vertical em ambientes
            exigentes. Projetados para alta performance, nossos elevadores
            atendem às demandas de indústrias, galpões e empreendimentos com
            máxima eficiência e durabilidade.
          </p>
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
