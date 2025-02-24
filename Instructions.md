Tarefa: Crie um pipeline de CI/CD usando o GitHub Actions para um projeto simples de
aplicação web.
Requisitos:
1. O pipeline deve ser ativado sempre que um novo commit for feito na branch main.
2. O pipeline deve executar os seguintes passos:
o Instalar as dependências do projeto.
o Executar testes unitários.
o Construir a aplicação.
o Armazenar o artefato como release do github
o Usar funcionalidade environment do github para restringir a aprovação do
deploy para um usuário ou grupo do github
3. Se todos os passos acima forem bem-sucedidos, o pipeline deve fazer o deploy da
aplicação em um ambiente de teste.
4. O pipeline deve notificar o desenvolvedor via e-mail se o processo de CI/CD falhar em
qualquer etapa
• Criar uma action do tipo TypeScript que faça execução de algum linter ou quality
gates
o Exemplos:
§ Validar se existe um arquivo no repositório necessário para o build,
caso negativo abortar a esteira indicando que e necessário esse
arquivo
§ Executar uma análise estática usando a ferramenta SonarQube ou
alguma outra similiar
§ Etc...