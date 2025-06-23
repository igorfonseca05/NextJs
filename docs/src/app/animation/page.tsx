'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

export default function ScrollWithRef() {

    // const itensSection = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const boxes = [...document.querySelectorAll('.box')]
        const section = [...document.querySelectorAll('.sections')]

        const mainText = new SplitText('.mainText', { type: 'chars, words' })
        const subText = new SplitText('.subText', { type: 'lines' })

        // mainText.chars.forEach((char) => char.classList.add('gradient'))

        gsap.from(mainText.chars, {
            y: 100,
            duration: 1.6,
            ease: 'expo.out',
            stagger: 0.05
        })

        gsap.from(subText.lines, {
            y: 100,
            opacity: 0,
            duration: 1.6,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1
        })



        boxes?.forEach((box, i) => {
            gsap.to(box, {
                x: '250px',
                duration: 1,
                rotate: 90,
                scrollTrigger: {
                    trigger: box,
                    start: 'bottom bottom',
                    end: 'bottom top',
                    scrub: true
                }
            })
        })

        section?.map(item => {
            gsap.from(item, {
                y: 250,
                duration: 1.2,
                opacity: 0,
                scrollTrigger: {
                    trigger: item,
                    start: 'top bottom',
                    // toggleActions: 'play none none reverse'
                },
                ease: 'expo.out'
            })
        })


        gsap.timeline({
            scrollTrigger: {
                trigger: '.ball',
                start: 'center center',
                // end: 'bottom top',
                scrub: true

            }
        })
            .to('.ball', { y: 500, duration: 1 }, 0)
            .to('.ballleft', { y: -200, duration: 0.4 }, 0)


    }, []);

    return (
        <>
            <div className='h-dvh pt-15 flex flex-col justify-center items-center bg-gray-700 relative'>
                <h1 className='text-center text-8xl font-bold mainText text-white' id='text' >Animation</h1>
                <p className='text-center m-auto subText w-100 h-fit subTitle text-white'> Secure your order in just a few clicks.
                    Enter your card details safely and easily.
                    We support all major credit cards.
                    Your data is encrypted and protected.</p>
                <div className=' absolute left-2 bottom-0 h-50 w-50 rounded-full bg-sky-300 ball'>

                </div>
                <div className=' absolute right-[-90] bottom-0 h-50 w-50 rounded-full bg-purple-500 ballleft'>

                </div>
            </div>

            <div className='flex h-150 gap-4 w-[95%] m-auto'>
                <div className='sections bg-gray-800 grow'>oi</div>
                <div className='sections bg-gray-800 grow'>oi</div>
            </div>

            <div className='h-screen pt-15 flex flex-col  gap-4' id='box'>
                <div className='box mb-4 w-24 h-24 bg-sky-500'></div>
                <div className='box mb-4 w-24 h-24 bg-fuchsia-500'></div>
                <div className='box mb-4 w-24 h-24 bg-green-500'></div>
            </div>

            <div className='h-screen pt-15'></div>
        </>
    );
}
