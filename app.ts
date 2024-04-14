import prompt = require ("prompt-sync")
import { Conta } from "./conta"
import { Banco } from "./banco"

let input = prompt()
let banco : Banco = new Banco()
let opcao : string = ''

do {
    console.log("\nBem-vindo, digite uma opção: \n")
    console.log('1 - Cadastrar   2 - Consultar   3 - Sacar\n') +
               ('4 - Depositar   5 - Excluir     6 - Transferir\n') +
               ('0 - Sair\n')

    opcao = input("Opção: ")

    switch (opcao) {
        case "1":
            inserir()
            break
        case "2":
            consultar()
            break
        case "3":
            sacar()
            break
        case "4":
            depositar()
            break
        case "5":
            excluir()
            break
        case "6":
            transferir()
            break
        default:
            console.log("Opção inválida!")
    }
    input("Operação finalizada. Digite <enter>")
    while (opcao != "0");
}
    console.log("Aplicação encerrada com sucesso!")

    function inserir(): void {
        console.log("\nCadastrar conta\n")
        let numero : string = input("Digite o número da conta: ")
        let nome : string = input("Digite o nome da conta: ")

        let conta : Conta
        conta = new Conta(numero, nome, 0)
        banco.inserir(conta)
    }

    function consultar(): void {
        console.log("\nConsultar conta\n")
        let numero : string = input("Digite o número da conta: ")
        banco.consultar(numero)
    }

    function sacar() : void {
        console.log("\nSacar valor\n")
        let numero : string = input("Digite o número da conta: ")
        let valor : number = input("Digite aqui o valor do saque: ")
        banco.sacar(numero, valor)
    }

    function depositar() : void {
        console.log("\nDepositar valor\n")
        let numero : string = input("Digite o número da conta: ")
        let valor : number = input("Digite aqui o valor para depósito: ")
        banco.depositar(numero, valor)
    }

    function excluir() : void {
        console.log("\nExcluir conta\n")
        let numero : string = input("Digite o número da conta: ")
        banco.excluir(numero)
    }

    function transferir() : void {
        console.log("\nTransferir valor\n")
        let numDebito : string = input("Digite aqui a conta de Origem: ")
        let numCredito : string = input("Digite aqui a conta de Destino: ")
        let valor : number = input("Digite aqui o valor a ser transferido: ")
        banco.transferir(numCredito, numDebito, valor)
    }
    
            


