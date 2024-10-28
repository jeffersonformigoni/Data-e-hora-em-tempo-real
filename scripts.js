// function atualizarRelogio() {
//     const data = new Date();

//     // Defina os dias da semana e os meses em português
//     const diasSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
//     const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

//     // Formate a data
//     const diaSemana = diasSemana[data.getDay()];
//     const dia = data.getDate();
//     const mes = meses[data.getMonth()];
//     const ano = data.getFullYear();
//     const dataFormatada = `${diaSemana}, ${dia} de ${mes} de ${ano}`;

//     // Formate a hora
//     const horas = data.getHours().toString().padStart(2, '0');
//     const minutos = data.getMinutes().toString().padStart(2, '0');
//     const segundos = data.getSeconds().toString().padStart(2, '0');

//     document.getElementById("data").textContent = dataFormatada;
//     document.getElementById("hora").innerHTML = `<span class="horas">${horas}</span>:<span class="minutos">${minutos}</span>:<span class="segundos">${segundos}</span>`;
// }

// // Atualiza a cada segundo.
// setInterval(atualizarRelogio, 1000)

// function atualizarRelogio() {
//     const data = new Date();

//     // Defina os dias da semana e os meses em português
//     const diasSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
//     const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

//     // Formate a data com spans para cores específicas
//     const diaSemana = diasSemana[data.getDay()];
//     const dia = `<span class="dia">${data.getDate()}</span>`;
//     const mes = `<span class="mes">${meses[data.getMonth()]}</span>`;
//     const ano = `<span class="ano">${data.getFullYear()}</span>`;
//     const dataFormatada = `${diaSemana}, ${dia} de ${mes} de ${ano}`;

//     // Formate a hora
//     const horas = String(data.getHours()).padStart(2, '0');
//     const minutos = String(data.getMinutes()).padStart(2, '0');
//     const segundos = String(data.getSeconds()).padStart(2, '0');

//     // Atualize o conteúdo com jQuery
//     $("#data").html(dataFormatada);
//     $("#hora").html(`<span class="horas">${horas}</span>:<span class="minutos">${minutos}</span>:<span class="segundos">${segundos}</span>`);
// }

// // Atualiza a cada segundo
// setInterval(atualizarRelogio, 1000);

function atualizarRelogio() {
    const data = new Date();

    // Obtenha o dia da semana
    let diaSemana;
    switch (data.getDay()) {
        case 0: diaSemana = "domingo"; break;
        case 1: diaSemana = "segunda-feira"; break;
        case 2: diaSemana = "terça-feira"; break;
        case 3: diaSemana = "quarta-feira"; break;
        case 4: diaSemana = "quinta-feira"; break;
        case 5: diaSemana = "sexta-feira"; break;
        case 6: diaSemana = "sábado"; break;
    }

    // Obtenha o mês
    let mes;
    switch (data.getMonth()) {
        case 0: mes = "janeiro"; break;
        case 1: mes = "fevereiro"; break;
        case 2: mes = "março"; break;
        case 3: mes = "abril"; break;
        case 4: mes = "maio"; break;
        case 5: mes = "junho"; break;
        case 6: mes = "julho"; break;
        case 7: mes = "agosto"; break;
        case 8: mes = "setembro"; break;
        case 9: mes = "outubro"; break;
        case 10: mes = "novembro"; break;
        case 11: mes = "dezembro"; break;
    }

    // Formate a data com spans para cores específicas
    const dia = `<span class="dia">${data.getDate()}</span>`;
    const ano = `<span class="ano">${data.getFullYear()}</span>`;
    const dataFormatada = `${diaSemana}, ${dia} de <span class="mes">${mes}</span> de ${ano}`;

    // Formate a hora
    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');

    // Atualize o conteúdo com jQuery
    $("#data").html(dataFormatada);
    $("#hora").html(`<span class="horas">${horas}</span>:<span class="minutos">${minutos}</span>:<span class="segundos">${segundos}</span>`);
}

// Atualiza a cada segundo
setInterval(atualizarRelogio, 1000);



