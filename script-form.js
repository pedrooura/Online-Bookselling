var cepError = document.getElementById('cepError');
cepError.innerHTML = "";
async function buscaEndereco (cep) {
    try {
        var requisicao = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEP = await requisicao.json();
        console.log(consultaCEP)
        if (consultaCEP.erro) {
            throw Error (`CEP doesn't found`)
        }
        var city = document.getElementById('cidade');
        var street = document.getElementById('endereco');
        var neighbourhood = document.getElementById('bairro');
        var stateUF = document.getElementById('estado');


        city.value = consultaCEP.localidade;
        street.value = consultaCEP.logradouro;
        neighbourhood.value = consultaCEP.bairro;
        stateUF.value = consultaCEP.uf
        cepError.innerHTML = ""; 
    } catch (erro) {
        cepError.innerHTML = `<p>This CEP doesnt exist, please try again</p>`
        console.log(erro)
    }
    
}

var cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value))


