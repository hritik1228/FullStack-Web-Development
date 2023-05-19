import React from 'react'
import styles from '../../styles/common.module.css'
import Image from 'next/image';

const Page =async ({params}) => {

    const id=params.id;
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    const options = {
    method: 'GET',
    headers: {
            'X-RapidAPI-Key': '99cd5336b0mshc916bf58ac02534p150ad9jsnf51a1925d639',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res=await fetch(url,options);
    const data=await res.json()
    const main_data=data[0]?.details;
    console.log(main_data)

    return (
        <>
            <section className={styles.container}>
                <div className={styles.movie_title}>
                    <h2>Netflix / <span>{main_data?.type}</span></h2>

                    <div>
                        <Image src={main_data?.backgroundImage?.url} alt={main_data?.title} width={600} height={300}/>
                    </div>
                    <div>
                        <h1>{main_data?.title}</h1>
                        <p>{main_data?.synopsis}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Page
