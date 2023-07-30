// Minha solução
function solution(s1, s2) {
    const menor = s1.length <= s2.length ? s1 : s2
    let maior = menor === s1 ? s2 : s1
    let igual = 0
    for (let i of menor) {
        for (let j of maior) {
            if (i === j) {
                igual++
                maior = maior.replace(j, '')
                break
            }
        }
    }
    return igual
}
console.log(solution("zz","zzzz"));

// Melhor solução
function solution2(s1, s2) {
    for (var i = 0; i < s1.length; i++) {
        s2 = s2.replace(s1[i], "!");
    }
    return s2.replace(/[^!]/g, "").length;
}
console.log(solution2("zz","zzzz"));

