import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';
import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';

export default function Form() {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxHandler = () => {
    setIsChecked(!isChecked);
  };

  const submitFormHandler = () => {
    if (isChecked) console.log('true, je wilt op de hoogte gehouden worden');
    if (!isChecked)
      console.log('false, u wilt niet op de hoogte worden gehouden');
  };

  return (
    <View style={styles.form__container}>
      <Text style={styles.form__smallText}>Meld je gratis aan.</Text>
      <Text style={styles.form__bigText}>
        Schrijf je nu in voor de
        <Text style={styles.form__bigText_span}>TechNight</Text>!
      </Text>

      <View style={styles.form__row}>
        <TextInput style={styles.form__input_half} placeholder="Voornaam" />
        <TextInput
          style={styles.inputRow_input_half}
          placeholder="Achternaam"
        />
      </View>

      <TextInput style={styles.form__input} placeholder="Email" />
      <TextInput style={styles.form__input} placeholder="Telefoonnummer" />
      <TextInput style={styles.form__input} placeholder="Bedrijfsnaam" />
      <TextInput style={styles.form__input} placeholder="Functie" />
      <TextInput
        style={styles.form__input}
        placeholder="Hoe heeft u van ons gehoord"
      />

      <CheckBox
        center
        title="Ik blijf graag op de hoogte van aankomende events"
        containerStyle={styles.form__checkbox}
        checked={isChecked}
        checkedColor="#C0345F"
        onPress={checkboxHandler}
      />

      <TouchableOpacity style={styles.form__button}>
        <Text style={styles.form__buttonText}>Ik meld me aan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form__container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '30%',
    marginRight: '30%'
  },
  form__smallText: {
    fontSize: 16,
    marginBottom: 5
  },
  form__bigText: {
    fontSize: 20,
    marginBottom: 20
  },
  form__bigText_span: {
    color: '#C0345F'
  },
  form__Row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  form__input_half: {
    width: '45%',
    marginBottom: 25,
    borderWidth: 1,
    padding: 12,
    fontSize: 18,
    borderRadius: 6
  },
  form__input: {
    width: '100%',
    marginBottom: 25,
    borderWidth: 1,
    padding: 12,
    fontSize: 18,
    borderRadius: 6
  },
  form__checkbox: {
    width: '100%',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    fontSize: 16,
    marginBottom: 10
  },
  form__button: {
    width: '100%',
    backgroundColor: '#FF9200',
    borderRadius: 6,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80
  },
  form__buttonText: {
    fontSize: 18,
    color: '#fff'
  }
});
