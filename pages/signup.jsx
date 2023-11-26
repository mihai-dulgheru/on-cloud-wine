import { Checkbox, Email, Input, Password, Submit } from '@/components/Fields';
import { Fieldset } from '@/components/Formik';
import { initialValues, validationSchema } from '@/models/signup';
import { useMutation } from '@tanstack/react-query';
import { Field, Form, Formik } from 'formik';
import { Vidaloka } from 'next/font/google';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';

const vidaloka = Vidaloka({
  weight: '400',
  subsets: ['latin'],
});

export default function Page() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (values) => {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      return data;
    },
    onSuccess: () => {
      router.push('/login');
      toast.success('Congratulations, u are now on cloud wine ☁️!');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleSubmit = async (values) => {
    const { email } = values;
    const res = await fetch('/api/verify-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (!res.ok) {
      toast.error(data.message);
    } else {
      const { valid } = data;
      if (!valid) {
        toast.error('Please enter a valid email address');
      } else {
        return mutation.mutateAsync(values);
      }
    }
  };

  return (
    <main className="flex h-screen w-full flex-col bg-white">
      <div className="flex flex-1 flex-col">
        <section className="flex w-full flex-1 flex-col justify-around bg-[url('/images/wine-glass.jpg')] bg-cover text-black">
          <div className="flex flex-col items-center justify-center text-black">
            <span className="font-semibold uppercase">On cloud</span>
            <h1
              className={`text-6xl uppercase text-secondary-500 ${vidaloka.className}`}
            >
              Wine
            </h1>
          </div>
          <div className="text-center text-black">
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <Form className="flex flex-col space-y-4">
                <Fieldset name="username">
                  <Field
                    as={Input}
                    className="w-3/4 border-b border-secondary-500 bg-transparent py-2 pl-2 text-lg outline-none"
                    id="username"
                    name="username"
                    placeholder="Username"
                  />
                </Fieldset>
                <Fieldset name="email">
                  <Field
                    as={Email}
                    className="w-3/4 border-b border-secondary-500 bg-transparent py-2 pl-2 text-lg outline-none"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                  />
                </Fieldset>
                <Fieldset name="password">
                  <Field
                    as={Password}
                    className="w-3/4 border-b border-secondary-500 bg-transparent py-2 pl-2 text-lg outline-none"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                </Fieldset>
                <Fieldset name="gdpr">
                  <div className="flex justify-center text-center">
                    <Field
                      as={Checkbox}
                      className="w-4"
                      id="gdpr"
                      name="gdpr"
                    />
                    <label htmlFor="gdpr" className="mt-1.5 text-white">
                      <p className="text-black">
                        I agree with the terms and conditions
                      </p>
                    </label>
                  </div>
                </Fieldset>
                <Submit className="button full primary mx-auto -mt-1 rounded-full bg-secondary-500 px-12 py-2 text-lg font-semibold uppercase text-white">
                  Register
                </Submit>
              </Form>
            </Formik>
          </div>
        </section>
      </div>
    </main>
  );
}
