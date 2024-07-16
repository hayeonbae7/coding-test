def solution(num_list):
    answer = 0
    len_list = len(num_list)
    if len_list >= 11:
        for i in num_list:
            answer += i
    else:
        answer = 1
        for i in num_list:
            answer *= i
            
    return answer