// Gráfico de Barras - pH da Água
const ctxPh = document.getElementById('graficoPhAgua').getContext('2d');
new Chart(ctxPh, {
    type: 'bar',
    data: {
        labels: ['Ponto 1', 'Ponto 2', 'Ponto 3', 'Ponto 4', 'Ponto 5'],
        datasets: [{
            label: 'pH da Água',
            data: [6.5, 7.0, 6.8, 7.2, 6.9],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: { responsive: true, scales: { y: { beginAtZero: true, suggestedMax: 10 } } }
});


// Gráfico de Barras - Umidade do Solo por Faixa (%)
const ctxSolo = document.getElementById('graficoUmidadeSolo').getContext('2d');
new Chart(ctxSolo, {
    type: 'bar',
    data: {
        labels: ['0-20% (Muito seco)', '20-40% (Seco)', '40-60% (Ideal)', '60-80% (Úmido)'],
        datasets: [{
            label: 'Umidade do Solo (%)',
            data: [15, 30, 50, 70],
            backgroundColor: [
                'rgba(255, 174, 99, 0.23)',
                'rgba(255, 174, 99, 0.23)',
                'rgba(255, 174, 99, 0.23)',
            ],
            borderColor: [
                'rgba(255, 174, 99, 0.23)',
                'rgba(255, 174, 99, 0.23)',,
                'rgba(255, 174, 99, 0.23)',,
                'rgba(255, 174, 99, 0.23)',
            ],
            borderWidth: 1
        }]
    },
    options: { responsive: true, scales: { y: { beginAtZero: true, max: 100 } } }
});


// Gráfico de Barras - Umidade do Ar por Faixa (%)
const ctxAr = document.getElementById('graficoUmidadeAr').getContext('2d');
new Chart(ctxAr, {
    type: 'bar',
    data: {
        labels: [
            '0-30% (Muito baixa)',
            '30-50% (Baixa)',
            '50-60% (Ideal)',
            '60-80% (Alta)',
            '80-100% (Muito alta)'
        ],
        datasets: [{
            label: 'Umidade do Ar (%)',
            data: [25, 40, 55, 70, 90],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: { responsive: true, scales: { y: { beginAtZero: true, max: 100 } } }
});


// Gráfico de Barras - Temperatura Ambiente
const ctxTemp = document.getElementById('graficoTemperatura').getContext('2d');
new Chart(ctxTemp, {
    type: 'bar',
    data: {
        labels: [
            '0-10°C (Muito fria)',
            '10-18°C (Fria)',
            '18-27°C (Ideal)',
            '27-35°C (Quente)',
            '35-45°C (Muito quente)',
            '>45°C (Crítico)'
        ],
        datasets: [{
            label: 'Temperatura (°C)',
            data: [5, 14, 22, 30, 40, 50],
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 60,
                title: {
                    display: true,
                    text: 'Temperatura (°C)'
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Intervalos de Temperatura Ambiente'
            }
        }
    }
});


// Gráfico de Barras - pH da Água por Faixa de Qualidade
const ctxPhFaixas = document.getElementById('graficoPhFaixas').getContext('2d');
new Chart(ctxPhFaixas, {
    type: 'bar',
    data: {
        labels: [
            '0-4 (Muito ácido)',
            '4-6 (Ácido)',
            '6-7 (Levemente ácido / Neutro)',
            '7-8 (Ideal)',
            '8-9 (Alcalino)',
            '9-14 (Muito alcalino)'
        ],
        datasets: [{
            label: 'pH da Água',
            data: [2, 5, 6.5, 7.5, 8.5, 11],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(201, 203, 207, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(201, 203, 207, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 14,
                title: {
                    display: true,
                    text: 'pH'
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Faixas de pH da Água e Qualidade'
            }
        }
    }
});
