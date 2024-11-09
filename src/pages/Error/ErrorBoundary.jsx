import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: white;
`

// Error Boundary Component
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Atualiza o estado para exibir a interface de fallback
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Pode ser usado para logar os erros em um serviço de monitoramento de erros
        console.error('Error caught in ErrorBoundary: ', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Interface de fallback, exibe mensagem de erro
            return (
                <Container>
                    <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2VrbGx4cXhibHlnMjMwaWllNWR3YmZucXExNno1ZXQ5dHI3NW5yaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YTzh3zw4mj1XpjjiIb/giphy.webp" alt="" />
                    <h2>Algo deu errado!</h2>
                    <p>Estamos enfrentando dificuldades técnicas. Tente novamente mais tarde.</p>
                </Container>
            );
        }

        // Se não houver erro, renderiza os filhos normalmente
        return this.props.children;
    }
}

export default ErrorBoundary;
