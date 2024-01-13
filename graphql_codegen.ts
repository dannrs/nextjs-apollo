import { CodegenConfig } from '@graphql-codegen/cli'
import { loadEnvConfig } from '@next/env'
loadEnvConfig(process.cwd())

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_SCHEMA,
  documents: ['graphql/**/*.graphql'],
  generates: {
    'graphql/gen/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    }
  }
}

export default config
