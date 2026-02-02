# 📘 Estudos e Práticas em Node.js

Este repositório reúne **anotações, resumos conceituais e exemplos práticos** desenvolvidos durante o estudo de Node.js. O objetivo é consolidar o aprendizado, reforçar conceitos fundamentais e servir como material de consulta futura.

---

## 🌱 O que é Node.js

Node.js é um **ambiente de execução JavaScript no lado do servidor**, construído sobre o motor **V8 do Google Chrome**. Ele permite criar aplicações backend utilizando JavaScript, com foco em desempenho, escalabilidade e eficiência.

---

## ⚙️ Principais Características

- Execução JavaScript fora do navegador
- Arquitetura **assíncrona e não bloqueante**
- Alta capacidade de lidar com múltiplas conexões simultâneas
- Grande ecossistema de bibliotecas via **NPM**
- Código modular e reutilizável

---

## 🔁 O que é o Event Loop (resumo rápido)

O **Event Loop** é o mecanismo que permite ao Node.js lidar com operações assíncronas.

- Ele evita bloqueios durante operações demoradas (I/O, banco de dados, arquivos)
- Gerencia filas de tarefas assíncronas
- Permite que uma única thread atenda **muitas requisições simultaneamente**

É o principal responsável pelo alto desempenho e escalabilidade do Node.js.

---

## 🚀 Vantagens do Node.js

- Excelente desempenho em aplicações I/O bound
- Uso da mesma linguagem no frontend e backend
- Desenvolvimento rápido e produtivo
- Forte adoção no mercado
- Ideal para APIs e microsserviços

---

## ⚠️ Limitações

- Não indicado para processamento pesado de CPU
- Exige atenção ao controle de fluxos assíncronos
- Erros não tratados podem afetar toda a aplicação

---

## 🎯 Quando Usar Node.js

Node.js é uma boa escolha quando:

- A aplicação possui muitas requisições simultâneas
- O foco é em **APIs REST** ou **microsserviços**
- Há necessidade de comunicação em tempo real (chat, notificações)
- O projeto já utiliza JavaScript no frontend

---

## ❌ Quando Evitar

- Processamentos matemáticos intensivos
- Aplicações fortemente dependentes de paralelismo de CPU
- Cenários onde outra stack atende melhor ao problema

---

## 📂 Conteúdo do Repositório

- Anotações conceituais sobre Node.js
- Exemplos práticos com Express
- Conceitos de assincronismo (Promise, async/await)
- Integração com MongoDB e Mongoose

---

## 📌 Objetivo

Este repositório tem caráter **educacional**, sendo utilizado para estudo contínuo, prática e fixação dos conceitos fundamentais do Node.js.

