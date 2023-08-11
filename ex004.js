var vel = 50
console.log(`A velocidade do seu carro é ${vel}km/h`)
if(vel > 60) {
    console.log('Você ultrapassou a velociadde permitida. MULTADO!')
}
console.log('Dirija sempre com cinto de segurança')


console.log('------------------------------------')

var pais = 'EUA'
console.log(`Vivendo em ${pais}`)
if (pais == 'Brasil') {
    console.log('Brasileiro!')
} else {
    console.log('Estrangeiro!')
}


console.log('-------------------------------------')

var idade = 68
console.log(`você tem ${idade} anos.`)
if(idade < 16){
    console.log('Não vota')
} else if (idade >= 16 && idade <18 || idade > 65) {
    console.log('Voto opcional')
    } else {
        console.log('Voto obrigatório')
}


console.log('------------------------------------')

var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 5 && hora < 12) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!')
} else if (hora <= 24) {
    console.log('Boa noite!')
} else {
    console.log('Seu relógio está quebrado!')
}


console.log('------------------------------------')

var diasem = agora.getDay()
switch (diasem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] Dia inválido')
}