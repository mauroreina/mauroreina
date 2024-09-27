import Home from './Home';
import Services from '../containers/Services';
import Technologies from '../containers/Technologies';

interface MainContentProps {
  currentContent: ContentType;
  setCurrentContent: (param: number) => void,
}

enum ContentType {
  Home = 1,
  Services,
  Technologies,
}

export default function MainContent({ currentContent, setCurrentContent }: MainContentProps) {
  const contentMap = {
    [ContentType.Home]: <Home setCurrentContent={setCurrentContent} />,
    [ContentType.Services]: <Services />,
    [ContentType.Technologies]: <Technologies />
  };

  return contentMap[currentContent] || <div>Content not found</div>;
}