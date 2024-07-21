function solution(hp) {
    var answer = 0;
    hp5 = hp % 5
    answer += ~~(hp / 5)
    hp3 = hp5 % 3
    answer += ~~(hp5 /3)
    answer += hp3
    
    return answer;
}