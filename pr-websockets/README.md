# WebSockets

> https://developer.mozilla.org/ko/docs/Web/API/WebSockets_API

## 개요
> ✨ 사용자의 브라우저(Client)와 서버(Server) 사이의 인터액티브 통신 세션 (채팅과 같은 사용자간 실시간 동시 작업 구현)

## 1. 동작 설명

> 클라이언트는 고유한 식별자로 구분되며, 각 클라이언트는 서로 메시지를 주고 받는다
> ![chat-app](https://user-images.githubusercontent.com/18306534/193449999-dbe6b2b2-b9b9-41a9-b847-8d2959a0198e.jpg)


- 메시지를 주고 받는다는 것은 결국, 한명이 메시지를 보내면, 서버에서 이를 다른 클라이언트로도 전송해준다는 것
- 서버는 같은 메시지 그룹에 참여한 클라이언트들을 관리하며, 메시지를 공유하여 전송


## 참고 자료

### 주요 참고 자료

> 웹소켓 Client/Server 구조 어떻게 해야할까?
> - Server: https://fastapi.tiangolo.com/advanced/websockets/
> - Client: 
>    - `useRef` 사용 아이디어: https://jcon.tistory.com/186
>    - 기타 기반 지식: https://react.vlpt.us/basic/11-render-array.html

> 다중 웹소켓 관리 어떻게 해야할까?
> - https://intrepidgeeks.com/tutorial/simple-chat-application-using-websocket-and-fastapi


### Client

- https://ko.javascript.info/websocket
- https://velog.io/@sgyos000/chatting
- https://cocoder16.tistory.com/62

### Server
- https://fastapi.tiangolo.com/advanced/websockets/
- https://ctoahn.tistory.com/6
- https://velog.io/@kjh03160/21.04.16-%EC%B1%84%ED%8C%85%EC%97%90-%EA%B4%80%ED%95%9C-%EA%B0%84%EB%8B%A8%ED%95%9C-%EB%A6%AC%EC%84%9C%EC%B9%98-JWT-%EC%9D%B8%EC%A6%9D-%EA%B5%AC%ED%98%84
- https://intrepidgeeks.com/tutorial/simple-chat-application-using-websocket-and-fastapi
- https://medium.com/vacatronics/how-to-use-websocket-with-fastapi-8460db1c074


### Clone Coding

- https://nomadcoders.co/noom