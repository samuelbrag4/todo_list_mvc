class TarefaModel {
  constructor() {
    this.tarefas = [
        { id: 1, descricao: "Estudar Node.js", finalizada: false }
    ];
  }
  getAll = () => this.tarefas;

  // Criação de Nova Tarefa
  create = (descricao) => {
    const novaTarefa = {
      id: this.tarefas.length + 1,
      descricao,
      finalizada: false,
    };

    this.tarefas.push(novaTarefa);
    return novaTarefa;
  };

  // Atualização de Tarefa
  update = (id, descricao, finalizada) => {
    const tarefa = this.tarefas.find((t) => t.id === Number(id));

    if (tarefa) {
        tarefa.finalizada =
            finalizada !== undefined ? finalizada : tarefa.finalizada;
        return tarefa;
    }
    return null;
  };

  // Remoção de tarefa
  delete = (id) => {
    const index = this.tarefas.findIndex((t) => t.id === Number(id));

    if (index !== -1) {
        this.tarefas.splice(index, 1);
        return true;
    }
    return false;
  };
}

export default new TarefaModel;