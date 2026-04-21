type TeacRecipe = {
    water:number,
    milk:number
};


//Interface in TypeScript is used to define the structure or shape of an object or class.
//It acts like a contract, ensuring that required properties and methods are present.
class MasalaChai implements TeacRecipe{
    water: number=12;
    milk=20;
}

