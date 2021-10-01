const conta1 = {
    agencia: 1234,
    conta: 5678910,
    saldo: 0,
    chavePix: "(71)99935-3536",
    nomeDoPropietario: "Leonardo"
}

const conta2 = {}
conta2.agencia = 4321
conta2.conta = 12345678
conta2.saldo = 300
conta2.chavePix = "(71)99972-3638"
conta2.nomeDoPropietario = "Ricardo"

const conta3 = {
    agencia: 9999,
    conta: 888888,
    saldo: 1500,
    chavePix: "(71)99988-8787",
    nomeDoPropietario: "Fernanda"
}


const arrayContas = [conta1 , conta2 , conta3]

function VerSaldo(contaParametro){
    return contaParametro.saldo
} 

function Depositar(contaParametro, valor){
    contaParametro.saldo = contaParametro.saldo + valor

}

function Sacar(contaParametro, valor){
    if (EhPossivelSacar(contaParametro, valor)){
        contaParametro.saldo = contaParametro.saldo - valor
    }
    else alert("O saldo da conta insuficiente")
    
}

function PIX(origem, destino, valor){
    if (EhPossivelSacar(origem, valor)){
        Sacar(origem, valor)
        Depositar(destino, valor)
    }
    else 
        alert("O saldo da conta insuficiente")
    
}

function EhPossivelSacar(conta, valor){
    if (conta.saldo >= valor) {
        return true;
    } else { 
        return false;
    }
}



let operacao = 0
while (operacao != 5 ) {
    const selecionarConta = parseInt(prompt("Qual conta deseja usar? \n 1: "+ conta1.nomeDoPropietario + "\n 2: " + conta2.nomeDoPropietario + "\n 3: " + conta3.nomeDoPropietario))
    operacao = parseInt(prompt("Escolha um Opção ? \n 1 - Deposito \n 2 - Saque \n 3- Ver Saldo \n 4- Pix \n 5- Sair"))

    const contaSelecionada = arrayContas[selecionarConta-1];
    console.log(contaSelecionada)

    switch(operacao) {
        case 1: {
            const valorADepositar = parseFloat(prompt("Quanto deseja depositar na conta?"))
            Depositar(contaSelecionada, valorADepositar)
            break
        }
        case 2: {
            const valorASacar = parseFloat(prompt("Quanto deseja sacar da conta?"))
            Sacar(contaSelecionada, valorASacar)
            break
        }
        case 3: {
            const saldoRetornado = VerSaldo(contaSelecionada)
            alert("O saldo da conta de " + contaSelecionada.nomeDoPropietario + " é de: R$ " + saldoRetornado)
            break
        }
        case 4: {
            const selecionarPIX = parseInt(prompt("Qual conta deseja enviar PIX \n 1: "+ conta1.nomeDoPropietario + " " + conta1.chavePix + "\n 2: " + conta2.nomeDoPropietario + " " + conta2.chavePix + "\n 3: " + conta3.nomeDoPropietario + " " + conta3.chavePix))
            const contaDestino = arrayContas[selecionarPIX-1];
            const valorPIX = parseFloat(prompt("Quanto deseja transferir via PIX?"))
            PIX(contaSelecionada, contaDestino, valorPIX)

            break
        }
        case 5: {
            break
        }
        default:{
            alert("Opção Invalida")
        }

    }
}
