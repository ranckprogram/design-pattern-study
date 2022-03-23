// 大人，小孩，老人
// A景区，B景区，C景区

interface People {
  getSale(): number;
}

class OldPeople implements People {
  getSale() {
    return 0.6;
  }
}

class ChildPeople implements People {
  getSale() {
    return 0.5;
  }
}

class CommonPeople implements People {
  getSale() {
    return 1;
  }
}

abstract class Ticket {
  protected people: People;

  getMoney() {}

  public setPeople(people: People) {
    this.people = people;
  }
}

class ATicket extends Ticket {
  constructor() {
    super();
  }
  getMoney(): number {
    console.log(this.people.getSale());
    return 50 * this.people.getSale();
  }
}

class BTicket extends Ticket {
  getMoney() {
    return 150;
  }
}

const a = new ATicket();
a.setPeople(new OldPeople());

const result = a.getMoney();

console.log(result);
