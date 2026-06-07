# Documentação das Alterações do Projeto

Este documento resume as modificações estruturais e de código realizadas no projeto para organizar os dados e as visualizações em uma arquitetura limpa e simplificada.

## 1. Estrutura de Diretórios Criada
Sob o diretório `src/`, foram criadas as seguintes pastas para organização das responsabilidades:
- `src/domain/entities/`: Para modelos de dados e definições de contratos/interfaces (ex: `SocialLink`, `PhotoItem`).
- `src/shared/constants/`: Para dados estáticos e constantes compartilhadas (ex: `mockData`).
- `src/presentation/components/`: Para componentes visuais pequenos e isolados.
- `src/presentation/modules/`: Para módulos de página maiores (ex: `LinksPage`).

---

## 2. Novos Arquivos Implementados

### 2.1 Entidades de Domínio
**Caminho:** `src/domain/entities/SocialLink.ts`
Define as interfaces do modelo de negócios para as redes sociais e os itens da galeria de fotos.

```typescript
export interface SocialLink {
  platform: 'instagram' | 'facebook' | 'whatsapp';
  url: string;
  label: string;
}

export interface PhotoItem {
  id: string;
  url: string;
  alt: string;
}
```

### 2.2 Dados Estáticos e Mockados
**Caminho:** `src/shared/constants/mockData.ts`
Contém os arrays estáticos com links sociais e links para fotos que alimentam a aplicação. Para garantir o carregamento correto e variado de imagens na galeria, foram utilizados caminhos diretos do Picsum com sementes dinâmicas.

```typescript
import { SocialLink, PhotoItem } from '@/domain/entities/SocialLink';

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'instagram', url: 'https://instagram.com', label: 'Siga no Instagram' },
  { platform: 'facebook', url: 'https://facebook.com', label: 'Curta no Facebook' },
  { platform: 'whatsapp', url: 'https://wa.me', label: 'Chame no WhatsApp' }
];

export const PHOTOS: PhotoItem[] = [
  { id: '1', url: 'https://picsum.photos/300/300?random=1', alt: 'Foto de Trabalho 1' },
  { id: '2', url: 'https://picsum.photos/300/300?random=2', alt: 'Foto de Trabalho 2' },
  { id: '3', url: 'https://picsum.photos/300/300?random=3', alt: 'Foto de Trabalho 3' }
];
```

### 2.3 Página Principal de Links (`LinksPage`)
**Caminho:** `src/presentation/modules/LinksPage.tsx`
Interface visual contendo cabeçalho de perfil, botões para acesso às redes sociais e uma galeria organizada em grid de 2 colunas.

### 2.4 Ponto de Entrada para App Router (Next.js-style)
**Caminho:** `src/app/page.tsx`
Criado para compatibilidade estrutural futura, importando e renderizando o módulo `<LinksPage />`.

---

## 3. Integrações e Compatibilidade (Vite)
Como a aplicação atual roda sob o Vite (não Next.js), o ponto de entrada principal utilizado no build é o `src/App.tsx`. Para que as alterações fossem exibidas em tela sem quebrar a execução atual:
1. **Atualização em `src/App.tsx`:** O arquivo foi ajustado para renderizar diretamente a nova página `<LinksPage />`.
2. **Resolução de Caminhos (`@/`):** Os aliases de caminhos foram atualizados para apontar para `src/` no `tsconfig.json` e no `vite.config.ts`, permitindo imports absolutos limpos de forma nativa e segura.
