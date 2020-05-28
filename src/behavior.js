import { Timer } from './timer'

const TimerBehavior = Behavior({
  pageLifetimes: {
    show () { Timer.pageShow(this.__wxWebviewId__) },
    hide () { Timer.pageHide(this.__wxWebviewId__) }
  },
  methods: {
    $setTimeout (fn = () => {}, timeout = 0, ...arg) {
      const timer = new Timer(false, this.__wxWebviewId__, fn, timeout, ...arg)
      return timer.id
    },
    $setInterval (fn = () => {}, timeout = 0, ...arg) {
      const timer = new Timer(true, this.__wxWebviewId__, fn, timeout, ...arg)
      return timer.id
    },
    $clearInterval (id) {
      Timer.clear(this.__wxWebviewId__, id)
    },
    $clearTimeout (id) {
      Timer.clear(this.__wxWebviewId__, id)
    },
  },
  created () { Timer.pageLoad(this.__wxWebviewId__) },
  detached () { Timer.pageUnLoad(this.__wxWebviewId__) },
})

export { TimerBehavior }
