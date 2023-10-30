'use client'

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface AuthFormProps {
    csrfToken?: string
}

export function AuthForm(props: AuthFormProps) {
    const router = useRouter()
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e : any) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)

        const authFormResponse = await signIn('credentials', {
            email: data.get('email'),
            password: data.get('password'),
            redirect: false
        })

        if (authFormResponse && !authFormResponse.error) {
            router.push('/dashboard')
        } else {
            console.log("Error: ", authFormResponse);
            setError("Your Email or Password is wrong!");
        }
    }

    return (
        <form
            className="w-full mt-8 text-xl text-black font-semibold flex flex-col"
            onSubmit={handleSubmit}
        >
            {error && (
                <span className="p-4 mb-2 text-xs text-white bg-red-500 rounded-md">
                    {error}
                </span>
            )}
            <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full text-xs px-4 py-4 mb-3 border border-gray-300 rounded-[1rem]"
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full text-xs px-4 py-4 mb-3 border border-gray-300 rounded-[1rem]"
            />

            <button
                type="submit"
                className="w-full text-sm h-12 px-6 mt-4 text-white transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
            >
                Log in
            </button>
        </form>
    )
}