import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import type { Tela } from './src/types';
import { Home } from './src/app/screens/Home';
import { FundamentosScreen } from './src/app/screens/FundamentosScreen';
import { StateScreen } from './src/app/screens/StateScreen';
import { EffectScreen } from './src/app/screens/EffectScreen';
import { ListaScreen } from './src/app/screens/ListaScreen';
import { TypeScriptScreen } from './src/app/screens/TypeScriptScreen';

export default function App() {
  const [telaAtual, setTelaAtual] = useState<Tela>('home');

  function renderizarTela() {
    switch (telaAtual) {
      case 'home':
        return <Home navegar={setTelaAtual} />;
      case 'fundamentos':
        return <FundamentosScreen navegar={setTelaAtual} />;
      case 'state':
        return <StateScreen navegar={setTelaAtual} />;
      case 'effect':
        return <EffectScreen navegar={setTelaAtual} />;
      case 'lista':
        return <ListaScreen navegar={setTelaAtual} />;
      case 'typescript':
        return <TypeScriptScreen navegar={setTelaAtual} />;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {telaAtual !== 'home' && (
        <TouchableOpacity
          style={styles.voltar}
          onPress={() => setTelaAtual('home')}
        >
          <Text style={styles.voltarTexto}>← Voltar</Text>
        </TouchableOpacity>
      )}
      {renderizarTela()}
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginBottom: 40,
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  voltar: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  voltarTexto: {
    fontSize: 16,
    color: '#FF6B35',
    fontWeight: '600',
  },
});
