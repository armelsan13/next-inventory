import defaultImage from '@/public/image.svg'
import Image from 'next/image'

type EquipmentItemProps = {
    id: string,
    title: string,
    description: string | null,
    tags: {
        id: string,
        title: string
    }
}

export function EquipmentItem({ id, title, description, tags }: EquipmentItemProps) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className='py-5'><Image src={defaultImage} alt={title} width={100} height={120} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    {tags.map(tag => (
                        <div key={tag.id} className="badge badge-outline">{tag.title}</div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}