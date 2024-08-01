function solution(num_list) {
    var answer = [num_list[0]];
    for(let i = 1; i<num_list.length; i++){
        answer.unshift(num_list[i])
    }
    return answer;
}