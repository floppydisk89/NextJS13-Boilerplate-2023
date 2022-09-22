import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div>
      <p>
        Post:
        {pid}
      </p>
    </div>
  );
}
