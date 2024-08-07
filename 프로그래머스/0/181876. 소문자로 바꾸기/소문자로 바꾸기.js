function solution(myString) {
    var answer = '';
    [...myString].map((str)=>{
        if(str === str.toUpperCase()){
            answer+=str.toLowerCase()
        }else{
            answer+=str
        }
    })
    return answer;
}