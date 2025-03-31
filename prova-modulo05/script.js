let tarefas = [];

while (true) {
    let opcao = prompt(
        "📝 Gerenciador de Tarefas\n\n" +
        "1️⃣ - Adicionar tarefa\n" +
        "2️⃣ - Listar tarefas\n" +
        "3️⃣ - Marcar tarefa como concluída ✅\n" +
        "4️⃣ - Remover tarefa 🗑\n" +
        "5️⃣ - Sair 🚪\n\n" +
        "Escolha uma opção:"
    );

    if (opcao === "1") {
        let novaTarefa = prompt("Digite a nova tarefa:");

        if (novaTarefa) {
            tarefas.push({ nome: novaTarefa, concluida: false });
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
                let status = tarefa.concluida ? "✅" : "❌";
                lista += `${index + 1}. ${status} ${tarefa.nome}\n`;
            }
            alert(lista);
        }
    } 
    
    else if (opcao === "3") {
        if (tarefas.length === 0) {
            alert("📭 Não há tarefas para marcar como concluída.");
            continue;
        }

        let lista = "✅ Selecione a tarefa concluída:\n";
        for (let [index, tarefa] of tarefas.entries()) {
            let status = tarefa.concluida ? "✅" : "❌";
            lista += `${index + 1}. ${status} ${tarefa.nome}\n`;
        }

        let num = Number(prompt(lista)) - 1;

        if (num >= 0 && num < tarefas.length) {
            tarefas[num].concluida = true;
            alert(`🎉 Tarefa "${tarefas[num].nome}" marcada como concluída ✅!`);
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
            let status = tarefa.concluida ? "✅" : "❌";
            lista += `${index + 1}. ${status} ${tarefa.nome}\n`;
        }

        let num = Number(prompt(lista)) - 1;

        if (num >= 0 && num < tarefas.length) {
            let removida = tarefas.splice(num, 1);
            alert(`🗑 Tarefa "${removida[0].nome}" removida da lista.`); // 🚀 Correção aplicada aqui!
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
