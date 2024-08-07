function solution(my_string) {
    var answer = 0;
    [...my_string].map((num)=> {
        if(!isNaN(num)) answer+=Number(num)
    })
    return answer;
}