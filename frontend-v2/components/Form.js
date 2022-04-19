import { View, Text, StyleSheet, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';
import Loader from './Loader';
import Input from './Input';
import Button from './Button';

export default function Form({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);
  const [inputs, setInputs] = useState({
    naam: '',
    email: '',
    telefoonnummer: '',
    bedrijfsnaam: '',
    functie: '',
    verwijzing: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  const checkboxHandler = () => {
    setIsChecked(!isChecked);
  };

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Vul aub een email adress in', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Vul aub een geldig email adress in', 'email');
      isValid = false;
    }

    if (!inputs.naam) {
      handleError('Vul aub een geldige naam in', 'naam');
      isValid = false;
    }

    if (!inputs.telefoonnummer) {
      handleError('Vul aub een geldig telefoonnummer in', 'telefoonnummer');
      isValid = false;
    }

    if (isValid) register();
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      navigation.navigate('Succes');
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <Loader visible={loading} />
      <View style={styles.form__container}>
        <Text style={styles.form__smallText}>Meld je gratis aan.</Text>
        <Text style={styles.form__bigText}>
          Schrijf je nu in voor de
          <Text style={styles.form__bigText_span}> TechNight</Text>!
        </Text>

        {/* <View style={styles.form__row}>
        <TextInput
          style={styles.form__input_half}
          placeholder="Voornaam"
          onChangeText={(text) => handleOnChange(text, 'voornaam')}
        />
        <TextInput
          style={styles.form__input_half}
          placeholder="Achternaam"
          onChangeText={(text) => handleOnChange(text, 'achternaam')}
        />
      </View> */}

        <Input
          placeholder="Volledige naam"
          error={errors.naam}
          onFocus={() => {
            handleError(null, 'naam');
          }}
          onChangeText={(text) => handleOnChange(text, 'naam')}
        />

        <Input
          placeholder="Email"
          keyboardType="email-address"
          error={errors.email}
          onFocus={() => {
            handleError(null, 'email');
          }}
          onChangeText={(text) => handleOnChange(text, 'email')}
        />

        <Input
          placeholder="Telefoonnummer"
          keyboardType="numeric"
          error={errors.telefoonnummer}
          onFocus={() => {
            handleError(null, 'telefoonnummer');
          }}
          onChangeText={(text) => handleOnChange(text, 'telefoonnummer')}
        />

        <Input
          placeholder="Bedrijfsnaam"
          onChangeText={(text) => handleOnChange(text, 'bedrijfsnaam')}
        />

        <Input
          placeholder="Functie"
          onChangeText={(text) => handleOnChange(text, 'functie')}
        />

        <Input
          placeholder="Hoe heeft u van ons gehoord?"
          onChangeText={(text) => handleOnChange(text, 'verwijzing')}
        />

        <CheckBox
          center
          title="Ik blijf graag op de hoogte van aankomende events"
          containerStyle={styles.form__checkbox}
          checked={isChecked}
          checkedColor="#C0345F"
          onPress={checkboxHandler}
        />

        <Button title={'ik meld me aan'} onPress={validate} />
      </View>
    </>
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
  form__row: {
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
  form__checkbox: {
    width: '100%',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    fontSize: 16,
    marginBottom: 10
  }
});
