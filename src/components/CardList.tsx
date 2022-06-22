import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";



function CardList({ loading, error, data, lastItemRef}: any) {

  
  if (error) return <p>Error :(</p>;

  const LastItem = React.forwardRef((props: any, ref: any) => (
    <div ref={ref}>
      {props.children}
    </div>
  ));

  return (
    <div className="card-list">
      {console.log(data)}
    {data.length && data.map((dataArr: any, dataArrIndex: number) => {
      return dataArr.map((item: any, index: number) => {
        if (data[dataArrIndex].length === index + 1 && data.length === dataArrIndex +1 ){
          return <LastItem ref={lastItemRef} key={item.id}><Card id={item.id} name={item.name} image={item.image} location={item.location.name}/></LastItem>
        }else{
          return <Card key={item.id} id={item.id} name={item.name} image={item.image} location={item.location.name}/>
        }
      })
    })}
    {loading && <p>Loading...</p>}
  </div>
  );
}

export default CardList