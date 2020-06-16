import { Timer } from './timer'
import { TimerStore } from './timer-store'

const TimerBehavior = Behavior({
  created () { this.$timerStore = new TimerStore() },
  detached () { this.$timerStore.hide() },
  pageLifetimes: {
    show () { this.$timerStore.show() },
    hide () { this.$timerStore.hide() }
  },
  methods: {
    $setTimeout (fn = () => {}, timeout = 0, ...arg) {
      const timer = new Timer(false, fn, timeout, ...arg)
      return this.$timerStore.addTimer(timer)
    },
    $setInterval (fn = () => {}, timeout = 0, ...arg) {
      const timer = new Timer(true, fn, timeout, ...arg)
      return this.$timerStore.addTimer(timer)
    },
    $clearInterval (id) { this.$timerStore.clear(id) },
    $clearTimeout (id) { this.$timerStore.clear(id) },
  }
})

export { TimerBehavior }
