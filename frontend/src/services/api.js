export const api = {
    getDashboardData(role) {
        if (role === 'gestor') {
            return {
                totalFuncionarios: 12,
                totalSolicitacoes: 34,
                alertas: 2,
            };
        }


        return {
            proximasTarefas: 4,
            pontos: 120,
        };
    },
};