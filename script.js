function Pedrada() {
    let TarefaRegistrar = document.getElementById("TarefaRegistrar");
    let Texto = TarefaRegistrar.value.trim();
    if (Texto === "") return;

    let li = document.createElement("li");
    li.innerHTML = `
        <div>${Texto}</div>
        <div>
            <button onclick="Completado(this)">Concluir</button>
            <button onclick="Remover(this)">Remover</button>
        </div>
    `;
    document.getElementById("Tarefa").appendChild(li);
    TarefaRegistrar = "";
}

function Completado(button) {
    let Texto = button.parentElement.parentElement;
    Texto.querySelector("div").classList.toggle("completado");
}

function Remover(button) {
    let Texto = button.parentElement.parentElement;
    Texto.remove();
}