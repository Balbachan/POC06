import styles from "./seat.module.css";

export default function Seat({ numero, disponivel, onClick, selected, purchased }) {
  return (
    <div
      className={`${styles.seat} ${
        disponivel ? styles.available : styles.unavailable
      } ${selected ? styles.selected : ""} ${purchased ? styles.purchased : ""}`} 
      onClick={() => disponivel && !purchased && onClick(numero)} 
    >
    </div>
  );
}
