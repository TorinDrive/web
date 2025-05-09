<template>
  <BackGround class="mx-auto">
    <!--Menu-->
    <MenuSession />

    <!--Header-->
    <div
      class="max-w-7xl mx-auto flex-grow flex-col w-full text-white text-center py-10"
    >
      <p class="text-2xl font-semibold text-shadow-2xs">Sobre Nós</p>
    </div>

    <!-- Seção Sobre a Empresa -->
    <div
      class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center p-10 gap-10 space-x-10"
    >
      <!-- Imagem -->
      <div class="w-full lg:w-1/2">
        <img
          src="../../assets/images/workparty.png"
          alt="Equipe"
          class="rounded-lg shadow-md"
        />
      </div>
      <!-- Texto -->
      <div class="w-full lg:w-1/2 text-white">
        <h2 class="text-3xl font-bold mb-4">Sobre a Nossa Empresa</h2>
        <p class="text-lg leading-relaxed mb-4">
          Somos uma empresa especializada em soluções completas para mobilidade
          e climatização industrial. Atuamos com foco em elevadores,
          compressores de ar e ventiladores industriais, oferecendo equipamentos
          de alta qualidade, tecnologia de ponta e um compromisso constante com
          a inovação.
        </p>
        <p class="text-lg leading-relaxed mb-4">
          Desde o início, nosso propósito é claro: entregar eficiência,
          segurança e performance em cada projeto. Trabalhamos lado a lado com
          nossos clientes para entender suas necessidades e oferecer soluções
          personalizadas que valorizam cada espaço.
        </p>
        <p class="text-lg leading-relaxed">
          Movemos pessoas, impulsionamos indústrias e conectamos o presente ao
          futuro.
        </p>
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

<style>
.text-shadow-2xs {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
</style>
