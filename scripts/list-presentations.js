#!/usr/bin/env node

/**
 * Script para listar templates e apresentações disponíveis
 * 
 * Uso:
 *   node scripts/list-presentations.js
 *   node scripts/list-presentations.js --templates
 *   node scripts/list-presentations.js --presentations
 */

const fs = require('fs')
const path = require('path')

const TEMPLATES_DIR = path.join(__dirname, '..', 'templates')
const PRESENTATIONS_DIR = path.join(__dirname, '..', 'presentations')

function listTemplates() {
  console.log('\n📦 Templates Disponíveis:\n')
  
  if (!fs.existsSync(TEMPLATES_DIR)) {
    console.log('  (nenhum template encontrado)')
    return
  }

  const templates = fs.readdirSync(TEMPLATES_DIR, { withFileTypes: true })
    .filter(entry => entry.isDirectory() && !entry.name.startsWith('.'))

  if (templates.length === 0) {
    console.log('  (nenhum template encontrado)')
    return
  }

  templates.forEach(template => {
    const templatePath = path.join(TEMPLATES_DIR, template.name)
    const readmePath = path.join(templatePath, 'README.md')
    let description = ''

    if (fs.existsSync(readmePath)) {
      const readme = fs.readFileSync(readmePath, 'utf8')
      const firstLine = readme.split('\n').find(line => line.trim() && !line.startsWith('#'))
      if (firstLine) {
        description = firstLine.trim()
      }
    }

    console.log(`  ✨ ${template.name}`)
    if (description) {
      console.log(`     ${description}`)
    }
    console.log(`     Caminho: ${templatePath}\n`)
  })
}

function listPresentations() {
  console.log('\n🎨 Apresentações Criadas:\n')
  
  if (!fs.existsSync(PRESENTATIONS_DIR)) {
    console.log('  (nenhuma apresentação encontrada)')
    return
  }

  const presentations = fs.readdirSync(PRESENTATIONS_DIR, { withFileTypes: true })
    .filter(entry => entry.isDirectory() && !entry.name.startsWith('.'))

  if (presentations.length === 0) {
    console.log('  (nenhuma apresentação encontrada)')
    console.log('\n  💡 Crie uma nova apresentação com:')
    console.log('     node scripts/create-presentation.js <nome>\n')
    return
  }

  presentations.forEach(presentation => {
    const presentationPath = path.join(PRESENTATIONS_DIR, presentation.name)
    const packageJsonPath = path.join(presentationPath, 'package.json')
    let info = ''

    if (fs.existsSync(packageJsonPath)) {
      try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
        if (packageJson.name) {
          info = ` (${packageJson.name})`
        }
      } catch (e) {
        // Ignorar erros de parsing
      }
    }

    console.log(`  📄 ${presentation.name}${info}`)
    console.log(`     Caminho: ${presentationPath}\n`)
  })
}

function main() {
  const args = process.argv.slice(2)
  const showTemplates = args.includes('--templates') || args.includes('-t')
  const showPresentations = args.includes('--presentations') || args.includes('-p')

  if (showTemplates && showPresentations) {
    listTemplates()
    listPresentations()
  } else if (showTemplates) {
    listTemplates()
  } else if (showPresentations) {
    listPresentations()
  } else {
    // Mostrar ambos por padrão
    listTemplates()
    listPresentations()
    
    console.log('💡 Dicas:')
    console.log('  - Listar apenas templates: node scripts/list-presentations.js --templates')
    console.log('  - Listar apenas apresentações: node scripts/list-presentations.js --presentations')
    console.log('  - Criar nova apresentação: node scripts/create-presentation.js <nome>\n')
  }
}

main()

