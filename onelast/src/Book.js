import React from 'react'

const Book = ({title,img,author,number}) => {
    const handleTitle = () => {
        console.log(title)

    }
    return (
        <div>
            <article className='book'>       
                <img 
                    src={img}
                    alt="BOSS"
                />
                <h2>{title}</h2>
                <h4>{author}</h4>
                <span className='number'>{number+1}</span>
            </article>
        </div>
    )
}

export default Book