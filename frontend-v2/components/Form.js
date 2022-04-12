import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'


export default function Form() {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Meld je gratis aan.</Text>
      <Text style={styles.bigText}>Schrijf je nu in voor de <Text style={styles.bigText_span}>TechNight</Text>!</Text>

        <View>
            <TextInput></TextInput>
            <TextInput></TextInput>
        </View>

        <TextInput placeholder='Email' />
        <TextInput placeholder='Telefoonnummer'/>
        <TextInput placeholder='Bedrijfsnaam'/>
        <TextInput placeholder='Functie'/>
        <TextInput placeholder='Hoe heeft u van ons gehoord'/>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ik meld me aan</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallText : {
        fontSize: 16,
        marginBottom: 5
    },
    bigText: {
        fontSize: 20,
        marginBottom: 40
    },
    bigText_span: {
        color: '#C0345F'
    },
    button: {
        width: '40%',
        backgroundColor: '#FF9200',
        borderRadius: 6,
        padding: 6,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    buttonText : {
        fontSize: 18,
        color: '#fff',
    }
})