const KAKAO_API_KEY = '946388acd73d175404fff4fc8fcde8f3';

export default async function KakaoApi(searchWord: string) {
  if (!searchWord) return [];

  const res = await fetch(`https://dapi.kakao.com/v3/search/book?target=title&query=${searchWord}`, {
    headers: {
      Authorization: `KakaoAK ${KAKAO_API_KEY}`,
    },
  });

  const data = await res.json();
  console.log('!!!!!!');
  console.log(data);

  console.log(`'''''''''''''''`);
  console.log(res);
  return data.documents;
}
