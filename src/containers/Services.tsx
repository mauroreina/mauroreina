import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

const services = [
  {
    id: 1,
    name: 'Maintenance and Support',
    description: 'Provide ongoing maintenance, troubleshooting, and support for software systems, websites, or apps to ensure they run smoothly.'
  },
  {
    id: 2,
    name: 'Mobile App Development',
    description: 'Create mobile applications for iOS and Android to provide customers with convenient access to services or products.'
  },
  {
    id: 3,
    name: 'Website Development',
    description: 'Build professional websites that are responsive, user-friendly, and optimized for search engines (SEO), helping businesses establish a strong online presence.'
  },
  {
    id: 4,
    name: 'E-commerce Solutions',
    description: 'Develop e-commerce platforms or integrate existing systems like Shopify or WooCommerce to enable businesses to sell products or services online.'
  },
  {
    id: 5,
    name: 'Data Analytics and Reporting Tools',
    description: 'Build custom dashboards and reporting tools to help businesses make data-driven decisions by analyzing key performance indicators (KPIs) and other metrics.'
  },
  {
    id: 6,
    name: 'Third-Party API Integration',
    description: 'Integrate external APIs such as payment gateways, social media platforms, or shipping services to enhance business capabilities.'
  }

];

export default function Services() {  
  return (
    <Container
      maxWidth="lg"
      component="main"
      sx={{ display: 'flex', flexDirection: 'column', my: 0, gap: 1 }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color:'#0096FF'}}>
        Services
      </Typography>   
      <Typography sx={{ fontWeight: 400, fontSize: '15px' }}>
        I specialize in providing flexible, high-quality software development services tailored to small businesses like yours. Whether you need help with custom software, web development, or troubleshooting, <b><u>you can hire me on an hourly basis—pay only for the time spent on your project</u></b>, with no long-term commitment. This ensures that you get expert help, fully focused on your needs, while keeping costs manageable.
      </Typography>
      <Typography sx={{ fontWeight: 400, fontSize: '15px' }} mt={2}>
        I’d be happy to discuss how I can assist you!
      </Typography>
      <ul>
        {services.map((service, i) => 
          <div id={`${i}-id`}>
            <li>
              <Typography sx={{ fontWeight: 600, fontSize: '18px' }} mt={2}>
                {service.name}
              </Typography>
            </li>
            <Typography sx={{ fontWeight: 400, fontSize: '14px' }}>
              {service.description}
            </Typography>
          </div>
        )}
      </ul>
    </Container>
  );
}