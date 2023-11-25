import { Layout, Link } from '@/components';
import { Input, Password, Submit } from '@/components/Fields';
import { Fieldset } from '@/components/Formik';
import { initialValues, validationSchema } from '@/models/login';
import { Field, Form, Formik } from 'formik';

import { Vidaloka } from 'next/font/google'
const vidaloka = Vidaloka({
  weight: '400',
  subsets: ['latin'],
})

export default function Page() {
  return (
    <Layout>
      <section className="w-full bg-[url('/images/wine-glass.jpg')] bg-cover flex flex-col text-black justify-around">
        <div className="text-black flex flex-col justify-center items-center">
          <span className="font-semibold">ON CLOUD</span>
          <h1 className={`text-[#A10028] text-6xl ${vidaloka.className}`}>WINE</h1>
        </div>
        <div className="text-black text-center mb-14">
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
                  className="outline-none border-b border-[#A10028] w-3/4 py-2 pl-2 bg-transparent text-lg"
                  placeholder="Username"
                />
              </Fieldset>

              <Fieldset name="password">
                <Field
                  id="password"
                  name="password"
                  as={Password}
                  className="outline-none border-b border-[#A10028] w-3/4 py-2 pl-2 bg-transparent text-lg"
                  placeholder="Password"
                />
              </Fieldset>
              <Submit className="button full primary bg-[#A10028] text-white py-2 px-12 text-lg rounded-full mx-auto font-semibold">
                LOGIN
              </Submit>
            </Form>
          </Formik>

          <p className="font-semibold mt-10">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="underline font-bold">
              Register here!
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}
