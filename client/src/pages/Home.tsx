import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const externalLinks = [
    {
        icon: faGithub,
        link: ''
    },
    {
        icon: faLinkedin,
        link: ''
    },
]


const Home: React.FC = () => {
    const [text] = useTypewriter({
        words: ['Game', 'Software'],
        loop: true,
        deleteSpeed: 70,
        typeSpeed: 90,
    });

    return (
        <>
            <div className="h-full">
                <div className="max-w-7xl container mx-auto h-full ">
                    <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-24 xl:pb-72">
                        {/* Text  */}
                        <div className='text-center xl:text-left'>
                            <span className='text-base font-serif'> {text} Developer</span>
                            <h1 className='h1 font-sans'>
                                Hello I'm <br /> <span className='text-secondary'>James Anderson</span>
                            </h1>
                            <p className='font-serif max-w-[500px] mb-9'>
                            I am always eager to learn, grow, and refine my skills. 
                            I thrive on exploring new concepts, tackling challenges,
                            and immersing myself in new programming languages, frameworks,
                            and tools to continually expand my expertise. 
                            </p>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
