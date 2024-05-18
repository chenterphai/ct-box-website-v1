import React from 'react'
import { Card, CardHeader, Image, Button } from '@nextui-org/react'
import CardServiceComponent from './CardService'
export default function ServiceComponent() {
    return (
        <div className='p-5'>
            <div className='p-20 bg-primary rounded-3xl'>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col space-y-3'>
                        <p className='text-3xl'>Our Service</p>
                        <p className='text-default-600 font-light pr-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint pariatur eveniet laboriosam unde voluptatum facere commodi est aspernatur delectus consectetur?</p>
                        <div>
                            <Button color="default" variant="flat">
                                Learn more
                            </Button>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        <CardServiceComponent
                            title='Mobile Development'
                            subtitle='Build both iOS and Android'
                            src='https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        />
                        <CardServiceComponent
                            title='Web Development'
                            subtitle='Create an amazing Website'
                            src='https://images.pexels.com/photos/2473183/pexels-photo-2473183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
