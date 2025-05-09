<template>
  <BackGround class="mx-auto">
    <!--Menu-->
    <MenuSession />

    <!--Header-->
    <!--Header-->
    <div
      class="max-w-7xl mx-auto flex-grow flex-col w-full text-white text-center py-10"
    >
      <p class="text-2xl font-semibold text-shadow-2xs">Inovação</p>
    </div>

    <!-- Seção Inovação -->
    <div
      class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 p-10 text-white"
    >
      <!-- Grid de imagens -->
      <div class="w-full lg:w-1/2 grid grid-cols-2 gap-4">
        <img
          v-for="i in 4"
          :key="i"
          src="../../assets/images/workparty.png"
          alt="Elevador"
          class="rounded-lg shadow-md object-cover"
        />
      </div>

      <!-- Texto -->
      <div class="w-full lg:w-1/2 space-y-6">
        <h2 class="text-3xl font-bold">
          Elevando Experiências com Tecnologia, Segurança e Qualidade
        </h2>
        <p class="text-lg leading-relaxed">
          Na nova era da mobilidade vertical, nossos elevadores representam o
          que há de mais avançado em tecnologia e engenharia. Projetados com
          sistemas inteligentes, comandos intuitivos e sensores de alta
          precisão, garantem uma operação suave, silenciosa e eficiente —
          elevando a experiência de uso a um novo patamar. Segurança é
          prioridade.
        </p>
        <p class="text-lg leading-relaxed">
          Todos os nossos equipamentos passam por testes rigorosos e seguem
          padrões internacionais de qualidade. Contamos com sistemas de
          emergência automatizados, monitoramento em tempo real e estruturas
          reforçadas para proteger o que há de mais importante: as pessoas.
        </p>
        <p class="text-lg font-semibold">Qualidade que se vê e se sente.</p>
        <p class="text-lg leading-relaxed">
          Utilizamos materiais de alto desempenho e durabilidade, aliando
          resistência com design sofisticado. Nossos projetos se adaptam a
          diferentes espaços e estilos arquitetônicos, agregando valor e
          estética a qualquer ambiente.
        </p>
        <p class="text-lg font-semibold">Inovação que acompanha o futuro.</p>
        <p class="text-lg leading-relaxed">
          Cada elevador é pensado para durar, evoluir e acompanhar as novas
          demandas do mundo moderno. Com opções de personalização, integração
          com tecnologias sustentáveis e soluções inteligentes, oferecemos mais
          do que um produto — entregamos confiança.
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
