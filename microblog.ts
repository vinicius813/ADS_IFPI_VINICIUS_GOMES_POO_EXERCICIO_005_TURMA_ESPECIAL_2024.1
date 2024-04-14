class Postagem {
    id : number
    texto : string
    quantidadeCurtidas : number

    constructor(id : number, texto : string) {
        this.id = id
        this.texto = texto
        this.quantidadeCurtidas = 0
    }

    curtir() {
        this.quantidadeCurtidas++
    }

    toString() {
        return `${this.texto} - ${this.quantidadeCurtidas} curtidas.`
    }
}

class Microblog {
    postagens : Postagem[]

    constructor() {
        this.postagens = []
    }

    incluirPostagem(postagem : Postagem) {
        this.postagens.push(postagem)
    }

    excluirPostagem(id : number) {
        this.postagens = this.postagens.filter(postagem => postagem.id !== id)
    }

    postagemMaisCurtida() : Postagem | undefined {
        if (this.postagens.length === 0) {
            return undefined
        }
        let maisCurtida = this.postagens[0]
        for (const postagem of this.postagens) {
            if (postagem.quantidadeCurtidas > maisCurtida.quantidadeCurtidas) {
                maisCurtida = postagem
            }
        }
        return maisCurtida
    }

    curtirPostagem(id : number) {
        const postagem = this.postagens.find(postagem => postagem.id === id)
        if (postagem) {
            postagem.curtir()
        }
    }

    toString() {
        let result = ''
        for (const postagem of this.postagens) {
            result += postagem.toString() + '\n'
        }
        return result
    }
}

// Exemplo de uso
const microblog = new Microblog()
const postagem1 = new Postagem(1, "Primeira Postagem")
const postagem2 = new Postagem(2, "Segunda Postagem")

microblog.incluirPostagem(postagem1)
microblog.incluirPostagem(postagem2)

console.log("Todas as postagens!")
console.log(microblog.toString())

console.log("Postagem mais curtida: ")
console.log(microblog.postagemMaisCurtida()?.toString())

microblog.curtirPostagem(1)
microblog.curtirPostagem(1)
microblog.curtirPostagem(2)

console.log("Todas as postagens após as curtidas: ")
console.log(microblog.toString())

console.log("Postagem mais curtida após curtidas: ")
console.log(microblog.postagemMaisCurtida()?.toString())

microblog.excluirPostagem(1)

console.log("Todas as postagens após exclusão: ")
console.log(microblog.toString())











