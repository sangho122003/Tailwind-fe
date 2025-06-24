type videodata = {
    urlvideo: string,
    Title: string,
    Dis: string
}

export default function VideoBlockHead({ data }: { data: videodata }) {
    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 ">
            <div className="flex-1 flex items-center justify-center p-[10vh]">
                <video
                    className="w-full max-w-80% rounded-lg shadow-lg"
                    controls
                    src={data.urlvideo}
                >
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center">
                <h1 className="text-6xl font-bold text-keyBlue mb-4">{data.Title}</h1>
                <h1 className="text-2xl mb-4">{data.Dis}</h1>
            </div>
        </div>
    );
}
