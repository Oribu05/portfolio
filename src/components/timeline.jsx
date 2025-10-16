function Timeline({ data }) {
    return (
        <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-0 top-0 h-full w-[2px] bg-white/20 z-0"></div>

            <div className="flex flex-col space-y-12 relative z-10">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-[250px_1fr] gap-x-4 items-start relative"
                    >
                        <div className="relative pl-10 z-20">
                            <div className="absolute left-[-5px] top-2 w-3 h-3 bg-amber-400 rounded-full border-2 border-amber-500 z-10"></div>

                            <h3 className="text-lg font-bold text-white">{item.title}</h3>
                            <p className="text-white/70 text-base">
                                {item.company} <br></br><span className="italic">{item.date}</span>
                            </p>
                        </div>

                        <div className="text-white/90 whitespace-pre-line text-[16px] z-20">
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Timeline;
