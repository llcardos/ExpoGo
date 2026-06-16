import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { Tela } from '../../types';

interface Props {
  navegar: (tela: Tela) => void;
}

interface Opcao {
  tela: Tela;
  icone: string;
  titulo: string;
  descricao: string;
}

const OPCOES: Opcao[] = [
  {
    tela: 'fundamentos',
    icone: '📐',
    titulo: 'Fundamentos',
    descricao: 'View, Text, Image, StyleSheet, ScrollView',
  },
  {
    tela: 'state',
    icone: '⚡',
    titulo: 'useState',
    descricao: 'Contador, formulário, toggle, lista dinâmica',
  },
  {
    tela: 'effect',
    icone: '⏳',
    titulo: 'useEffect',
    descricao: 'Cronômetro, efeitos colaterais, busca assíncrona',
  },
  {
    tela: 'lista',
    icone: '📋',
    titulo: 'FlatList',
    descricao: 'Lista com filtro, dados tipados, FlatList',
  },
  {
    tela: 'typescript',
    icone: '🔷',
    titulo: 'TypeScript',
    descricao: 'Interface, type, generics, props tipadas',
  },
];

export function Home({ navegar }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🍕 My Pizza App</Text>
      <Text style={styles.subtitulo}>Estudos de React Native + TypeScript</Text>

      <View style={styles.grid}>
        {OPCOES.map((opcao) => (
          <TouchableOpacity
            key={opcao.tela}
            style={styles.card}
            onPress={() => navegar(opcao.tela)}
          >
            <Text style={styles.icone}>{opcao.icone}</Text>
            <Text style={styles.cardTitulo}>{opcao.titulo}</Text>
            <Text style={styles.cardDescricao}>{opcao.descricao}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF6B35',
    textAlign: 'center',
    marginTop: 16,
  },
  subtitulo: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginBottom: 24,
  },
  grid: {
    gap: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  icone: {
    fontSize: 32,
    marginBottom: 8,
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDescricao: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },
});
