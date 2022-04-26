import { Navbar, Footer } from '../components';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function SuccesPage() {
  return (
    <SafeAreaView>
      <Navbar />
      <Text>Succes! U heeft zich aangemeld voor de TechNight!</Text>
      <Footer />
    </SafeAreaView>
  );
}
