import { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Botao } from '../../components/Botao';
import { Card } from '../../components/Card';
import { ListaVazia } from '../../components/ListaVazia';
import type { Produto, Categoria, Tela } from '../../types';

interface Props {
  navegar: (tela: Tela) => void;
}

const CATALOGO: Produto[] = [
  { id: 1, nome: 'Pizza Margherita', preco: 39.9, categoria: 'pizza', emEstoque: true },
  { id: 2, nome: 'Pizza Pepperoni', preco: 44.9, categoria: 'pizza', emEstoque: true },
  { id: 3, nome: 'Pizza Quatro Queijos', preco: 49.9, categoria: 'pizza', emEstoque: false },
  { id: 4, nome: 'Coca-Cola 2L', preco: 12.9, categoria: 'bebida', emEstoque: true },
  { id: 5, nome: 'Suco de Laranja', preco: 9.9, categoria: 'bebida', emEstoque: true },
  { id: 6, nome: 'Pudim', preco: 14.9, categoria: 'sobremesa', emEstoque: true },
  { id: 7, nome: 'Brownie', preco: 11.9, categoria: 'sobremesa', emEstoque: false },
];

const CATEGORIAS: Categoria[] = ['pizza', 'bebida', 'sobremesa'];

export function ListaScreen({}: Props) {
  const [filtro, setFiltro] = useState<Categoria | 'todas'>('todas');

  const dadosFiltrados =
    filtro === 'todas'
      ? CATALOGO
      : CATALOGO.filter((p) => p.categoria === filtro);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📋 FlatList + Filtro</Text>

      <Card titulo="Filtrar por categoria">
        <View style={styles.filtros}>
          <TouchableOpacity
            style={[
              styles.filtroBtn,
              filtro === 'todas' && styles.filtroAtivo,
            ]}
            onPress={() => setFiltro('todas')}
          >
            <Text
              style={[
                styles.filtroTexto,
                filtro === 'todas' && styles.filtroTextoAtivo,
              ]}
            >
              Todas
            </Text>
          </TouchableOpacity>
          {CATEGORIAS.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[
                styles.filtroBtn,
                filtro === cat && styles.filtroAtivo,
              ]}
              onPress={() => setFiltro(cat)}
            >
              <Text
                style={[
                  styles.filtroTexto,
                  filtro === cat && styles.filtroTextoAtivo,
                ]}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Card>

      <FlatList
        data={dadosFiltrados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ItemProduto produto={item} />}
        ListEmptyComponent={<ListaVazia mensagem="Nenhum produto nessa categoria" />}
        contentContainerStyle={dadosFiltrados.length === 0 && { flex: 1 }}
      />
    </View>
  );
}

function ItemProduto({ produto }: { produto: Produto }) {
  return (
    <View style={[styles.item, !produto.emEstoque && styles.itemIndisponivel]}>
      <View style={{ flex: 1 }}>
        <Text style={styles.itemNome}>{produto.nome}</Text>
        <Text style={styles.itemCategoria}>{produto.categoria}</Text>
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={styles.itemPreco}>
          R$ {produto.preco.toFixed(2)}
        </Text>
        <Text
          style={[
            styles.itemEstoque,
            { color: produto.emEstoque ? '#2ECC71' : '#E74C3C' },
          ]}
        >
          {produto.emEstoque ? 'Em estoque' : 'Indisponível'}
        </Text>
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    marginTop: 8,
  },
  filtros: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  filtroBtn: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#eee',
  },
  filtroAtivo: {
    backgroundColor: '#FF6B35',
  },
  filtroTexto: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  filtroTextoAtivo: {
    color: '#fff',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginVertical: 4,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  itemIndisponivel: {
    opacity: 0.6,
  },
  itemNome: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  itemCategoria: {
    fontSize: 12,
    color: '#999',
    textTransform: 'capitalize',
    marginTop: 2,
  },
  itemPreco: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B35',
  },
  itemEstoque: {
    fontSize: 11,
    fontWeight: '500',
    marginTop: 2,
  },
});
