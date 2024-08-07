function solution(my_string) {
    var answer = 0;
    // 전개연산자 => ...(문자열, 배열)
    [...my_string].map((num)=> {
        if(!isNaN(num)) answer+=Number(num)
    })
    return answer;
}