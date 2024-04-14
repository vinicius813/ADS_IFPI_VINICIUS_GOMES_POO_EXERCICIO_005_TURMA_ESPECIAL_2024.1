"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
var conta_1 = require("./conta");
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
    }
    Banco.prototype.inserir = function (conta) {
        if (!this.consultar(conta.numero)) {
            this.contas.push(conta);
            return true;
        }
        return false;
    };
    Banco.prototype.consultar = function (numero) {
        var contaProcurada;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c.numero == numero) {
                contaProcurada = c;
                break;
            }
        }
        return contaProcurada;
    };
    Banco.prototype.consultarIndice = function (numero) {
        var indiceProcurado = -1;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }
        return indiceProcurado;
    };
    Banco.prototype.alterar = function (conta) {
        var indice = this.consultarIndice(conta.numero);
        if (indice != -1) {
            this.contas[indice] = conta;
        }
    };
    Banco.prototype.excluir = function (numero) {
        var indice = this.consultarIndice(numero);
        if (indice != -1) {
            for (var i = 0; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
        }
        this.contas.pop();
    };
    // Agora, vou criar os métodos de Conta
    Banco.prototype.depositar = function (numero, valor) {
        var conta = this.consultar(numero);
        if (conta != null) {
            conta.depositar(valor);
        }
    };
    Banco.prototype.sacar = function (numero, valor) {
        var conta = this.consultar(numero);
        if (conta != null) {
            conta.sacar(valor);
        }
    };
    Banco.prototype.transferir = function (numCredito, numDebito, valor) {
        var cDebito = this.consultar(numDebito);
        var cCredito = this.consultar(numCredito);
        if (cDebito && cCredito) {
            cDebito.transferir(cCredito, valor);
        }
    };
    Banco.prototype.totalContas = function () {
        var total = 0;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            total++;
        }
        return total;
    };
    Banco.prototype.totalSaldo = function () {
        var total = 0;
        for (var _i = 0, _a = this.contas; _i < _a.length; _i++) {
            var conta = _a[_i];
            total += conta.saldo;
        }
        return total;
    };
    Banco.prototype.mediaSaldo = function () {
        var totalContas = this.totalContas();
        var totalSaldo = this.totalSaldo();
        return totalSaldo / totalContas;
    };
    return Banco;
}());
exports.Banco = Banco;
var b = new Banco();
b.inserir(new conta_1.Conta("11111-2", "Vinícius", 100));
//console.log(b.consultar("11111-2"));
//console.log(b.consultar("22222-1"));
var contaAlterada = b.consultar("11111-2");
contaAlterada.nome = "Vinícius Gomes Araújo";
b.alterar(contaAlterada);
//console.log(b.consultar("11111-2"));
b.inserir(new conta_1.Conta("33333-3", "João", 200));
b.inserir(new conta_1.Conta("44444-4", "Maria", 300));
b.inserir(new conta_1.Conta("55555-5", "Marcela", 20));
//console.log(b.contas);
//b.excluir("11111-2");
b.sacar("44444-4", 50);
console.log(b.consultar("555"));
console.log(b.consultarIndice("555"));
console.log(b);
console.log(b.totalContas());
console.log(b.totalSaldo());
console.log(b.mediaSaldo());
