type TagItemProps = {
    id: string,
    title: string
}

export function TagItem({id, title} : TagItemProps) {
    return (
        <li className="">{title}</li>
    )
}