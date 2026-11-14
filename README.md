# Community Dex — Firefox & Zen

**Sua ferramenta Pokémon para Poké Idle World.**

Extensão gratuita e independente para **Mozilla Firefox** e **Zen Browser**, com Pokédex, análise de IVs, Hunt Tracker, capturas, Shinies e relatórios em uma interface personalizável.

[**Releases**](https://github.com/mrooger/CommunityDEX-Firefox-Zen/releases) · [**Community Hub**](https://stigalzera.com/) · [**Poké Idle World**](https://poke.idleworld.online/play)

## Instalação

### Teste temporário no Firefox / Zen

1. Baixe o ZIP da extensão na página de **Releases**.
2. Abra `about:debugging` e acesse **Este Firefox / This Firefox**.
3. Escolha **Carregar extensão temporária / Load Temporary Add-on** e selecione o ZIP (ou o `manifest.json` após extrair).
4. Conceda as permissões necessárias para `poke.idleworld.online`, quando solicitado.
5. Abra o jogo e utilize o botão flutuante ou **Alt + P**.

**A instalação temporária é removida ao reiniciar o navegador.** Para disponibilizar instalação permanente, é necessário assinar o pacote pela Mozilla e distribuir o XPI assinado. O ZIP do GitHub, mesmo renomeado para XPI, não substitui a assinatura. [Portal de desenvolvedores Mozilla](https://addons.mozilla.org/developers/).

### Atualização

Para uma instalação temporária, carregue o novo ZIP em `about:debugging`. Se estiver utilizando uma versão assinada, instale a atualização assinada com o mesmo ID de extensão. Os dados da versão Firefox/Zen ficam no perfil desse navegador, separados do Chrome/Edge.

## Recursos

| Ferramenta | Funcionalidades |
| --- | --- |
| **Pokédex** | Leitura da mochila e do Mercado Global, atributos, IVs, tipos, fraquezas, resistências, comparação e fichas manuais ou por formulário |
| **Hunt Tracker** | XP total, XP/h, abates totais e por hora, loot e bônus atuais de VIP/Stream |
| **Capturas** | Raridade, multiplicador, IV, filtros, ordenação, melhor captura e sprites de Pokémon, incluindo variantes de Outland |
| **Shinies** | Detecção de encontros, alertas opcionais e histórico sem duplicidades indevidas |
| **Community LOG** | Sessões de 24 horas, até 5 LOGs diários e 5 manuais, visualização e exportação JSON |
| **Stream Geral** | Painel compacto e opcional para acompanhar estatísticas durante a transmissão |
| **Personalização** | Abas configuráveis, seções recolhíveis, painel flutuante e atalho **Alt + P** |

## Compatibilidade e privacidade

- Compatível com **Firefox 140+** e versões atuais do **Zen Browser**.
- O jogo é acessado em https://poke.idleworld.online/play.
- Estatísticas, fichas, capturas e LOGs são mantidos localmente no perfil do navegador; você pode exportar relatórios em JSON.
- A extensão consulta dados públicos de Pokémon na **PokéAPI** e a API do **GitHub** para verificar lançamentos. Alguns metadados de espécies são enviados a esses serviços para consulta.
- A leitura de capturas usa as informações disponibilizadas pelo próprio jogo, inclusive seu endpoint de Log de Capturas, sem transmitir credenciais para a comunidade.

## Estrutura do projeto

- `manifest.json`: manifesto da extensão para Firefox/Zen
- `app.js`, `app.css`, `core.js`: interface e análise
- `market.js`, `capture-log.js`: leitura do Mercado Global e capturas
- `session.js`, `log.html`, `log.js`, `log.css`: sessões e relatórios
- `main-bridge.js`, `background.js`: integração de eventos e serviços
- `tests/`: testes automatizados

Execute os testes com Node.js:

```bash
node --test tests/*.test.js
```

## Projeto

- [Community Dex — Firefox & Zen](https://github.com/mrooger/CommunityDEX-Firefox-Zen)
- [Edição Chrome / Edge](https://github.com/mrooger/CommunityDEX)
- [Community Hub](https://stigalzera.com/)
- [Licença MIT](LICENSE)

Community Dex é um projeto comunitário independente, sem afiliação oficial com Poké Idle World ou Pokémon.
