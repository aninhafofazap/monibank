import umCpf from "./validaCpf.js";
import maiorDeIdade from "./validaIdade.js";
const camposDoFormulario = document.querySelectorAll('[required]');


camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
})


function verificaCampo(campo) {
    if (campo.name == 'cpf' && campo.value.length >= 11) {
        umCpf(campo);
    }

    if (campo.name == "aniversario" && campo.value != "") {
        maiorDeIdade(campo);
    }
}