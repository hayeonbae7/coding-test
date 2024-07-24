function solution(strArr) {
    var answer = [];
    strArr.map((str, idx) => {
        if(idx % 2 == 0){answer.push(strArr[idx].toLowerCase())}
        else answer.push(strArr[idx].toUpperCase())
    })
    return answer;
}