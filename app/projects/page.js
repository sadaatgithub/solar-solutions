import React from 'react'

import PageWrapper from '../components/PageWrapper'
import PagePathBanner from '../components/PagePathBanner'
import Projects from './component/Projects'


export const metadata = {
  title: {
    default: 'Solar Solutions',
    template: 'Solar Solutions',
    absolute: 'Projects | Solar Solutions',
  },
  description: 'By Choudhary Engineering',
};
const Gallery = () => {
    
  return (
    <PageWrapper>
        <PagePathBanner/>
        <Projects/>
    </PageWrapper>
  )
}

export default Gallery