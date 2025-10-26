let name = "Eduardo"
let age = 23
let = type = "mago" 

    switch(type) {
        case type = "mago":
        typeAtack = "magia"
            break;

        case type = "guerreiro":
        typeAtack = "espada"
            break;
            
        case type = "monge":
        typeAtack = "artes marciais"
            break;

        case type = "ninja":
        typeAtack = "shuriken"
            break;
        default: "Sem type selecionado"
            break;
    }

    class hero {
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
        atack(){
        console.log(`o ${this.type} atacou usando ${typeAtack}`)
    }
}

let exibeMsg = new hero(name, age, type)

exibeMsg.atack()




