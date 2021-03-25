# Config Folder
config는 서버 아이피를 저장하고 관리하기 쉽게 하기 위해서 만든 폴더 및 파일입니다.

하지만 서버 아이피를 공유하는 것은 협업에 불편함으로 .gitignore에 넣어 깃에는 올리지 않도록 합니다.

그로인해 맨 처음 깃을 클론 받고나서 src폴더 안에 config라는 폴더를 생성 후 config 폴더 안에 config.json이라는 파일을 생성해 줍니다.

그리고 밑에 부분을 config.json에 작성해줍니다.

```json
  {
    "SERVER": "SERVER IP ADDRESS"
  }
```

그러면 서버와의 통신을 하기 위한 IP Setting은 완료되었습니다.

나중에 사용할 때는 밑에와 같이 사용하면 됩니다.

```javascript
  import { SERVER } from 'config/config.json';
  import axios from 'axios';

  axios.get(`${ SERVER }/member`); // 대충 예를 든 서버 통신입니다.
```