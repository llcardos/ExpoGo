import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Botao } from '../../components/Botao';
import { Card } from '../../components/Card';
import type { Tela } from '../../types';

interface Props {
  navegar: (tela: Tela) => void;
}

export function EffectScreen({}: Props) {
  const [segundos, setSegundos] = useState(0);
  const [rodando, setRodando] = useState(false);
  const [dados, setDados] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    if (!rodando) return;
    const intervalo = setInterval(() => {
      setSegundos((s) => s + 1);
    }, 1000);
    return () => clearInterval(intervalo);
  }, [rodando]);

  useEffect(() => {
    if (segundos > 0 && segundos % 5 === 0) {
      console.log(`⏱️ ${segundos}s se passaram`);
    }
  }, [segundos]);

  async function buscarDados() {
    setCarregando(true);
    setDados(null);
    await new Promise((r) => setTimeout(r, 2000));
    setDados('✅ Dados carregados com sucesso! (simulação)');
    setCarregando(false);
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>⏳ useEffect na prática</Text>

      <Card titulo="1. Cronômetro (intervalo)">
        <Text style={styles.cronometro}>{segundos}s</Text>
        <View style={styles.linha}>
          <Botao
            titulo={rodando ? 'Pausar' : 'Iniciar'}
            onPress={() => setRodando(!rodando)}
            cor={rodando ? '#E74C3C' : '#2ECC71'}
          />
          <Botao
            titulo="Resetar"
            onPress={() => {
              setSegundos(0);
              setRodando(false);
            }}
            cor="#95A5A6"
          />
        </View>
        <Text style={styles.dica}>
          O useEffect com intervalo limpa o timer ao desmontar (return no
          clearInterval).
        </Text>
      </Card>

      <Card titulo="2. Efeito colateral (console.log)" corBorda="#3498DB">
        <Text style={styles.texto}>
          A cada 5 segundos, um log aparece no console (abra o terminal).
        </Text>
      </Card>

      <Card titulo="3. Busca simulada (async/await)" corBorda="#9B59B6">
        <Botao
          titulo="Buscar dados"
          onPress={buscarDados}
          cor="#3498DB"
          carregando={carregando}
        />
        {dados && <Text style={styles.resultado}>{dados}</Text>}
        <Text style={styles.dica}>
          O carregando usa ActivityIndicator via prop do Botao. A busca é
          simulada com setTimeout.
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
  cronometro: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FF6B35',
    textAlign: 'center',
    marginVertical: 16,
    fontVariant: ['tabular-nums'],
  },
  linha: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  texto: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  dica: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
    marginTop: 12,
  },
  resultado: {
    fontSize: 16,
    color: '#2ECC71',
    fontWeight: '600',
    marginTop: 12,
    textAlign: 'center',
  },
});
