'use client'

import React, { useState } from "react";
import { useActionState } from "react";
import { createUser } from "../lib/formActions";

export default function Cadastrar() {
    const [form, setForm, pending] = useActionState(createUser, undefined);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                action={setForm}
                className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6"
            >
                <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>

                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
                    <input
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-400"
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                    <input
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-400"
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                    <input
                        name="password"
                        type="password"
                        required
                        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring focus:border-blue-400"
                    />
                </div>

                {!pending && <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded-xl hover:bg-blue-700 transition"
                >
                    Create Account
                </button>
                }
                {pending && <button
                    type="submit"
                    disabled
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-xl transition"
                >
                    Aguarde
                </button>
                }
                {form?.error?.name && <p>{form.error?.name}</p>}
                {form?.error?.email && <p>{form.error?.email}</p>}
                {form?.error?.password && <p>{form.error?.password}</p>}
                {form?.message && <p>{form.message}</p>}
            </form>
        </div>
    );
}
