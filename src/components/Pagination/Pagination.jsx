import styles from './Pagination.module.css'

function Pagination({ page, totalPages, onPrevious, onNext }) {
  return (
    <div className={styles.pagination}>
        <button className={styles.pageButton} onClick={onPrevious} disabled={page === 1}>← Anterior</button>
        <span className={styles.pageInfo}>Página {page} de {totalPages}</span>
        <button className={styles.pageButton} onClick={onNext} disabled={page === totalPages}>Próximo →</button>
    </div>
  )
}

export default Pagination