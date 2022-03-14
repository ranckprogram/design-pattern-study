class Each<T> {
  private index: number = 0;
  public list: Array<T> = [];

  set(list: Array<T>) {
    this.index = 0;
    this.list = list;
  }

  next() {
    return this.list[this.index++];
  }

  hasNext() {
    return this.list.length > this.index;
  }
}

const arr = [2, 5, 7, 8, 5];

const e = new Each();

e.set(arr);

while (e.hasNext()) {
  console.log(e.next());
}

