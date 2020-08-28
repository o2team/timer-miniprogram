import { Timer } from '../src/timer'

test('setTimeout 定时器--不带时间参数', done => {
    const timer = new Timer(false, () => {
        expect(true).toBeTruthy()
        done()
    })
    timer.start(new Map())
})


test('setTimeout 定时器--带时间参数', done => {
    const timer = new Timer(false, () => {
        expect(true).toBeTruthy()
        done()
    }, 1000)
    timer.start(new Map())
})


test('setTimeout 定时器--只执行一次', done => {
    let count = 0
    const timer = new Timer(false, () => {
        count++
    }, 100)
    timer.start(new Map())
    setTimeout(() => {
        expect(count).toEqual(1)
        done()
    }, 500)
})

test('setTimeout 定时器--暂停', done => {
    let count = 0
    const timer = new Timer(false, () => {
        count++
    }, 100)
    timer.start(new Map())
    timer.suspend()

    setTimeout(() => {
        expect(count).toEqual(0)
        done()
    }, 500)
})

test('setTimeout 定时器--重启', done => {
    let count = 0
    const timer = new Timer(false, () => {
        count++
    }, 100)
    timer.start(new Map())
    timer.suspend()
    timer.start(new Map())

    setTimeout(() => {
        expect(count).toEqual(1)
        done()
    }, 500)
})


test('setInterval 定时器--不带时间参数', done => {
    const timer = new Timer(true, () => {
        expect(true).toBeTruthy()
        done()
    })
    timer.start(new Map())
})

test('setInterval 定时器--带时间参数', done => {
    const timer = new Timer(true, () => {
        expect(true).toBeTruthy()
        done()
    }, 1000)
    timer.start(new Map())
})

test('setInterval 定时器--执行多次', done => {
    let count = 0
    const timer = new Timer(true, () => {
        count++
    }, 100)
    timer.start(new Map())
    setTimeout(() => {
        expect(count > 2).toBeTruthy()
        done()
    }, 500)
})

test('setInterval 定时器--暂停', done => {
    let count = 0
    const timer = new Timer(true, () => {
        count++
    }, 100)
    timer.start(new Map())
    timer.suspend()

    setTimeout(() => {
        expect(count === 0).toBeTruthy()
        done()
    }, 500)
})


test('setInterval 定时器--重启', done => {
    let count = 0
    const timer = new Timer(true, () => {
        count++
    }, 100)
    timer.start(new Map())
    timer.suspend()
    timer.start(new Map())

    setTimeout(() => {
        expect(count > 2).toBeTruthy()
        done()
    }, 500)
})
