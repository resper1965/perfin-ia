#!/usr/bin/env node

/**
 * Script para criar uma nova apresentação a partir de um template
 * 
 * Uso:
 *   node scripts/create-presentation.js <nome-da-apresentacao> [template]
 * 
 * Exemplo:
 *   node scripts/create-presentation.js minha-apresentacao
 *   node scripts/create-presentation.js cliente-xyz cis-template
 */

const fs = require('fs')
const path = require('path')

const TEMPLATES_DIR = path.join(__dirname, '..', 'templates')
const PRESENTATIONS_DIR = path.join(__dirname, '..', 'presentations')

// Função para copiar diretório recursivamente
function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }

  const entries = fs.readdirSync(src, { withFileTypes: true })

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      // Ignorar node_modules, .next, e outros diretórios de build
      if (['node_modules', '.next', '.git', 'dist', 'build'].includes(entry.name)) {
        continue
      }
      copyDirectory(srcPath, destPath)
    } else {
      // Ignorar arquivos específicos
      if (['.env.local', '.env', 'package-lock.json', '.gitignore'].includes(entry.name)) {
        continue
      }
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

// Função para substituir placeholders em arquivos
function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8')
  
  for (const [placeholder, value] of Object.entries(replacements)) {
    const regex = new RegExp(placeholder, 'g')
    content = content.replace(regex, value)
  }
  
  fs.writeFileSync(filePath, content, 'utf8')
}

// Função para processar arquivos recursivamente
function processFiles(dir, replacements) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      processFiles(fullPath, replacements)
    } else if (entry.isFile()) {
      // Processar apenas arquivos de texto
      const ext = path.extname(entry.name)
      if (['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.txt', '.css'].includes(ext)) {
        try {
          replaceInFile(fullPath, replacements)
        } catch (error) {
          console.warn(`Aviso: Não foi possível processar ${fullPath}:`, error.message)
        }
      }
    }
  }
}

function main() {
  const args = process.argv.slice(2)
  
  if (args.length === 0) {
    console.error('Erro: Nome da apresentação é obrigatório')
    console.log('\nUso: node scripts/create-presentation.js <nome-da-apresentacao> [template]')
    console.log('\nTemplates disponíveis:')
    
    if (fs.existsSync(TEMPLATES_DIR)) {
      const templates = fs.readdirSync(TEMPLATES_DIR, { withFileTypes: true })
        .filter(entry => entry.isDirectory())
        .map(entry => entry.name)
      
      if (templates.length > 0) {
        templates.forEach(template => {
          console.log(`  - ${template}`)
        })
      } else {
        console.log('  (nenhum template encontrado)')
      }
    } else {
      console.log('  (diretório de templates não existe)')
    }
    
    process.exit(1)
  }

  const presentationName = args[0]
  const templateName = args[1] || 'default'

  // Validar nome da apresentação (aceita letras, números, hífens e underscores)
  if (!/^[a-zA-Z0-9_-]+$/.test(presentationName)) {
    console.error('Erro: Nome da apresentação deve conter apenas letras, números, hífens e underscores')
    process.exit(1)
  }

  const templatePath = path.join(TEMPLATES_DIR, templateName)
  const presentationPath = path.join(PRESENTATIONS_DIR, presentationName)

  // Verificar se o template existe
  if (!fs.existsSync(templatePath)) {
    console.error(`Erro: Template "${templateName}" não encontrado em ${templatePath}`)
    console.log('\nTemplates disponíveis:')
    if (fs.existsSync(TEMPLATES_DIR)) {
      const templates = fs.readdirSync(TEMPLATES_DIR, { withFileTypes: true })
        .filter(entry => entry.isDirectory())
        .map(entry => entry.name)
      templates.forEach(t => console.log(`  - ${t}`))
    }
    process.exit(1)
  }

  // Verificar se a apresentação já existe
  if (fs.existsSync(presentationPath)) {
    console.error(`Erro: Apresentação "${presentationName}" já existe em ${presentationPath}`)
    process.exit(1)
  }

  // Criar diretório de apresentações se não existir
  if (!fs.existsSync(PRESENTATIONS_DIR)) {
    fs.mkdirSync(PRESENTATIONS_DIR, { recursive: true })
  }

  console.log(`\n📦 Criando apresentação "${presentationName}" a partir do template "${templateName}"...`)

  // Copiar template
  console.log('📋 Copiando arquivos do template...')
  copyDirectory(templatePath, presentationPath)

  // Substituir placeholders
  console.log('🔄 Personalizando arquivos...')
  const replacements = {
    '{{PRESENTATION_NAME}}': presentationName,
    '{{PRESENTATION_NAME_TITLE}}': presentationName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  processFiles(presentationPath, replacements)

  // Criar arquivo .gitignore específico
  const gitignorePath = path.join(presentationPath, '.gitignore')
  const gitignoreContent = `# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Next.js
.next/
out/
build/
dist/

# Production
*.log

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Local env files
.env*.local
.env

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts
`
  fs.writeFileSync(gitignorePath, gitignoreContent)

  console.log(`\n✅ Apresentação criada com sucesso!`)
  console.log(`\n📁 Localização: ${presentationPath}`)
  console.log(`\n📝 Próximos passos:`)
  console.log(`   1. cd ${presentationPath}`)
  console.log(`   2. npm install`)
  console.log(`   3. Edite lib/presentation-data.ts com seus dados`)
  console.log(`   4. npm run dev`)
  console.log(`\n`)
}

main()

