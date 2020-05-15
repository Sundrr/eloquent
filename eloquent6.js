
class GroupIterator {
    constructor(group) {
        this.pos = 0;
        this.group = group;
    }

    next() {
        if (this.pos > this.group.length - 1) return {done: true};
        let value = this.group.get(this.pos);
        this.pos++;
        return {value, done: false};
    }
}

class Group {
    constructor(data) {
        this.content = [];
        while (data.length > 0) {
            const element = data.pop();
            if (data.indexOf(element) === -1) {
                this.content.unshift(element);
            }
        }
    }

    add(element) {
        if (this.content.indexOf(element) === -1) {
            this.content.push(element);
        }
    }

    delete(element) {
        if (this.content.indexOf(element) !== -1) {
            const index = this.content.indexOf(element);
            this.content.splice(index, 1);
        }
    }

    get(index) {
        return this.content[index];
    }

    has(element) {
        return (this.content.indexOf(element) !== -1) ? true : false
    }

    get length() {
        return this.content.length
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

let g = new Group([1, 1, 1, 2, 'ff', 'ww']);

console.log(g);

g.add(7);
g.delete('ff');

console.log(g);
console.log(g.length);


for (let i of g) {
    console.log(i);    
}


