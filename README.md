# <h1 align="center">POC 6 - Sala de Cinema </h1>

## Sumário
* [Objetivo](#objetivo)
* [Desafio](#desafio)
* [Como fazer? ](#comoFazer)

    * [Configurar o ambiente](#configurar)
    * [Estrutura do projeto](#estrutura)
    * [Adicionar Dados dos Assentos](#dadosAssentos)
    * [Criar o Componente de Assento](#componentesAssentos)
    * [Estilizar o Projeto](#estilizar)
         * [Organização dos assentos]
         * [Responsividade]
         * [Light/Dark Mode]
    * [Criar o Componente Principal](#componentePrincipal)
    * [Testar o Projeto](#testar)

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

<div id="comoFazer">

## Como fazer?

   <div id="configurar">

 ## 1. Configurar o Ambiente e criar o projeto
  
   - Certifique-se de ter o Node.js instalado.
   - Execute os seguintes comandos no terminal:

   1-Abrir o prompt de comando `cmd` <enter> ou o terminal do vscode.
   
   2-Digitar o comando ` npm install -g npm@latest` e apertar <enter> para atualizar pacotes.
   
   3-Digitar o comando `npx create-next-app@latest` <enter> para criar um novo projeto NextJS.
   
   4-Caso seja pedido para instalar pacotes extras ("Need to install the following packages: ... OK to proceed (y)?") aceitar, digitando Y <enter>.

   

   Em seguida, responder o seguinte nas perguntas para criar o novo projeto NextJS (aqui apresentaremos sugestões):

   √ What is your project named? ... poc6 (obs.: poc6 é o nome deste projeto, pode usar outro)
   
   √ Would you like to use TypeScript? ...  *# No*  / Yes
   
   √ Would you like to use ESLint? ... No / *# Yes*
   
   √ Would you like to use Tailwind CSS? ... *# No* / Yes
   
   √ Would you like your code inside a `src/` directory? ... No / *# Yes*
   
   √ Would you like to use App Router? (recommended) ... No / *# Yes*
   
   √ Would you like to use Turbopack for next dev? ... *# No* / Yes
   
   √ Would you like to customize the import alias (@/* by default)? ... *# No* / Yes


   </div>


   <div id="estrutura">

## 2. Estrutura do Projeto

POC06/
├── src/app

│   ├── components/

│   │   └── Seat.jsx
|   |   └── seat.module.css

│   ├── data/
│   │   └── dados.json


│   ├── globals.css

│   ├── page.module.css

│   ├── page.js

│   └─
└── package.json


   </div>

   <div id="dadosAssentos">

## 3. Adicionar Dados dos Assentos

No arquivo `src/data/dados.json`:

```json

{
  "titulo": "Todo tempo que temos",
  "sinopse": "Almut e Tobias são unidos por um encontro surpresa...",
  "direcao": "John Crowley",
  "horario": "19:30",
  "preco": 25.0,
  "assentos": [
    { "numero": 1, "disponivel": false }, // pré definir como indisponível para verificar se vai funcionar
    { "numero": 2, "disponivel": true },
    ...
  ]
}


```

   </div>

<div id="componentesAssentos">

## 4.Criar o Componente de Assento

No arquivo `src/components/Seat.jsx`:

```js

import styles from "./seat.module.css";

export default function Seat({ numero, disponivel, onClick, selected }) {
  return (
    <div
      className={`${styles.seat} ${
        disponivel ? styles.available : styles.unavailable
      } ${selected ? styles.selected : ""}`}
      onClick={() => disponivel && onClick(numero)}
    >
      {numero}
    </div>
  );
}

```

Esta parte do código faz as seguintes funções: 

```js
import styles from "./seat.module.css";
```

* Importa o arquivo CSS modular (seat.module.css) que contém as classes específicas para estilizar cada assento.
* CSS Modules garantem que os estilos sejam aplicados localmente ao componente, evitando conflitos com outras partes do projeto.



```js
export default function Seat({ numero, disponivel, onClick, selected }) { ... }
```

* O componente recebe propriedades (props):
   *numero: o número do assento exibido no botão.
   * disponivel: booleano que indica se o assento está disponível.
   * onClick: função chamada quando o assento é clicado.
   * selected: booleano que indica se o assento foi selecionado.


 ```js
<div
  className={`${styles.seat} ${
    disponivel ? styles.available : styles.unavailable
  } ${selected ? styles.selected : ""}`}
  onClick={() => disponivel && onClick(numero)}
>
  {numero}
</div>

```

* Define a classe do div com base nas propriedades:
   * Sempre aplica styles.seat (estilo base para todos os assentos).
   * Aplica styles.available se o assento estiver disponível, ou styles.unavailable se não estiver.
   * Adiciona styles.selected se o assento estiver selecionado.
   * O evento de clique (onClick) é configurado para executar onClick(numero) somente se o assento estiver disponível (disponivel === true).
        
   </div>

   <div id="estilizar">

## 5.Estilizar o Projeto

### Organização dos assentos

No arquivo `src/styles/globals.css`: 

```css
:root {
  --background-color: #f5f5f5;
  --primary-color: #007bff;
  --available: #cce5ff;
  --unavailable: #f5c6cb;
}
```


No arquivo `src/styles/page.module.css`:

```css
Copiar código
.container { max-width: 800px; margin: 0 auto; padding: 20px; }
.movieInfo { margin-bottom: 20px; }
.seatingChart { display: grid; grid-template-columns: repeat(10, 1fr); gap: 10px; }
.buyButton { background-color: var(--primary-color); color: #fff; border: none; padding: 10px; cursor: pointer; }

```

### Responsividade

### Ligh/Dark mode
        
   </div>

   <div id="componentePrincipal">

## 6. Criar o Componente Principal
        
   </div>

   <div id="testar">

## 7.Testar o Projeto

Execute no terminal:

``` bash
npm run dev
```

Abra o link do localhost
        
   </div>

  </div>

  <div id="autoras">

  ## Autoras
* Carolina Sun Ramos Nantes de Castilho 
* Clara Beatriz Aguiar 
* Erica Gonçalves de Oliveira
* Laura Carolina Balbachan dos Santos

</div>
