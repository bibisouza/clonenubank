import React from 'react'

import { Container, TextCard } from './Cards.styles'

import { Ionicons } from '@expo/vector-icons'

export function Cards() {
    return (
        <Container>
            <Ionicons name="card-outline" size={20} color="#000"/>
            <TextCard>Meus Cartões</TextCard>
        </Container>
    )
}