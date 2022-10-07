import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import Lottie from '../components/lottie';
import { useLocale } from '../plugins/localizer';
import api from '../services/api';
import { clearState, decrement, increment } from '../store/slices/userSession';
import styles from '../styles/Home.module.scss';

type State = {
  userSession: {
    count: string;
  };
};

export default function Home() {
  const dispatch = useDispatch();
  const t = useLocale();
  const userSession = useSelector((state: State) => state.userSession);

  // api call example using custom api service
  api.get('hello/').then(result => {
    console.log(result);
  });

  function sendIncrement() {
    dispatch(increment());
  }

  function sendDecrement() {
    dispatch(decrement());
  }

  function resetCounter() {
    dispatch(clearState());
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Boilerplate | Floppydisk89</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        {t('hello')}! Welcome to
          <a href="https://nextjs.org"> Next.js!</a>
        </h1>
        <motion.div layoutId="underline" />
        <p>
          This boilerplate contains SASS support, Redux, Prisma ORM, Airbnb
          ESlint and Prettier integration
        </p>
        <h2>
          Counter:
          {userSession.count}
        </h2>
        <button type="button" onClick={() => sendIncrement()}>
          Add [ + ]
        </button>
        <button type="button" onClick={() => sendDecrement()}>
          Remove [ - ]
        </button>
        <button type="button" onClick={() => resetCounter()}>
          Reset counter
        </button>

        <Lottie animationPath="/lottie/assistant.json" />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
