import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { Navbar, Footer } from '../components';
import COLORS from '../const/colors';

export default function SuccesPage({ route, navigation }) {
  const { name, email } = route.params;
  return (
    <SafeAreaView>
      <Navbar />
      <View style={styles.succes__container}>
        <Text style={styles.succes__container_header}>
          <Text style={styles.span}>Succes</Text>!
        </Text>
        <View style={styles.succes__container_text}>
          <Text style={[styles.test, { marginBottom: 10 }]}>Beste {name},</Text>
          <Text style={[styles.test, { marginBottom: 3 }]}>
            Er is een email gestuurd naar: {email}.
          </Text>

          <Text style={styles.test}>
            In deze email staat informatie over de
            <Text style={styles.span}> TechNight</Text>.
          </Text>
        </View>
        <Text style={styles.succes__container_end}>
          Dank u wel voor uw aanmelding tot dan!
        </Text>
      </View>

      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  succes__container: {
    height: '75%',
    marginLeft: '20%',
    marginRight: '20%',
    alignItems: 'center'
  },
  succes__container_header: {
    fontSize: 30,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: '30%',
    marginBottom: 30,
    fontWeight: '300'
  },
  span: {
    color: COLORS.red
  },
  succes__container_text: {
    fontSize: 20,
    width: '100%',
    marginBottom: 30,
    justifyContent: 'center'
  },
  test: {
    fontSize: 20,
    fontWeight: '300'
  },
  succes__container_end: {
    fontSize: 22,
    justifyContent: 'center',
    fontWeight: '300'
  }
});
