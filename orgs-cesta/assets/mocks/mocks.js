import logo from '../logo.png';
import Abóbora from '../frutas/Abóbora.png'
import Batata from '../frutas/Batata.png'
import Brócolis from '../frutas/Brócolis.png'
import Pepino from '../frutas/Pepino.png'
import Tomate from '../frutas/Tomate.png'



export const cesta = {
  topo: {
    titulo: "Detalhe da cesta",
  },
  detalhes: {
    nome: "Cesta de Verduras",
    logoFazenda: logo,
    nomeFazenda: "Jenny Jack Farm",
    descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    preco: "R$ 40,00",
    botao:"comprar"
  },
  itens:{
    titulo:"Itens da cesta",
    lista:[{
      nome:"Abóbora",
      item:Abóbora,
    },
    {
      nome:"Batata",
      item:Batata,
    },
    {
      nome:"Brócolis",
      item:Brócolis,
    },
    {
      nome:"Pepino",
      item:Pepino,
    },
    {
      nome:"Tomate",
      item:Tomate,
    }]
  }
}