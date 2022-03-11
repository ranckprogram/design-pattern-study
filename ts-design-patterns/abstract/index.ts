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
