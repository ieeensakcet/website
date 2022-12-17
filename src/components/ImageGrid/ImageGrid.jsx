import React,{useState, useEffect} from 'react'

function ImageGridItem({ image }) {
    return (
        <div class="cbp-item photography web-design col-md-4 col-sm-6 with-spacing">
            <figure class="imghvr-blur text-center portfolio-type-2">
                <img src={image} alt="96" />
                
            </figure>
        </div>
    )
}


export default ImageGridItem