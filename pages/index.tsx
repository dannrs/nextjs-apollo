import Countries from "@/components/Countries"
import { useCountriesCodeAndNameDataQuery } from "@/graphql/gen/graphql"
import createApolloClient from "@/utils/apollo-client"
import { ApolloProvider } from "@apollo/client/react"
import { useState } from "react"



const Home = () => {
      const client = createApolloClient();
  return (
    <ApolloProvider client={client}>
      <Countries />
    </ApolloProvider>
  )
}

export default Home