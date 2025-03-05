print("Hello World")#this is similar to consol.log "#" = "//"= "/* */".    to get this to show type python3 the name of the file

#variable

name = "Clay"
last_name = "Miller"
cohort = 55
is_active = True
print(name + " " + last_name + "#" + str(cohort) )# must use "str() to show numbers"
print(f"{name} {last_name} # {cohort}")# easier way is to use f string       " f "{} {}"     "

#type conversion
num = 9.75
print(type(num))
print(int(num))# convert a float to a interger

age = 30
print(str(age))# convert a interger to a string

price = 10.23
print(float(price)) # convert a string to a float


name = "Bruce Wyane"
y_age = 8
age = 34
city = "Gothom"
print(f"My name is {name}. I lost my parnet when I was {y_age} I'm {age} now. I live in {city}. It's not the best place but it's home.")

# arithmetic operations
x = 5
y = 3

print(x + y) #addition
print(x - y) #subtraction
print(x * y) #multipication
print(x / y) #division
print(x % y) #modulus
print(x**y) #exponenitiation

#comparision operation

a = 10
b = 5
print(a==b)#false
print(a !=b)#true  != means not equal to
print(a > b)#true
print(a < b)#false
print(a >= b)#true
print(a <= b)#false

#logical operation
x=5
y=10

print(x>3 and y<15)#true "and both must be true"
print(x>3 or y>15)#true "or only one must be true"
print(not(x>3))#false

#list
fruits = ["apple", "banna", "cherry", "watermelon"]
print(fruits)
print(fruits[0])#first element
print(fruits[-1])#auto picks the last element

#list methods
fruits.append("grapes")#add to list
print(fruits)

fruits.remove("banna") # removes only the first one that matches
print(fruits)

print(fruits.pop(1))# removes related position
print(fruits)

print(fruits.index("grape")) # list the numbered position 
print(fruits)

print(fruits.count("apple")) # how many you have matching ""
print(fruits)

print(len(fruits)) # returns length of list
print(fruits)


#if statments
# if condition:
  #code to execute if condition is true

if age >= 18:
  print("You are an adult")
else:
  print("You're underage")

x=10

if x>10:
  print("you rich")
elif x==10:# means else if 
  print("start saving")
else:
  print("you broke")

#for loop
fruits = ["apple", "banna", "cherry", "watermelon"]

for fruit in fruits:
  print(fruit)

for i in range(5):
  print(i)

#function
def greet():
  print("hello")

greet()#calls fuction

#paramenter & argument
def say_hi(name):
  print("Hi " + name)

say_hi("jeff")


#dictionary
person = {
  "name": "jeff",
  "age": 34,
  "zip": 54321
}

print(person)

print(person["age"])