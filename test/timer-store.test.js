import { TimerStore } from '../src/timer-store'
import { Timer } from '../src/timer'

test('页面定时器管理--添加 setTimeout 定时器到页面', done => {
    const pageStore = new TimerStore()
    let count = 0
    const timer = new Timer(false, () => count++, 0)
    pageStore.addTimer(timer)

    setTimeout(() => {
        expect(count === 1).toBeTruthy()
        done()
    }, 100);
})

test('页面定时器管理--添加 setInterval 定时器到页面', done => {
    const pageStore = new TimerStore()
    let count = 0
    const timer = new Timer(true, () => count++, 0)
    pageStore.addTimer(timer)

    setTimeout(() => {
        expect(count > 1).toBeTruthy()
        done()
    }, 100);
})

test('页面定时器管理--页面暂停时添加 setTimeout 定时器', done => {
    const pageStore = new TimerStore()
    let count = 0
    const timer = new Timer(false, () => count++, 0)
    pageStore.addTimer(timer)
    pageStore.hide()

    setTimeout(() => {
        expect(count === 0).toBeTruthy()
        done()
    }, 100);
})

test('页面定时器管理--页面暂停时添加 setInterval 定时器', done => {
    const pageStore = new TimerStore()
    let count = 0
    const timer = new Timer(true, () => count++, 0)
    pageStore.addTimer(timer)
    pageStore.hide()

    setTimeout(() => {
        expect(count === 0).toBeTruthy()
        done()
    }, 100);
})

test('页面定时器管理--添加 setTimeout 定时器后页面隐藏后又显示', done => {
    const pageStore = new TimerStore()
    let count = 0
    const timer = new Timer(false, () => count++, 0)
    pageStore.addTimer(timer)
    pageStore.hide()
    pageStore.show()

    setTimeout(() => {
        expect(count === 1).toBeTruthy()
        done()
    }, 100);
})

test('页面定时器管理--添加 setInterval 定时器后页面隐藏后又显示', done => {
    const pageStore = new TimerStore()
    let count = 0
    const timer = new Timer(true, () => count++, 0)
    pageStore.addTimer(timer)
    pageStore.hide()
    pageStore.show()

    setTimeout(() => {
        expect(count > 1).toBeTruthy()
        done()
    }, 100);
})

test('页面定时器管理-- setTimeout 执行后移除', done => {
    const pageStore = new TimerStore()
    let count = 0
    const timer = new Timer(false, () => count++, 0)
    pageStore.addTimer(timer)

    setTimeout(() => {
        expect(count === 1).toBeTruthy()
        expect(pageStore.store.size === 0).toBeTruthy()
        done()
    }, 100);
})


test('页面定时器管理-- 页面重启后 setTimeout 可以正常移除', done => {
    const pageStore = new TimerStore()
    let count = 0
    const timer = new Timer(false, () => count++, 0)
    pageStore.addTimer(timer)
    pageStore.hide()
    pageStore.show()
    pageStore.clear(timer.id)

    setTimeout(() => {
        expect(count === 0).toBeTruthy()
        expect(pageStore.store.size === 0).toBeTruthy()
        done()
    }, 100);
})

test('页面定时器管理-- 页面重启后 setInterval 可以正常移除', done => {
    const pageStore = new TimerStore()
    let count = 0
    const timer = new Timer(true, () => count++, 0)
    pageStore.addTimer(timer)
    pageStore.hide()
    pageStore.show()
    pageStore.clear(timer.id)

    setTimeout(() => {
        expect(count === 0).toBeTruthy()
        expect(pageStore.store.size === 0).toBeTruthy()
        done()
    }, 100);
})
