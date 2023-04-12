# Portfolio

## 1. Description

    -개인 프로젝트들을 모아둔 포트폴리오 페이지

## 2. Skills

    -React
    -TS
    -CSS

## 3. Functions

### Header

    -position fixed로 스크롤해도 상단 고정
    -라이브러리 react-scroll을 이용해 각 항목 클릭시 해당 컨텐츠로 스크롤 효과

### 1. Hello

    -useState와 useEffect를 이용해 미리 지정해둔 인삿말을 한글자씩 보여주는 타이핑 효과 구현
    -index가 끝나면 다시보기 버튼을 띄워 index를 0으로 돌림

### 2. Introduce

    -IntersectionObserver를 이용해 이력서 카드가 일정부분 이상 보여지면 안의 내용들이 보여지게 스크롤 효과 구현

### 3. Project

    -작업했던 프로젝트들을 github으로 배포 후 onClick이벤트로 연결
    -이미지에 직접 onMouseEnter, onMouseLeave이벤트로 blur처리하면서 '사이트 보러가기'문구 출력
    -상세 설명 버튼을 css animation을 이용해 애니메이션 효과
    -상세내용들을 객체들의 배열로 저장해 관리, 해당 메뉴에서 상세 설명 버튼 클릭시 보여지게끔 코딩
    -onClick함수를 통해 각각 프로젝트의 github repository와 연결

### Footer

    -github주소로 이동
