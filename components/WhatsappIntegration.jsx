import React from 'react'
import wpLogo from "../assets/whatsapp.png"
import Image from 'next/image'
import Link from 'next/link'
const WhatsappIntegration = () => {
    return (
        <Link href="https://wa.me/+919130745878" target='_blank'>

            <Image src={wpLogo} className="fixed bottom-14 cursor-pointer right-6 z-50 flex justify-between w-14 p-1" />

        </Link>
    )
}

export default WhatsappIntegration