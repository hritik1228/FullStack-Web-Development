import React, { Fragment } from 'react';
import fs from 'fs/promises';
import path from 'path';

const ProductDetailPage = (props) => {

  const {loadedProduct}=props;

  if(!loadedProduct){
    return <p>Loading...</p>
  }

  return (
    <Fragment>
        <h1>{loadedProduct.title}</h1>
        <p>{loadedProduct.description}</p>
    </Fragment>
  )
}

async function getData(){
    const filePath=path.join(process.cwd(),'data','dummy-backend.json');
    const jsonData=await fs.readFile(filePath);
    const data=JSON.parse(jsonData);

    return data
}

export async function getStaticProps(context){
    const {params}=context;
    const productId=params.pid;

    const data=await getData();

    const product=data.products.find(product=>product.id===productId);

    // if it fails to find a product
    if(!product){
        return {notFound:true}
    }

    return {
        props:{
            loadedProduct:product
        }
    }
}

// Which instance of the dynamic path needs to be pre-generated
export async function getStaticPaths(){

    const data=await getData();
    const ids=data.products.map(product=>product.id)
    const pathsWithParams=ids.map((id)=>({params:{pid:id}}))

    return {

        paths:pathsWithParams,

        // paths:[
            // { params:{ pid: 'p1' } },
            // { params:{ pid: 'p2' } },
            // { params:{ pid: 'p3' } },
        // ],
        // fallback set to true we say to next js even the page which are not listed in paths can be valid should be loaded but they are generated just in time when the request reaches the server
        // fallback:true

        fallback:true

        // fallback:'blocking'- Don't need a fallback checking the function component because next js will wait for the page to fully be pre-generated on the server. It will take little bit longer
    }

}


export default ProductDetailPage
