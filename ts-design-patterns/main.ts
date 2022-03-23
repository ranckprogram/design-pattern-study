console.log("tst333");

abstract class SS {
  protected name: string;

  public setName(name: string) {
    this.name = name;
  }

  abstract getName(): string;
}

class SSS extends SS {
  getName(): string {
    return "asd";
  }
}

const s = new SSS();

s.setName("123");

console.log(s);
console.log(s.getName());



