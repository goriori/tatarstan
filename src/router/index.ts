import { createRouter, createWebHistory } from 'vue-router'

const PersonView = () => import('@/pages/person/Person.vue')
const PersonOutView = () => import('@/pages/person-out/PersonOut.vue')
const MenuControllerView = () =>
  import('@/pages/menu-controller/MenuController.vue')
const CaptureCameraView = () =>
  import('@/pages/capture-camera/CaptureCamera.vue')
const StandbyView = () => import('@/pages/standby/Standby.vue')
const UiView = () => import('@/pages/ui/Ui.vue')
const ProjectInfoView = () => import('@/pages/project-info/ProjectInfo.vue')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'standby',
      meta: {
        name: 'Экран заставки',
      },
      component: StandbyView,
    },
    {
      path: '/person',
      name: 'person',
      meta: {
        name: 'Главная страница',
      },
      component: PersonView,
    },
    {
      path: '/person/out',
      name: 'person-out',
      meta: {
        name: 'Обработанное изображение',
      },
      component: PersonOutView,
    },
    {
      path: '/capture',
      name: 'capture-camera',
      meta: {
        name: 'Захват камеры',
      },
      component: CaptureCameraView,
    },
    {
      path: '/controller',
      name: 'controller',
      meta: {
        name: 'Страница контроллера',
      },
      component: MenuControllerView,
    },
    {
      path: '/ui',
      name: 'ui',
      meta: {
        name: 'Ui Kit',
      },
      component: UiView,
    },
    {
      path: '/project-info',
      name: 'project-info',
      meta: {
        name: 'Страница о проекте',
      },
      component: ProjectInfoView,
    },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})
router.beforeEach((_to, _from, next) => {
  next()
})
export default router
