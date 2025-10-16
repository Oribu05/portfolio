import WorkIcon from '@mui/icons-material/Work';
import Timeline from './timeline.jsx';
import experiences from '../data/experiences.js';

function experience() {
    return (
        <section id="experience" className="flex flex-col items-start px-6 text-white md:py-12 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
            <h1 className="flex items-center text-3xl font-bold mb-4">
                <WorkIcon style={{ fontSize: '35px' }} className="mr-2" />
                Experiencia
            </h1>
            <article className="text-xl mb-8">
                <Timeline data={experiences} />
            </article>

        </section>
    )
}

export default experience;