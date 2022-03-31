const divisao = require('./divisao')
const exponenciacao = require('./exponenciacao')
const multiplicacao = require('./multiplicacao')
const porcentagem = require('./porcentagem')
const raiz = require('./raizquadrada')
const resto = require('./resto')
const subtracao = require('./subtracao')


import { soma } from './soma';


it('Soma inteiros', () => {
    expect(soma(2,2)).toBe(4);
})

it('Multiplicação inteiros', () => {
    expect(multiplicacao(2,2)).toBe(4)
})

it('Subtração inteiros', () => {
    expect(subtracao(2,2)).toBe(0)
})

it('Divisão inteiros', () => {
    expect(divisao(2,2)).toBe(1)
})

it('Exponenciação inteiros', () => {
    expect(exponenciacao(3,2)).toBe(9)
})

it('Resto da divisão', () => {
    expect(resto(3,2)).toBe(1)
})

it('Porcentagem', () => {
    expect(porcentagem(100,50)).toBe(50)
})

it('Raiz', () => {
    expect(raiz(9)).toBe(3)
})