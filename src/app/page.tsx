
import { AboutSection } from '@/page/Home/aboutSection'
import { ContactSection } from '@/page/Home/contactSection'
import { HeroSection } from '@/page/Home/heroSection'
import { ProjectSection } from '@/page/Home/projectSection'
import { SkillSection } from '@/page/Home/skillSection'
import React from 'react'
const page = () => {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <SkillSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}

export default page