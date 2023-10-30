import defaultImage from '@/public/image.svg'
import Image from 'next/image'
import Link from 'next/link'


type EquipmentItem = {
    id: string,
    title: string,
    description: string | null,
    tags: any
}

export function EquipmentItem({ id, title, description, tags }: EquipmentItem) {
    return (
        <div className="card w-auto bg-base-100 shadow-xl">
            <figure className='py-5'><Image src={defaultImage} alt={title} width={100} height={120} /></figure>
            <hr />
            <div className="card-body">
                <div className="w-full flex flex-row">
                    <div className="flex-1">
                        <h2 className="card-title">
                            {title}
                        </h2>
                    </div>
                    <div className="flex-none"><Link href='#' className='btn btn-outline btn-xs'>Edit</Link></div>
                </div>            
                <p>{description}</p>
                <div className="card-actions justify-end">
                    {tags.map((tag : any) => (
                        <div key={tag.id} className="badge badge-accent px-3">{tag.title}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}