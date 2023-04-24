import { useEffect, useState } from "react";
import {
    Container,
    PhraseText,
    PhraseButton,
    PhraseButtonText
} from "./styles";

export default function Home() {} 
    export default function Phrases() {
        const phrases = [
            "Teste de frase 1",
            "Teste de frase 2",
            "Teste de frase 3",
            "Teste de frase 4",
            "Teste de frase 5",
            "Teste de frase 6",
            "Teste de frase 7",
            "Teste de frase 8",
            "Teste de frase 9",
            "Teste de frase 10",
        ]; 

        const [phrase, setPhrase] = useState(phrases[0]);

        const randomPhrase = () => {
            setPhrase(phrases[Math.floor(Math.random) * phrases.length])
        }

        useEffect(() => {
            randomPhrase();
        }, [])

        return (
            <Container>
                <PhraseText>{phrase}</PhraseText>
                <PhraseButton onPress={() => randomPhrase()}>
                    <PhraseButtonText>Mudar Frase</PhraseButtonText>
                </PhraseButton>
            </Container>
        )
     }