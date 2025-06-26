'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

export default function ScrollWithRef() {
    const videoRef = useRef<HTMLVideoElement>(null)

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
                    start: 'top bottom',
                    end: 'center center',
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
                trigger: '#hero',
                start: 'top top',
                // end: 'bottom top',
                scrub: true

            }
        })
            .to('.ball', { y: 100, duration: 1 }, 0)
            .to('.ballleft', { y: -200 }, 0)

        const startValue = 'center 60%'
        const ends = 'bottom top'

        const videoTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: ends,
                scrub: true,
                pin: true
            }
        })

        if (!videoRef.current) return

        videoRef.current.onloadedmetadata = () => {
            videoTimeline.to(videoRef.current, {
                currentTime: videoRef.current?.duration
            })
        }

    }, []);


    return (
        <>
            <div id='#hero' className='h-dvh pt-15 flex flex-col justify-center items-center bg-gray-700 relative'>
                <h1 className='text-center text-8xl font-bold mainText text-white' id='text' >Animation</h1>
                <p className='text-center m-auto subText w-100 h-fit subTitle text-white'> Secure your order in just a few clicks.
                    Enter your card details safely and easily.
                    We support all major credit cards.
                    Your data is encrypted and protected.</p>
                <div className=' absolute left-2 top-60 h-50 w-50 rounded-full bg-sky-300 ball'>

                </div>
                <div className=' absolute right-[-90] top-50 h-50 w-50 rounded-full bg-purple-500 ballleft'>

                </div>
            </div>
            <div id='video' className='w-full video absolute insert-0 md:h-[80%] h-1/2 bottom-0 left-0 mb:object-contain object-bottom object-cover'>
                <video
                    ref={videoRef}
                    src={'/input.mp4'}
                    muted
                    playsInline
                    preload='auto'
                >

                </video>
            </div>
            <section id='#second' className='h-dvh bg-red-400'>

            </section>

            {/* <div className='flex h-150 gap-4 w-[95%] m-auto'>
                <div className='sections bg-gray-800 grow'>oi</div>
                <div className='sections bg-gray-800 grow'>oi</div>
            </div> */}

            <div className=' h-screen pt-15 flex flex-col justify-center  gap-4' id='box'>
                <div className='box mb-4 w-24 h-24 bg-sky-500'></div>
                <div className='box mb-4 w-24 h-24 bg-fuchsia-500'></div>
                <div className='box mb-4 w-24 h-24 bg-green-500'></div>
            </div>

            <div className='h-screen pt-15'></div>
        </>
    );
}
