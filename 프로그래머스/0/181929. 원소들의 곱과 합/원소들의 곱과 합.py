def solution(num_list):
    product = num_list[0]
    add = num_list[0]
    for i in range(1, len(num_list)):
        product *= num_list[i]
        add += num_list[i]
    if(product < add**2):
        return 1
    else:
        return 0