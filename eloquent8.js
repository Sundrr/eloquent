
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure('Ошибка');
    }
}

function wrapper(func, args) {
    try {
        func(...args);
    } catch (e) {
        if (e instanceof MultiplicatorUnitFailure) {
            1
        }
    }
}

console.log(primitiveMultiply(2, 5));

