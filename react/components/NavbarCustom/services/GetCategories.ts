import { useQuery } from 'react-apollo'

import Categories from './Categories.graphql'

const GetCategories = () => {
  const { data, loading, error } = useQuery(Categories)

  if (loading) {
    return 'Loading…'
  }

  if (error) {
    return `Error ${error}`
  }

  return data
}

export default GetCategories
