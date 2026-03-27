# 📊 Sistema Empresarial - Calculadoras

Um conjunto de três calculadoras web desenvolvidas para auxiliar gestores e funcionários em cálculos rotineiros do departamento de recursos humanos e logística.

---

## 📋 Processo do Trabalho

### Objetivo Geral
Desenvolver ferramentas web interativas que automatizem cálculos de:
- Cálculo de horas extras
- Aumento salarial por faixa salarial
- Custo de transporte fretado

### Tecnologias Utilizadas
- **HTML5:** Estrutura semântica das páginas
- **CSS3 + Tailwind CSS:** Estilização moderna e responsiva
- **JavaScript (Vanilla):** Lógica de cálculos sem dependências externas
- **Tailwind CSS CDN:** Framework de utilitários para design rápido

### Estrutura do Projeto
```
Exercício Professor/
├── index.html                    (Página inicial - Landing page)
├── readme.md                     (Este arquivo)
├── Exercício 1/
│   └── index.html               (Calculadora de Horas Extras)
├── Exercício 2/
│   └── index.html               (Calculadora de Aumento Salarial)
└── Exercício 3/
    └── index.html               (Calculadora de Transporte Fretado)
```

### Como Usar
1. Abra o arquivo **index.html** raiz em um navegador web
2. Clique em um dos três cartões para acessar a calculadora desejada
3. Preencha os campos com os dados solicitados
4. Clique em "Calcular" para obter os resultados
5. Os valores serão formatados automaticamente em Real (R$)

---

## 🧮 Exercício 1: Calculadora de Horas Extras

### Descrição
Calcula o valor total de horas extras trabalhadas, considerando diferentes taxas para dias normais e finais de semana.

### Fórmula de Cálculo
```
Valor da Hora Comum = Salário Bruto ÷ 200
Valor da Hora Extra (dias normais) = Valor da Hora Comum × 1.5
Valor da Hora Extra (finais de semana) = Valor da Hora Comum × 2
Total de Horas Extras = (Valor Hora Extra × Horas Normais) + (Valor Extra Fim de Semana × Horas Fim de Semana)
```

### Campos de Entrada
| Campo | Tipo | Descrição |
|-------|------|-----------|
| Salário Bruto | Número | Salário base do funcionário em reais |
| Horas Extras (dias normais) | Número | Quantidade de horas trabalhadas em dias úteis |
| Horas Extras (finais de semana) | Número | Quantidade de horas trabalhadas em fins de semana |

### Campos de Saída
| Campo | Descrição |
|-------|-----------|
| Resultado | Valor total devido em horas extras formatado em R$ |

### Validações
- ❌ Salário bruto deve ser maior que 0
- ❌ Horas não podem ser negativas
- ❌ Campos não podem estar vazios

### Exemplo Prático
```
Entrada:
  - Salário Bruto: R$ 2.000,00
  - Horas Extras (dias normais): 10
  - Horas Extras (finais de semana): 5

Cálculo:
  - Hora Comum = 2.000 ÷ 200 = R$ 10,00
  - Hora Extra Normal = 10 × 1.5 = R$ 15,00
  - Hora Extra Fim de Semana = 10 × 2 = R$ 20,00
  - Total = (15 × 10) + (20 × 5) = R$ 250,00

Saída: R$ 250,00
```

---

## 💰 Exercício 2: Calculadora de Aumento Salarial

### Descrição
Calcula o valor do aumento e o novo salário de um funcionário conforme sua faixa salarial.

### Tabela de Percentuais de Aumento
| Faixa Salarial | Percentual |
|----------------|-----------|
| Até R$ 1.200,00 | 16% |
| R$ 1.200,01 - R$ 2.100,00 | 13% |
| R$ 2.100,01 - R$ 3.000,00 | 10% |
| Acima de R$ 3.000,00 | 5% |

### Fórmula de Cálculo
```
Valor do Aumento = Salário Atual × (Percentual ÷ 100)
Novo Salário = Salário Atual + Valor do Aumento
```

### Campos de Entrada
| Campo | Tipo | Descrição |
|-------|------|-----------|
| Salário Atual | Número | Salário bruto atual do funcionário em reais |

### Campos de Saída
| Campo | Descrição |
|-------|-----------|
| Valor do Aumento | Valor em reais que será adicionado ao salário |
| Novo Salário | Salário final após o aumento |

### Validações
- ❌ Salário deve ser maior que 0
- ❌ Campo não pode estar vazio

### Exemplo Prático
```
Entrada:
  - Salário Atual: R$ 1.500,00

Cálculo:
  - Faixa: R$ 1.200,01 - R$ 2.100,00 (13%)
  - Aumento = 1.500 × 0.13 = R$ 195,00
  - Novo Salário = 1.500 + 195 = R$ 1.695,00

Saída:
  - Valor do Aumento: R$ 195,00
  - Novo Salário: R$ 1.695,00
```

---

## 🚌 Exercício 3: Calculadora de Transporte Fretado

### Descrição
Calcula o custo total do serviço de transporte fretado com base na quantidade de funcionários, dias úteis e faixa de quantidade de pessoas.

### Tabela de Valores por Pessoa
| Quantidade de Pessoas | Valor por Pessoa |
|----------------------|-----------------|
| 1 a 49 | R$ 4,50 |
| 50 a 99 | R$ 4,10 |
| 100 a 149 | R$ 3,80 |
| 150+ | R$ 3,60 |

### Fórmula de Cálculo
```
Custo Total = Quantidade de Funcionários × Dias Úteis × Valor por Pessoa
```

### Campos de Entrada
| Campo | Tipo | Descrição |
|-------|------|-----------|
| Quantidade de Funcionários | Número | Total de pessoas que utilizarão o transporte |
| Quantidade de Dias Úteis | Número | Número de dias que o serviço será prestado |

### Campos de Saída
| Campo | Descrição |
|-------|-----------|
| Valor por Pessoa | Valor unitário conforme a faixa de quantidade |
| Custo Total | Valor total do serviço de transporte |

### Validações
- ❌ Quantidade de funcionários deve ser maior que 0
- ❌ Dias úteis deve ser maior que 0
- ❌ Campos não podem estar vazios

### Exemplo Prático
```
Entrada:
  - Quantidade de Funcionários: 75
  - Quantidade de Dias Úteis: 22

Cálculo:
  - Faixa: 50 a 99 pessoas (R$ 4,10)
  - Valor Pessoa: R$ 4,10
  - Custo Total = 75 × 22 × 4,10 = R$ 6.765,00

Saída:
  - Valor por Pessoa: R$ 4,10
  - Custo Total: R$ 6.765,00
```

---

## 🎨 Design e Interface

### Página Inicial (index.html)
- **Tema:** Gradiente roxo/magenta moderno
- **Layout:** Grid responsivo de 3 colunas (mobile: 1 coluna)
- **Componentes:** Cards com ícones flutuantes, efeitos hover e botões gradiente
- **Navegação:** Links diretos para cada exercício

### Páginas de Calculadoras (Exercícios 1-3)
- **Tema:** Dark mode com fundo preto/cinza
- **Layout:** Grid de 2 colunas (mobile: 1 coluna)
- **Componentes:** 
  - Inputs com validação em tempo real
  - Tabela legível de referência
  - Box de resultado destacado em verde
  - Botão de ação primária

### Paleta de Cores
- **Primária:** Verde (#22c55e)
- **Secundária:** Roxo (#667eea) / Azul (#4f46e5)
- **Background:** Cinza escuro (#27272a / #3f3f46)
- **Texto:** Branco (#ffffff)

---

## ✅ Recursos Implementados

- ✨ Interface moderna e responsiva
- 🧮 Cálculos precisos com validação de entrada
- 💾 Formatação automática de valores em Real (R$)
- 📱 100% responsivo (mobile, tablet, desktop)
- ♿ Acessibilidade básica com labels e placeholder
- 🎯 UX intuitiva com feedback visual
- 📊 Tabelas de referência integradas
- 🚀 Performance otimizada (sem external APIs)

---

## 🔧 Requisitos Técnicos

- **Navegador moderno** com suporte a ES6+
- **Conexão com CDN Tailwind** (via jsDelivr)
- **JavaScript habilitado** no navegador
- **Resolução mínima recomendada:** 320px (mobile)

---

## 📝 Notas de Desenvolvimento

### JavaScript
- Funções `calcular()` em cada página
- Validação com `Number()` e `isNaN()`
- Formatação com `toLocaleString('pt-br', {...})`
- Manipulação do DOM com `getElementById()`

### Styling
- Tailwind CSS via CDN para utilitários rápidos
- CSS customizado para animações flutuantes
- Media queries para responsividade



**Versão:** 1.0  
**Data:** 27 de Março de 2025  
**Status:** ✅ Completo e Funcional
