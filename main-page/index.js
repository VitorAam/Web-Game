function startGame() {
    var selected = prompt('Escolha uma jornada')
    while (selected != '1' && selected != '2' && selected != '3'){
        window.alert('Escolha inválida, selecione entre 1 e 3!')
        selected = prompt('Tente novamente: Lembre, entre 1 e 3!')
    }
    if (selected == '1'){
        document.write('<link rel="stylesheet" href="/main-page/index.css"><body><header> <h1>SPACE SAVIORS</h1></header><main><div><h2>O começo da jornada</h2><p>O ano é 2175 e o planeta terra está próximo da sua ruína, devido ao abuso do solo e as constantes explorações em busca de minérios o núcleo está instável e seu colapso é iminente, para evitar tamanho desastre três exploradores do espaço são enviados em missões para adquirir recursos raros que serão necessários para a construção de um estabilizador de núcleo.</p></div></body>')
    }
}