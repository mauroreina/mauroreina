import Home from './Home'
import Projects from './Projects'
import Technologies from './Technologies'
import Experience from './Experience'

interface params {
  currentContent:number
}

export default function MainContent({currentContent}: params) {
  switch(currentContent){
    case 1: return <Home />
    case 2: return <Projects />
    case 3: return <Technologies />
    case 4: return <Experience />
  }
}