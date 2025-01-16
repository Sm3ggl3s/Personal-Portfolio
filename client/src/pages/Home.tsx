import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import Socials from '../components/Socials';

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
                    <div className="flex flex-col xl:flex-row justify-between items-center pt-12 pb-12 xl:pt-24 xl:pb-72">
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
                            <Socials 
                                containerStyles='flex gap-6' 
                                iconStyles={{ width: '4rem', height: '4rem', border: '1px solid', borderRadius: '50%' }}
                            />
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
