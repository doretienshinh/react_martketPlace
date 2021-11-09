import React from 'react'

import { LiterallyCanvasReactComponent } from "literallycanvas";
const Littecanvas = () => {
    const canvasInit = lc => {
        console.log(lc);
    };
    // function saveImage() {
    //     window.open(canvasInit.getImage().toDataURL());
    // }
    return (
        <div>Products page
            <LiterallyCanvasReactComponent
                onInit={canvasInit}
                imageURLPrefix="https://cdn.jsdelivr.net/npm/literallycanvas@0.5.2/lib/img"
            />
            {/* <button onClick={saveImage}>Save image</button> */}
        </div>
    )
}

export default Littecanvas