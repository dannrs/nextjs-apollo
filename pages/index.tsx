import { useCountriesCodeAndNameDataQuery } from "@/graphql/gen/graphql"
import createApolloClient from "@/utils/apollo-client"
import { ApolloProvider } from "@apollo/client/react"
import { useState } from "react"

type CountriesType = {
    code: string
    name: string
}

const Home = () => {
  const client = createApolloClient()
  const { data } = useCountriesCodeAndNameDataQuery()

  const [countries, setCountries] = useState<CountriesType[]>(() => {
    if (data?.countries) {
      return data?.countries.map((item) => {
        return {
          code: item.code,
          name: item.name
        } as CountriesType
      })
    } else {
      return []
    }
  })

  console.log(countries)

  return (
    <ApolloProvider client={client}>
      <div>Next.js + Apollo</div>
    </ApolloProvider>
  )
}

export default Home