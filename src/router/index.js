import { createRouter, createWebHistory } from "vue-router";

// Session Selection Routes (permanecem os mesmos)
import HomeSession from "@/views/SessionSelection/Home.vue";
import InovationSession from "@/views/SessionSelection/Inovation.vue";
import AboutSession from "@/views/SessionSelection/About.vue";
import ContactSession from "@/views/SessionSelection/About.vue"; // Atenção: Usando o mesmo componente de About

// Session Elevators Routes
import HomeElevator from "@/views/Elevators/HomeElevator.vue";
import MotorsElevator from "@/views/Elevators/MotorsElevator.vue";
import ComponentesElevators from '@/views/Elevators/ComponentesView.vue';

import GearedMachine from '@/views/Elevators/GearedMachine.vue';
import GearlessMachine from "@/views/Elevators/GearlessMachine.vue"

import ComingSoon from "@/views/ComingSoon.vue";
// =================================================================
// == COMPONENTES GENÉRICOS QUE SERÃO REUTILIZADOS ==
// =================================================================
// Certifique-se que o arquivo MachineTypes.vue contém o código do Canvas "vue_reusable_listing_page"
import MachineTypesSGD from "@/views/Elevators/MachineTypesSGD.vue";
import MachineTypesDMGHGL from "@/views/Elevators/MachineTypesDMG-HGL.vue";
import MachineTypesBGL from "@/views/Elevators/MachineTypesBGL.vue";
import MachineTypesRGL from "@/views/Elevators/MachineTypesRGL.vue";
import MachineTypesSGL from "@/views/Elevators/MachineTypesSGL.vue";
// Certifique-se que o arquivo MotorsDetails.vue contém o código do Canvas "vue_pagina_detalhes_dinamica"
import MotorsDetails from "@/views/Elevators/MotorsDetails.vue";

;
// =================================================================

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ... suas rotas de Home, Inovation, About, etc. ...
    { path: "/", name: "HomeSession", component: HomeSession },
    { path: "/inovation", name: "InovationSession", component: InovationSession },
    { path: "/about", name: "AboutSession", component: AboutSession },
    { path: "/Contact", name: "ContactSession", component: ContactSession },
    { path: "/elevators/home", name: "HomeElevator", component: HomeElevator },
    { path: "/elevators/motors", name: "MotorsElevator", component: MotorsElevator },
    { path: "/elevators/components", name: "ComponentesElevators", component: ComponentesElevators },


    { path: "/elevators/geared-machine", name: "GearedMachine", component: GearedMachine },
    { path: "/elevators/gearless-machine", name: "GearlessMachine", component: GearlessMachine },


    { path: "/em-desenvolvimento", name: "commingSoon", component: ComingSoon },












    // =================================================================
    // == ROTAS DE LISTAGEM USANDO O COMPONENTE REUTILIZÁVEL ==
    // =================================================================
    {
      path: "/elevators/com-engrenagem/sgd",
      name: "MachineTypesSGD",
      component: MachineTypesSGD, // Usando o componente genérico
      props: {
        pageTitle: "Máquinas de Tração - Linha SGD", // Título da página
        apiEndpoint: "/api/mr_sgd00", // Endpoint da API para esta linha
        detailsRouteBase: "/details" // Rota base para os detalhes
      }
    },
    // =================================================================    
    {
      path: "/elevators/sem-engrenagem/dmg-hgl",
      name: "MachineTypesDMG-HGL",
      component: MachineTypesDMGHGL, // Usando o componente genérico
      props: {
        pageTitle: "Máquinas de Tração - Linha DMG-HGL", // Título da página
        apiEndpoint: "/api/mr_sgd00", // Endpoint da API para esta linha
        detailsRouteBase: "/details" // Rota base para os detalhes
      }
    },
     // =================================================================    
    {
      path: "/elevators/sem-engrenagem/bgl",
      name: "MachineTypesBGL",
      component: MachineTypesBGL, // Usando o componente genérico
      props: {
        pageTitle: "Máquinas de Tração - Linha BGL", // Título da página
        apiEndpoint: "/api/mr_bgl225", // Endpoint da API para esta linha
        detailsRouteBase: "/details" // Rota base para os detalhes
      }
    },
    {
      path: "/elevators/sem-engrenagem/rgl",
      name: "MachineTypesRGL",
      component: MachineTypesRGL, // Usando o componente genérico
      props: {
        pageTitle: "Máquinas de Tração - Linha RGL", // Título da página
        apiEndpoint: "/api/mr_bgl225", // Endpoint da API para esta linha
        detailsRouteBase: "/details" // Rota base para os detalhes
      }
    },
    {
      path: "/elevators/sem-engrenagem/sgl",
      name: "MachineTypesSGL",
      component: MachineTypesSGL, // Usando o componente genérico
      props: {
        pageTitle: "Máquinas de Tração - Linha SGL", // Título da página
        apiEndpoint: "/api/mr_bgl225", // Endpoint da API para esta linha
        detailsRouteBase: "/details" // Rota base para os detalhes
      }
    },










    // =================================================================
    // == ROTA DE DETALHES DINÂMICA E REUTILIZÁVEL ==
    // =================================================================
    {
      path: "/details/:tableName/:id", // Rota dinâmica que aceita o nome da tabela e o ID
      name: "MachineDetails",
      component: MotorsDetails, // O seu componente de detalhes dinâmico
      // O componente MotorsDetails.vue pegará 'tableName' e 'id' dos parâmetros da rota
    },
  ],
});

export default router;