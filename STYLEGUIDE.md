# Guia de Estilo e Organização

## Estrutura de Pastas
- `src/components/`: Componentes React e seus respectivos arquivos CSS.
- `src/img/`: Imagens utilizadas nos componentes.
- `src/App.css`, `src/index.css`: Estilos globais e resets.

## Convenções de CSS
- Cada componente tem seu próprio arquivo CSS.
- Classes usam o padrão `.nome-componente-elemento` para evitar conflitos.
- Use Flexbox e Grid para layout responsivo.
- Utilize media queries para adaptar o site em telas menores.

## Paleta de Cores
- Primária: #61dafb (azul React)
- Secundária: #222 (preto/cinza escuro)
- Fundo: #f5f5f5 (cinza claro)
- Texto: #333 (cinza escuro)

## Fontes
- `Arial, Helvetica, sans-serif` (padrão)
- Recomenda-se usar Google Fonts para títulos (ex: 'Montserrat', 'Roboto')

## Componentização
- Header: fundo com imagem, texto centralizado, responsivo.
- Nav: menu fixo, hamburguer para mobile.
- Projetos: cards com sombra, modal responsivo.
- Footer: simples, centralizado.
- Sobre/Contato: seções com espaçamento e fontes legíveis.

## Responsividade
- Use `@media (max-width: 900px)` e `@media (max-width: 768px)` para adaptar layouts.
- Cards, menus e seções devem se reorganizar em coluna no mobile.

## Boas Práticas
- Evite estilos inline, prefira classes CSS.
- Separe lógica de apresentação.
- Use variáveis CSS para cores e espaçamentos se desejar.

---

Siga este guia para manter o projeto organizado, profissional e fácil de evoluir.