{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker {
        static BEANS_GRAM_PER_SHOT = 7; // class level
        coffeeBeans: number = 0;        // Instance(object) level

        // 생성자 
        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffee(shots: number): CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                shots,
                hasMilk: false,
            }
        }
    }

    // 생성자 호출 
    const maker = new CoffeeMaker(32); 
    console.log(maker);

    const maker2 = new CoffeeMaker(14); 
    console.log(maker2);

    const maker3 = CoffeeMaker.makeMachine(21);
    console.log(maker3);

}