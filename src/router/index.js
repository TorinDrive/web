import { createRouter, createWebHistory } from "vue-router";
//Session Selection Routes
import HomeSession from "@/views/SessionSelection/Home.vue";
import InovationSession from "@/views/SessionSelection/Inovation.vue";
import AboutSession from "@/views/SessionSelection/About.vue";
import ContactSession from "@/views/SessionSelection/About.vue";
//Session Elevators Routes
import HomeElevator from "@/views/Elevators/HomeElevator.vue";
import MotorsElevator from "@/views/Elevators/MotorsElevator.vue";
import MachineTypes from "@/views/Elevators/MachineTypes.vue";
//
import MotorSGDView from "@/views/Elevators/Motors/MotorSGDView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeSession",
      component: HomeSession,
    },
    {
      path: "/inovation",
      name: "InovationSession",
      component: InovationSession,
    },
    {
      path: "/about",
      name: "AboutSession",
      component: AboutSession,
    },
    {
      path: "/Contact",
      name: "ContactSession",
      component: ContactSession,
    },
    {
      path: "/elevators/home",
      name: "HomeElevator",
      component: HomeElevator,
    },
    {
      path: "/elevators/motors",
      name: "MotorsElevator",
      component: MotorsElevator,
    },
    {
      path: "/elevators/com-engrenagem/sgd",
      name: "SGDMachineTypes",
      component: MotorSGDView,
    },
    {
      path: "/elevators/sem-engrenagem/sgl",
      name: "MachineTypes",
      component: MachineTypes,
    },
  ],
});

export default router;
