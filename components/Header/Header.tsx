import React, { useState } from 'react';

import {
    Container,
    UpperView,
    UserIconView,
    OptionsIcon,
    TextWelcome,
    TotalBalance,
    AccountView,
    Subtitle,
    BalanceTotal,
    BalanceTotalNotVisible,
    OptionIcon,
    OptionView,
    OptionText
} from './Header.styles'
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export function Header() {
    const [showBalance, setShowBalance] = useState(false)

    return (
        <>
        <Container>
            <UpperView>
                <UserIconView>
                    <Ionicons name="person-outline" size={20} color="#fff"/>
                </UserIconView>

                <OptionsIcon>
                    <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
                        {showBalance ? (
                        <Ionicons name="eye-outline" size={25} color="#fff" style={{ marginRight: 16, marginBottom: 10 }} /> ): (
                            <Ionicons name="eye-off-outline" size={25} color="#fff" style={{ marginRight: 16 }} />
                        )}
                    </TouchableOpacity>
                        <Ionicons name="help-circle-outline" size={25} color="#fff" style={{ marginRight: 16, marginBottom: 16 }} />
                        <Ionicons name="mail-outline" size={25} color="#fff" style={{ marginRight: 16 }} />
                </OptionsIcon>
            </UpperView>

            <TextWelcome>Olá, Beatriz</TextWelcome>
        </Container>
        <TotalBalance>
            <AccountView>
                <Subtitle>Conta</Subtitle>

                <Ionicons name="chevron-forward-outline" size={20} color="#908D91"/>
            </AccountView>

            {showBalance ? (
                <BalanceTotal>R$ 50.000,00</BalanceTotal>
            ) : (
                <BalanceTotalNotVisible />
            )}
        </TotalBalance>

        <View>
            <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ marginLeft: 24, paddingRight: 50 }}
            >
                <OptionView>
                    <OptionIcon>
                    <Ionicons name="cash-outline" size={20} color="#000"/>
                    </OptionIcon>

                    <OptionText>Pix</OptionText>
                </OptionView>

                <OptionView>
                    <OptionIcon>
                    <Ionicons name="barcode" size={20} color="#000"/>
                    </OptionIcon>

                    <OptionText>Pagar</OptionText>
                </OptionView>

                <OptionView>
                    <OptionIcon>
                    <Ionicons name="people" size={20} color="#000"/>
                    </OptionIcon>

                    <OptionText>Pegar </OptionText>
                    <OptionText>emprestado</OptionText>
                </OptionView>

                <OptionView>
                    <OptionIcon>
                    <Ionicons name="add-circle-outline" size={20} color="#000"/>
                    </OptionIcon>

                    <OptionText>Transferir</OptionText>
                </OptionView>

                <OptionView>
                    <OptionIcon>
                    <Ionicons name="remove-circle-outline" size={20} color="#000"/>
                    </OptionIcon>

                    <OptionText>Depositar</OptionText>
                </OptionView>

                <OptionView>
                    <OptionIcon>
                    <Ionicons name="phone-portrait" size={20} color="#000"/>
                    </OptionIcon>

                    <OptionText>Recarga de celular</OptionText>
                </OptionView>
            </ScrollView>
        </View>
    </>
    )
}