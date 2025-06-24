    type video ={
        url:string
    }
    export default function VideoBlock({data}:{data:video}) {
    return (
        <div className="w-full h-screen flex items-center justify-center px-10">
        <div className="flex-1 flex items-center justify-center">
            <video className="w-full max-w-[700px] rounded-lg shadow-lg" controls>
            <source src="your-video-url.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
        <div className="flex flex-col items-start justify-center ml-12">
            <h1 className="text-6xl font-bold text-teal-800">SCHEDULE</h1>
            <h2 className="text-9xl font-semibold text-orange-600 font-fave italic mt-2">a Call</h2>
        </div>
        </div>
    );
    }       
