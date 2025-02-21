import * as S from './styles';

interface BookInfoProps {
  bookImg?: string;
  bookTitle?: string;
  bookAuthors?: string;
}

export default function BookInfo({ bookImg, bookTitle, bookAuthors }: BookInfoProps) {
  console.log(bookImg);
  return (
    <>
      <S.Row>
        {bookImg === '' || null || undefined ? <S.NotFoundImg /> : <S.BookImg src={bookImg} />}
        <S.Column>
          <S.BookTitle>{bookTitle}</S.BookTitle>
          <S.BookAuthor>{bookAuthors}</S.BookAuthor>
        </S.Column>
      </S.Row>
    </>
  );
}
