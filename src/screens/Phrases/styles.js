import styled from "styled-components/native";

export const Container = styled.View`;
    flex: 1;
    backgroundColor: #000000;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
`;

export const ListPhrases = styled.FlatList`
    width: 100%;
`;

export const CardPhrases = styled.View`
    background-color: #ffffff;
    padding: 10px;
    margin: 10px 0;
    border-radius: 20px;
`;

export const CardTextPhrases = styled.Text`
    font-size: 20px;
    font-weight: bold;
    font-family: "Lobster_400Regular";
`;