let tarefas = []; 

while (true) {
    let opcao = prompt(
        "Gerenciador de Tarefas\n\n" +
        "1️⃣ - Adicionar tarefa\n" +
        "2️⃣ - Listar tarefas\n" +
        "3️⃣ - Concluir tarefa\n" +
        "4️⃣ - Remover tarefa\n" +
        "5️⃣ - Sair\n\n" +
        "Escolha uma opção:"
    );

    if (opcao === "1") {
        let novaTarefa = prompt("Digite a nova tarefa:");
        
        if (novaTarefa) {
            tarefas.push(novaTarefa);
            alert(`✅ Tarefa "${novaTarefa}" adicionada com sucesso!`);
        } else {
            alert("❌ Opa! Você esqueceu de digitar a tarefa.");
        }
    } 
    
    else if (opcao === "2") {
        if (tarefas.length === 0) {
            alert("📭 Sua lista de tarefas está vazia.");
        } else {
            let lista = "📌 Tarefas:\n";
            for (let [index, tarefa] of tarefas.entries()) {
                lista += `${index + 1}. ${tarefa}\n`;
            }
            alert(lista);
        }
    } 
    
    else if (opcao === "3") {
        if (tarefas.length === 0) {
            alert("📭 Não há tarefas para concluir.");
            continue;
        }

        let lista = "✅ Selecione a tarefa concluída:\n";
        for (let [index, tarefa] of tarefas.entries()) {
            lista += `${index + 1}. ${tarefa}\n`;
        }

        let num = Number(prompt(lista)) - 1;

        if (num >= 0 && num < tarefas.length) {
            let concluida = tarefas.splice(num, 1);
            alert(`🎉 Tarefa "${concluida}" concluída e removida da lista!`);
        } else {
            alert("❌ Número inválido.");
        }
    } 
    
    else if (opcao === "4") {
        if (tarefas.length === 0) {
            alert("📭 Não há tarefas para remover.");
            continue;
        }

        let lista = "🗑 Selecione a tarefa para remover:\n";
        for (let [index, tarefa] of tarefas.entries()) {
            lista += `${index + 1}. ${tarefa}\n`;
        }

        let num = Number(prompt(lista)) - 1;

        if (num >= 0 && num < tarefas.length) {
            let removida = tarefas.splice(num, 1);
            alert(`🗑 Tarefa "${removida}" removida da lista.`);
        } else {
            alert("❌ Número inválido.");
        }
    } 
    
    else if (opcao === "5") {
        alert("👋 Saindo do Gerenciador de Tarefas. Até mais!");
        break;
    } 
    
    else {
        alert("❌ Opção inválida! Escolha um número de 1 a 5.");
    }
}
