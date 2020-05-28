/**
 * 定时器管理库
 * @author chenzeji
 */

class Timer {
  /**
   * 清除定时器
   * @param {String} pageId 页面 id
   * @param {String} id 定时器 id
   */
  static clear (pageId, id) {
    const { timerStore } = Timer.pageStore.get(pageId) || {}
    if (!timerStore) return

    const timer = timerStore.get(id)
    if (!timer) return

    clearTimeout(timer.timerId)
    timer.timerId = ''
    timerStore.delete(id)
  }

  /**
   * 页面加载处理函数
   * @param {String} pageId 页面 id
   */
  static pageLoad (pageId) {
    Timer.pageStore.set(pageId, {
      isActive: true,
      timerStore: new Map()
    })
  }

  /**
   * 页面展示处理函数
   * @param {String} pageId 页面 id
   */
  static pageShow (pageId) {
    const page = Timer.pageStore.get(pageId) || {}

    /* 没有隐藏，不需要恢复定时器 */
    if (page.isActive) return

    page.isActive = true
    page.timerStore && page.timerStore.forEach(timer => timer.start())
  }

  /**
   * 页面隐藏处理函数
   * @param {String} pageId 页面 id
   */
  static pageHide (pageId) {
    const page = Timer.pageStore.get(pageId) || {}
    page.timerStore && page.timerStore.forEach(timer => timer.suspend())
    page.isActive = false
  }

  /**
   * 页面卸载处理函数
   * @param {String} pageId 页面 id
   */
  static pageUnLoad (pageId) {
    Timer.pageHide(pageId)
    Timer.pageStore.delete(pageId)
  }

  /**
   * 构造函数
   * @param {Boolean} isInterval 是否是 setInterval
   * @param {String} pageId 页面 id
   * @param {Function} fn 回调函数
   * @param {Number} timeout 定时器执行时间间隔
   * @param  {...any} arg 定时器其他参数
   */
  constructor (isInterval = false, pageId = '', fn = () => {}, timeout = 0, ...arg) {
    this.id = ++Timer.count // 定时器递增 id
    this.fn = fn
    this.timeout = timeout
    this.restTime = timeout // 定时器剩余计时时间
    this.pageId = pageId
    this.isInterval = isInterval
    this.arg = arg

    /* 存储定时器 */
    const { timerStore } = Timer.pageStore.get(pageId) || {}
    timerStore && timerStore.set(this.id, this)

    this.start()
  }

  /**
   * 启动定时器
   */
  start () {
    const { isActive, timerStore } = Timer.pageStore.get(this.pageId) || {}
    /* 页面隐藏，不创建定时器 */
    if (this.restTime < 0 || !isActive) return

    this.startTime = +new Date()

    if (this.isInterval) {
      /* setInterval */
      const cb = (...arg) => {
        this.fn(...arg)
        /* timerId 为空表示被 clearInterval */
        if (this.timerId) this.timerId = setTimeout(cb, this.timeout, ...this.arg)
      }
      this.timerId = setTimeout(cb, this.restTime, ...this.arg)
      return
    }
    /* setTimeout  */
    const cb = (...arg) => {
      this.fn(...arg)
      timerStore && timerStore.delete(this.id)
    }
    this.timerId = setTimeout(cb, this.restTime, ...this.arg)
  }

  /* 暂停定时器 */
  suspend () {
    if (this.timeout > 0) {
      const now = +new Date()
      const nextRestTime = this.restTime - (now - this.startTime)
      this.restTime = this.isInterval ? Math.abs(nextRestTime) % this.timeout : nextRestTime
    }
    clearTimeout(this.timerId)
  }
}

/* 定时器增量 id  */
Timer.count = 0
/* 存储页面定时器和页面显示或隐藏状态 */
Timer.pageStore = new Map()

export { Timer }
