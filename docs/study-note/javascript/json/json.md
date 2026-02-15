# JSON 对象

## JSON 格式

JSON 数据对值的类型和格式有严格的要求：

* 原始类型的值只能是：数值(十进制)，字符串，布尔值，null

* 复合类型的值只能是：数组，对象

* 键名必须以双引号包裹

* 字符串必须以双引号表示，不能是单引号

* 数组或对象的最后一个成员不能带逗号

```json
// 键名必须以双引号包裹，如 name，age，skills
{
  "name": "Gin",                               // 字符串的值应用双引号表示
  "age": 18,                                   // 数值类型必须是十进制数值
  "isGay": false,                              // 布尔值类型的值
  "skills": ["javascript", "linux", "docker"], // 复合类型的数组
  "luv": {                                     // 复合类型的对象
    "name": "Amber",
    "age": 18                                  // 对象的最后一项不带逗号
  }                                            // JSON 数据的最后一项不带逗号
}
```

## JSON.stringify()

`JSON.stringify()` 方法用于将一个值转换为 `JSON 字符串`，并且该字符串是可以被 `JSON.parse()` 方法解析的

```js
// 一个 js 对象
const person = {
  name: 'gin',
  age: 18
}

// 得到的是 '{"name": "gin", "age", 18}' 字符串
const stringify_person = JSON.stringify(person)
```

## JSON.parse()

`JSON.parse()` 方法用于将 `JSON 字符串` 解析为对应的值

```js
// JSON 格式的字符串
const json_string = '{"name": "gin"}'

// 得到的结果是 { name: "gin" } 对象
const parsed_string = JSON.parse(json_string)

parsed_string.name // gin
```
