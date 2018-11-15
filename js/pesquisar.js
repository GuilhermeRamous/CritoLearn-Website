var input = document.querySelector("#pesquisa");
var articlesTitles = ["What is an Altcoin?", "What is Blockchain Technology?", "Ethereum Creator", "The History of Cryptography", "Digital Signatures", "Will Dogecoin Replace Bitcoin?", "Historia da Bitcoin", "South Korea, the Cripto Valley", "What is Litecoin?", "What is Monero?", "Ripple", "What is RSA?", "Who is Changpeng Zhao AKA CZ?"]
var linksArtigo = document.querySelectorAll(".linkArtigo");

input.addEventListener("input", function() {
	for(var i = 0; i < linksArtigo.length; i++) {
		var titulo = linksArtigo[i].querySelector(".artigo").querySelector(".imagemArtigo").alt;
		console.log(titulo);
		var expressaoRegular = new RegExp(this.value, "i");

		if(this.value.length === 0) {
			linksArtigo[i].classList.remove("invisivel");
		} else {
			if(expressaoRegular.test(titulo)) {
				linksArtigo[i].classList.remove("invisivel");
			} else {
				linksArtigo[i].classList.add("invisivel")
			}
		}
	}
})