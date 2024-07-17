import Header from '@/components/Header'
import NewsList from '@/components/NewsList'

import Image from 'next/image'
import React from 'react'


export default function News() {

    const NEWS = [
        {
            id: 1,
            title: "Cambodia Technology 2024",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, tenetur! Nihil, inventore impedit odit dolores dolor optio dolorem odio aut vel doloremque aperiam sapiente eveniet ex laudantium eos, hic quo!",
            published: "January 12, 2024 | 16:06",
            thumbnail: "/thumbnail.png"
        },
        {
            id: 2,
            title: "Kampuchea Hum Interprise Co., LTD",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, tenetur! Nihil, inventore impedit odit dolores dolor optio dolorem odio aut vel doloremque aperiam sapiente eveniet ex laudantium eos, hic quo!",
            published: "January 02, 2024 | 15: 58",
            thumbnail: "/thumbnail.png"
        }
    ]

    return (
        <div className='container mx-auto px-10 mt-16'>
            <Header
                description='What&apos;s new today?'
            />
            <div className='flex flex-col gap-y-10 my-16' >

                {NEWS.map((item, index) => (
                    <NewsList key={index}
                        title={item.title}
                        description={item.description}
                        thumbnail={item.thumbnail}
                        published={item.published}
                    />
                ))}

            </div>
        </div>
    )
}
