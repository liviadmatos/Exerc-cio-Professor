function calcular(){
            const salarioAtual = Number(document.getElementById('salarioAtual').value)

            if (salarioAtual <= 0 || isNaN(salarioAtual)) {
                alert('Insira um salário válido!')
                return
            }

            let percentualAumento = 0

            if (salarioAtual <= 1200) {
                percentualAumento = 16
            } else if (salarioAtual <= 2100) {
                percentualAumento = 13
            } else if (salarioAtual <= 3000) {
                percentualAumento = 10
            } else {
                percentualAumento = 5
            }

            const valorAumento = salarioAtual * (percentualAumento / 100)
            const novoSalario = salarioAtual + valorAumento

            document.getElementById('valorAumento').innerText = valorAumento.toLocaleString('pt-br', {
                style: "currency",
                currency: "BRL"
            })

            document.getElementById('novoSalario').innerText = novoSalario.toLocaleString('pt-br', {
                style: "currency",
                currency: "BRL"
            })
        }


function atualizarRelogio() {
    const agora = new Date();
    
    // Obtém horas, minutos e segundos
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    
    // Monta a string no formato HH:MM:SS
    const horaFormatada = `${horas}:${minutos}:${segundos}`;
    
    // Joga o resultado dentro da div com id="relogio"
    document.getElementById('relogio').textContent = horaFormatada;
}

// Executa a função a cada 1000 milissegundos (1 segundo)
setInterval(atualizarRelogio, 1000);

// Chama a função uma vez logo de cara para não esperar 1s pelo primeiro ciclo
atualizarRelogio();