# Math 对象

`Math` 对象提供了各种数学功能，`Math` 对象不可实例化，只提供了静态属性和静态方法

## Math.abs()

`Math.abs()` 方法返回参数的绝对值

```js
// num_1 为 1
const num_1 = Math.abs(1)

// num_2 为 1
const num_2 = Math.abs(-1)
```

## Math.max()

`Math.max()` 方法返回参数中最大的数值

```js
//  max_num 为 19
const max_num = Math.max(1, 4, 6, 19)
```

## Math.min()

`Math.min()` 方法返回参数中最小的数值

```js
//  min_num 为 1
const min_num = Math.max(1, 4, 6, 19)
```

## Math.floor()

`Math.floor()` 方法返回小于或等于参数值的最小整数(地板值)

```js
// floor_num_1 为 4
const floor_num_1 = Math.floor(4.5)

// floor_num_2 为 -5
const floor_num_2 = Math.floor(-4.5)
```

## Math.ceil()

`Math.ceil()` 方法返回大于或等于参数值的最小整数(天花板值)

```js
// ceil_num_1 为 5
const ceil_num_1 = Math.ceil(4.5)

// ceil_num_2 为 -4
const ceil_num_2 = Math.ceil(-4.5)
```

## Math.random()

`Math.random()` 方法返回一个[0, 1)半闭半开区间的伪随机数

```js
// random_num 为 [0, 1) 这个区间的一个随机数，其值可能等于0，但一定小于1
const random_num = Math.random()
```

## Math.round()

`Math.round()` 方法用于四舍五入

```js
// round_num_1 为 0
const round_num_1 = Math.round(0.1)

// round_num_2 为 1
const round_num_2 = Math.round(0.6)
```
