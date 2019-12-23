import MyHomeLayout from './pages/MyHomeLayout'

export default Vue => {
  require('./global.css')

  return [
    {
      path: '/module',
      name: 'module-root',
      component: MyHomeLayout
    }
  ]
}
