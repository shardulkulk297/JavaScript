class Animal{
    constructor(name)
    {
        this.name = name;
        console.log("Object is created")

    }

    eats()
    {
        console.log("eating")
    }
}

let a = new Animal("bunny")
console.log(a)
a.eats()
a.name

class Lion extends Animal{ //inheritance
    constructor(name){
        super(name);
        console.log("Object for lion is created")

    }


    roars()
    {
        console.log("Roaring")
    }

    eats() //method overriding
    {
        super.eats();
        console.log("lion is eating")
    }

}

let l = new Lion("shera")
console.log(l)
l.eats();
