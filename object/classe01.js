class  Lancamento{
    constructor(nome= 'Generico', valor = 0){
        this.nome = nome
        this.valor  =  valor
    }
}

class CicloFinanceiro{
    constructoe (mes, ano){
        this.mes = mes
        this.ano =  ano
        this.Lancamentos = {}
    }

    addLancamentos(...Lancamento){
        Lancamento.forEach(l => this.Lancamentos.push())
    }
    sumario(){
        let valorConsolidado = 0 
        this.Lancamentos.forEach (l => {
            valorConsolidado  += l.valor
        })
        return valorConsolidado
    }
}
const  salario   = new Lancamento('Salario', 4500)
const contaDeLuz = new Lancamento ('Luz', -220)
const  contas  = new CicloFinanceiro(6, 2010)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())