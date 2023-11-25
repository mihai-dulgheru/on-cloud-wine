import { Checkbox, Email, Input, Password, Submit } from '@/components/Fields';
import { Fieldset } from '@/components/Formik';
import { initialValues, validationSchema } from '@/models/signup';
import { Field, Form, Formik } from 'formik';
import { Vidaloka } from 'next/font/google';
import { useRouter } from 'next/router';

const vidaloka = Vidaloka({
  weight: '400',
  subsets: ['latin'],
});

export default function Page() {
  const router = useRouter();

  const handleSubmit = () => {
    alert('Congratulations, u are now on cloud wine ☁️!');
    router.push(`/login`);
  };

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
          <div className="text-center text-black">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
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

                <Fieldset name="email">
                  <Field
                    id="email"
                    name="email"
                    as={Email}
                    className="w-3/4 border-b border-[#A10028] bg-transparent py-2 pl-2 text-lg outline-none"
                    placeholder="E-mail"
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
                <Fieldset name="gdpr" fieldsetClassname="ml-1">
                  <div className="flex justify-center text-center">
                    <Field
                      id="gdpr"
                      name="gdpr"
                      as={Checkbox}
                      className="w-4"
                    />
                    <label htmlFor="gdpr" className="mt-1.5 text-white">
                      <p className="text-black">
                        I agree with the terms and conditions{' '}
                      </p>
                    </label>
                  </div>
                </Fieldset>
                <Submit className="button full primary mx-auto -mt-1 rounded-full bg-[#A10028] px-12 py-2 text-lg font-semibold text-white">
                  REGISTER
                </Submit>
              </Form>
            </Formik>
          </div>
        </section>
      </div>
    </main>
  );
}
