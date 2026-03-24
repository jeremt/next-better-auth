"use client";

import {signup} from "../auth";

export default function Login() {
    return (
        <form className="flex gap-4" action={signup}>
            <input type="text" name="name" className="bg-amber-50 rounded p-2 text-purple-800" />
            <input type="text" name="email" className="bg-amber-50 rounded p-2 text-purple-800" />
            <input type="password" name="password" className="bg-amber-50 rounded p-2 text-purple-800" />
            <button type="submit" className="bg-purple-300 text-cyan-50 p-2 rounded">
                Sign up
            </button>
        </form>
    );
}
