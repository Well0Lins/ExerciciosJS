const nome = prompt('Digite seu nome completo sem letras maiúsculas:');

document.body.innerHTML = `Seu nome é: <strong>${nome}</strong>. <br/>`;
document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> letras. <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: [<strong>${nome.charAt(1)}</strong>]. <br/>`;
document.body.innerHTML += `O primeiro índice da letra "A" no seu nome é: <strong>${nome.indexOf('a')}</strong>. <br/>`;
document.body.innerHTML += `O último índice da letra "A" no seu nome é: <strong>${nome.lastIndexOf('a')}</strong>. <br/>`;
document.body.innerHTML += `As três ultimas letras do seu nome são: <strong>${nome.slice(-3)}</strong>. <br/>`;
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong>. <br/>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong> <br/>`;
document.body.innerHTML += `Seu nome com letra minúscula: <strong>${nome.toLowerCase()}</strong> <br/>`;