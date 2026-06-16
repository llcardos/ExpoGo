import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Botao } from '../../components/Botao';
import { Card } from '../../components/Card';
import type { Tela } from '../../types';

interface Props {
  navegar: (tela: Tela) => void;
}

export function StateScreen({}: Props) {
  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState('');
  const [ativo, setAtivo] = useState(false);
  const [itens, setItens] = useState<string[]>([]);
  const [inputItem, setInputItem] = useState('');

  function adicionarItem() {
    if (inputItem.trim()) {
      setItens([...itens, inputItem.trim()]);
      setInputItem('');
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>⚡ useState na prática</Text>

      <Card titulo="1. Contador">
        <Text style={styles.valor}>Valor: {contador}</Text>
        <View style={styles.linha}>
          <Botao
            titulo="-1"
            onPress={() => setContador(contador - 1)}
            cor="#E74C3C"
          />
          <Botao
            titulo="+1"
            onPress={() => setContador(contador + 1)}
            cor="#2ECC71"
          />
          <Botao
            titulo="Zerar"
            onPress={() => setContador(0)}
            cor="#95A5A6"
          />
        </View>
      </Card>

      <Card titulo="2. TextInput (formulário)" corBorda="#3498DB">
        <Text style={styles.label}>Digite seu nome:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Ex: Maria"
        />
        <Text style={styles.texto}>
          Olá, <Text style={styles.destaque}>{nome || '...'}</Text>!
        </Text>
      </Card>

      <Card titulo="3. Toggle (boolean)" corBorda="#9B59B6">
        <View style={styles.linha}>
          <Botao
            titulo={ativo ? 'DESLIGAR' : 'LIGAR'}
            onPress={() => setAtivo(!ativo)}
            cor={ativo ? '#E74C3C' : '#2ECC71'}
          />
          <View
            style={[
              styles.bolinha,
              { backgroundColor: ativo ? '#2ECC71' : '#ccc' },
            ]}
          />
        </View>
      </Card>

      <Card titulo="4. Lista dinâmica (array)" corBorda="#E67E22">
        <View style={styles.linha}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            value={inputItem}
            onChangeText={setInputItem}
            placeholder="Novo item"
          />
          <Botao titulo="Adicionar" onPress={adicionarItem} cor="#3498DB" />
        </View>
        {itens.length === 0 && (
          <Text style={styles.texto}>Nenhum item na lista.</Text>
        )}
        {itens.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.texto}>
              {index + 1}. {item}
            </Text>
          </View>
        ))}
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
  valor: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B35',
    textAlign: 'center',
    marginBottom: 12,
  },
  linha: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  texto: {
    fontSize: 16,
    color: '#555',
    marginTop: 8,
  },
  destaque: {
    fontWeight: 'bold',
    color: '#FF6B35',
  },
  bolinha: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  item: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 6,
    marginTop: 4,
  },
});
