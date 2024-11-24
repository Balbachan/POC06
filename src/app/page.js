"use client";
import './globals.css';
import styles from "./page.module.css";
import { useState } from "react";
import data from "./data/dados.json";
import Seat from "./components/seat";

export function MovieInfo({ titulo, sinopse, direcao, horario, preco }) {
  return (
    <div>
      <h2>{titulo}</h2>
      <p>
        <strong>Horário:</strong> {horario}
      </p>
      <p>
        <strong>Direção:</strong> {direcao}
      </p>
      <p>{sinopse}</p>
      <p>
        <strong>Preço:</strong> R$ {preco.toFixed(2)}
      </p>
    </div>
  );
}

export default function Home() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const ticketPrice = 25; // Definindo o preço fixo do ingresso

  const OrganizarSelectSeat = (numero) => {
    setSelectedSeats((prev) =>
      prev.includes(numero)
        ? prev.filter((n) => n !== numero)
        : [...prev, numero]
    );
  };

  const total = selectedSeats.length * ticketPrice; // Calculando o total com base nos assentos selecionados

  return (
    <main className={styles.container}>
      <div className={styles.movieInfo}>
        <MovieInfo {...data} />
      </div>

      <div className={styles.seatingChart}>
        {data.assentos.map((seat) => (
          <Seat
            key={seat.numero}
            {...seat}
            onClick={OrganizarSelectSeat}
            selected={selectedSeats.includes(seat.numero)} // Passa a informação se o assento está selecionado
          />
        ))}
      </div>

      <div className={styles.extraRow}>
        {data.assentos.slice(56, 59).map((seat) => (
          <Seat
            key={seat.numero}
            {...seat}
            onClick={OrganizarSelectSeat}
            selected={selectedSeats.includes(seat.numero)}
          />
        ))}
      </div>

      <div className={styles.tela}>Tela</div>

      <div className={styles.legenda}>
        <div className={styles.legendaItem}>
          <div
            className={`${styles.legendaCirculo}`}
            style={{ backgroundColor: "var(--available)"}} // Cor para disponível
          ></div>
          <span>Disponível</span>
        </div>
        <div className={styles.legendaItem}>
          <div
            className={`${styles.legendaCirculo}`}
            style={{ backgroundColor: "var(--unavailable)"}} // Cor para indisponível
          ></div>
          <p>Indisponível</p>
        </div>
        <div className={styles.legendaItem}>
          <div
            className={`${styles.legendaCirculo}`}
            style={{ backgroundColor: "var(--primary)" }} // Cor para selecionado
          ></div>
          <p>Selecionado</p>
        </div>
      </div>

      {/* Botão com o valor atualizado */}
      <button className={styles.buyButton}>
        Comprar ({selectedSeats.length} assentos) - R$ {total.toFixed(2)}
      </button>
    </main>
  );
}



/*"use client";
import styles from "./page.module.css";
//import Header from "./components/header.js";
import { useEffect, useState } from "react";
const dados = require("./dados.json");

export default function Home() {
  const [dados, setDados] = useState(null);
  useEffect(() => {
    fetch("/dados2.json")
      .then((response) => {
        if (reponse.ok) {
          throw new error("Não foi possível ler os dados");
        }
        return reponse.json();
      })
      .then((jsonData) => setDados(jsonData))
      .catch((err) => setDados);
  });

  if (dados === null) {
    return (
      <main>
        <Header title="Carregando..." />
      </main>
    );
  }

  if (dados.error) {
    return (
      <main>
        <Header title={dados.error} />
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <h1>{dados.titulo}</h1>
      <p>{dados.sinopse}</p>

      <ol>
        {dados.assentos.map((assento) => (
          <li key={assento.numero}>
            Assento {assento.numero} está disponivel?
            {assento.disponivel ? "sim" : "não"}
          </li>
        ))}
      </ol>
    </main>
  );
}*/
