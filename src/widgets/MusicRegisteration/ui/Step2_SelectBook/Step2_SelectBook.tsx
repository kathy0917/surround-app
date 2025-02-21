import { useQuery } from '@tanstack/react-query';
import KakaoApi from '../../../../shared/api/KakaoApi';
import { useSearchParams } from 'react-router-dom';
import { BookInfo } from '../../../../features/index';
import * as S from './styles';

export default function Step2_SelectBook() {
  const [searchParams] = useSearchParams();
  const searchWord = searchParams.get('query') || '';

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

  return (
    <>
      <S.Ul>
        <S.Title>{searchWord}</S.Title>
        {books.length === 0 ? (
          <S.NoResult>검색 결과가 없습니다.</S.NoResult>
        ) : (
          books.map((book: any, idx: number) => <BookInfo key={idx} bookImg={book.thumbnail} bookTitle={book.title} bookAuthors={book.authors.join(', ')} />)
        )}
      </S.Ul>
    </>
  );
}
