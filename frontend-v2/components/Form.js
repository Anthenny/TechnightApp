import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { CheckBox } from 'react-native-elements'


export default function Form() {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxHandler = () => {
    setIsChecked(!isChecked);
  }

  const submitFormHandler = () => {
    if (isChecked) console.log('true, je wilt op de hoogte gehouden worden');
    if(!isChecked) console.log('false, u wilt niet op de hoogte worden gehouden');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Meld je gratis aan.</Text>
      <Text style={styles.bigText}>Schrijf je nu in voor de <Text style={styles.bigText_span}>TechNight</Text>!</Text>

        <View style={styles.inputRow}>
            <TextInput style={styles.inputRow_input} placeholder='Voornaam' />
            <TextInput style={styles.inputRow_input} placeholder='Achternaam' />
        </View>

          <TextInput style={styles.input} placeholder='Email' />
          <TextInput style={styles.input} placeholder='Telefoonnummer'/>
          <TextInput style={styles.input} placeholder='Bedrijfsnaam'/>
          <TextInput style={styles.input} placeholder='Functie'/>
          <TextInput style={styles.input} placeholder='Hoe heeft u van ons gehoord'/>

        <CheckBox 
          center 
          title="Ik blijf graag op de hoogte van aankomende events"
          containerStyle ={styles.checkbox}
          checked={isChecked}
          checkedColor="#C0345F"
          onPress={checkboxHandler} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ik meld me aan</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '30%',
        marginRight: '30%'
    },
    smallText : {
        fontSize: 16,
        marginBottom: 5
    },
    bigText: {
        fontSize: 20,
        marginBottom: 20
    },
    bigText_span: {
        color: '#C0345F'
    },
    inputRow: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between'
    },
    inputRow_input: {
      width: '45%',
      marginBottom: 25,
      borderWidth: 1,
      padding: 12,
      fontSize: 18,
      borderRadius: 6
    },
    input: {
      width: '100%',
      marginBottom: 25,
      borderWidth: 1,
      padding: 12,
      fontSize: 18,
      borderRadius: 6
    },
    checkbox: {
      width: '100%',
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      fontSize: 16,
      marginBottom: 10
    },
    button: {
        width: '100%',
        backgroundColor: '#FF9200',
        borderRadius: 6,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 80
        
    },
    buttonText : {
        fontSize: 18,
        color: '#fff',
    }
})