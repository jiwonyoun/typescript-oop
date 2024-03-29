{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }


    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT = 7; // class level
        private coffeeBeans: number = 0;        // Instance(object) level

        // 생성자 
        public constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }


        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if(beans<0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        clean(): void {
           console.log('cleaning the machine...🧼')
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }

        private preheat(): void {
            console.log('heating up...🔥');
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots...☕️`)
            return {
                shots,
                hasMilk: false,
            }
        }
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    class CafeLatteMachine extends CoffeeMachine {
        constructor(beans: number, public readonly serialNumber: string) {
            super(beans);
        }
        private steamMilk(): void {
            console.log('steaming some milk...🥛');
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                shots,
                hasMilk: true,
            }
        }
    }

    class SweetCoffeeMachine extends CoffeeMachine {
        constructor(beans: number) {
            super(beans);
        }
        private addSugar():void {
            console.log('add some sugar...🧂')
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.addSugar();    
            return {
                ...coffee,
                hasSugar: true,
            }
        }
    }
    
    const machines: CoffeeMaker[] = [
        new CoffeeMachine(16),
        new CafeLatteMachine(16, 'QWER'),
        new SweetCoffeeMachine(16),
        new CoffeeMachine(16),
        new CafeLatteMachine(16, 'QWER'),
        new SweetCoffeeMachine(16),
    ]
    machines.forEach(machine => {
        console.log('---------------------');
        machine.makeCoffee(1);
    })
}