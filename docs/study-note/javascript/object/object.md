# Object 对象

## Object.assign()

`Object.assign()` 方法用于对象的合并，将源对象(source object)的属性合并到目标对象(targer object)中

```js
const target = { name: 'gin' }
const source1 = { age: 18 }
const source2 = { skill: ['javascript', 'linux', 'docker']}

Object.assign(target, source1, source2)

targer // { name: 'gin', age: 18, skill: ['javascript', 'linux', 'docker'] }
```

如果合并的对象中有同名属性，那么后面的属性会覆盖前面的属性

```js
const target = { name: 'gin' }
const source1 = { name: 'amber', age: 18 }
const source2 = { age: 23, skill: ['go', 'java'] }

Object.assign(target, source1, source2)

target // { name: 'amber', age: 23, skill: ['go', 'java'] }
```

## Object.keys()

`Object.keys()` 方法用于返回一个对象的所有键名，传入一个对象作为参数，返回这个对象的键名作为元素的数组

```js
const obj = { name: 'gin', age: 18 }

const obj_keys = Object.keys(obj)

obj_keys // ['name', 'age']
```

## Object.values()

`Object.values()` 方法用于返回一个对象的所有属性值，传入一个对象作为参数，返回这个对象的属性值为元素的数组

```js
const obj = { name: 'gin', age: 18 }

const obj_values = Object.values(obj) 

obj_values // ['gin',18]
```

## Object.entries()

`Object.entries()` 方法会将一个对象的所有键值对处理成单个数组，并最终返回一个包含了这个对象的所有键值对数组的二维数组

```js
const obj = { name: 'gin', age: 18 }

const obj_entries = Object.entries(obj)

obj_entries // [['name', 'gin'], ['age', 18]]
```
