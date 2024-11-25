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
   O objetivo desta prova de conceito é demonstrar a viabilidade de um sistema interativo de seleção de assentos para cinemas. A aplicação permite que os usuários visualizem os estados dos assentos (disponíveis, indisponíveis e selecionados), com destaque visual claro para cada estado. Além disso, o sistema atualiza dinamicamente o valor total dos ingressos com base na quantidade de assentos selecionados, oferecendo uma experiência prática e funcional.

   Essa solução foi projetada para ser intuitiva e responsiva, simulando uma funcionalidade essencial para plataformas de venda de ingressos. Também serve como uma base sólida para expansões futuras, incluindo a integração com bancos de dados e sistemas de pagamento.

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
  --background-color: #F0F0F0;
  --foreground-color: #1A1A24;
  --primary-color: #D83D2E;
  --secondary-color: #505050;
  --text-color: #000000;
  --available: #BABABA;
  --unavailable: #1A1A24;
}
}
```


No arquivo `src/styles/page.module.css`:

```.movieInfo {
  margin-bottom: 20px;
}

.seatingChart {
  display: grid; grid-template-columns: repeat(8, 1fr); gap: 10px;margin-top: 20px;
}

.buyButton {
  margin-top: 20px; padding: 10px; background-color: var(--primary-color);color: white;border: none;border-radius: 5px;cursor: pointer;
}
.extraRow {
  grid-template-columns: repeat(4, 1fr); margin-top: 10px;  display:flex;  justify-content: space-around;  
}

.tela {
  width: 100%;height: 20px;background-color: var(--available);border-radius: 10px;margin: 20px auto;text-align: center;line-height: 20px;font-size: 14px;font-weight: bold;
}

.legenda {
  display: flex;justify-content: center;gap: 20px;margin-top: 20px;
}

.legendaItem {
  display: flex;align-items: center;gap: 8px;
}

.legendaCirculo {
  width: 15px; height: 15px; border-radius: 50%;
}
```

O código define estilos para organizar e estilizar elementos de uma aplicação de reservas de assentos:

- **`.movieInfo`**: Espaço abaixo das informações do filme.
- **`.seatingChart`**: Grade para exibir assentos (8 colunas, espaçamento uniforme).
- **`.buyButton`**: Botão estilizado com cor, bordas arredondadas e cursor clicável.
- **`.extraRow`**: Linha flexível para alinhar elementos horizontalmente.
- **`.tela`**: Representa a tela no layout, com texto centralizado.
- **`.legenda` e `.legendaItem`**: Organizam a legenda com itens espaçados e alinhados.
- **`.legendaCirculo`**: Ícones circulares para status dos assentos.

Esses estilos garantem um layout organizado, visual atraente e usabilidade intuitiva.

### Responsividade
A responsividade do projeto foi cuidadosamente planejada para proporcionar uma experiência consistente e intuitiva em diferentes dispositivos, desde desktops até smartphones. Por meio de media queries e ajustes de layout, os elementos da aplicação, como a grade de assentos, informações do filme e botões, se reorganizam automaticamente para se adaptar a diferentes tamanhos de tela.
5.1. Adaptação Geral do Layout
Flexibilidade do container principal (.container):
* Para telas menores, o layout muda de "row-reverse" (elementos alinhados lado a lado) para uma disposição em coluna. Isso é feito usando:
No arquivo `src/styles/page.module.css`:

``` css
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 20px;
    padding: 10px;
  }
}

```
* A largura máxima do container é ajustada dinamicamente com max-width, garantindo que ele se adapte a telas pequenas e grandes.
  5.2. Ocultação de Informações em Telas Menores
Em telas menores que 768px, apenas o título e o horário do filme permanecem visíveis:
``` css
@media (max-width: 768px) {
  .movieInfo p, 
  .movieInfo h3 {
    display: none; /* Oculta a sinopse e subtítulos */
  }
}
```
* O título é centralizado para melhorar a legibilidade:
 ```css
@media (max-width: 768px) {
  .movieInfo h2 {
    text-align: center;
  }
}
```
5.3. Organização da Grade de Assentos
A grade de assentos (.seatingChart) foi configurada para se ajustar ao tamanho da tela:
Desktop: 8 colunas são exibidas, aproveitando o espaço.
```css
.seatingChart {
  grid-template-columns: repeat(8, 1fr);
}
```
* Telas menores (480px):
O espaçamento entre os assentos (gap) foi reduzido.
Margens ajustadas para acomodar melhor os assentos:
```css
@media (max-width: 480px) {
  .seatingChart {
    gap: 2px;
    margin-right: 2px;
    margin-top: 0;
  }
}
```
5.4. Botão de Compra
Para telas pequenas, o botão de compra foi ajustado:
Margens e alinhamento centralizado:
```css
@media (max-width: 768px) {
  .buySection {
    margin-left: 0;
    margin-top: 15px;
    margin-bottom: 30px;
  }
}
```
* Para telas muito pequenas (480px), a altura do botão foi aumentada para melhorar a usabilidade:
```css

@media (max-width: 480px) {
  .buyButton {
    height: 70px;
  }
}
```
5.5. Componente extraRow
Representando uma fileira extra de assentos, o componente foi configurado para manter espaçamento e centralização:
Em telas menores, ajustes garantem que ele continue alinhado:
```css

@media (max-width: 480px) {
  .extraRow {
    gap: 10px;
    margin-right: 2px;
    margin-top: 2px;
  }
}
```
5.6. Outros Ajustes Importantes
Tela do cinema (.tela):

Redução de fonte para dispositivos menores:
``` css

@media (max-width: 768px) {
  .tela {
    font-size: 12px;
  }
}
```
* Resultado: essas configurações garantem que o projeto funcione de maneira fluida em qualquer dispositivo. Em telas menores, a interface prioriza a clareza e a usabilidade, ocultando informações secundárias (como sinopse) e ajustando elementos como grades e botões para que fiquem acessíveis e visualmente organizados.


### Ligh/Dark mode
        
   </div>

   <div id="componentePrincipal">

## 6. Criar o Componente Principal

6.1 Importação de Dependências

```javascript
import { useState } from "react";
import data from "./data/dados.json";
import Seat from "./components/Seat";
import styles from "./styles/page.module.css";
```

* useState: Para gerenciar o estado local dos assentos selecionados.
* data: Carrega os dados do filme e dos assentos a partir de um arquivo JSON.
* Seat: Importa o componente Seat, que representa cada assento individual.
* styles: Importa os estilos CSS para a página principal.

6.2 Gerenciamento de Estado

```javascript
const [selectedSeats, setSelectedSeats] = useState([]);
```

O estado selectedSeats armazena os números dos assentos que foram selecionados pelo usuário.

6.3 Função para Gerenciar a Seleção de Assentos

```javascript
const OrganizarSelectSeat = (numero) => {
  setSelectedSeats((prev) =>
    prev.includes(numero)
      ? prev.filter((n) => n !== numero)
      : [...prev, numero]
  );
};
```

Objetivo: Alternar a seleção dos assentos.
Se o número do assento já estiver na lista (selectedSeats), ele será removido. Caso contrário, será adicionado.
Essa lógica permite que o estado se atualize dinamicamente à medida que o usuário interage com os assentos.

6.4 Cálculo do Total

```javascript
const total = selectedSeats.length * ticketPrice;
```

Multiplica o número de assentos selecionados pelo preço fixo de cada ingresso (ticketPrice).

6.5 Estrutura do Componente

```javascript
return (
  <main className={styles.container}>
    <div className={styles.movieInfo}>
      <h2>{data.titulo}</h2>
      <p>{data.sinopse}</p>
    </div>
    <div className={styles.seatingChart}>
      {data.assentos.map((seat) => (
        <Seat
          key={seat.numero}
          {...seat}
          onClick={OrganizarSelectSeat}
          selected={selectedSeats.includes(seat.numero)}
        />
      ))}
    </div>
    <button className={styles.buyButton}>
      Comprar ({selectedSeats.length}) - R$ {total.toFixed(2)}
    </button>
  </main>
);
```

* Informações do Filme: Mostra o título e a sinopse extraídos do JSON.
* Grade de Assentos: Usa `data.assentos.map()` para renderizar dinamicamente os assentos. Cada assento é um componente Seat, que recebe:
  * As propriedades do JSON (número e disponibilidade).
   * O evento onClick para alternar a seleção.
   * A indicação de seleção (selected).
     
* Botão de Compra: Exibe a quantidade de assentos selecionados e o preço total calculado. Exemplo se o preço do ingresso for R$25,00:

  
  ![image](https://github.com/user-attachments/assets/e7b93b42-ad68-4d3c-ad9d-5819de9ec1d5)



        
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
