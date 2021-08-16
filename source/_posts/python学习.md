# python学习

# 1.基本使用

## 1.1 print功能

```python
>>> print(int('2')+3) #int为定义整数型
"""
5
"""
>>> print(int(1.9))  #当int一个浮点型数时，int会保留整数部分
"""
1
"""
>>> print(float('1.2')+3) #float()是浮点型，可以把字符串转换成小数
""""
4.2
""""
```

```python
>>> print('Hello world'+' Hello Hong Kong')
"""
Hello world Hello Hong Kong
"""
```

## 1.2 基本数学知识

`python`当中`^`符号，区别于`Matlab`，在`python`中，`^`用两个`**`表示，如3的平方为`3**2` , `**3`表示立方，`**4`表示4次方，依次类推

```python
>>> 3**2   # **2 表示2次方
""""
9
""""
>>> 3**3   #  **3 表示3次方
""""
27
""""
>>> 3**4
""""
81
""""
```

## 1.3 变量命名规则

```python
apple=1       #赋值 数字
print(apple)
""""
1
""""

apple='iphone 7 plus'   #赋值 字符串
print(apple)
""""
iphone 7 plus
""""
```

还可以一次性命名多个变量等



# 2.while和for循环

## 2.1 while循环

比如要打印0-9的数字

```python
condition = 0
while condition < 10:
    print(condition)
    condition = condition + 1
```

注意python 的格式

在使用 while 句法的时候一定要注意在循环内部一定要修改判断条件的值，否则程序的 while 部分 将**永远执行下去**。

```python
while True:
    print("I'm True")
```

如果这样做的话，程序将一直打印出 `I'm True`, 要停止程序，使用 `ctrl` + `c` 终止程序。

