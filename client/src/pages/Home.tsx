import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

const Home: React.FC = () => {
    const [text] = useTypewriter({
        words: ['Game', 'Software'],
        loop: true,
        deleteSpeed: 70,
        typeSpeed: 90,
    });

    return (
        <>
            <div className="container mx-32 flex flex-col items-start justify-center min-h-screen">
                <p className='text-primary text-base font-serif'> <span> {text} </span> Developer</p>
                <h1 className="text-5xl text-primary font-sans font-semibold">
                    Hello I'm
                </h1>
                <h1 className="text-5xl text-secondary font-sans font-semibold">
                    James Anderson
                </h1>
                <p className="text-primary font-serif">
                    constantly learning, developing and refining my skills.
                </p>
            </div>
        </>
    )
}

export default Home
