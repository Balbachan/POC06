# <h1 align="center">POC 6 - Sala de Cinema </h1>

## Sumário
* [Objetivo](#objetivo)
* [Desafio](#desafio)
* [Como fazer? ](#solucao)
    * [Configurar o ambiente](#configurar)
    * [Estrutura do projeto](#estrutura)
    * [Adicionar Dados dos Assentos](#dadosAssentos)
    * [Criar o Componente de Assento](#componentesAssentos)
    * [Estilizar o Projeto](#estilizar)
    * [Criar o Componente Principal](#componentePrincipal)
    * 
    * [Testar o Projeto](#testar)
* 
* [Autoras](#autoras)

  <div id="objetivo" >

  ## Objetivo

  </div>

  <div id="desafio">

  ## Desafio 
  
  Implemente a interface a seguir de acordo com os requisitos apresentados.
  
  ![image](https://github.com/user-attachments/assets/60a52cad-88e5-4f4f-80e1-f6de375a8214)
  ![image](https://github.com/user-attachments/assets/54da7e91-8b31-4f7d-9b04-cfc3f5a2b403)

  Neste projeto as cores foram definidas assim:
  
  ![image](https://github.com/user-attachments/assets/db6eba6d-1b27-43cd-bb17-24737df5adc1)

  * Requisitos:
    
    - Utilize NextJS 14 ou superior.
    - Utilize layout Flexbox e HTML5.
    - Conforme as imagens, a página deverá exibir dados de uma sala de cinema para um filme específico, com informações disponibilizadas em um documento JSON. Segue um exemplo:
   
      ``` json
      {
      "titulo": "A Forja",
      "sinopse": "Um ano depois de encerrar o ensino médio, o jovem Isaías Wright não tem planos para o futuro e é desafiado por sua mãe solo e um empresário de sucesso a começar a traçar um rumo melhor para sua vida. Ele passa a ser discipulado pelo seu novo mentor, conta com orações de sua mãe e de uma guerreira de orações, Dona Clara, e começa a descobrir o propósito de Deus para sua vida.",
      "dataLancamento": "26 de setembro de 2024 (Brasil)",
      "direcao": "Alex Kendrick",
      "horario": "16:40",
      "preco": 25.0,
      "assentos": [
        {
          "numero": 1,
          "disponivel": true
        },
        {
          "numero": 2,
          "disponivel": true
        },
        {
          "numero": 3,
          "disponivel": true
        },
        {
          "numero": 4,
          "disponivel": true
        },
        {
          "numero": 5,
          "disponivel": true
        },
        {
          "numero": 6,
          "disponivel": true
        },
        {
          "numero": 7,
          "disponivel": true
        },
        {
          "numero": 8,
          "disponivel": true
        },
        {
          "numero": 9,
          "disponivel": true
        },
        {
          "numero": 10,
          "disponivel": true
        },
        {
          "numero": 11,
          "disponivel": true
        },
        {
          "numero": 12,
          "disponivel": true
        },
        {
          "numero": 13,
          "disponivel": true
        },
        {
          "numero": 14,
          "disponivel": true
        },
        {
          "numero": 15,
          "disponivel": true
        },
        {
          "numero": 16,
          "disponivel": true
        },
        {
          "numero": 17,
          "disponivel": true
        },
        {
          "numero": 18,
          "disponivel": true
        },
        {
          "numero": 19,
          "disponivel": true
        },
        {
          "numero": 20,
          "disponivel": true
        },
        {
          "numero": 21,
          "disponivel": true
        },
        {
          "numero": 22,
          "disponivel": true
        },
        {
          "numero": 23,
          "disponivel": true
        },
        {
          "numero": 24,
          "disponivel": true
        },
        {
          "numero": 25,
          "disponivel": true
        },
        {
          "numero": 26,
          "disponivel": true
        },
        {
          "numero": 27,
          "disponivel": true
        },
        {
          "numero": 28,
          "disponivel": true
        },
        {
          "numero": 29,
          "disponivel": true
        },
        {
          "numero": 30,
          "disponivel": true
        },
        {
          "numero": 31,
          "disponivel": true
        },
        {
          "numero": 32,
          "disponivel": true
        },
        {
          "numero": 33,
          "disponivel": true
        },
        {
          "numero": 34,
          "disponivel": true
        },
        {
          "numero": 35,
          "disponivel": true
        },
        {
          "numero": 36,
          "disponivel": true
        },
        {
          "numero": 37,
          "disponivel": true
        },
        {
          "numero": 38,
          "disponivel": true
        },
        {
          "numero": 39,
          "disponivel": true
        },
        {
          "numero": 40,
          "disponivel": true
        },
        {
          "numero": 41,
          "disponivel": true
        },
        {
          "numero": 42,
          "disponivel": true
        },
        {
          "numero": 43,
          "disponivel": true
        },
        {
          "numero": 44,
          "disponivel": true
        },
        {
          "numero": 45,
          "disponivel": true
        },
        {
          "numero": 46,
          "disponivel": true
        },
        {
          "numero": 47,
          "disponivel": true
        },
        {
          "numero": 48,
          "disponivel": true
        },
        {
          "numero": 49,
          "disponivel": true
        },
        {
          "numero": 50,
          "disponivel": true
        },
        {
          "numero": 51,
          "disponivel": true
        },
        {
          "numero": 52,
          "disponivel": true
        },
        {
          "numero": 53,
          "disponivel": true
        },
        {
          "numero": 54,
          "disponivel": true
        },
        {
          "numero": 55,
          "disponivel": true
        },
        {
          "numero": 56,
          "disponivel": true
        },
        {
          "numero": 57,
          "disponivel": true
        },
        {
          "numero": 58,
          "disponivel": true
        },
        {
          "numero": 59,
          "disponivel": true
        },
        {
          "numero": 60,
          "disponivel": true
        }
      ]
      
      }
      ``` 

  * Considerações
    
    - Adapte o visual para Mobile e Desktop usando Media Queries para tamanhos de tela e temas Light e Dark.
    - O usuário só pode selecionar assentos disponíveis.
    - O botão de “Comprar” deve exibir o valor total da compra e, ao ser clicado, mostrar um alert com a mensagem: Compra realizada com sucesso.
    - Componentize ao máximo a solução.
    
  </div> 

  

  <div id="autoras">

  ## Autoras
* Carolina Sun Ramos Nantes de Castilho 
* Clara Beatriz Aguiar 
* Erica Gonçalves de Oliveira
* Laura Carolina Balbachan dos Santos

</div>

  
  


---------------------------------------------------------------------------------------------------------------------------

https://codesandbox.io/p/github/Balbachan/POC06/main?workspaceId=62ab7042-b701-4895-a6cd-a6d9bc371a05

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
