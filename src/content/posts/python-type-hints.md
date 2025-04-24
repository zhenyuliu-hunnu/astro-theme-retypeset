---
title: Python 类型提示
description: 你的下一个 TypeScript，何必是 TypeScript。
published: 2024-10-12
tags: 
    - Python
    - 语言特性
---

原文章： https://zhuanlan.zhihu.com/p/688656182


## 常见内置类型

- `str`
- `int`
- `float`
- `bool`
- `None`

注意：以下的类型首字母大小写表达不同的类型，首字母大写用来指定嵌套类型

- `list`
- `dict`
- `tuple`
- `set`：使用 `{}`定义，元素唯一、无序存储、不可通过索引获取元素，可用 `in` 获取状态，本身可以作为函数对`string, list, tuple`进行去重并返回一个`set`。



## 内置类型提示

```python
name: str = 'John'

def say_hi(name: str) -> str:
    return f'Hi {name}'
```



## 需调用 typing 才可以使用的类型提示



### 联合类型提示

```python
from typing import Union

# 允许 x, y 和返回值为 int 或 float
def add(x: Union[int, float], y: Union[int, float]) -> Union[int, float]:
    return x + y

# Python 3.10+
def add(x: int | float, y: int | float) -> int | float:
    return x + y

# 类名可自定义
number = Union[int, float]

def add(x: number, y: number) -> number:
    return x + y
```



### 简单容器类型



| Typing 类型名 | 对应的Python内置类型 |
| ------------- | -------------------- |
| List          | list                 |
| Tuple         | tuple                |
| Dict          | dict                 |
| Set           | set                  |
| **Sequence**  | list + tuple         |
| **Mapping**   | dict + set           |



```python
from typing import List, Sequence, Tuple, Mapping

ratings: List[int] = [1, 2, 3] # 多重类型提示

data: Sequence = [1,2,3]
data = (1,2,3) # 同样合法

# 所有元素类型为int
x: Tuple[int] = (5)

# 第1个元素为 int, 第2个元素为str 
y: Tuple[int, str] = (5, "foo")

# 表示 key 为str类型， value 类型为 str 或者 int
x: Mapping[str, str | int] = {} 
x['name']=3.113  # value 不能为 float
```



### 复杂容器类型

```python
data_a: List[Tuple[str, int]] = [("Bob", 1), ("Jim", 2), ("Steven", 53)]

# Type alias 类型别名
Position = Tuple[int, int]   
# type Position = Tuple[int, int]    # Python 3.12+ , 前面加type   
Pixel = Tuple[Position, str]
data_b: List[Pixel] = [
    ((10, 20), "red"),
    ((40, 30), "green"),
    ((32, 45), "yellow")
]
```



### 泛型

```python
from typing import Sequence, Mapping, TypeVar

# 定义类型变量，TypeVar() 第1个参数为名字， 可以任意取。类型变量的作用是告知 type checker，这是generic type variable.
T = TypeVar('T')  # 可以是任意类型
S = TypeVar('S', bound=str)  # 必须是 str 类型
A = TypeVar('A', bound=str|int)  # 必须是 str 或 int

# 使用类型变量定义函数
def doubleit(n: T) -> T:
    return n*n

# 多个类型变量
def lookup_name(mapping: Mapping[T, A], key: T, default: A) -> A:
    try:
        return mapping[key]
    except KeyError:
        return default

# 上面的函数要求传入的第一个参数 mapping 为 Any 和 str|int，此处对具体变量 rows 进行进一步定义，不与上面函数中定义的泛型冲突
rows: Mapping[str, str | int] = {
    'product': 'tv',
    'price': 5900,
    'model': 'XT601',
    'size': 75,
    'screen': 'IPS LED',
}

print(lookup_name(rows, 'size', 50))
```

在类定义中使用泛型：

```python
from typing import TypeVar, Generic

T = TypeVar('T')

class MyClass(Generic[T]): # 这里定义了一个泛型类 MyClass，它继承自 Generic[T]。这意味着 MyClass 可以接受一个类型变量 T，并且这个类型参数可以在类的定义中使用。
    data_a: T # 类的属性 data_a 的类型是 T

    def __init__(self, data: T) -> None:
        self.data_a = data

    def display(self) -> None:
        print(self.data_a)

ma = MyClass(100)
ma.display()

mb = MyClass("it is a CAT")
mb.display()
```