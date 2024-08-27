const nota_1 = 10;
const nota_2 = 5;
const nota_3 = 4;

const soma_notas = nota_1 + nota_2 + nota_3;
const media = soma_notas / 3;

if (media >= 6) {
  console.log('O aluno foi aprovado');
} else if (media >= 4 && media < 6) {
  console.log('Está de prova final');
} else {
  console.log('O aluno foi reprovado');
}
calcula_nota_alunos(10,5,3)
