function about() {
    return (
        <section id="about" className="flex flex-col items-start px-6 text-white md:py-12 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
            <h1 className="text-3xl font-bold mb-4">Sobre mí</h1>
            <article className="text-base flex flex-row items-start">
                <div className="flex-1">
                    <p>
                        Soy Sergio Olivares, un desarrollador frontend de Jaén, España, con 5 años de experiencia en la creación de interfaces de usuario atractivas y funcionales. 
                        <span className="block mt-2">Me especializo en JavaScript, HTML y CSS, y actualmente estoy aprendiendo React para ampliar mis habilidades y ofrecer soluciones más dinámicas y eficientes</span>
                    </p>
                    
                </div>
                <div className="flex-shrink-0">
                    <img
                        src="https://avatars.githubusercontent.com/u/106234520?v=4"
                        alt="Foto de perfil"
                        className="w-48 h-48 object-cover rounded-full shadow-lg"
                    />
                </div>
            </article>


        </section>
    )
}

export default about;