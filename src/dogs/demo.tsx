import { gql, useQuery } from '@apollo/client'
import React from 'react'
const dogQuery = gql`
query {
    dogs {
      breed,
      id
    }
  }`
interface Dog {
    id: string,
    breed: string
}
export default function Dogs() {
    const { error, loading, data } = useQuery<{ dogs: [Dog] }>(dogQuery)

    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>

    return (
        <div>
            {data?.dogs.map(dog => <div key={dog.id}>{dog.breed}</div>)}
        </div>
    )
}
