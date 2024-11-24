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
      <p>Horário:</p> {horario}
      <p>Direção:</p> {direcao}
      <p>{sinopse}</p>
      <p>Preço:</p> R$ {preco.toFixed(2)}
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
        {data.assentos.slice(0,56).map((seat) => (
          <Seat
            key={seat.numero}
            {...seat}
            onClick={OrganizarSelectSeat}
            selected={selectedSeats.includes(seat.numero)} // Passa a informação se o assento está selecionado
          />
        ))}
      </div>

      <div className={styles.extraRow}>
        {data.assentos.slice(57, 61).map((seat) => (
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
            style={{ backgroundColor: "var(--primary-color)" }} // Cor para selecionado
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
