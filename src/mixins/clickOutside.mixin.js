export default {
  directives: {
    outside: {
      bind (el, binding, vnode) {
        const $el = el
        $el.event = (event) => {
          if (!(el === event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event)
          }
        }
        window.addEventListener('click', el.event)
      },
      unbind (el) {
        window.removeEventListener('click', el.event)
      }
    }
  }
}
