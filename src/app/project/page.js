
import React from 'react'
import Navbar from '../components/Navbar'
import ProjectsSection from '../components/ProjectsSection'
import Footer from '../components/Footer'


const page = () => {

    return (
        <main className="flex min-h-screen flex-col bg-center bg-cover   "  style={{backgroundImage:"url(images/top.jpg)" ,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            <Navbar />
            <div className="container mt-24 mx-auto px-12 py-4">
                <ProjectsSection />
            </div>
            <Footer/>
        </main>
    )
}

export default page