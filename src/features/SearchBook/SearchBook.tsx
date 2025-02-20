import { useQuery } from '@tanstack/react-query';
import KakaoApi from '../../shared/api/KakaoApi';

interface SearchBookProps {
  searchWord: string;
}

export default function SearchBook({ searchWord }: SearchBookProps) {
  const {
    data: books = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['books', searchWord],
    queryFn: () => KakaoApi(searchWord),
    enabled: !!searchWord,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching books.</p>;
  console.log(...books);
  return <div></div>;
}
