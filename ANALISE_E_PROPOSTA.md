# Analise e Proposta - Reconstrucao do Site SABOCHEMICAL

## Fonte analisada

- Site publicado: `http://sabochemical.com/mobile/`
- Data da analise: 15/06/2026
- Entrega produzida: site estatico multipagina em `index.html`, `empresa.html`, `solucoes.html`, `tecnologias.html`, `projetos.html`, `contato.html`, `styles.css`, `script.js`, `assets/`, `robots.txt` e `sitemap.xml`

## Problemas encontrados

| Problema | Impacto | Solucao aplicada |
| --- | --- | --- |
| Ausencia de `meta viewport` na pagina mobile analisada | Celulares renderizam a pagina como desktop reduzido, gerando leitura ruim e scroll horizontal | Novo HTML usa viewport responsivo e layout fluido |
| Estrutura antiga com larguras fixas, estilos inline e formularios de 900px | Quebra a navegacao em telas pequenas e dificulta manutencao | Layout semantico com CSS unico, grid responsivo e limites por container |
| Titulo muito longo e carregado de palavras-chave | Prejudica SEO, legibilidade em abas e compartilhamento | Novo `title`, `description`, canonical, Open Graph e headings claros |
| Links de telefone incompletos no HTML antigo (`tel:+55`) | Clique para ligar nao funciona corretamente | Links corrigidos para `tel:+5592991648231` e `tel:+5592988192985` |
| Formulario dependente de backend antigo (`auth_contatos2.php`) | Pode falhar na publicacao estatica e nao oferece retorno imediato | Novo formulario valida campos e monta mensagem para WhatsApp ou e-mail |
| Textos com caracteres corrompidos em videos e acentos | Reduz confianca e qualidade percebida | Conteudo reescrito e normalizado em UTF-8 |
| Navegacao com links vazios ou duplicados (`#`) | Frustra o usuario e dilui a conversao | Menu novo aponta para secoes reais da pagina |
| Imagens sem descricao util | Piora acessibilidade e indexacao | Imagens reaproveitadas com `alt` descritivo |
| Baixo destaque para canais comerciais | Usuário precisa procurar telefone, WhatsApp e e-mail | CTAs no topo, hero e contato; WhatsApp como acao principal |

## Proposta de melhoria

Reconstruir a presenca digital da SABOCHEMICAL como um site institucional multipagina, responsivo e orientado a contato. A home apresenta a visao geral e as paginas internas detalham cada topico:

- Posicionamento claro: engenharia de aguas, tratamento de agua e efluentes em Manaus.
- Paginas dedicadas para empresa, solucoes, tecnologias, projetos e contato.
- Conteudo ampliado das paginas originais: cloracao, fabricacao ETE/ETA/ETO, filtros, separadores, hipoclorito, tratamento de agua gelada, limpeza quimica, tratamento do ar e projetos realizados.
- Projetos realizados com imagens publicas reaproveitadas do site atual.
- Canais de conversao com telefone, WhatsApp, e-mail e endereco.
- Formulario sem backend, adequado para hospedagem estatica na KingHost.

## Solucoes aplicadas

- Criacao de `index.html` semantico e paginas internas com `header`, `main`, `section`, `footer`, `h1/h2/h3` e conteudo indexavel.
- Criacao de `styles.css` responsivo para celular, tablet e desktop, sem dependencias pesadas, com layouts especificos para home e paginas internas.
- Criacao de `script.js` leve para menu mobile, validacao do formulario e abertura de WhatsApp/e-mail.
- Download dos assets publicos essenciais para `assets/`: logotipo e tres imagens de projetos.
- Inclusao de SEO basico: `title`, `description`, canonical, Open Graph, schema JSON-LD e textos alternativos.
- Correção dos contatos extraidos do site publicado:
  - WhatsApp / telefone: `+55 92 99164-8231`
  - Telefone: `+55 92 98819-2985`
  - E-mails: `sabochemical@hotmail.com`, `gerencia@sabochemical.com`
  - Endereco: `Rua Leonora Armstrong, 181 - Zumbi dos Palmares, Manaus - AM`

## Proximos passos para publicacao na KingHost

1. Validar com a empresa se todos os telefones, e-mails e endereco seguem atuais.
2. Subir `index.html`, `styles.css`, `script.js` e a pasta `assets/` para a raiz do dominio.
3. Configurar o dominio atual `sabochemical.com` para servir a nova raiz estatica.
4. Manter redirecionamento de URLs antigas para a nova home ou para a pagina interna correspondente quando possivel.
5. Ativar HTTPS no painel da KingHost e testar `https://sabochemical.com/`.
6. Enviar a nova URL ao Google Search Console para reindexacao.

## Checklist de validacao

- Responsividade em celular, tablet e desktop.
- `scrollWidth <= viewport` nas larguras testadas.
- Menu mobile abrindo e fechando.
- Links de telefone, WhatsApp e e-mail presentes e sem URL vazia.
- Formulario validando campos obrigatorios.
- Mensagem de WhatsApp/e-mail gerada a partir dos campos.
- Imagens carregando com texto alternativo.
- `title`, `description`, `h1` e headings presentes em todas as paginas principais.
