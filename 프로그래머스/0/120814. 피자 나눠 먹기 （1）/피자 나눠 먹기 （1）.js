function solution(n) {
    let answer = n / 7 + (n % 7 > 0 ? 1 : 0); 
    return Math.floor(answer);
}