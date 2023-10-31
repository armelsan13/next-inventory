import Link from "next/link"

type TagItemProps = {
    id: string,
    title: string
}

export function TagItem({id, title} : TagItemProps) {
    return (
        <div className="border-solid border-2 border-indigo-900 p-3 rounded-md mb-3">
            <div className="w-full flex flex-row">
                <div className="flex-1">{title}</div>
                <div className="flex-none">
                    <span className="bg-accent px-5 py-3 rounded-lg">EDIT</span>
                </div>
            </div>
        </div>
    )
}