### 设计模式

设计模式遵循的设计原则（TODO）

> SOLID

- 单一职责
- 开闭原则
- 里氏替换原则
- 接口隔离原则
- 依赖倒置原则

设计模式包括三大类：

- 创建型
  - [x] 单例模式
  - [x] 创建者模式
  - [ ] 工厂模式
  - [ ] 抽象工厂模式
- 结构型
  - [ ] 代理模式
  - [ ] 桥接模式
  - [ ] 适配器模式
  - [ ] 外观模式
  - [ ] 享元模式
  - [x] 装饰着模式
  - [ ] 组合模式
- 行为型
  - [x] 观察者模式
  - [ ] 状态模式
  - [x] 模板模式
  - [x] 策略模式
  - [ ] 迭代器模式
  - [ ] 责任链模式

### 创建型

> 创建类模式

通过创建类，然后传入参数实例化对象设计模式

好处：

- 提升创建对象效率

弊端:

> 创建者模式 Builder

创建较为复杂的对象的时候，分步进行创建流程、或者对创建流程精细把控、参数检验

> 工厂模式 factory

创建多个不同类中具有一定共性，可以使用这种方式简化

> 抽象工厂模式

### 结构型

> 装饰这模式

在不改变原有对象的基础上拓展对象的属性和方法

> 代理模式

代理模式（Proxy Pattern）中，一个类代表另一个类的功能

### 行为型

---

模板模式： **相同部分父类实现，差异部分子类继承重写实现**,模板模式的体现方式是 class 继承

```javascript
class Beverage {
  constructor() {
    this.init();
  }

  init() {
    this.fire();
    this.water();
    this.choose();
  }

  fire() {}
  water() {}

  choose() {
    throw new Error("子类必须实现choose方法");
  }

  finish() {
    console.log(this.type, "ok");
  }
}

class Tea extends Beverage {
  choose() {
    this.type = "tea";
  }
}

const tea = new Tea();

tea.finish();

```

使用场景思考：




> 观察者模式

> 状态模式

**允许对象在内部状态发生改变时改变它的行为**

```javascript
class State1 {
  action() {
    console.log("state1");
  }
}
class State2 {
  action() {
    console.log("state2");
  }
}

class Context {
  // setState通过改造也可以支持多状态
  setState(state) {
    this.state = state;
  }
  action() {
    this.state.action();
  }
}

const context = new Context();
context.setState(new State1());
context.action();
```

---

迭代器模式： 优化可遍历的集合，美化 for 循环

```javascript
function each(data, callback) {
  if (Array.isArray(data)) {
    for (const item of data) {
      callback(item);
    }

    return;
  }

  if (typeof data === "object" && typeof data !== "null") {
    for (const item in data) {
      callback(data[item], item);
    }
  }
}
```

### 问题

1. 状态模式和策略模式的异同?

策略模式强调的是定义一个可自由替换选择热算法操作集合.场景,选择支付方式.动画方式

策略模式不涉及切换控制, 状态模式内部定义状态的切换行为

状态模式，不同的状态做不同的事情。
策略模式，做同一个事情，选择不同方式。
