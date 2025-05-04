

export default function FormPost() {


    return (
        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Criar Novo Post</h1>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="title">
                        Título
                    </label>
                    <input
                        id="title"
                        type="text"
                        className="w-full border rounded p-2"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="content">
                        Conteúdo
                    </label>
                    <textarea
                        id="content"
                        className="w-full border rounded p-2 h-32 resize-none"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Publicar
                </button>
            </form>
        </div>
    )
}