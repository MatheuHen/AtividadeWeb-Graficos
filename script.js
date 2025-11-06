google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(inicializarGraficos);

function inicializarGraficos() {
    desenharGraficoPizza();
    desenharGraficoLinhas();
    desenharGraficoBarras();
}

function desenharGraficoPizza() {
    const dados = google.visualization.arrayToDataTable([
        ['Produto', 'Vendas'],
        ['Notebook', 45],
        ['Celulares', 30],
        ['Tablet', 15],
        ['Acessórios', 10],
        ['Fones', 60],
        ['Pcs', 14]
    ]);

    const opcoes = {
        title: 'Distribuição de Vendas',
        pieHole: 0.4,
        // Legenda com nomes ao lado das bolinhas e área reservada
        legend: { position: 'right', textStyle: { color: '#333', fontSize: 12 } },
        chartArea: { width: '75%', height: '80%' },
        sliceVisibilityThreshold: 0,
        colors: ['#4285F4', '#34A853', '#FBBC05', '#EA4335', '#8E24AA', '#00ACC1']
    };

    const grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
    grafico.draw(dados, opcoes);
}

function desenharGraficoLinhas() {
    const dados = google.visualization.arrayToDataTable([
        ['Mês', 'Vendas', { role: 'tooltip', type: 'string' }],
        ['Janeiro', 10000, 'Janeiro — Vendas: 10.000'],
        ['Feveiro', 12000, 'Feveiro — Vendas: 12.000'],
        ['Março', 15000, 'Março — Vendas: 15.000'],
        ['Abril', 18000, 'Abril — Vendas: 18.000'],
        ['Maio', 22000, 'Maio — Vendas: 22.000'],
        ['Junho', 25000, 'Junho — Vendas: 25.000'],
        ['Julho', 27000, 'Julho — Vendas: 27.000'],
        ['Agosto', 8000, 'Agosto — Vendas: 8.000'],
        ['Setembro', 7500, 'Setembro — Vendas: 7.500'],
        ['Outubro', 95000, 'Outubro — Vendas: 95.000'],
        ['Novembro', 15000, 'Novembro — Vendas: 15.000'],
        ['Dezembro', 24000, 'Dezembro — Vendas: 24.000']
        ]);

    const opcoes = {
        title: 'Evolução das Vendas',
        curveType: 'function',
        legend: { position: 'bottom' },
        colors: ['#4285F4'],
        // Pontos visíveis e tooltip por ponto para mês e valor
        pointSize: 6,
        focusTarget: 'datum',
        tooltip: { isHtml: false }
    };

    const grafico = new google.visualization.LineChart(document.getElementById('graficoLinhas'));
    grafico.draw(dados, opcoes);
}

function desenharGraficoBarras() {
    const dados = google.visualization.arrayToDataTable([
        ['Vendedor', 'Vendas', { role: 'tooltip', type: 'string' }],
        ['João', 8500, 'João — Vendas: 8.500'],
        ['Maria', 12000, 'Maria — Vendas: 12.000'],
        ['Pedro', 9500, 'Pedro — Vendas: 9.500'],
        ['Ana', 15000, 'Ana — Vendas: 15.000'],
        ['Carlos', 7000, 'Carlos — Vendas: 7.000'],
        ['Matheus', 18000, 'Matheus — Vendas: 18.000'],
        ['Waynne', 1000, 'Waynne — Vendas: 1.000']
    ]);

    const opcoes = {
        title: 'Vendas por Vendedor',
        legend: { position: 'none' },
        colors: ['#34A853'],
        // Tooltip padrão (não-HTML) com texto (evita flicker)
        tooltip: { isHtml: false }
    };

    const grafico = new google.visualization.ColumnChart(document.getElementById('graficoBarras'));
    grafico.draw(dados, opcoes);
}