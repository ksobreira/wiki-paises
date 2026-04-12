import styles from './InfoBlock.module.css'

function InfoBlock ({ label, value}) {
    return (
        <div className ={styles.block}>
            <span className = {styles.label}>{label}</span>
            <span className = {styles.value}>{value}</span>
        </div>
    )
}
export default InfoBlock
