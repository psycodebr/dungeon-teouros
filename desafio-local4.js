function jornadaHeroica(numSalas) {
    // Definindo as salas com tesouro e monstro (exemplo)
    const salasComTesouro = [3, 7, 10];
    const salasComMonstro = [2, 5, 8];

    // Iniciando a jornada pela masmorra
    for (let sala = 1; sala <= numSalas; sala++) {
        // Verificando se a sala atual contém tesouro
        if (salasComTesouro.includes(sala)) {
            console.log(`Tesouro na sala ${sala}!`);
            // Aqui você pode adicionar lógica para coletar a recompensa do tesouro
        }

        // Verificando se a sala atual contém monstro
        if (salasComMonstro.includes(sala)) {
            console.log(`Monstro na sala ${sala}!`);
            // Aqui você pode adicionar lógica para derrotar o monstro e continuar a jornada
        }
    }
}

// Exemplo de uso com 12 salas
jornadaHeroica(12);
