import { useCountriesCodeAndNameDataQuery } from "@/graphql/gen/graphql"

type CountriesProps = {}

type CountriesType = {
    code: string
    name: string
}

const Countries = ({ }: CountriesProps) => {
    const countries = useCountriesCodeAndNameDataQuery()

    console.log(countries.data?.countries)

    return (
        <div>Countries</div>
    )
}

export default Countries