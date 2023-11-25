import { Link } from '@/components';
import { Input, Password, Submit } from '@/components/Fields';
import { Fieldset } from '@/components/Formik';
import { initialValues, validationSchema } from '@/models/login';
import { Field, Form, Formik } from 'formik';
import { Vidaloka } from 'next/font/google';

const vidaloka = Vidaloka({
  weight: '400',
  subsets: ['latin'],
});

export default function Page() {
  return (
    <main className="flex h-screen w-full flex-col bg-white">
      <div className="flex flex-1 flex-col">
        <section className="flex w-full flex-1 flex-col justify-around bg-[url('/images/wine-glass.jpg')] bg-cover text-black">
          <div className="flex flex-col items-center justify-center text-black">
            <span className="font-semibold">ON CLOUD</span>
            <h1 className={`text-6xl text-[#A10028] ${vidaloka.className}`}>
              WINE
            </h1>
          </div>
          <div className="mb-14 text-center text-black">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={() => alert('U have been logged in')}
            >
              <Form className="flex flex-col space-y-4">
                <Fieldset name="username">
                  <Field
                    id="username"
                    name="username"
                    as={Input}
                    className="w-3/4 border-b border-[#A10028] bg-transparent py-2 pl-2 text-lg outline-none"
                    placeholder="Username"
                  />
                </Fieldset>

                <Fieldset name="password">
                  <Field
                    id="password"
                    name="password"
                    as={Password}
                    className="w-3/4 border-b border-[#A10028] bg-transparent py-2 pl-2 text-lg outline-none"
                    placeholder="Password"
                  />
                </Fieldset>
                <Submit className="button full primary mx-auto rounded-full bg-[#A10028] px-12 py-2 text-lg font-semibold text-white">
                  LOGIN
                </Submit>
              </Form>
            </Formik>

            <p className="mt-10 font-semibold">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="font-bold underline">
                Register here!
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
