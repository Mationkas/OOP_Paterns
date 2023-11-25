abstract class Food{
    public description: string;

    public getDescription(): string{
        return this.description;
    }

    public abstract cost(): number;
}

export class Standard extends Food{
    public description = "Standard food";

    public cost(): number{
        return 15;
    }

}

export class Vegetarian extends Food{
    public description = "Vegetarian food";

    public cost(): number{
        return 17;
    }
}

abstract class FoodOptions extends Food{
    decoratedFood: Food;

    public abstract getDescription(): string;
    public abstract cost(): number;
}

export class MoreCheese extends FoodOptions{
    decoratedFood: Food;

    constructor(food: Food) {
        super();
        this.decoratedFood = food;
    }


    public getDescription(): string {
        return this.decoratedFood.getDescription() + ", More cheese";
    }

    public cost(): number {
        return this.decoratedFood.cost() + 4;
    }
}

export class AddSalads extends FoodOptions{
    decoratedFood: Food;

    constructor(food: Food) {
        super();
        this.decoratedFood = food;
    }


    public getDescription(): string {
        return this.decoratedFood.getDescription() + ", Add salads";
    }

    public cost(): number {
        return this.decoratedFood.cost() + 6;
    }
}