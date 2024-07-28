"use client"

import React from 'react'
import { Button } from '../ui/button'
import { Download } from 'lucide-react'

const ResumeDownload = () => {

    const downloadResume = () => {
        const resumePath = '/assets/cudy/cudy-resume-2.jpg'
        window.open(resumePath)
    }

    return (
        <Button onClick={downloadResume} variant="outline" size="lg" className="uppercase flex items-center gap-2 rounded-full">
            <span>Download CV</span>
            <Download className="text-xl" />
        </Button>
    )
}

export default ResumeDownload