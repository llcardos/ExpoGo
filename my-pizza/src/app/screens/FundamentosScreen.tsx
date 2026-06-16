import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Card } from '../../components/Card';
import type { Tela } from '../../types';

interface Props {
  navegar: (tela: Tela) => void;
}

export function FundamentosScreen({ navegar }: Props) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>📐 Fundamentos do React Native</Text>

      <Card titulo="View e Text">
        <Text style={styles.texto}>
          Tudo no React Native começa com {'<'}View{'>'} (div) e {'<'}Text{'>'} (p).
        </Text>
        <View style={styles.exemploView}>
          <Text style={styles.textoDestaque}>View com fundo laranja</Text>
        </View>
      </Card>

      <Card titulo="Image" corBorda="#4ECDC4">
        <Text style={styles.texto}>Imagem de rede com width/height fixos:</Text>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300',
          }}
          style={styles.imagem}
        />
      </Card>

      <Card titulo="StyleSheet" corBorda="#45B7D1">
        <Text style={styles.texto}>
          StyleSheet.create organiza os estilos com TypeScript autocomplete.
          Combinamos estilos com arrays: {'style={[styles.base, styles.destaque]}'}
        </Text>
      </Card>

      <Card titulo="ScrollView" corBorda="#96CEB4">
        <Text style={styles.texto}>
          ScrollView permite rolar conteúdo maior que a tela. Útil para
          formulários e conteúdo dinâmico.
        </Text>
        <Text style={styles.texto}>
          Props importantes: contentContainerStyle, showsVerticalScrollIndicator,
          keyboardShouldPersistTaps.
        </Text>
      </Card>

      <Card titulo="Props (Propriedades)" corBorda="#FFEAA7">
        <Text style={styles.texto}>
          Props são os parâmetros de um componente. Veja o Card acima: cada um
          recebe "titulo", "children" e "corBorda" como props tipadas.
        </Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    marginTop: 8,
  },
  texto: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  textoDestaque: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  exemploView: {
    backgroundColor: '#FF6B35',
    padding: 16,
    borderRadius: 8,
    marginTop: 8,
    alignItems: 'center',
  },
  imagem: {
    width: 200,
    height: 200,
    borderRadius: 12,
    marginTop: 8,
    alignSelf: 'center',
  },
});
