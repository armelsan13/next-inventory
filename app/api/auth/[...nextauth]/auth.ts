import { getServerSession, type NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { redirect } from "next/navigation";

export const authConfigs: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'Email'
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: 'Password'
                }
            },
            async authorize(credentials) {
                const user = { id: '1', name: 'admin', password: 'admin', email: 'email@example.com' }

                if (credentials?.email === user.email && credentials?.password === user.password) {
                    return user
                }

                return null
            }
        })
    ],
}

export async function isLogged() {
    const session = await getServerSession(authConfigs);
    if(!session) return redirect('/');
}