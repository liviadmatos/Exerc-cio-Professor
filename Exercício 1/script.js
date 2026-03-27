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