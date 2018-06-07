Este algoritmo recebe uma entrada do usuário e a armazena numa variavel. Em seguida, se inicia a função verify(), que verifica se a entrada do usuário é valida ao garantir que ela não é composta de um espaço vazio ou apenas de espaços, devendo seus caracteres abrangerem os códigos ASCII de 65 a 90, que são as letras maiusculas, e 97 a 122, que são as letras minúsculas, ou  o código 32, referente à barra de espaço (desde que não o primeiro caractere). Caso os requisitos não sejam cumpridos, o usuário receberá uma mensagem de alerta de mensagem inválida e será solicitado que ele digite novamente uma frase válida.
No caso dos requisitos serem cumpridos, a função cipher() será acionada para criptografar a mensagem válida, percorrendo cada uma das letras na mensagem do usuario e utilizando a fórmula  abaixo

(código ascii da letra atual - 65 ou 97 (códigos das primeiras posições das letras maiúsculas e minúsculas em ASCII, respectivamente) + 7) % 26 + 65 ou 97)

Caso o código da letra percorrida seja 32, espaço, a fórmula não é utilizada e o espaço é inserido sem tratamento na variável que contém mensagem criptografada, que é mostrada ao usuário com um alerta ao final da função

Após o final da função cipher(), a função decipher() é acionada e atribui a uma nova variável o caractere referente ao código ASCII - 7 de cada caractere da mensagem criptografada, assim descriptografando a mensagem e a exibindo ao usuário com um alert.
