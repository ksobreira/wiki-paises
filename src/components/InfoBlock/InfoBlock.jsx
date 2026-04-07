function InfoBlock ({ label, value}) {
    return (
        <div className ="info-block">
            <span className = "info-label">{label}</span>
            <span className = "info-value">{value}</span>
        </div>
    )
}
export default InfoBlock
