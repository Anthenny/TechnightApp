import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { Footer, Form, Navbar } from '../components';

export default function FormPage({ navigation }) {
  return (
    <SafeAreaView>
      <Navbar />
      <Form navigation={navigation} />
      <Footer />
    </SafeAreaView>
  );
}
