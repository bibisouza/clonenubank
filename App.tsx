import React from 'react'

import { 
    Container, 
    CardsView, 
    CardBlogView, 
    CardBlogItem, 
    CardFunction,
    CardFunctionRow,
    Touchable } from './App.styles'
import { Header } from './components/Header/Header'
import { Cards } from './components/Cards/Cards'
import { CardBlog } from './components/Cards/CardBlog'

import { ScrollView, StyleSheet, Text } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

export default function App() {
    return (
        <Container>
            <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
                <Header />
                <CardsView>
                    <Cards />
                </CardsView>

                <CardBlogView>
                    <ScrollView 
                        horizontal 
                        contentContainerStyle={{ paddingHorizontal: 24 }}
                        showsHorizontalScrollIndicator={false}
                        >
                        <CardBlogItem>
                            <CardBlog link="https://www.google.com" 
                            text={
                                <Text style={styles.textBlack}>Conheça Nubank Vida: Seguro e simples 
                                    <Text style={styles.textPurple}> Cabe no seu bolso</Text>
                                </Text>} />
                        </CardBlogItem>

                        <CardBlogItem>
                            <CardBlog link="https://www.google.com" 
                            text={
                                <Text style={styles.textBlack}>Salve seus amigos da 
                                    <Text style={styles.textPurple}> burocracia!</Text>
                                </Text>} />
                        </CardBlogItem>

                        <CardBlogItem>
                            <CardBlog link="https://www.google.com" 
                            text={
                                <Text style={styles.textBlack}>Salve seus amigos da 
                                    <Text style={styles.textPurple}> burocracia!</Text>
                                </Text>} />
                        </CardBlogItem>
                    </ScrollView>
                </CardBlogView>
            
            <CardFunction>
                <Ionicons name="card" size={25} />

                <CardFunctionRow>
                    <Text style={styles.subtitle}>Cartão de Crédito</Text>
                    <Ionicons name="chevron-forward" size={15} color={"#C2BEBE"}/>
                </CardFunctionRow>

                <Text style={styles.textGray}>Fatura atual</Text>
                <Text style={styles.title}>R$ 537,24</Text>
                <Text style={styles.textGray}>Limite disponível de R$100.000,00</Text>

                <Touchable>
                    <Text style={styles.textButton}>Parcelar compras</Text>
                </Touchable>
            </CardFunction>
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    textBlack: {
        color: '#000'
    },
    textPurple: {
        color: '#820AD1'
    },
    textGray: {
        color: '#C2BEBE',
        fontWeight: 'bold',
        marginTop: 8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 8
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    textButton: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})