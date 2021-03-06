# Title

<h2>๐ ์ ํ๋ธApi ํ์ฉํ ์ธ๊ธฐ๋์์, ๊ฒ์๊ธฐ๋ฅ ํ์ด์ง</h2>

## Install

```
npx create-react-app [ํด๋๋ช]
npm install -g yarn
yarn add axios
yarn add @fortawesome/fontawesome-free

```

## Usage

```
yarn start

```

## ์๋ฃ๊ตฌ์กฐ
![folder๊ตฌ์กฐ](https://user-images.githubusercontent.com/76987275/149560201-21b2fde3-f450-4aca-ae39-5ce963ad4219.png)

## ์ปดํฌ๋ํธ

**๐index.js**

-   api๋ฅผ ํธ์ถํ๋ youtubeApi.js์์ ๋ฐ์์จ ํจ์์ axios create๋ฅผ ๋ฃ์ด์ค
-   axios create (๊ธฐ๋ณธ url, .env key๊ฐ )

**๐App.jsx**

-   ์ํ์๋ฐ์ดํธ๋ฅผ ์ํ state๋ฅผ ๊ด๋ฆฌํ๋ ์ต์์ ์ปดํฌ๋ํธ

```
 const inputController = useCallback(
        (query) => {
            setLoading(true);
            setSelect(null);
            youtube
                .inputController(query) //
                .then((videos) => {
                    setVideo(videos);
                    setLoading(false);
                });
        },
        [youtube]
    );
```

> useCallback ํจ์๋ฅผ ์ฌ์ฉํ ์ด์ ? inputController๋ฅผ ์คํํ๋ inputForm.jsx์ ๋ถํ์ํ ๋ฆฌ๋ ๋๋ง์ ๋ฐฉ์งํ๊ธฐ ์ํด memo๋ฅผ ์จ์คฌ๋๋ฐ, ๊ทธ ์์ ์ปดํฌ๋ํธ์ธ App์์ ๋ฆฌ๋ ๋๊ฐ ๋น๋ฒํ๊ฒ ์ผ์ด๋๊ธฐ ๋๋ฌธ์ useCallback์ ์ฌ์ฉํด์ ํจ์๋ฅผ ์ ์ฅํด์ ํ์ํ  ๋๋ง ๋ฆฌ๋ ๋๋ง์ด ์ผ์ด๋๊ฒ ํ๊ธฐ์ํจ.

> setLoading(true) -> ๋ก๋ฉ์คํผ๋ ํ์ฑํ. ๊ฒ์๊ฐ์ด ์๋ ฅ๋๊ณ  ์์ง ํด๋น ๋น๋์ค๊ฐ ๋ค ๋ก๋ฉ๋์ง ์์์ ๋ ๋ก๋ฉ์คํผ๋๋ฅผ ํ์ฑํ ํด์ค๋ค์ ๋ค์ false๊ฐ์ผ๋ก ๋ณ๊ฒฝํด์ ๋นํ์ฑํ ํด์ค

```
    useEffect(() => {
        youtube.mostPopular().then((videos) => {
            setVideo(videos);
        });
    }, [youtube]);
```

> useEffect ํจ์๋ฅผ ์ฌ์ฉํ ์ด์ ? ์ฒซ ํ๋ฉด์ ์ํ๋ฅผ ๊ด๋ฆฌํ๋ ํจ์์ด๊ธฐ ๋๋ฌธ์ mount๋๋ฉด ์คํ๋์ผ ํ๊ธฐ ๋๋ฌธ.

**๐.env**

```
REACT_APP_YOUTUBE_API_KEY=[๋ฐ๊ธ๋ฐ์ ํค]
```

> ํค๊ฐ์ด ๋ธ์ถ๋๋ฉด ์ ๋ณด๊ฐ ๋ธ์ถ๋  ์ํ์ด ์์ผ๋ ํค๊ฐ์ .envํ์ผ์ ๊ผญ REACT*APP*๋ฅผ ์จ์ ์๋ ฅํด์ค๋ค์(๋ฆฌ์กํธ๊ฐ ์ ํ ๋ฒ์น) ํด๋น ํ์ผ์ gitignore์ ์ถ๊ฐ.

**๐youtubeApi.js**

```
class Youtube {
    constructor(httpClient) {
        this.youtube = httpClient;
    }

    async mostPopular() {
        const response = await this.youtube.get("videos", {
            params: {
                part: "snippet",
                chart: "mostPopular",
                maxResults: 25,
            },
        });
        return response.data.items;
    }
```

> ๋น๋๊ธฐ ์์์ ์์๋๋ก ์ฒ๋ฆฌํด์ฃผ๊ธฐ ์ํด async, await์ ์ฌ์ฉํ๋ค. ๋ฐ์์จ httpClient(=axios create์ ๋ณด)๋ฅผ this.youtube์ ํ ๋นํด์ค๋ค.
