interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수 💩
function payBad(epmloyee: Employee): Employee {
  epmloyee.pay();
  return epmloyee;
}

function pay<T extends Employee>(epmloyee: T): T {
  return epmloyee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();

ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = payBad(ellie);
const bobAfterPay = payBad(bob);
