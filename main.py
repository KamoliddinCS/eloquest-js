# def min_val(numbers: list[int]) -> int:
#     lowest = numbers[0]
#     for i in range(len(numbers)):
#         for j in range(i+1, len(numbers)):
#             if lowest < numbers[j]:
#                 pass
#             else: 
#                 lowest = numbers[j]

#     return lowest

# lowest_of_two = min(10, 2, 3, 4, 5)

# print(lowest_of_two)

# # print(min_val([1, 2, 3]))

# min_val([23, 23, 20, 3, -4, -2345, -45])

# CHESSBOARD IMPLEMENTATION IN PYTHON

# result_string = ""
# size = int(input("Please, insert the size of your desired chessboard: "))

# print(
#     "\n\n",
#      "/-----\\ ||     || |-----| /-----\\ /-----\\", "\n",
#      "|       ||     || |       |       |       ", "\n",
#      "|       ||-----|| |---|   \\-----\\ \\-----\\", "\n",
#      "|       ||     || |             |       |", "\n",
#      "\\-----/ ||     || |-----| \\-----/ \\-----/",
#      "\n\n"
# )

# for i in range(size):
#     for j in range(int(size/2)+1):
#         if i % 2 > 0:
#             for u in range(size):
#                 if u % 2 > 0:
#                     result_string += "H"*size
#                 else:
#                     result_string += "/"*size
#         else:
#             for u in range(size):
#                 if u % 2 > 0:
#                     result_string += "/"*size
#                 else:
#                     result_string += "H"*size

#         result_string += "\n"

# print(result_string)

from models import Product

class Human:
    def __init__(self, name, surname, age) -> None:
        self.name = name
        self.surname = surname
        self.age = age

    def introduce(self):
        return f"Hi, I am {self.name} {self.surname}, and I am {self.age} years old! Glad to be alive!"
    
person = Human(name="Kamoliddin", surname="Yulbarsov", age=18)

# print(person.introduce)

new_product = Product("dyso", "Hair dryer", 2022, "Fanless drying")

print(new_product.model_info)