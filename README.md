### 设计模式


设计模式的名称，基本定义，分类，使用场景思考，和自身的工作中结合，近似的模式分析


重要的设计模式在每个写10个demo就完全掌握了

设计模式遵循的设计原则（TODO）

> SOLID

- 单一职责
- 开闭原则
- 里氏替换原则
- 接口隔离原则
- 依赖倒置原则

设计模式包括三大类：（打钩的为重中之重）

- 创建型
  - [x] 单例模式
  - [x] 创建者模式
  - [ ] 工厂模式
  - [ ] 抽象工厂模式
  - [x] 原型链模式
- 结构型
  - [x] 代理模式
  - [ ] 桥接模式
  - [x] 适配器模式
  - [ ] 外观模式
  - [ ] 享元模式
  - [x] 装饰着模式
  - [ ] 组合模式
- 行为型
  - [x] 观察者模式
        1. 发布订阅模式
        2. 事件模式
        3. 观察者模式
  - [x] 状态模式
  - [x] 模板模式
  - [x] 策略模式
  - [x] 迭代器模式
  - [ ] 责任链模式

## 创建型

### 创建类模式

通过创建类，然后传入参数实例化对象设计模式

好处：

- 提升创建对象效率

弊端:

> 创建者模式 Builder

创建较为复杂的对象的时候，分步进行创建流程、或者对创建流程精细把控、参数检验

### 工厂模式 factory

成员：
- 抽象类（比接口可以成员方法实现）
- 继承基类的商品对象
- 工厂

创建多个不同类中具有一定共性方法，可以使用这种方式简化.



工厂模式遵循开闭原则：客户端调用始终是闭合的，更具业务拓展，增加工厂switch枚举的类型，以及继承抽象类的对象，对原有其他类保持不变


**场景**

vue-router的History对象



### 抽象工厂模式

创建一系列相关的对象， 而无需指定其具体类；
代码组织形式
- 高阶函数
- 先创造风格类创造器，再统一根据风格类创造器实例化不同类的实体

和工厂模式相比，多了一个工厂的工厂。
程序初始化阶段创建具体的工厂对象





**场景**
不同风格的家具，每种风格的家具有若干。选择一种风格后就需要后面的一直选用这种风格。

跨平台的组件库。跨平台就是两种风格了。每个组件库有若干除了风格以外都相同的地方



## 结构型

> 装饰这模式

在不改变原有对象的基础上拓展对象的属性和方法

> 代理模式

代理模式（Proxy Pattern）中，一个类代表另一个类的功能

## 行为型

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

---
 状态模式

**允许对象在内部状态发生改变时改变它的行为**

场景： 红绿灯，游戏状态机，

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
