# 📚 Templates de Apresentação

Esta pasta contém **templates imutáveis** que servem como base para criar novas apresentações.

## ⚠️ Importante

**NÃO edite os arquivos diretamente nesta pasta!** 

Os templates são a base imutável. Para criar uma nova apresentação:

1. Use o script de criação: `node scripts/create-presentation.js <nome>`
2. Isso criará uma cópia em `presentations/<nome>/` que você pode editar livremente

## 📁 Estrutura

```
templates/
  ├── default/          # Template padrão (baseado no presentation-template)
  └── README.md         # Este arquivo
```

## 🔧 Criando uma Nova Apresentação

```bash
# Criar apresentação a partir do template padrão
node scripts/create-presentation.js minha-apresentacao

# Ou especificar um template específico
node scripts/create-presentation.js minha-apresentacao default
```

Isso criará uma nova apresentação em `presentations/minha-apresentacao/` com todos os arquivos do template.

## ✏️ Editando Templates

Se você realmente precisa modificar um template (cuidado!):

1. Faça backup do template atual
2. Edite os arquivos em `templates/<nome-do-template>/`
3. Documente as mudanças

**Lembre-se:** Mudanças em templates afetarão apenas novas apresentações criadas depois disso. Apresentações existentes não serão afetadas.

## 📝 Adicionando Novos Templates

Para adicionar um novo template:

1. Crie uma nova pasta em `templates/` com o nome do template
2. Copie os arquivos base do template padrão
3. Faça as modificações necessárias
4. Documente o template em um README.md dentro da pasta

## 🎯 Boas Práticas

- **Templates devem ser genéricos**: Evite dados específicos de clientes
- **Use placeholders**: Use `{{PRESENTATION_NAME}}` para valores que serão substituídos
- **Documente**: Adicione comentários explicando como usar o template
- **Mantenha simples**: Templates devem ser fáceis de entender e modificar

