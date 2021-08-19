import React from 'react'
import {Button} from '@material-ui/core'
export default function Talwindcss() {
    let info={city:'tes'}
    info.city=undefined;
    console.log(`info`, info)
    return (
        <div>
            <div className='flex justify-center items-center h-screen w-4/12 bg-red-500'>
                <h1>test</h1>
                {/* <Button color="primary" variant="contained">test</Button> */}
            </div>
        </div>
    )
}
