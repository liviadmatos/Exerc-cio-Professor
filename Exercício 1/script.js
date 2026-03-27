function calcular(){
            const salarioBruto = Number(document.getElementById('salario').value)
            const horasNormais = Number(document.getElementById('horasNormais').value)
            const horasFinalSemana = Number(document.getElementById('horasFinalSemana').value)

            if (salarioBruto <= 0 || isNaN(salarioBruto) || horasNormais < 0 || isNaN(horasNormais) || horasFinalSemana < 0 || isNaN(horasFinalSemana)) {
                alert('Insira valores válidos para salário e horas extras')
                return
            }

            const valorHoraComum = salarioBruto / 200
            const valorHoraExtra = valorHoraComum * 1.5
            const valorHoraExtraFinalSemana = valorHoraComum * 2

            const totalHorasExtras = valorHoraExtra * horasNormais + valorHoraExtraFinalSemana * horasFinalSemana

            const displayResultado = document.getElementById('resultado')
            displayResultado.innerText = totalHorasExtras.toLocaleString('pt-br',{
                style:"currency",
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