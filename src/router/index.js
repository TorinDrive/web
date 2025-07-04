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

// =================================================================
// == COMPONENTES GENÉRICOS QUE SERÃO REUTILIZADOS ==
// =================================================================
// Certifique-se que o arquivo MachineTypes.vue contém o código do Canvas "vue_reusable_listing_page"
import MachineTypes from "@/views/Elevators/MachineTypes.vue"; 
// Certifique-se que o arquivo MotorsDetails.vue contém o código do Canvas "vue_pagina_detalhes_dinamica"
import MotorsDetails from "@/views/Elevators/MotorsDetails.vue";
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


    // =================================================================
    // == ROTAS DE LISTAGEM USANDO O COMPONENTE REUTILIZÁVEL ==
    // =================================================================
    {
      path: "/elevators/com-engrenagem/sgd",
      name: "MachineTypesSGD",
      component: MachineTypes, // Usando o componente genérico
      props: {
        pageTitle: "Máquinas de Tração - Linha SGD", // Título da página
        apiEndpoint: "/api/mr_sgd00", // Endpoint da API para esta linha
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