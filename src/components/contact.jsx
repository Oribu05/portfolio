import MailIcon from '@mui/icons-material/Mail';
import Buttons from './buttons.jsx';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function contact (){
    return(
         <section id="contact" className="flex flex-col items-start px-6 text-white md:py-12 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
            <h1 className="flex items-center text-3xl font-bold mb-4">
                <MailIcon style={{ fontSize: '35px' }} className="mr-2" />
                Contacto
            </h1>
            <article className="text-base mb-8">
                <p>  Si deseas ponerte en contacto conmigo, puedes hacerlo a través de los siguientes canales:</p>
                <div className='flex gap-4 mt-4 justify-center'>
                   <Buttons icon={GitHubIcon}>GitHub</Buttons>
                   <Buttons icon={EmailIcon}>Email</Buttons>
                   <Buttons icon={LinkedInIcon}>LinkedIn</Buttons>
                </div>
            </article>
        </section>
    )
}

export default contact;