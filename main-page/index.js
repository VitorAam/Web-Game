function startGame(){
    var charSelect = prompt('Sua jornada iniciou, qual personagem você vai escolher: ')
    while (charSelect != '1' && charSelect != '2' && charSelect != '3'){
        alert('Personagem escolhido inválido.')
        charSelect = prompt('Por favor, escolha entre os personagens 1, 2 ou 3 (somente número)')
    }
    if (charSelect == '1') {
        
    }
}