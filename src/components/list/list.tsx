import { useContext, useState } from "react"
import { GlobalContext } from "../../utils/GlobalContext"

const CAPITALS = [{ state: "Acre", short: "AC", capital: "Rio Branco" },
{ state: "Alagoas", short: "AL", capital: "Maceió" },
{ state: "Amapá", short: "AP", capital: "Macapá" },
{ state: "Amazonas", short: "AM", capital: "Manaus" },
{ state: "Bahia", short: "BA", capital: "Salvador" },
{ state: "Ceará", short: "CE", capital: "Fortaleza" },
{ state: "Espírito Santo", short: "ES", capital: "Vitória" },
{ state: "Goiás", short: "GO", capital: "Goiânia" },
{ state: "Maranhão", short: "MA", capital: "São Luís" },
{ state: "Mato Grosso", short: "MT", capital: "Cuiabá" },
{ state: "Mato Grosso do Sul", short: "MS", capital: "Campo Grande" },
{ state: "Minas Gerais", short: "MG", capital: "Belo Horizonte" },
{ state: "Pará", short: "PA", capital: "Belém" },
{ state: "Paraíba", short: "PB", capital: "João Pessoa" },
{ state: "Paraná", short: "PR", capital: "Curitiba" },
{ state: "Pernambuco", short: "PE", capital: "Recife" },
{ state: "Piauí", short: "PI", capital: "Teresina" },
{ state: "Rio de Janeiro", short: "RJ", capital: "Rio de Janeiro" },
{ state: "Rio Grande do Norte", short: "RN", capital: "Natal" },
{ state: "Rio Grande do Sul", short: "RS", capital: "Porto Alegre" },
{ state: "Rondônia", short: "RO", capital: "Porto Velho" },
{ state: "Roraima", short: "RR", capital: "Boa Vista" },
{ state: "Santa Catarina", short: "SC", capital: "Florianópolis" },
{ state: "São Paulo", short: "SP", capital: "São Paulo" },
{ state: "Sergipe", short: "SE", capital: "Aracaju" },
{ state: "Tocantins", short: "TO", capital: "Palmas" }]

export const List = () => {
  const {search} = useContext(GlobalContext)
  const [list] = useState(CAPITALS)

  return <>
    <ul className="list">
      {list && list.map((item, index) => {
        const text = `${item.capital} is the capital of ${item.state}`
        const result = text.replace(new RegExp(`(${search})`,"ig"),"<span>$1</span>")
        return new RegExp(search, "i").test(text) ? <li key={'item' + index} dangerouslySetInnerHTML={{__html: result}}></li> : null
      })}
    </ul>
  </>
}
