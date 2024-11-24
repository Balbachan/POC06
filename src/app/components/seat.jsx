import styles from "./seat.module.css";

export default function Seat({ numero, disponivel, onClick, selected }) {
  return (
    <div
      className={`${styles.seat} ${
        disponivel ? styles.available : styles.unavailable
      } ${selected ? styles.selected : ""}`} // Adiciona a classe "selected" se estiver selecionado
      onClick={() => disponivel && onClick(numero)}
    >
      
    </div>
  );
}