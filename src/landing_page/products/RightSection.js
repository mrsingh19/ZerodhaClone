import React from 'react'
function RightSection({product, productDescription,link,linkName,image}) {
    return ( 
       <div className='container mt-5'>
        <div className='row '>
            <div className='col-5 p-5 mt-5'>
                <h1 className='mt-5'>{product}</h1>
       <p className='fs-4 text-muted '>{productDescription}</p>
       <a className='fs-5 text-decoration-none' href={link}>{linkName} <i class="fs-6 fa-solid fa-arrow-right-long"></i></a>
            </div>
            <div className='col-7 p-1 '>
                <img style={{width:"95%"}}
                className='ms-5'
                src={image} alt="imagdde"
                />
            </div>
        </div>
       </div>
     );
}

export default RightSection;

