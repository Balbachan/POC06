"use client";
import './globals.css';
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import data from "./data/dados.json";
import Seat from "./components/seat";

export function MovieInfo({ titulo, sinopse, direcao, horario, preco }) {
  return (
    <div>
      <h2>{titulo}</h2>
      <p><b>Horário:</b> {horario}</p>
      <p><b>Direção:</b>{direcao}</p> 
      <p>{sinopse}</p>
      <p><b>Preço:</b> R$ {preco.toFixed(2)}</p>
    </div>
  );
}

export default function Home() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [purchasedSeats, setPurchasedSeats] = useState([]);  // Estado para assentos comprados
  const ticketPrice = 25; // Preço fixo do ingresso

  // Carrega os assentos do localStorage ou usa os dados iniciais
  useEffect(() => {
    const savedSeats = JSON.parse(localStorage.getItem("selectedSeats")) || [];
    setSelectedSeats(savedSeats);
  }, []);

  // Salva os assentos no localStorage sempre que o estado mudar
  useEffect(() => {
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
  }, [selectedSeats]);

  const OrganizarSelectSeat = (numero) => {
    if (purchasedSeats.includes(numero)) return; // Não permite selecionar assentos comprados

    setSelectedSeats((prev) =>
      prev.includes(numero)
        ? prev.filter((n) => n !== numero)
        : [...prev, numero]
    );
  };

  const total = selectedSeats.length * ticketPrice; // Total dos assentos selecionados

  const handleBuyClick = () => {
    setPurchasedSeats((prev) => [...prev, ...selectedSeats]); // Marca os assentos como comprados
    setSelectedSeats([]); // Limpa os assentos selecionados após a compra
    alert(`Você comprou ${selectedSeats.length} assentos por R$ ${total.toFixed(2)}`);
  };

  return (
    <main className={styles.container}>
      <div className={styles.movieInfo}>
        <MovieInfo {...data} />
      </div>

      <div className={styles.seatingChart}>
        {data.assentos.slice(0, 56).map((seat) => (
          <Seat
            key={seat.numero}
            {...seat}
            onClick={OrganizarSelectSeat}
            selected={selectedSeats.includes(seat.numero)} // Passa a informação se o assento está selecionado
            purchased={purchasedSeats.includes(seat.numero)} // Verifica se o assento foi comprado
          />
        ))}
      </div>

      <div className={styles.extraRow}>
        {data.assentos.slice(56, 61).map((seat) => (
          <Seat
            key={seat.numero}
            {...seat}
            onClick={OrganizarSelectSeat}
            selected={selectedSeats.includes(seat.numero)}
            purchased={purchasedSeats.includes(seat.numero)}
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
        <div className={styles.legendaItem}>
          <div
            className={`${styles.legendaCirculo}`}
            style={{ backgroundColor: "var(--secondary-color)" }} // Cor para comprado (cinza)
          ></div>
          <p>Comprado</p>
        </div>
      </div>
      
      <button className={styles.buyButton} onClick={handleBuyClick}>
        Comprar ({selectedSeats.length} assentos) - R$ {total.toFixed(2)}
      </button>
    </main>
  );
}
