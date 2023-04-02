import React from 'react';
import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';

const HomePage = (props) => {

  const {products}=props;
  // console.log(products)

  return (
    <ul>
      {
        products.map((product)=>{
          return <li key={product.id}> <Link href={`/products/${product.id}`}>{product.title}</Link></li>
        })
      }
    </ul>
  )
}


export async function getStaticProps(context){
  console.log('Re-generating');

  const filePath=path.join(process.cwd(),'data','dummy-backend.json');
  const jsonData=await fs.readFile(filePath);
  const data=JSON.parse(jsonData);

  if(data.products.length===0){
    return {
      // This returns 404 error- When it fails to fetch data
      notFound:true
    };
  }

  // if no data found redirect the page to /no-data
  if(!data){
    return {
      redirect:{
        destination:'/no-data'
      }
    }
  }

  return {
    props:{
      products:data.products
    },
    // This will re-generate the page in production mode not in development mode-Incremental Static Generation
    // Higher the revalidate value lesser the page will regenerate
    revalidate:10,
  };
}

export default HomePage
