import Image from "next/image";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <div className="xl:flex">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 xl:text-left xl:text-2xl">
            Connectez-vous
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Adresse mail
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mot de passe
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-blue">
                    Mot de passe oublié ?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="text-white flex w-full justify-center rounded-md bg-blue px-3 py-1.5 text-sm font-semibold leading-6  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
              >
                Se connecter
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Pas encore inscrit·e?{" "}
            <a href="#" className="font-semibold leading-6 text-blue">
              Inscrivez-vous
            </a>
          </p>
          <div className="grid gap-10 mt-10">
            <p className="text-center">Ou continuer avec</p>
            <div className="grid grid-cols-2 gap-4 ">
              <button className="flex gap-6 bg-blue py-4 text-white justify-center text-xl rounded-md">
                <AiFillGoogleCircle size="2rem" /> Google
              </button>
              <button className="flex gap-6 bg-blue py-4 text-white justify-center text-xl rounded-md">
                <FaFacebook size="2rem" />
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex flex-1 max-h-[calc(100vh-3rem)]">
        <Image
          src="/shopping.jpg"
          width={500}
          height={500}
          alt="Picture of shoppingr"
          className="w-full object-cover object-right-top"
        />
      </div>
    </div>
  );
};

export default Login;
