import { View, Text, StyleSheet } from 'react-native';
import type { ReactNode } from 'react';

interface CardProps {
  titulo: string;
  children: ReactNode;
  corBorda?: string;
}

export function Card({ titulo, children, corBorda = '#FF6B35' }: CardProps) {
  return (
    <View style={[styles.card, { borderLeftColor: corBorda }]}>
      <Text style={styles.titulo}>{titulo}</Text>
      <View style={styles.conteudo}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderLeftWidth: 4,
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  titulo: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  conteudo: {
    gap: 8,
  },
});
