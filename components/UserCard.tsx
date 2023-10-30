import Image from "next/image"

type User = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
} | undefined

type Props = {
    user: User
}

export default function UserCard({ user }: Props) {

    const greeting = user?.name ? (
        <div className="flex flex-col items-center p-6 text-lg">
            Hello {user?.name}!
        </div>
    ) : null

    const userImage = user?.image ? (
        <Image
            className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-2"
            src={user?.image}
            width={200}
            height={200}
            alt={user?.name ?? "Profile Pic"}
            priority={true}
        />
    ) : null

    return (
        <section className="flex flex-col gap-4">
            {userImage}
            {greeting}
        </section>
    )
}