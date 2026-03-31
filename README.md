# Gerador de Links WhatsApp

Gerador de links wa.me com mensagem automática baseada no horário.

## Uso

### Interface Gráfica (Recomendado)

Abra `index.html` no navegador para usar a interface visual.

**Funcionalidades:**
- Configurar nome, setor e template de mensagem
- Adicionar números com validação em tempo real
- Saudação automática (Bom dia/tarde/noite)
- Botão para abrir direto no WhatsApp
- Configurações salvas no navegador

### Linha de Comando

```bash
node telefone.js numeros.txt
```

**Parâmetros:**
- Sem parâmetro: usa `numeros.txt` como padrão
- Com parâmetro: usa o arquivo especificado

## Arquivos

- `index.html` - Interface gráfica
- `telefone.js` - CLI para gerar links
- `config.json` - Configurações (nome, setor, template)
- `numeros.txt` - Lista de números (um por linha)

## Configuração

Edite `config.json` ou use a interface gráfica para personalizar:
- Nome do usuário
- Setor
- Template da mensagem (use `{greeting}`, `{nome}`, `{setor}`)

## Validação

Números devem ter 10-11 dígitos (DDD + 8/9 dígitos).
Exemplos válidos:
- `(71) 91111-1111`
- `71911111111`
- `11988887777`
