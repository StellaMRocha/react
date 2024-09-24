import './Botao.css';
export default function Botao(props) {
    return (
        <button type="submit" className="botao-grande">
            {props.children}
        </button>
    );
}
