# SABOCHEMICAL

Site estático institucional da SABOCHEMICAL Engenharia de Águas, reconstruído com HTML, CSS e JavaScript puros.

## Conteúdo

- Site multipágina responsivo para celular, tablet e desktop.
- Home institucional e páginas dedicadas para empresa, soluções, tecnologias, projetos e contato.
- Contato por telefone, WhatsApp e e-mail.
- Formulário sem backend que monta mensagem para WhatsApp ou e-mail.
- SEO básico com `title`, `description`, Open Graph e JSON-LD.
- Relatório técnico em `ANALISE_E_PROPOSTA.md`.

## Estrutura

```text
.
├── assets/
├── index.html
├── empresa.html
├── solucoes.html
├── tecnologias.html
├── projetos.html
├── contato.html
├── robots.txt
├── sitemap.xml
├── styles.css
├── script.js
├── ANALISE_E_PROPOSTA.md
├── README.md
├── .gitignore
└── LICENSE
```

## Como executar localmente

Como é um site estático, basta abrir `index.html` no navegador.

Para servir por HTTP local:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000/
```

## Publicação

Para publicar na KingHost ou outro provedor estático, envie para a raiz pública do domínio:

- `index.html`
- `styles.css`
- `script.js`
- `assets/`

O domínio final previsto é `sabochemical.com`.

## Contatos configurados

- WhatsApp / telefone: `+55 92 99164-8231`
- Telefone: `+55 92 98819-2985`
- E-mail: `sabochemical@hotmail.com`, `gerencia@sabochemical.com`
- Endereço: Rua Leonora Armstrong, 181 - Zumbi dos Palmares, Manaus - AM

## Licença

Este projeto está licenciado sob os termos da licença MIT. Consulte `LICENSE`.