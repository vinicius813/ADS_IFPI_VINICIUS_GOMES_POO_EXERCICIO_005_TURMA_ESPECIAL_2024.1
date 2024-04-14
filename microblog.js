var _a, _b;
var Postagem = /** @class */ (function () {
    function Postagem(id, texto) {
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = 0;
    }
    Postagem.prototype.curtir = function () {
        this.quantidadeCurtidas++;
    };
    Postagem.prototype.toString = function () {
        return "".concat(this.texto, " - ").concat(this.quantidadeCurtidas, " curtidas.");
    };
    return Postagem;
}());
var Microblog = /** @class */ (function () {
    function Microblog() {
        this.postagens = [];
    }
    Microblog.prototype.incluirPostagem = function (postagem) {
        this.postagens.push(postagem);
    };
    Microblog.prototype.excluirPostagem = function (id) {
        this.postagens = this.postagens.filter(function (postagem) { return postagem.id !== id; });
    };
    Microblog.prototype.postagemMaisCurtida = function () {
        if (this.postagens.length === 0) {
            return undefined;
        }
        var maisCurtida = this.postagens[0];
        for (var _i = 0, _a = this.postagens; _i < _a.length; _i++) {
            var postagem = _a[_i];
            if (postagem.quantidadeCurtidas > maisCurtida.quantidadeCurtidas) {
                maisCurtida = postagem;
            }
        }
        return maisCurtida;
    };
    Microblog.prototype.curtirPostagem = function (id) {
        var postagem = this.postagens.find(function (postagem) { return postagem.id === id; });
        if (postagem) {
            postagem.curtir();
        }
    };
    Microblog.prototype.toString = function () {
        var result = '';
        for (var _i = 0, _a = this.postagens; _i < _a.length; _i++) {
            var postagem = _a[_i];
            result += postagem.toString() + '\n';
        }
        return result;
    };
    return Microblog;
}());
// Exemplo de uso
var microblog = new Microblog();
var postagem1 = new Postagem(1, "Primeira Postagem");
var postagem2 = new Postagem(2, "Segunda Postagem");
microblog.incluirPostagem(postagem1);
microblog.incluirPostagem(postagem2);
console.log("Todas as postagens!");
console.log(microblog.toString());
console.log("Postagem mais curtida: ");
console.log((_a = microblog.postagemMaisCurtida()) === null || _a === void 0 ? void 0 : _a.toString());
microblog.curtirPostagem(1);
microblog.curtirPostagem(1);
microblog.curtirPostagem(2);
console.log("Todas as postagens após as curtidas: ");
console.log(microblog.toString());
console.log("Postagem mais curtida após curtidas: ");
console.log((_b = microblog.postagemMaisCurtida()) === null || _b === void 0 ? void 0 : _b.toString());
microblog.excluirPostagem(1);
console.log("Todas as postagens após exclusão: ");
console.log(microblog.toString());
