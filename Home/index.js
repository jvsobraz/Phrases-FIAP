import { Container, PhraseText, PhraseButton, PhraseButtonText } from "./styles";

export default function Home() {
    return (
        <Container>
            <PhraseText>"Teste de frase"</PhraseText>
            <PhraseButton>
                <PhraseButtonText>Mudar Frase</PhraseButtonText>
            </PhraseButton>
        </Container>
    );
}