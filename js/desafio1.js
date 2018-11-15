var botao = document.querySelector("#botao");
var resposta = document.querySelector("#resposta");



botao.addEventListener("click",function(){
	var acertos = 0;
	var expressaoRegular = new RegExp(document.querySelector("#nomeCB").value, "i")
	
	if(document.querySelector("#ano").value == 2011) {
		acertos += 1;
	}

	if(document.querySelector("#nomeCB").value === "Satoshi Nakamoto") {
		acertos += 1;
		console.log("a")
	}

	if(document.querySelector("#correto").checked) {
		acertos += 1;
	}

	var porcentagem = 100*(acertos / 3)
	resposta.textContent = porcentagem + "%";
})

