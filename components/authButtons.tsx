'use client'
import Image from "next/image";
import { signIn, signOut } from "next-auth/react"
import googleSvg from "@/public/google.svg";
import githubSvg from "@/public/github.svg"

export function GoogleSignInButton() {
    const handleClick = () => {
        signIn('google')
    }

    return (
        <button
            onClick={handleClick}
            className="btn btn-outline mb-1 w-full flex items-center font-semibold justify-center h-14 px-6 transition-colors duration-300"
        >
            <Image src={googleSvg} alt="Google login" width={25} height={25} />
            <span>Continue with Google</span>
        </button>
    )
}

export function GithubSignInButton() {
    const handleClick = () => {
        signIn('github')
    }

    return (
        <button
            onClick={handleClick}
            className="btn btn-outline w-full flex items-center justify-center h-14 px-6 transition-colors duration-300"
        >
            <Image src={githubSvg} alt="Github login" width={35} height={35} />
            <span>Continue with Github</span>
        </button>
    )
}

export function LogoutButton() {
    const handleClick = () => {
        signOut()
    }

    return (
        <a href="#" onClick={handleClick}>Logout</a>
    )
}