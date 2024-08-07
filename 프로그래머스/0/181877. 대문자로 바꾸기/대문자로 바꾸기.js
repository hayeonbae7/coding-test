function solution(myString) {
    var answer = '';
    [...myString].map((str)=>{
        if(str === str.toLowerCase()){
            answer+=str.toUpperCase()
        } else{
            answer+=str
        }
    })
    return answer;
}