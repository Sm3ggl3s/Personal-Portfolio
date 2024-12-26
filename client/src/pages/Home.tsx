import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import Socials from '../components/Socials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';



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
                            <p className='font-serif max-w-[625px] mb-9'>
                            I am always eager to learn, grow, and refine my skills. 
                            I thrive on exploring new concepts, tackling challenges,
                            and immersing myself in new programming languages, frameworks,
                            and tools to continually expand my expertise. 
                            </p>
                            {/* Button and Social */}
                            <div className="flex flex-col xl:flex-row items-center gap-8">
                                <button className='border-secondary border-2 px-6 py-2 rounded-full text-secondary hover:bg-secondary hover:text-background transition-all'>
                                    <span className='flex gap-2 capitalize'> 
                                        Download CV
                                        <FontAwesomeIcon icon={faDownload} className='text-xl'/>
                                    </span>
                                </button>
                                <Socials containerStyles='flex gap-6' iconStyles='w-9 h-9 border border-secondary rounded-full flex
                                justify-center items-center text-secondary text-base hover:bg-secondary hover:text-background
                                hover:transition-all duration-500'/>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
