function calcular(){
            const quantidadeFuncionarios = Number(document.getElementById('quantidadeFuncionarios').value)
            const diasUteis = Number(document.getElementById('diasUteis').value)

            if (quantidadeFuncionarios <= 0 || isNaN(quantidadeFuncionarios) || diasUteis <= 0 || isNaN(diasUteis)) {
                alert('Insira valores válidos para quantidade de funcionários e dias úteis!')
                return
            }

            let valorPorPessoa = 0

            if (quantidadeFuncionarios >= 1 && quantidadeFuncionarios <= 49) {
                valorPorPessoa = 4.50
            } else if (quantidadeFuncionarios >= 50 && quantidadeFuncionarios <= 99) {
                valorPorPessoa = 4.10
            } else if (quantidadeFuncionarios >= 100 && quantidadeFuncionarios <= 149) {
                valorPorPessoa = 3.80
            } else if (quantidadeFuncionarios >= 150) {
                valorPorPessoa = 3.60
            }

            const custoTotal = quantidadeFuncionarios * diasUteis * valorPorPessoa

            document.getElementById('valorPessoa').innerText = valorPorPessoa.toLocaleString('pt-br', {
                style: "currency",
                currency: "BRL"
            })

            document.getElementById('custoTotal').innerText = custoTotal.toLocaleString('pt-br', {
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