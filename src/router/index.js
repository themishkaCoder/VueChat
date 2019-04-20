import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Main from '@/components/Main'
import Chat from '@/components/Chat'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    }
  ],
  mode: "history"
})
