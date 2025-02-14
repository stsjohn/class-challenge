class Hero {

  constructor(name, age, type){

    this.name = name;

    this.age = age;

    this.type = type;

  }



  getAtack(){

    switch (this.type) {

      case "Guerreiro":

        console.log(`O ${this.type} atacou usando uma espada`)

        break;

      case "Mago":

        console.log(`O ${this.type} atacou usando magia`)

        break;

      case "Monge":

        console.log(`O ${this.type} atacou usando artes marciais`)

        break;

      case "Ninja":

        console.log(`O ${this.type} atacou usando uma Shuriken`)

        break;       

    }

  }

}



const hero = new Hero("john", 25, "Guerreiro")

const hero2 = new Hero("john", 25, "Mago")

const hero3 = new Hero("john", 25, "Monge")

const hero4 = new Hero("john", 25, "Ninja")



hero.getAtack()

hero2.getAtack()

hero3.getAtack()

hero4.getAtack()

