function solution(hp) {
    var answer = 0;
    hp5 = hp % 5
    answer += parseInt(hp / 5)
    hp3 = hp5 % 3
    answer += parseInt(hp5 /3)
    answer += hp3
    
    return answer;
}