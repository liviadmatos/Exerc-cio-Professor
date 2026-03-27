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