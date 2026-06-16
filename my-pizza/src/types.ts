export interface Produto {
  id: number;
  nome: string;
  preco: number;
  categoria: Categoria;
  emEstoque: boolean;
}

export type Categoria = 'pizza' | 'bebida' | 'sobremesa';

export interface Usuario {
  nome: string;
  email: string;
  idade?: number;
}

export interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
}

export type StatusPedido = 'pendente' | 'preparando' | 'pronto' | 'entregue';

export interface Pedido {
  id: string;
  itens: ItemCarrinho[];
  total: number;
  status: StatusPedido;
}

export type Tela =
  | 'home'
  | 'fundamentos'
  | 'state'
  | 'effect'
  | 'lista'
  | 'typescript';
