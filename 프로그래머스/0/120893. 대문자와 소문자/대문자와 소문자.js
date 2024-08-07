function solution(my_string) {
    var answer = '';
    [...my_string].map((str) => {
        if(str === str.toUpperCase()){
            answer+=str.toLowerCase()
        } else{
            answer+=str.toUpperCase()
        }
    })
    return answer;
}