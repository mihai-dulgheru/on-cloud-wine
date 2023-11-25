import { Link } from '@/components';
import { Input, Password, Submit } from '@/components/Fields';
import { Fieldset } from '@/components/Formik';
import { initialValues, validationSchema } from '@/models/login';
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
      const res = await fetch('/api/login', {
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
      router.push('/home');
      toast.success('Login successful!');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleSubmit = (values) => {
    return mutation.mutateAsync(values);
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
          <div className="mb-14 text-center text-black">
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
                <Fieldset name="password">
                  <Field
                    as={Password}
                    className="w-3/4 border-b border-secondary-500 bg-transparent py-2 pl-2 text-lg outline-none"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                </Fieldset>
                <Submit className="button full primary mx-auto rounded-full bg-secondary-500 px-12 py-2 text-lg font-semibold uppercase text-white">
                  Login
                </Submit>
              </Form>
            </Formik>
            <p className="mt-10 font-semibold">
              <span>Don&apos;t have an account? </span>
              <Link href="/signup" className="font-bold underline">
                Register here!
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
