import { View, Text, StyleSheet, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';

import client from '../api/client';
import Loader from './Loader';
import Input from './Input';
import Button from './Button';
import COLORS from '../const/colors';

export default function Form({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    company: '',
    role: '',
    refference: ''
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
      handleError('Vul aub een e-mail adres in', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Vul aub een geldig e-mail adres in', 'email');
      isValid = false;
    }

    if (!inputs.name) {
      handleError('Vul aub een geldige naam in', 'name');
      isValid = false;
    }

    if (!inputs.phoneNumber) {
      handleError('Vul aub een geldig telefoonnummer in', 'phoneNumber');
      isValid = false;
    }

    if (isValid) {
      const name = inputs.name;
      const email = inputs.email;
      const phoneNumber = inputs.phoneNumber;
      const company = inputs.company;
      const role = inputs.role;
      const refference = inputs.refference;

      setInputs({
        name: '',
        email: '',
        phoneNumber: '',
        company: '',
        role: '',
        refference: ''
      });

      register(name, email, phoneNumber, company, role, refference);
    }
  };

  const register = async (
    name,
    email,
    phoneNumber,
    company,
    role,
    refference
  ) => {
    setLoading(true);
    try {
      const response = await client.post('/api/v1/form', {
        name,
        email,
        phoneNumber,
        company,
        role,
        refference
      });

      if (response.data.status === 'succes') {
        navigation.navigate('Succes', {
          name,
          email
        });
      } else {
        console.log(response.data.message);
        // TODO check nog een keer voor succes anders error weergeven boven aan het formulier
      }

      setLoading(false);
    } catch (e) {
      // TODO Get the right error message, we only get a 500 error atm.
      console.log(e);
      console.log(response.data);
      setLoading(false);
    }
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

        <Input
          placeholder="Volledige naam"
          value={inputs.name}
          error={errors.name}
          keyboardType="phone-pad"
          onFocus={() => {
            handleError(null, 'name');
          }}
          onChangeText={(text) => handleOnChange(text, 'name')}
        />

        <Input
          placeholder="Email"
          keyboardType="phone-pad"
          value={inputs.email}
          error={errors.email}
          onFocus={() => {
            handleError(null, 'email');
          }}
          onChangeText={(text) => handleOnChange(text, 'email')}
        />

        <Input
          placeholder="Telefoonnummer"
          keyboardType="numeric"
          value={inputs.phoneNumber}
          error={errors.phoneNumber}
          onFocus={() => {
            handleError(null, 'phoneNumber');
          }}
          onChangeText={(text) => handleOnChange(text, 'phoneNumber')}
        />

        <Input
          placeholder="Bedrijfsnaam"
          keyboardType="phone-pad"
          value={inputs.company}
          onChangeText={(text) => handleOnChange(text, 'company')}
        />

        <Input
          placeholder="Functie"
          keyboardType="phone-pad"
          value={inputs.role}
          onChangeText={(text) => handleOnChange(text, 'role')}
        />

        <Input
          placeholder="Hoe heeft u van ons gehoord?"
          keyboardType="phone-pad"
          value={inputs.refference}
          onChangeText={(text) => handleOnChange(text, 'refference')}
        />

        <CheckBox
          center
          title="Ik blijf graag op de hoogte van aankomende events"
          containerStyle={styles.form__checkbox}
          checked={isChecked}
          checkedColor="#C0345F"
          onPress={checkboxHandler}
        />

        <Button title={'Ik meld me aan'} onPress={validate} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  form__container: {
    height: '75%',
    overflow: 'visible',
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
    color: COLORS.red
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
