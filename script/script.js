
// Frase que você deseja exibir
const a = "deeply explore your curiosity. learn about what excites you most.";

// Obter o elemento <p> pelo ID
const element = document.getElementById('text');

// Função para exibir a frase digitando automaticamente
function display(a, element) {
    let index = 0;

    function digitar() {
        if (index < a.length) {
            element.innerHTML += a.charAt(index);
            index++;
            setTimeout(digitar, 50); // Ajuste a velocidade da digitação aqui
        }
    }

    digitar();
}

// Chamar a função para exibir a frase
display(a, element);