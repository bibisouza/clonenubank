import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
`

export const CardsView = styled.View`
    padding: 0 24px;
    margin-top: 24px;
`

export const CardBlogView = styled.View`
    flex-direction: row;

    margin-top: 24px;
`

export const CardBlogItem = styled.View`
    margin-right: 8px;
`

export const CardFunction = styled.View`
    border-top-width: 1px;
    border-color: #E6E6E6;

    margin-top: 24px;

    padding: 24px;
`

export const CardFunctionRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-top: 8px;
`

export const Touchable = styled.TouchableOpacity`
    padding: 8px;
    background-color: #E6E6E6;

    width: 130px;
    border-radius: 16px;
    margin-top: 16px;

    align-items: center;
`