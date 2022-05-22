import LButton from './button.vue'
import LDialog from './dialog.vue'
import LInput from './input.vue'
import './index.css'

const components = [
  LButton,
  LDialog,
  LInput
]

const install = function (Vue) {
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}
