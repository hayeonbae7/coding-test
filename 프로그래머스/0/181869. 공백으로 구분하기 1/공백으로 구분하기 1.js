function solution(my_string) {
    let answer = [];
    let arr = '';
    [...my_string].map((str) => {
        if(str !== ' '){
            arr+=str
        } else{
            answer.push(arr)
            arr = ''
        }
    })
    answer.push(arr)
    return answer;
}