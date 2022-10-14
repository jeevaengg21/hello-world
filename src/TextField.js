const TextField = ({ label, value, onChange, type = "text" }) => {

    return (
        <div className="mb-2">
            <label className="form-label" >{label}</label>
            <input className="form-control" type={type} value={value} onChange={onChange}></input>
        </div>
    )
}

export default TextField