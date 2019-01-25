import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Registro from '@/components/Registro'
import ResetPass from '@/components/ResetPass'
import Marcaciones from '@/components/Marcaciones'
import Reservaciones from '@/components/Reservaciones'
import importHola from '@/components/ArchivoHola'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/registrarse',
      name: 'Registrarse',
      component: Registro
    },
    {
      path: '/restablecer',
      name: 'Restablecer',
      component: ResetPass
    },
    {
      path: '/marcaciones',
      name: 'Marcaciones',
      component: Marcaciones
    },
    {
      path: '/reservaciones',
      name: 'Reservaciones',
      component: Reservaciones
    },
    {
      path: '/holamundo',
      name: 'HolaMundo',
      component: importHola
    }
  ]
})
