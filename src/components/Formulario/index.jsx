import './Formulario.css'; // Importa os estilos específicos para o formulário
import Botao from '../Botao'; // Importa o componente Botao
import CampoTexto from '../CampoTexto'; // Importa o componente CampoTexto

export default function Formulario() {
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o recarregamento da página ao enviar o formulário
        console.log('Formulário enviado!'); // Mensagem no console
        // Aqui você pode adicionar a lógica de envio, como salvar os dados
    };

    return (
        <>
            <h2>Cadastro de Pessoas</h2>
            <form onSubmit={handleSubmit}>
                <CampoTexto label="Nome" name="nome" /> {/* Campo de entrada para Nome */}
                <CampoTexto label="E-mail" name="email" /> {/* Campo de entrada para E-mail */}
                <CampoTexto label="Telefone" name="telefone" /> {/* Campo de entrada para Telefone */}
                <Botao texto="Cadastrar" /> {/* Botão de envio */}
            </form>
        </>
    );
}
