"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync");
var conta_1 = require("./conta");
var banco_1 = require("./banco");
var input = prompt();
var banco = new banco_1.Banco();
var opcao = '';
do {
    console.log("\nBem-vindo, digite uma opção: \n");
    console.log('1 - Cadastrar   2 - Consultar   3 - Sacar\n') +
        ('4 - Depositar   5 - Excluir     6 - Transferir\n') +
        ('0 - Sair\n');
    opcao = input("Opção: ");
    switch (opcao) {
        case "1":
            inserir();
            break;
        case "2":
            consultar();
            break;
        case "3":
            sacar();
            break;
        case "4":
            depositar();
            break;
        case "5":
            excluir();
            break;
        case "6":
            transferir();
            break;
        default:
            console.log("Opção inválida!");
    }
    input("Operação finalizada. Digite <enter>");
    while (opcao != "0")
        ;
} while (console.log("Aplicação encerrada com sucesso!"));
function inserir() {
    console.log("\nCadastrar conta\n");
    var numero = input("Digite o número da conta: ");
    var nome = input("Digite o nome da conta: ");
    var conta;
    conta = new conta_1.Conta(numero, nome, 0);
    banco.inserir(conta);
}
function consultar() {
    console.log("\nConsultar conta\n");
    var numero = input("Digite o número da conta: ");
    banco.consultar(numero);
}
function sacar() {
    console.log("\nSacar valor\n");
    var numero = input("Digite o número da conta: ");
    var valor = input("Digite aqui o valor do saque: ");
    banco.sacar(numero, valor);
}
function depositar() {
    console.log("\nDepositar valor\n");
    var numero = input("Digite o número da conta: ");
    var valor = input("Digite aqui o valor para depósito: ");
    banco.depositar(numero, valor);
}
function excluir() {
    console.log("\nExcluir conta\n");
    var numero = input("Digite o número da conta: ");
    banco.excluir(numero);
}
function transferir() {
    console.log("\nTransferir valor\n");
    var numDebito = input("Digite aqui a conta de Origem: ");
    var numCredito = input("Digite aqui a conta de Destino: ");
    var valor = input("Digite aqui o valor a ser transferido: ");
    banco.transferir(numCredito, numDebito, valor);
}
