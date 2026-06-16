import { View, Text, StyleSheet } from 'react-native';

interface ListaVaziaProps {
  mensagem?: string;
}

export function ListaVazia({
  mensagem = 'Nenhum item encontrado',
}: ListaVaziaProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.icone}>📭</Text>
      <Text style={styles.texto}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  icone: {
    fontSize: 48,
    marginBottom: 16,
  },
  texto: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
});
