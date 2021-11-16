/**
 * Get Image Sizes and return an array of Size.
 *
 * @param {object} sizes - The sizes object.
 * @return {object} sizeArr - The sizeArr object.
 */

function ImageSize( sizes ) {
    const sizeArr = [];
    for(var size in sizes){
        if(sizes.hasOwnProperty(size)){
         const p = { value: size, label: size };
         sizeArr.push( p );
        }
    }
    return sizeArr;
}

export default ImageSize;