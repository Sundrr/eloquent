let s = `fsdfsdf 'dffedfd1' d'Artagnan 'eee fsd fd'!`;
let answer;

answer = /ca(t|r)/.test(s);
answer = /pr?op/.test(s);
answer = /ferr(et|y|ari)/.test(s);
answer = /\b[A-Za-z]*ious\b/.test(s);
answer = /\s[.,:;]/.test(s);
answer = /\b[A-Za-z]{6,}\b/.test(s);
answer = /\b(?:(?![eE])[a-zA-Z])+\b/.test(s);

let regex1 = /(\s)(')|(')([\s.,!?])/g;


let n = s.replace(regex, '"');

let e = regex.exec(s);
console.log(e)




///////////////////////////////////

// console.log(n);