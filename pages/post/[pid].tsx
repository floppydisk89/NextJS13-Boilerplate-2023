import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div>
      <p>
        This is a example route that gets URL params. Post:
        {pid}
      </p>
    </div>
  );
}
