import React from 'react'
import EmailSection from '../components/EmailSection'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {
    return (
        <main className="flex min-h-screen flex-col bg-center bg-cover   " >
            <Navbar />
            <div className="container  mx-auto px-12 py-4">
                <EmailSection />
            </div>
            <Footer />
        </main>
    )
}

export default page