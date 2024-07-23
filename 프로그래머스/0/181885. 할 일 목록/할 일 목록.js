function solution(todo_list, finished) {
    var answer = [];
    finished.map((item, idx) => {
        if(!item) answer.push(todo_list[idx])
    })
    return answer;
}