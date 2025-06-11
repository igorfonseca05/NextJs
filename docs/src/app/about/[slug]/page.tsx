import test from "node:test"


interface GitReposProps {
    id: number,
    name: string,
    full_name: string,
    owner: {
        login: string,
        id: number,
        avatar_url: string
    },
    html_url: string,
    description: string,
    stargazers_count: number,
    forks_count: number,
    language: string,
    updated_at: string,
}


export async function generateStaticParams() {
    const repos: { name: string }[] = await fetch('https://api.github.com/users/igorfonseca05/repos').then(res => res.json())
    // const repos: { name: string }[] = await res.json()

    return repos.map(repo => ({
        slug: repo.name,
    }))
}



export default async function Repo({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const repo = await fetch(`https://api.github.com/repos/igorfonseca05/${slug}`)
    const data: GitReposProps = await repo.json()

    // console.log(data)


    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-20">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{data.name}</h1>

            {data.description && (
                <p className="text-gray-600 mb-4">{data.description}</p>
            )}

            <div className="flex flex-wrap gap-4 text-sm text-gray-700 mb-6">
                <span>⭐ Stars: {data.stargazers_count}</span>
                <span>🍴 Forks: {data.forks_count}</span>
                <span>🛠 Language: {data.language || "N/A"}</span>
                <span>📅 Updated: {new Date(data.updated_at).toLocaleDateString()}</span>
            </div>

            <a
                href={data.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
                View on GitHub
            </a>
        </div>
    );
};