import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import Card from "./Card";

const CHARACTERS =  gql`
query GetCharacters($pageNum: Int, $filter: String) {
  characters(page: $pageNum, filter: {name: $filter}){results{id, name, status,image, location{name}}} 
}
`;

function CardList({pageNum, filter}: any) {
  const { loading, error, data } = useQuery(CHARACTERS,{
    variables: {pageNum, filter}
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="card-list">
    {data.characters.results.map((item: any) => (
      <Card key={item.id} id={item.id} name={item.name} image={item.image} location={item.location.name}/>
  ))}
  </div>
  );
}

export default CardList