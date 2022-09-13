---
date: "2022-09-13"
title: 认识JSX
description: JSX在React中经常使用，MDX也能结合JSX进行使用。
---

## JSX

JSX 是一种有趣的语法，既不是 JS 也不是 HTML。

```JSX
const element = <h1>认识JSX</h1>
```

这是 JS 的一个语法拓展，JSX 可以很好的呈现出 UI 和交互的本质形式。

### JSX 语法

#### 可以在大括号中放置任何有效的 JS 表达式。

```JSX
const name = 'JSX';
const element = <h1>Learn JSX</h1>
```

#### JSX 也是一个表达式

在编译后，JSX 表达式会被转为普通的 JS 函数调用，并且对其取值，最后得到 JS 对象。

```JSX
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

#### JSX 中指定属性

可以通过使用引号，将属性值指定为字符串。也可以使用大括号，在属性值中插入一个 JS 表达式

```JSX
const element = <img src={user.avatarUrl}></img>;
```

针对同一属性不能同时使用两种符号。

> JSX 语法上更接近 JS 而不是 HTML，所以 React DOM 使用 `camelCase` 来定义属性的名称，而不使用 HTML 属性名称来命名。JSX 中 `class` 变成了 `className`

### Babel

Babel 会把 JSX 转译为一个名为 `React.createElement()` 的函数调用。

这两种形式等效。

```JSX
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

```JSX
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

`React.createElement()` 会预先执行一些检查，实际上创建了一个这个的对象。

```JSX
// 注意：这是简化过的结构
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```
