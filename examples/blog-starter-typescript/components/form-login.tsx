import { useCallback, useState } from "react";
import { useAuthContext } from "../contexts/Auth";

const FormLogin = () => {
  const [error, setError] = useState<string>()
  const { login } = useAuthContext()

  const handleOnSubmit = useCallback(async (e) => {
    e.preventDefault()

    const { email, password } = e.target.elements
    try{
      await login({ email: email.value, password: password.value })
    }catch(e: any){
      setError(e?.message ?? 'Unable to login')
    }
  }, [login])

  return (
    <form onSubmit={handleOnSubmit}>
      <label className="block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Email
        </span>
        <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
      </label>
      <label className="block mt-2">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Password
        </span>
        <input type="password" name="password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" />
      </label>
      {error ? <div className="mt-2 text-red">{error}</div>: null}
      <button type="submit" className="rounded bg-cyan px-4 py-2 mt-2 float-right">Login</button>
    </form>
  );
}

export default FormLogin