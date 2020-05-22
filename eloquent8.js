
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure('Ошибка');
    }
}

function wrapper(func, args) {
    return new Proxy(func, {
        apply(target, thisArg, args) {
            while (true) {
                try {
                    return target(...args);
                } catch (e) {
                    if (e instanceof MultiplicatorUnitFailure) {
                        console.log('fail');
                        continue;
                    }
                }
            };
        }
    });
}

const box = {
    locked: false,
    unlock() {this.locked = false;},
    lock() {this.locked = true;},
    _content: ['bebebe'],
    get content() {
        if (this.locked) throw new Error('Locked!');
        return this._content;
    }
}

function withBoxUnlocked(func, args, box) {
    const status = box.locked;
    let val;
    box.unlock();
    try {
        val = func(...args);
        if (status) box.lock();
        console.log('success', val);
    } catch (e) {
        console.log('fail');
    } finally {
        if (status) box.lock();
    }
    return val;
}


/////////////////

console.log(box.locked);
console.log(withBoxUnlocked(primitiveMultiply, [2, 3], box));
console.log(box.locked);


