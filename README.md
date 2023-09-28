# <div align="center">Labpharmacy System</div>

## Descrição do projeto

LabPharmacy System é um projeto de sistema de gerenciamento de farmácias que inclui funcionalidades de login, cadastro de farmácias, cadastro de medicamentos, lista de medicamentos e lista de farmácias.

## Funcionalidades:

    1-	Página de login: permite que os usuários façam login com suas credenciais;
    2-	Página de cadastro de farmácias: permite que os usuários cadastrem novas farmácias no sistema;
    3-	Página de cadastro de medicamentos: permite que os usuários cadastrem novos medicamentos no sistema;
    4-	Página de lista de medicamentos: exibe uma lista de medicamentos cadastrados no sistema;
    5-	Página de lista de farmácias: exibe uma lista de farmácias cadastradas no sistema.

### Descrição e funcionamento dos componentes

#### NavBar

O componente Navbar é um componente de barra de navegação implementado em React, que utiliza a biblioteca react-router-dom para criar links de navegação dentro de uma aplicação web. Ele é usado para exibir uma barra de navegação com links para diferentes páginas da aplicação.

Este código define um componente de barra de navegação (Navbar) em uma aplicação React que utiliza a biblioteca "react-router-dom" para gerenciar rotas e navegação entre diferentes visualizações da aplicação. Vamos entender como esse componente funciona em detalhes:

Importações: O código importa dois módulos. O primeiro é o módulo "Link" da biblioteca "react-router-dom", que é usado para criar links para diferentes rotas da aplicação. O segundo é um arquivo de imagem de logotipo que está localizado no caminho "../../image/logo.png". Também é importado um arquivo de estilos chamado "Navbar.module.css".

Função Navbar: O componente Navbar é uma função do React que retorna uma estrutura de barra de navegação em JSX (JavaScript XML), que é uma sintaxe semelhante a HTML, mas usada no React.

Estrutura da barra de navegação: A estrutura da barra de navegação é composta por um elemento "nav" com duas classes de estilo ("navbar" e "fixed"), que representa a própria barra de navegação. Dentro desse elemento, há um "div" que contém o logotipo da empresa "LABPharmacia inc" e um "span" com o texto "LABPharmacia inc". Em seguida, há uma lista não ordenada "ul" que contém vários elementos de lista "li", cada um dos quais representa um link de navegação. Cada elemento de lista contém um componente "Link" do "react-router-dom" que define um link para uma rota específica da aplicação.

Estilos: Os estilos da barra de navegação são definidos por meio de classes de estilo CSS que estão no arquivo "Navbar.module.css". Essas classes são aplicadas aos elementos da barra de navegação usando a sintaxe de interpolação de strings em JSX (${style.nomeDaClasse}), onde "style" é um objeto que contém as classes de estilo importadas do arquivo "Navbar.module.css".

Rotas e links: Os links de navegação são criados usando o componente "Link" do "react-router-dom", que recebe uma prop "to" que especifica a rota para a qual deve ser navegado quando o link é clicado. Os links também podem ter propriedades adicionais, como "aria-current", para indicar a página atualmente ativa. Os links são usados para navegar para diferentes rotas da aplicação, que são definidas pelas propriedades "to" dos componentes "Link" e são gerenciadas pelo roteador do "react-router-dom" na aplicação principal.

#### PharmacyContext

É criado um contexto de React chamado PharmacyContext e um componente de provedor de contexto chamado PharmacyContextProvider. Vamos explicar o funcionamento desses dois elementos:

PharmacyContext: É um contexto de React criado usando a função createContext do React. Um contexto é uma forma de compartilhar dados entre componentes em diferentes níveis de aninhamento na árvore de componentes, sem a necessidade de passar explicitamente os dados como props através de cada nível intermediário. No exemplo, PharmacyContext é criado com um valor padrão vazio {}.

PharmacyContextProvider: É um componente de provedor de contexto que envolve outros componentes em sua árvore de componentes filhos, permitindo que eles acessem os dados do contexto PharmacyContext e atualizem esses dados, se necessário. Ele utiliza o padrão de renderização de propriedades (ou "render props") do React, onde o conteúdo é passado como uma propriedade chamada children, que representa os componentes filhos que serão envolvidos pelo provedor de contexto.

##### Estado do componente

O componente PharmacyContextProvider usa o hook useState do React para gerenciar três estados locais: userEmail, userSenha e showFarmacia. Esses estados são usados para armazenar e controlar os dados relacionados ao contexto PharmacyContext.

##### Valor do contexto

O valor do contexto PharmacyContext.Provider é definido como um objeto JavaScript contendo as funções setUserEmail, setShowFarmacia, setUserSenha e os estados showFarmacia, userEmail, userSenha. Isso permite que os componentes filhos que consomem o contexto PharmacyContext acessem essas funções e estados por meio do hook useContext do React.

##### Renderização

O componente PharmacyContextProvider renderiza seu conteúdo filho ({children}) dentro do PharmacyContext.Provider, tornando os dados e funções do contexto PharmacyContext disponíveis para todos os componentes filhos que consomem esse contexto.

Em resumo, é criado um contexto de React chamado PharmacyContext e um componente de provedor de contexto chamado PharmacyContextProvider, que gerencia estados locais e disponibiliza funções e estados específicos para os componentes filhos que consomem o contexto PharmacyContext. Isso permite o compartilhamento e a atualização de dados entre componentes em diferentes níveis da árvore de componentes sem a necessidade de passar explicitamente os dados através de props.

#### Router

Esse componente de roteamento é utilizado para gerenciar as rotas em uma aplicação de front-end em React, permitindo a renderização condicional de componentes baseados na URL atual do navegador. A configuração de rotas é definida como um array de objetos, onde cada objeto representa uma rota específica e suas propriedades. 

index: uma propriedade booleana que indica se essa rota deve ser a rota padrão quando a URL não corresponder a nenhuma das rotas especificadas. No projeto, a rota com Home é definida como a rota padrão, pois possui a propriedade index definida como true.

element: uma propriedade que especifica o componente React a ser renderizado quando a URL corresponder a essa rota. Os componentes Home, App, Login, CadFarmacias, CadMedicamentos, ListaFarmacias e MedicamentoCard são especificados como elementos a serem renderizados em suas respectivas rotas.

errorElement: uma propriedade que especifica o componente React a ser renderizado quando ocorrer um erro ao corresponder a URL atual a nenhuma das rotas especificadas. O componente ErrorPage é especificado como o elemento a ser renderizado quando ocorrer um erro de roteamento.

path: uma propriedade que define o caminho da URL a ser correspondido pela rota. Os caminhos "/login", "/farmacias", "/medicamentos", "/lista-farmacia" e "/lista-medicamento" são definidos como caminhos para as rotas especificadas.

children: uma propriedade opcional que permite a definição de rotas aninhadas, ou seja, rotas que são dependentes da rota pai. As rotas "/login", "/farmacias", "/medicamentos", "/lista-farmacia" e "/lista-medicamento" são rotas aninhadas da rota principal definida com o elemento <App/>. Isso significa que essas rotas só serão renderizadas quando a URL correspondente incluir o caminho especificado e o caminho da rota pai ("/") também for correspondido.

Em resumo, um componente de roteamento em React que gerencia as rotas da aplicação e define quais componentes devem ser renderizados com base na URL atual do navegador. Ele também permite a definição de rotas aninhadas e especificação de um componente de erro a ser renderizado quando ocorrerem erros de roteamento.

### Funcionamento das páginas do sistema

#### ErrorPage

O componente (ErrorPage) é uma aplicação React que utiliza a biblioteca react-bootstrap para estilização dos componentes e a biblioteca react-router-dom para a navegação entre as páginas da aplicação.

O componente importa alguns módulos necessários para seu funcionamento, como o React (para a criação de componentes em React), o Container, Row, Col e Image do react-bootstrap (para criar a estrutura de layout responsiva) e também uma imagem de erro (errorImage) e um arquivo de estilo (style) do módulo ../image/erro404.jpg e ../styles/ErrorPage.module.css, respectivamente. Além disso, são importados o Link e o useNavigate do react-router-dom (para criar links de navegação e controlar a navegação na aplicação).

Função ErrorPage: É definida uma função ErrorPage que representa o componente de página de erro. Dentro dessa função, é utilizado o Container do react-bootstrap como um wrapper para o conteúdo da página. Em seguida, é utilizado o Row para criar uma linha que contém duas colunas (Col).

Estilização: A classe CSS erro_container do arquivo de estilo ErrorPage.module.css é aplicada ao Row por meio da propriedade className, que é uma forma de aplicar estilos a um componente React. Essa classe provavelmente define a aparência e o layout da página de erro. Dentro das colunas, são adicionados elementos de conteúdo. Na primeira coluna, é renderizada uma imagem de erro (errorImage) utilizando o componente Image do react-bootstrap, com a classe CSS col_image também definida no arquivo de estilo. Na segunda coluna, é exibida uma mensagem de erro "Oops! algo deu errado" e um link "Voltar para Home" (Link do react-router-dom) que redireciona o usuário para a página inicial ("/") da aplicação.

Navegação: A função useNavigate do react-router-dom é utilizada para obter uma função de navegação (navegate) que pode ser usada para redirecionar o usuário para a página inicial quando o link "Voltar para Home" for clicado.

##### <div align="center">Página de Erro</div>
<div align="center">
    <img src="https://github.com/huitson-pereira/LABPharmacy-projeto-final/blob/develop/erro404.jpg" Width="500px"/>
</div>

#### Home

O componente (Home) é uma aplicação React que utiliza a biblioteca react-bootstrap para estilização dos componentes e a biblioteca react-router-dom para a navegação entre as páginas da aplicação. O componente importa alguns módulos necessários para seu funcionamento, como o React (para a criação de componentes em React), o Button e Container do react-bootstrap (para criar a estrutura de layout responsiva) e também o useNavigate do react-router-dom (para controlar a navegação na aplicação). Além disso, é importado um arquivo de estilo (style) do módulo ../styles/Home.module.css.

Função Home: É definida uma função Home que representa o componente de página inicial. Dentro dessa função, é utilizado o Container do react-bootstrap como um wrapper para o conteúdo da página.

Estilização: A classe CSS container do arquivo de estilo Home.module.css é aplicada ao Container por meio da propriedade className, que é uma forma de aplicar estilos a um componente React. Essa classe provavelmente define a aparência e o layout da página inicial. Dentro do Container, são adicionados elementos de conteúdo. Há uma barra de navegação (nav) com a classe CSS cabecalho, que contém um logotipo (img) e um título (span) da empresa. Em seguida, há uma seção (section) com a classe CSS section_container, que contém um título (p) e uma imagem (img) de uma seção do sistema. Por fim, há outra seção com um botão de login (Button do react-bootstrap) com a classe CSS botao, que tem um evento de clique (onClick) que chama a função goToLogin.

Navegação: A função useNavigate do react-router-dom é utilizada para obter uma função de navegação (navegate) que pode ser usada para redirecionar o usuário para a página de login ("/login") quando o botão de login for clicado. A função goToLogin é chamada quando o botão de login é clicado, e ela utiliza a função navegate para redirecionar o usuário para a página de login.

##### <div align="center">Página Home</div>
<div align="center">
    <img src="https://github.com/huitson-pereira/LABPharmacy-projeto-final/blob/develop/Home.png" Width="500px"/>
</div>

#### Login

Esse componente é um formulário de login em uma aplicação React utilizando a biblioteca react-bootstrap para estilização dos elementos visuais. O componente Login importa os seguintes módulos e componentes do React e de outras bibliotecas: 

    1 - Button e Container do react-bootstrap para criar botões e containers estilizados.
    2 - Form do react-bootstrap para criar um formulário estilizado.
    3 - useNavigate do react-router-dom para gerenciar a navegação entre as páginas da aplicação.
    4 - style para importar estilos CSS específicos para o componente.
    5 - React e useContext do React para utilizar o contexto.
    6 - PharmacyContext do contexto da aplicação, que é importado de um arquivo chamado PharmacyContext.

O componente Login utiliza o hook useContext para acessar as informações do contexto PharmacyContext, como setUserEmail, setUserSenha, userEmail e userSenha, que são funções e variáveis do contexto utilizadas para gerenciar o estado da aplicação. Possui uma função chamada validarCampos que é responsável por validar os campos de email e senha do formulário. Se o campo de email estiver vazio ou se a senha tiver menos de 8 caracteres, um alerta será exibido e a função retornará false, caso contrário, retornará true.

O componente Login possui uma função chamada chamarPagina que é chamada quando o botão "Acessar" é clicado. Essa função chama a função validarCampos para validar os campos do formulário. Se a validação for bem-sucedida, a função navegate do react-router-dom é utilizada para navegar para a página "/farmacias", e em seguida, os campos de email e senha do contexto são resetados para vazio. É renderizado um container estilizado que contém um título "LabPharmacy System" e um formulário de login estilizado com dois campos de entrada de texto (um para o email e outro para a senha) e dois botões (um para acessar e outro para cadastrar). Os valores dos campos de email e senha são gerenciados pelos estados userEmail e userSenha do contexto PharmacyContext por meio das funções setUserEmail e setUserSenha. Quando o botão "Acessar" é clicado, a função chamarPagina é chamada para validar os campos e redirecionar para a página "/farmacias". Quando o botão "Cadastrar" é clicado, ainda não foi implementada nenhuma ação.

##### <div align="center">Página de Login</div>
<div align="center>
    <img src="https://github.com/huitson-pereira/LABPharmacy-projeto-final/blob/develop/Login.png" Width="500px"/>
</div>

#### CadFarmacias

O componente CadFarmacias é um formulário de cadastro de farmácias desenvolvido em React utilizando a biblioteca react-bootstrap para construção dos componentes visuais. 

##### Funcionamento

Utiliza o hook useState para gerenciar o estado dos campos de entrada de dados do formulário. Cada campo de entrada possui uma variável de estado correspondente, como razaoSocial, cnpj, nomeFantasia, etc. Essas variáveis de estado armazenam os valores inseridos nos campos de entrada do formulário. O componente também utiliza o hook useEffect para realizar algumas ações relacionadas a efeitos colaterais. O primeiro useEffect é executado quando o componente é montado, e é responsável por buscar os dados das farmácias armazenados no localStorage e atualizar o estado do componente com esses dados.

O segundo useEffect é executado sempre que o estado farmaciaList é atualizado, ou seja, sempre que uma nova farmácia é cadastrada. Ele é responsável por armazenar os dados das farmácias no localStorage, mantendo-os persistentes mesmo após a atualização da página. O componente possui funções de callback para lidar com eventos, como handleCepChange para lidar com a mudança do valor do campo de CEP. Essa função é chamada sempre que o valor do campo de CEP é alterado, e realiza uma chamada a uma API externa para buscar o endereço correspondente ao CEP informado.

O componente também possui uma função de callback handleFormSubmit que é chamada quando o formulário é submetido. Essa função verifica se todos os campos obrigatórios foram preenchidos, e caso positivo, cria um novo objeto com os dados informados, atualiza o estado farmaciaList com o novo objeto de farmácia cadastrada, e limpa os campos do formulário. Caso algum campo obrigatório não tenha sido preenchido, exibe um alerta com uma mensagem de erro. O componente também possui uma função limparCampos que é chamada para limpar os campos do formulário quando necessário. Os campos de entrada do formulário são renderizados utilizando os componentes Form.Control da biblioteca react-bootstrap, que facilitam a criação de campos de entrada de dados estilizados.

O componente utiliza classes CSS do arquivo CadFarmacias.module.css para estilização dos elementos do formulário, como as classes cadFar__container, cadfar__title, e cadfar__formgroup. Essas classes são aplicadas aos componentes visuais do formulário para definir sua aparência e layout.

##### <div align="center">Página de Cadastro de farmacias</div>
<div align="center">
    <img src="https://github.com/huitson-pereira/LABPharmacy-projeto-final/blob/develop/cadastoFarmacias.png" Width="500px"/>
</div>
 
#### CadMedicamentos

Este é um componente de formulário de cadastro de medicamentos em uma aplicação React usando o framework Bootstrap. O componente faz uso dos Hooks useState e useEffect do React para gerenciar o estado dos campos do formulário e para lidar com a persistência dos dados no localStorage.

O estado é gerenciado por múltiplas variáveis de estado, como medicamento, logradouro, dosagem, tipo, precoUnitario, descricao e medicamentoList, usando o Hook useState. Cada variável de estado é atualizada com um valor inicial vazio e pode ser atualizada com novos valores usando as funções de atualização, como setMedicamento, setLogradouro, etc.

O Hook useEffect é usado para carregar os dados do localStorage quando o componente é montado pela primeira vez. Ele verifica se há dados armazenados no localStorage com a chave "bd_medicamento" e, se houver, atualiza o estado medicamentoList com esses dados.

Outro useEffect é utilizado para atualizar o localStorage sempre que o estado medicamentoList é alterado. Ele armazena os dados atualizados em localStorage usando a mesma chave "bd_medicamento".

O componente renderiza um formulário com diversos campos de entrada, como medicamento, logradouro, dosagem, tipo, preço unitário e descrição. Os valores desses campos são vinculados aos respectivos estados utilizando o atributo value e são atualizados utilizando as funções de atualização de estado quando ocorrem mudanças nos campos de entrada.

O componente também possui uma função handleFormSubmit que é chamada quando o formulário é submetido. Ela realiza a validação dos campos do formulário e, se todos os campos estiverem preenchidos, cria um novo objeto novoMedicamento com os valores dos estados e o adiciona à lista de medicamentos (medicamentoList) utilizando a função de atualização de estado setMedicamentoList. Em seguida, os estados dos campos de entrada são redefinidos para vazio, limpando o formulário.

Por fim, o componente renderiza botões de "Limpar" e "Salvar", sendo que o botão "Salvar" chama a função handleFormSubmit quando clicado.

##### <div align="center">Página de Cadastro de medicamentos</div>
<div align="center">
    <img src="https://github.com/huitson-pereira/LABPharmacy-projeto-final/blob/develop/cadastroMedicamento.png" Width="500px"/>
</div>
 
#### ListaFarmacias

O componente "ListaFarmacias" é um componente de uma aplicação React que exibe uma lista de farmácias cadastradas em uma tabela. Ele faz uso de alguns conceitos e recursos do React, como o uso de estado (useState) e efeitos colaterais (useEffect).

##### Funcionamento do componente

O estado inicial é configurado usando o hook useState, com um array vazio como valor inicial para a variável "formDataList". Esse estado é utilizado para armazenar os dados das farmácias que serão exibidos na tabela.

O hook useEffect é utilizado para carregar os dados das farmácias do armazenamento local (localStorage) quando o componente é montado (primeira renderização) através da função JSON.parse(localStorage.getItem("bd_farmacias")). O resultado é armazenado na variável "listaDeFarmacias". Se a "listaDeFarmacias" contiver dados (ou seja, seu comprimento for maior que 0), então esses dados são atualizados no estado "formDataList" usando a função setFormDataList, que atualiza o estado com os dados carregados do localStorage.

O componente renderiza uma tabela usando o componente "Table" do pacote "react-bootstrap". Os dados das farmácias são mapeados do estado "formDataList" usando o método map, que itera sobre cada item do array e cria uma nova linha na tabela com os dados da farmácia. Os dados das farmácias são exibidos nas células da tabela usando as propriedades dos objetos "formData" obtidos do estado "formDataList".

O componente utiliza classes de estilos CSS importadas do arquivo "../styles/ListaFarmacias.module.css" para aplicar estilos aos elementos da tabela e container.
O componente exporta a função "ListaFarmacias" como padrão, o que permite que ele seja importado e utilizado em outros componentes da aplicação.

##### <div align="center">Página de Lista de farmacias</div>
<div align="center">
    <img src="https://github.com/huitson-pereira/LABPharmacy-projeto-final/blob/develop/listaFarmacias.png" Width="500px"/>
</div>
 
#### MedicamentosCard

O componente "MedicamentoCard" exibe uma lista de medicamentos cadastrados em forma de cartões. Cada cartão exibe informações básicas sobre um medicamento, como nome, descrição e tipo. Além disso, cada cartão possui um botão "Detalhe do medicamento" que, quando clicado, abre um modal que exibe informações mais detalhadas sobre o medicamento selecionado. Utiliza os hooks do React, useState e useEffect, para gerenciar o estado do componente. O estado é utilizado para armazenar a lista de medicamentos cadastrados (formDataList), o estado de exibição do modal (showModal) e o medicamento selecionado para exibir detalhes (selectedMedicamento).

O useEffect é utilizado para carregar a lista de medicamentos do localStorage quando o componente é montado, utilizando a função JSON.parse para transformar a string armazenada em localStorage em um array de objetos. A lista de medicamentos é então armazenada no estado formDataList utilizando a função setFormDataList.

O componente utiliza a biblioteca "react-bootstrap" para criar o layout dos cartões e do modal. O modal é exibido quando o estado showModal é true, e é fechado quando o botão "Fechar" é clicado, chamando a função setShowModal com o valor false. A função handleShowModal é chamada quando o botão "Detalhe do medicamento" de um cartão é clicado, e atualiza o estado selectedMedicamento com o objeto de medicamento correspondente ao cartão clicado, e também atualiza o estado showModal para true, para exibir o modal com os detalhes do medicamento selecionado.

No modal, os detalhes do medicamento selecionado são exibidos a partir do estado selectedMedicamento, utilizando a sintaxe de chaves {} para inserir expressões JavaScript dentro do JSX, que é a sintaxe de marcação utilizada pelo React para criar componentes de interface de usuário.

##### <div align="center">Página de Lista de medicamentos</div>
<div align="center">
    <img src="https://github.com/huitson-pereira/LABPharmacy-projeto-final/blob/develop/listaMedicamentos.png" Width="500px"/>
</div>
 
## Técnicas utilizadas

Para a construção deste projeto foi necessário instalar o Node e usar o Visual Studio Code. Foi necessário utilizar o react creat para criar o projeto com o comando “npm create vite” e “npm  install “ para instalar as dependências. O npm já vem com o Node. Foi feita a instalação do react-router-dom, react-icons, prop-types, react-bootstrap, bootstrap e instaled-components

## Inicialização

Após fazer a clonagem é necessário executar o comando “npm Install” para instalar as dependências do projeto e executar o comando “npm run dev” para rodar a aplicação no browser.

## Implementações futuras

Futuramente deverão ser feita melhorias no projeto como, implementar a validação do usuário, pesquisando em uma base de dados para ver se realmente a senha digitada é daquele usuário.

A base de dados usada foi uma simulação no localStorage, futuramente todos os dados devem ser guardados em um banco de dados em um servidor. Implementação de um mapa na página de lista de farmácias que hoje é guardada em uma tabela.

Futuramente também devem ser feita alterações na funcionalidade das páginas tanto em código quanto em estilização.

<a href="https://drive.google.com/file/d/1vcHVnsWyHV5eSuXVX22MFSihVl39u8Pb/view?usp=sharing">Video explicativo do projeto</a>
