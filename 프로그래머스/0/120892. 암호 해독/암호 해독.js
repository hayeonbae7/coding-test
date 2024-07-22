function solution(cipher, code) {
    var answer = '';
    const cipher_list = cipher.split('')
    for (let i = code; i <= cipher_list.length; i += code){
        answer += cipher_list[i-1]
    }
    return answer;
}