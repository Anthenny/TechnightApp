import { SafeAreaView } from 'react-native';

import { Statusbar, Footer, Form } from './components';

export default function App() {
  return (
    <SafeAreaView>
      <Statusbar />
      <Form />
      <Footer />
    </SafeAreaView>

  );
}
