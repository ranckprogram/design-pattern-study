interface IArms {
  distance?: number;
  power?: number;
  name: string;
}

abstract class Arms {
  public name: string;
  constructor(parameters: IArms) {}
  printName(): void {
    console.log(this.name);
  }
  abstract shoot(): void;
}

class Akm extends Arms {
  constructor(props: IArms) {
    super(props);
    this.name = props.name;
  }
  shoot() {
    console.log(this.name, "shoot");
  }
}

function createArmsFactory(name: string) {
  switch (name) {
    case "akm":
      return new Akm({ name: "akm" });
    case "":
      break;
    default:
      return null;
  }
}

const akmone = createArmsFactory("akm");

akmone.shoot();
