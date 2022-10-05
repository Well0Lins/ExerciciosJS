const h1 = document.querySelector('.container h1');
const d = new Date();

/*
exemplo com swicht/case
switch(diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    
}
*/







/* 
                    Um modo mais prático 
h1.innerHTML = d.toLocaleDateString('pt-BR', {dateStyle: 'full'});
*/


// A forma que desenvolvi.
function getDayWeekText(dayWeek) {
    const daysWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'];
    return daysWeek[dayWeek];
}

function getNameMonth(numberMonth) {
    const month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return month[numberMonth];
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function dateCreate(data) {
    const dayWeek = d.getDay();
    const numberMonth = d.getMonth();

    const nameDay = getDayWeekText(dayWeek);
    const nameMonth = getNameMonth(numberMonth);

    return(`${nameDay}, ${d.getDate()} de ${nameMonth} de ${d.getFullYear()} <br> ${zeroAEsquerda(d.getHours())}:${zeroAEsquerda(d.getMinutes())}`);

}

h1.innerHTML = dateCreate(d);