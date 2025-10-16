import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Buttons from './buttons.jsx';

const buttons = [
    { href: "#", text: "Email", icon: EmailIcon },
    { href: "#", text: "LinkedIn", icon: LinkedInIcon },
    {href: "#", text: "GitHub", icon: GitHubIcon },
]

function Hero() {

    return (
        <>
            <section id="home" className="flex flex-col items-start px-6 text-white py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
                <img src="https://avatars.githubusercontent.com/u/106234520?v=4" alt="Sergio Olivares" className=" w-15 h-15 rounded-full mb-4 border-2 border-white" />
                <h1 className="text-5xl font-bold mb-4">Sergio Olivares</h1>
                <article className="text-xl mb-8">
                    <p>
                        <span className="text-amber-300 font-bold">Frontend developer</span> de Jaén, España con 5 años de experiencia.
                    </p>
                    <p>
                        Especializado en JavaScript, HTML y CSS.
                        <span className="block mt-2">Actualmente aprendiendo React.</span>
                    </p>
                </article>


                <div className='flex gap-4' id="socials">
                    {buttons.map((button, index) => (
                        <Buttons key={index} href={button.href} icon={button.icon}>
                            {button.text}
                        </Buttons>
                    ))}

                </div>

            </section>

        </>
    );
}

export default Hero;