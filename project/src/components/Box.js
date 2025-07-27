export default function Box({number, text}) {
    return (
        <div className="relative">
            <div className="relative text-Red text-4xl lg:text-8xl font-bold bg-DarkBlue flex justify-center items-center p-2 lg:p-4 rounded-md overflow-hidden">
                <div className="absolute top-0 left-0 bg-black/20 w-full h-1/2 border-b border-black/20" />
                <span className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 rounded-full bg-BlackBlue p-1 lg:p-1.5"/> 
                <span className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-BlackBlue p-1 lg:p-1.5"/>
                {number}
            </div>
            <span className="absolute bottom-0 left-0 w-full h-1/3 rounded-md -translate-y-1/2 -z-[5] bg-BlackBlue"/> 
            <span className="inline-block w-full tracking-[0.2em] lg:tracking-[0.3em] text-xs lg:text-Static pt-5">{text}</span>
        </div>
    )
}