### 💻 Sobre o projeto

Projeto apresentado como trabalho de conclusao de curso para obter a graduação bacharel em Ciência da Computação na Ceunsp (Centro Universitário N. Sra. do Patrocínio).

Este projeto tem o objetivo de apresentar um estudo entre as duas arquiteturas de desenvolvimento de software: a arquitetura monolítica e a de microsserviços, 
através de uma avaliação comparativa entre o desenvolvimento de uma aplicação monolítica de um sistema de lista de tarefas - desenvolvido utilizando as 
tecnologias JavaScript e Node.JS - e uma outra aplicação idêntica construída com a arquitetura de microsserviços. Com este estudo, será possível apresentar
os fundamentos básicos dessas duas arquiteturas, visualizar em cenário real, as vantagens e desvantagens que cada arquitetura apresenta, bem como análises de 
performance e dificuldades encontradas para desenvolver, para que assim, sirva a comunidade como material de estudo e como guia para auxiliar no desenvolvimento de
novas aplicações.

### 📚Fundamentação teórica

#### Arquitetura monolítica

Em uma arquitetura monolítica, todos os processos do negócio estão implementados em uma única aplicação, onde a interface de usuário e código de acesso aos
dados são combinados em um único programa a partir de uma única plataforma. Ou seja, toda a aplicação é uma única base de código que é compilada
e executada uma única vez na mesma máquina, consumindo os mesmos recursos de processamento, memória, banco de dados e arquivos.
Com toda essa centralização, o nível de complexidade da coordenação é reduzido. O ambiente de um sistema monolítico é mais simples de configurar e entender,
possui uma curva de aprendizado menor e, obviamente, existem mais desenvolvedores familiarizados com este modelo, o que é ideal para iniciar um
MVP (minimum viable product - mínimo produto viável) para validar um negócio ou produto. Todavia, desenvolver nesta arquitetura implica em acrescentar
itens sempre ao mesmo bloco, aumentando cada vez mais seu tamanho e complexidade, tornando sua manutenção cada vez mais cara e mais lenta, visto que
existe uma alta dependência de componentes de código.

#### Arquitetura de microsserviços

A arquitetura de microsserviços é utilizada para desenvolver uma aplicação como um conjunto de pequenos serviços, cada um funcionando em seu próprio processo.
Cada serviço é desenvolvido em torno de um conjunto de regras de negócio específico, e é implementado de forma independente.

> "Um microsserviço é uma unidade de software autônoma que, juntamente com outras, compõe uma grande aplicação. Ao dividir seu aplicativo em unidades pequenas,
cada parte pode ser independentemente implantada e escalada, pode ser escrita por diferentes equipes de desenvolvimento, em diferentes linguagens de
programação, e pode ser testada individualmente." (STOIBER, 2017)

Este modelo visa criar serviços independentes, porém interligados. Desta forma, cada um dos módulos funcionam dentro do seu próprio processo, com seu banco de
dados independente e utilizando a tecnologia apropriada para a sua aplicação. Esta arquitetura permite o desenvolvimento de acordo com a função, bem-delimitada
e com um propósito específico. Se fosse possível resumir a arquitetura de microsserviços em uma palavra, seria especialização. Cada serviço tem uma implementação
diferente, sendo assim, subir uma nova atualização em um serviço não atrapalha a disponibilidade dos outros. Assim como é possível escalar um único serviço que
demande mais poder de processamento de forma independente do restante do sistema. Por ser uma estrutura mais complexa, esta arquitetura demanda um nível mais
elevado de automação das implementações. Além disso, ter uma boa integração entre todos os serviços é essencial para que tudo funcione corretamente.
A complexidade exige desenvolvedores com qualificação maior ou, ao menos, uma boa coordenação de DevOps (Desenvolvimento e Operações) para assegurar um bom
funcionamento.
