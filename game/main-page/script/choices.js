function startGame() {
    var selected = prompt('Escolha uma jornada')
    while (selected != '1' && selected != '2' && selected != '3'){
        window.alert('Escolha inválida, selecione entre 1 e 3!')
        selected = prompt('Tente novamente: Lembre, entre 1 e 3!')
    }
    if (selected == '1'){
        location.href = "../../first_stage/anakan1_gameplay/anakan_first.html"
    } else if (selected == '2'){
        location.href = "../../first_stage/cowboy_s1_gameplay/cowboy_first.html"
    } else if (selected == '3'){
        location.href = "../../first_stage/layka1_gameplay/layka_first.html"
    }
}

function pathSelected() {
    var path = prompt('Qual caminho você vai seguir?')
    while (path != '1' && path != '2') {
        window.alert('Escolha inválida, selecione entre o caminho 1 ou o caminho 2!')
        path = prompt('Tente novamente: Lembre, entre 1 e 2!')
    }
    if (path == '1'){
        return 1
    } else {
        return 2
    }
}