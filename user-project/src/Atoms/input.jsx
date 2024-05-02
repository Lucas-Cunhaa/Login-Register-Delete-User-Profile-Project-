
// eslint-disable-next-line react/prop-types
const Input = ({ onChange, value, type, placeholder }) => {
    return (
        <input type={type} className="input" onChange={onChange} value={value} placeholder={placeholder} />
    )
}
export default Input