import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from '../../components/Card';
import { Botao } from '../../components/Botao';
import type { Tela } from '../../types';

interface Props {
  navegar: (tela: Tela) => void;
}

type Cor = 'vermelho' | 'azul' | 'verde';

function mostraCor(cor: Cor) {
  const cores: Record<Cor, string> = {
    vermelho: '#E74C3C',
    azul: '#3498DB',
    verde: '#2ECC71',
  };
  return cores[cor];
}

function ProdutoGenerico<T extends { nome: string }>({ item }: { item: T }) {
  return <Text style={styles.code}>Item: {item.nome}</Text>;
}

export function TypeScriptScreen({}: Props) {
  const usuario = { nome: 'Lucas', email: 'lucas@email.com' };
  const numeros: number[] = [10, 20, 30, 40, 50];
  const parOuImpar = (n: number): string => (n % 2 === 0 ? 'par' : 'ímpar');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>🔷 TypeScript no React Native</Text>

      <Card titulo="1. Interface vs Type" corBorda="#3498DB">
        <Text style={styles.texto}>
          <Text style={styles.monospace}>interface</Text> define um contrato de
          objeto. <Text style={styles.monospace}>type</Text> é mais flexível
          (uniões, primitivos).
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{'interface Usuario {'}</Text>
          <Text style={styles.code}>{'  nome: string'}</Text>
          <Text style={styles.code}>{'  email: string'}</Text>
          <Text style={styles.code}>{'  idade?: number'}</Text>
          <Text style={styles.code}>{'}'}</Text>
        </View>
      </Card>

      <Card titulo="2. Type Union" corBorda="#E74C3C">
        <Text style={styles.texto}>
          <Text style={styles.monospace}>type Status = "ativo" | "inativo"</Text>
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{'type Cor = "vermelho" | "azul" | "verde"'}</Text>
          <Text style={styles.code}>{'function mostraCor(cor: Cor) {'}</Text>
          <Text style={styles.code}>{'  // cor só aceita os 3 valores'}</Text>
          <Text style={styles.code}>{'}'}</Text>
        </View>
        <View style={styles.linha}>
          <View style={[styles.quadrado, { backgroundColor: mostraCor('vermelho') }]} />
          <View style={[styles.quadrado, { backgroundColor: mostraCor('azul') }]} />
          <View style={[styles.quadrado, { backgroundColor: mostraCor('verde') }]} />
        </View>
      </Card>

      <Card titulo="3. Generics" corBorda="#9B59B6">
        <Text style={styles.texto}>Funções genéricas com {'<T>'}:</Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{'function primeiro<T>(arr: T[]): T {'}</Text>
          <Text style={styles.code}>{'  return arr[0]'}</Text>
          <Text style={styles.code}>{'}'}</Text>
          <Text style={styles.code}>{'primeiro([1,2,3]) // inferido como number'}</Text>
        </View>
        <View style={styles.divisoria} />
        <Text style={styles.texto}>Componente genérico:</Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{'function Item<T extends { nome: string }>'}</Text>
          <Text style={styles.code}>{'  ({ item }: { item: T })'}</Text>
        </View>
        <ProdutoGenerico item={{ nome: 'Pizza', preco: 40 }} />
      </Card>

      <Card titulo="4. Props tipadas" corBorda="#2ECC71">
        <Text style={styles.texto}>
          Cada componente tem suas props definidas com interface. Ex: Botao
          recebe titulo, onPress, cor?, desabilitado?, carregando?
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>{'interface BotaoProps {'}</Text>
          <Text style={styles.code}>{'  titulo: string'}</Text>
          <Text style={styles.code}>{'  onPress: () => void'}</Text>
          <Text style={styles.code}>{'  cor?: string      // opcional'}</Text>
          <Text style={styles.code}>{'}'}</Text>
        </View>
      </Card>

      <Card titulo="5. Métodos úteis" corBorda="#F39C12">
        <Text style={styles.texto}>
          Array<Text style={styles.monospace}>{'<number>'}</Text> com map,
          filter, reduce:
        </Text>
        <View style={styles.codeBlock}>
          <Text style={styles.code}>const numeros: number[] = [10, 20, 30, 40, 50]</Text>
          <Text style={styles.code}>{'numeros.map(n => n * 2)'}</Text>
          <Text style={styles.code}>{'numeros.filter(n => n > 25)'}</Text>
        </View>
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
  monospace: {
    fontFamily: 'monospace',
    backgroundColor: '#f0f0f0',
    color: '#E74C3C',
  },
  codeBlock: {
    backgroundColor: '#1e1e2e',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: '#a6e3a1',
    lineHeight: 18,
  },
  linha: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
  quadrado: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  divisoria: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 8,
  },
});
