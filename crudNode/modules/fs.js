const fs = require ('fs')
const path = require ('path')

// Criar uma pasta
fs.mkdir(path.join(__dirname, '/test'), (error) => {
    if (error) {
        return console.log ('Erro:', error)
    }    
    console.log ('Pasta criada com sucesso!')
    
})

// Criar um arquivo
// quando o node ve um código demorado, ele não espera terminar e segue para o próximo código
fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'hello node!', (error) => {
    if (error) {
        return console.log ('Erro:', error)
    }    
    console.log ('Arquivo criado com sucesso!')
    
    // Adicionar mais conteúdo ao arquivo
    // dentro do callback de criar arquivo
    // pois é assíncrono e pode tentar adicionar conteúdo antes do arquivo ser criado
    fs.appendFile(path.join(__dirname, '/test', 'test.txt'), '\nAdicionando mais conteúdo!', (error) => {
        if (error) {
            return console.log ('Erro:', error)
        }    
        console.log ('Arquivo alterado com sucesso!')
        
    }) 
    
    // Ler arquivo
    //data é o conteúdo do arquivo
    // também é assíncrono e pode ser lido antes do arquivo ser criado
    fs.readFile (path.join(__dirname, '/test', 'test.txt'), 'utf-8', (error, data) =>{
        if (error){
            return console.log ('Erro:', error)
        }
        console.log(data)
    })
})





