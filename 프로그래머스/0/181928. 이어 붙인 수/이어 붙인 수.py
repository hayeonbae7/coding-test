def solution(num_list):
    answer = 0
    even_num = ""
    odd_num = ""
    for i in range(len(num_list)):
        if(num_list[i] % 2 == 0):
            even_num += str(num_list[i])
        else:
            odd_num += str(num_list[i])
    answer = int(even_num) + int(odd_num)
    return answer