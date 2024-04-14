export class Conta {
    numero : string
    nome : string
    saldo : number

    constructor(numero : string, nome : string, saldo : number) {
        this.numero = numero
        this.nome = nome
        this.saldo = saldo
    }

    sacar(valor : number) : boolean {
        if (this.saldo >= valor) {
            this.saldo -= valor
            return true
        } return false
    }

    depositar(valor : number) : void {
        this.saldo += valor
    }

    consultar() : number {
        return this.saldo
    }

    transferir(contaDestino : Conta, valor : number) : boolean {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor)
            return true
        } return false
    }
}
    