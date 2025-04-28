'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {

        setTimeout(() => {
            router.push("/");
        }, 4000);
    }, [router]);

    return (
        <div className="flex flex-col gap-3 items-center justify-center h-full">
            <h1 className='text-2xl text-white font-bold'>Page in Develpment</h1>
            <div className="loader"></div>

            <style jsx>{`
                .loader {
                    width: 60px;
                    aspect-ratio: 2;
                    --_g: no-repeat radial-gradient(circle closest-side,#000 90%,#0000);
                    background: 
                        var(--_g) 0%   50%,
                        var(--_g) 50%  50%,
                        var(--_g) 100% 50%;
                    background-size: calc(100%/3) 50%;
                    animation: l3 1s infinite linear;
                }
                @keyframes l3 {
                    20% { background-position: 0% 0%, 50% 50%, 100% 50% }
                    40% { background-position: 0% 100%, 50% 0%, 100% 50% }
                    60% { background-position: 0% 50%, 50% 100%, 100% 0% }
                    80% { background-position: 0% 50%, 50% 50%, 100% 100% }
                }
            `}</style>
        </div>
    )
}
export default NotFound
