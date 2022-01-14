# Title

유튜브Api 활용한 인기동영상, 검색기능 페이지

## Install

```
npx create-react-app [폴더명]
npm install -g yarn
yarn add axios
yarn add @fortawesome/fontawesome-free

```

## Usage

```
yarn start

```

## 자료구조

<img src="D:\YoutubeApp\src\images\folder구조.png"/>

## 컴포넌트

**📂index.js**

-   api를 호출하는 youtubeApi.js에서 받아온 함수에 axios create를 넣어줌
-   axios create (기본 url, .env key값 )

**📂App.jsx**

-   상태업데이트를 위한 state를 관리하는 최상위 컴포넌트

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

> useCallback 함수를 사용한 이유? inputController를 실행하는 inputForm.jsx에 불필요한 리렌더링을 방지하기 위해 memo를 써줬는데, 그 상위 컴포넌트인 App에서 리렌더가 빈번하게 일어나기 때문에 useCallback을 사용해서 함수를 저장해서 필요할 때만 리렌더링이 일어나게 하기위함.

> setLoading(true) -> 로딩스피너 활성화. 검색값이 입력되고 아직 해당 비디오가 다 로딩되지 않았을 때 로딩스피너를 활성화 해준다음 다시 false값으로 변경해서 비활성화 해줌

```
    useEffect(() => {
        youtube.mostPopular().then((videos) => {
            setVideo(videos);
        });
    }, [youtube]);
```

> useEffect 함수를 사용한 이유? 첫 화면의 상태를 관리하는 함수이기 때문에 mount되면 실행되야 하기 때문.

**📂.env**
REACT_APP_YOUTUBE_API_KEY=[발급받은 키]

> 키값이 노출되면 정보가 노출될 위험이 있으니 키값을 .env파일에 꼭 REACT*APP*를 써서 입력해준다음(리액트가 정한 법칙) 해당 파일을 gitignore에 추가.

**📂youtubeApi.js**

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

> 비동기 작업을 순서대로 처리해주기 위해 async, await을 사용한다. 받아온 httpClient(=axios create정보)를 this.youtube에 할당해준다.
