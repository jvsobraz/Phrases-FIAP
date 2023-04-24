import {
    ListPhrases,
    CardPhrases,
    CardTextPhrases,
    Container
} from "./styles"

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

    return(
        <Container>
            <ListPhrases 
                data={phrases}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <CardPhrases>
                        <CardTextPhrases>{item}</CardTextPhrases>
                    </CardPhrases>
                )}
            />
        </Container>
    );
}