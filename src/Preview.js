import React from 'react'
import { ReactTinyLink } from "react-tiny-link";
export default function Preview() {
    return (
        <div>
           <ReactTinyLink
        cardSize="large"
        showGraphic={true}
        maxLine={2}
        minLine={1}
        proxyUrl=""
        url="https://www.amazon.com/Steve-Madden-Mens-Jagwar-10-5/dp/B016X44MKA/ref=lp_18637582011_1_1?srs=18637582011&ie=UTF8&qid=1550721409&sr=8-1"
      />
        </div>
    )
}
