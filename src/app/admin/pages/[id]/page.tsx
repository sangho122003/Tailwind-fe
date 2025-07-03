import HeaderBlockAdminEdit from '@/components/Admin/HeaderBlockAdminEdit';
import HeaderBlock from '@/components/HeaderBlock';
import ValueBlock from '@/components/ValueBlock';
import VideoBlockHead from '@/components/VideoBlockHead';
import type { Metadata } from 'next';
interface PageProps {
    params: {
        id: string;
    };
}
export const generateMetadata = ({ params }: PageProps): Metadata => {
    return {
        title: `Quản Lý ${params.id}`,
        description: `Nội dung cho trang ${params.id}`,
    };
};
export default function AdminPage({ params }: PageProps) {
    return (
        <div className="p-6 space-y-6">

            <div
                className="h-[100vh] bg-white relative rounded-xl shadow-md border overflow-hidden border-gray-200 p-10 text-gray-600 text-lg"
            >
              <HeaderBlockAdminEdit pageId={+params.id}/>
            </div>
            <div
                className="h-[40vh] bg-white relative rounded-xl shadow-md border overflow-hidden border-gray-200 p-10 text-gray-600 text-lg"
            >
                <h1>VideoBlockHead</h1>
                <p>urlvideo:</p>
                <p>title:</p>
                <p>dis:</p>
             </div>
            <div
                className="h-[40vh] bg-white relative rounded-xl shadow-md border overflow-hidden border-gray-200 p-10 text-gray-600 text-lg"
            >
                <h1>ValueBlock</h1>
                <p>image</p>
                <p>title</p>
                <p>subject</p>
            </div>
            <div
                className="h-[40vh] bg-white relative rounded-xl shadow-md border overflow-hidden border-gray-200 p-10 text-gray-600 text-lg"
            >
                <h1>BenefitsBlock</h1>
                <p>title</p>
                <h1>icon:</h1>
                
            </div>
            <div
                className="h    -[40vh] bg-white relative rounded-xl shadow-md border overflow-hidden border-gray-200 flex items-center justify-center text-gray-600 text-lg"
            >
                <h1>TestimonialBlock</h1>
            </div>
            <div
                className="h-[40vh] bg-white relative rounded-xl shadow-md border overflow-hidden border-gray-200 flex items-center justify-center text-gray-600 text-lg"
            >
                <h1>VideoBlock</h1>
            </div>


        </div>
    );
}
