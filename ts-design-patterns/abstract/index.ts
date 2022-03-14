interface Shap {
  draw: Function;
}

class Circle implements Shap {
  public draw() {
    return 1;
  }
}

class Rect implements Shap {
  public draw() {
    return "rect draw";
  }
}

interface Color {
  fill: Function;
}

class Red implements Color {
  fill() {
    console.log("this red");
  }
}

class Green implements Color {
  fill() {
    console.log("this green");
  }
}

abstract class AbstractFactory {
  public abstract getColor(color: string): Color | null;
  public abstract getShap(shapeType: string): Shap | null;
}

class ShapFactory extends AbstractFactory {
  public getColor(): null {
    return null;
  }

  public getShap(shapeType: string): Shap {
    if (shapeType === "Circle") {
      return new Circle();
    }
    if (shapeType === "Rect") {
      return new Rect();
    }
    return null;
  }
}

class ColorFactory extends AbstractFactory {
  public getColor(color: string): Color | null {
    if (color === "red") {
      return new Red();
    }
    if (color === "green") {
      return new Green();
    }
    return null;
  }
  public getShap(shapeType: string): Shap {
    return null;
  }
}

class FactoryProducer {
  public static getFactory(type: string) {
    if (type === "shap") {
      return new ShapFactory();
    }
    if (type === "color") {
      return new ColorFactory();
    }
  }
}

const shapFactory = FactoryProducer.getFactory("shap");

console.log(shapFactory);

const rect = shapFactory.getShap("Rect");

console.log(rect.draw());

function add<T>(a: T, b: T) {
  if (typeof a === "string") {
    return `${a}${b}`;
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "boolean" && typeof b === "boolean") {
    return !!(a && b);
  }

  return null;
}

console.log(add(1, 4));
console.log(add("1", "4"));
console.log(add(false, true));
console.log(add<number>(1, 41));

class User {
  public name: string;
}

class MySql<T> {
  public list: Array<T> = [];
  add(item: T) {
    this.list.push(item);
  }
}

const user = new User();

const sql = new MySql<User>();

sql.add(user);

console.log(sql);
