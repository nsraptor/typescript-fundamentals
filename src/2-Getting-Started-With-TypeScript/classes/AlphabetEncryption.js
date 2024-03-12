"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlphabetEncryption = void 0;
var AlphabetEncryption = /** @class */ (function () {
    function AlphabetEncryption() {
    }
    AlphabetEncryption.prototype.getEncryptedCharacter = function (character) {
        var map = new Map();
        map.set("a", "@");
        map.set("b", "8");
        map.set("c", "(");
        map.set("d", "|)");
        map.set("e", "3");
        map.set("f", "#");
        map.set("g", "6");
        map.set("h", "[-]");
        map.set("i", "|");
        map.set("j", "_|");
        map.set("k", "|<");
        map.set("l", "1");
        map.set("m", "[]\\/[]");
        map.set("n", "[]\\[]");
        map.set("o", "0");
        map.set("p", "|D");
        map.set("q", "(,)");
        map.set("r", "|Z");
        map.set("s", "$");
        map.set("t", "']['");
        map.set("u", "|_|");
        map.set("v", "\\/");
        map.set("w", "\\/\\/\\/");
        map.set("x", "}{");
        map.set("y", "`/");
        map.set("z", "2");
        if (map.has(character)) {
            return map.get(character);
        }
        else {
            return character;
        }
    };
    AlphabetEncryption.prototype.printEncryptedMessage = function (simpleMsg) {
        //   let str = "All your base are belong to us.".toLowerCase();
        var str = simpleMsg.toLowerCase();
        // 
        console.log("INSIDE printEncryptedMessage");
        var encrStr = "";
        for (var i = 0; i < str.length; i++) {
            encrStr += this.getEncryptedCharacter(str.charAt(i));
        }
        return encrStr;
    };
    return AlphabetEncryption;
}());
exports.AlphabetEncryption = AlphabetEncryption;
