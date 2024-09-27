import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import CardTech from '../components/CardTech';
import javaScriptImg from '../assets/javascript-250.png';
import reactImg from '../assets/react-240.png';
import vueImg from '../assets/vuejs-250.png';
import angularImg from '../assets/angularjs-250.png';
import htmlImg from '../assets/html-240.png';
import cssImg from '../assets/css-240.png';
import nodeImg from '../assets/nodejs-256.png';
import phpImg from '../assets/php-250.png';
import javaImg from '../assets/java-250.png';
import mysqlImg from '../assets/mysql-250.png';
import postgresImg from '../assets/postgres-250.png';
import { Button, Container, Stack } from '@mui/material';

export default function Technologies() {

  const [techList, setTechList] = useState(0)

  const technologies = [
    {
      id: 1,
      title: 'Javascript',
      text: 'Programming language that allows developers to add interactivity to web pages.',
      image: javaScriptImg,
      type: 1
    },
    {
      id: 2,
      title: 'React JS',
      text: 'Open-source JavaScript library that helps developers build user interfaces for web and mobile applications.',
      image: reactImg,
      type: 1
    },
    {
      id: 3,
      title: 'Vue JS',
      text: 'Open-source progressive JavaScript framework for building user interfaces and single-page applications.',
      image: vueImg,
      type: 1
    },
    {
      id: 4,
      title: 'Angular',
      text: 'Development platform for building single-page web applications. It is maintained by Google and written in TypeScript.',
      image: angularImg,
      type: 1
    },
    {
      id: 5,
      title: 'HTML',
      text: 'Hypertext Markup Language, is a coding language that is used to structure and format the content of a web page.',
      image: htmlImg,
      type: 1
    },
    {
      id: 6,
      title: 'CSS',
      text: 'Used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.',
      image: cssImg,
      type: 1
    },
    {
      id: 7,
      title: 'Node JS',
      text: 'A JavaScript runtime environment that allows developers to write JavaScript code that runs directly in a computer process, rather than in a browser.',
      image: nodeImg,
      type: 2
    },
    {
      id: 8,
      title: 'PHP',
      text: 'Open-source framework that helps developers build web applications and web services in MVC architecture.',
      image: phpImg,
      type: 2
    },
    {
      id: 8,
      title: 'Java',
      text: 'Power full programming language and computing platform that is used to create applications, operating systems, and other software.',
      image: javaImg,
      type: 2
    },
    {
      id: 9,
      title: 'MySQL',
      text: 'Open-source relational database management system (RDBMS) that stores and manages data.',
      image: mysqlImg,
      type: 2
    },
    {
      id: 9,
      title: 'PostgreSQL',
      text: 'It is used as a data store or warehouse for many applications, including web, mobile, geospatial, and analytics.',
      image: postgresImg,
      type: 2
    }
  ];

  const filteredList = () => {
    if(techList === 0){
      return technologies;
    }
    return technologies.filter(tech => tech.type === techList);
  }

  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{ display: 'flex', flexDirection: 'column', my: 0, gap: 1 }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color:'#0096FF'}}>
        Technologies
      </Typography>
      <Stack direction="row" spacing={4}>
        <Button size="small" variant={techList === 0 ? "contained" : "outlined"} onClick={()=>setTechList(0)}>
          All
        </Button>
        <Button size="small" variant={techList === 1 ? "contained" : "outlined"} onClick={()=>setTechList(1)}>
          FrontEnd
        </Button>
        <Button size="small" variant={techList === 2 ? "contained" : "outlined"} onClick={()=>setTechList(2)}>
          BackEnd
        </Button>
      </Stack>
      <Grid container spacing={2} columns={12} mt={1}>
        {filteredList().map((tech, i) => 
          <Grid id={`${i}-id`} size={{ xs: 12, md: 6 }}>
            <CardTech 
              image={tech.image} 
              title={tech.title} 
              text={tech.text} 
            />
        </Grid>
        )}
      </Grid>
    </Container>
  );
}