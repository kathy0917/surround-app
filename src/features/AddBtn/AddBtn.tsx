import * as S from './styles';

interface AddProps {
  onClick: () => void;
}

export default function AddBtn({ onClick }: AddProps) {
  return (
    <>
      <S.AddBtn onClick={onClick} />
    </>
  );
}
