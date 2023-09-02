import { Billboard as BillboardType } from '@/types';


interface BillboardProps {
    data: BillboardType
}

const Billboard: React.FC<BillboardProps> = ({
    data,
}) => {
    return (
        <div className="p-4 sm:p-6 rounded-x1 overflow-hidden">
            <div className="rounded-x1 relative aspect-square md:aspect-[2.4/1] overflow-hidden"
            style={{ backgroundImage: `url(${data?.imageUrl})` }}>
                <div className="h-full w-full flex flex-col justify-center items-center gap-y-8">
                    <div className="font-bold text-3x1 sm: text-5x1 lg:text-6x1 sm:max-w-xl max-w-xs">
                        {data.label}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Billboard;