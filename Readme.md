# 🍻 주 유 소 ? 🍻

![Github](https://img.shields.io/badge/vue-2.6.14-%234FC08D?style=plastic&logo=Vue.js)![Github](https://img.shields.io/badge/spring_boot-2.5.8-%236DB33F?style=plastic&logo=Spring)![Github](https://img.shields.io/badge/MySQL-8.0-%234479A1?style=plastic&logo=mysql)![Github](https://img.shields.io/badge/build-passing-brightgreen?style=plastic)

## :triangular_flag_on_post: 주 유 소 ? 🍻

- ### 프로젝트 개요
  
  - 🏠 [주유소 (酒流所)](https://i6e106.p.ssafy.io/)
  
  - `주 유 소`는 친구들, 혹은 새로운 사람들과 비대면으로 장소와 거리에 제약없이 재밌게 소통하며 술마시고 싶을 때 사용할 수 있는 서비스입니다.

- ### 주요 기능
  
  - **화상기능 서비스**
    
    > 1) 자유롭게 방을 생성하고 친구 또는 새로운 사람들과 만남을 가질수 있다
    > 
    > 2) 다른사람들과 **화상기능**을 이용해 자유로운 만남을 가질수 있다. 
  
  - **게임 및 재미 서비스** 
    
    > 1) 단순한 화상회의 서비스가 아닌 **여러가지 게임**을 통해 술자리에 맞는 분위기를 유도할수 있다. 
    > 
    > 2) 사용자는 **카메라 필터 음성변조기능**을 이용하여 자신의 모습 , 목소리를 바꿀수 있다.
    > 
    > 3) 각 방은 여러 배경을 변경하여 다양한 분위기에서 모임을 가질 수 있다.
    > - 게임과 재미기능들을 이용해 즐거운 술자리를 유도한다.
  
  - **커뮤니티 서비스**
    
    > 1) 새로운 사람 혹은 친구와의 연락을 위해 친구 기능을 제공한다.
    > 
    > 2) **일대일 채팅**을 통해 다양한 사람과 대화하고 만남을 주도한다.
    > 
    > 3) **확성기 채팅**을 통해 여러 사람들에게 자신의 방을 홍보 하거나 만남을 주도 할 수 있다. 
    > 
    > 4) **알림 기능**으로 친구기능 채팅이 왔을때 실시간으로 확인할 수 있다.
    
    - **마이데이터 서비스**
    
    > 1) 자신의 프로필 사진과 별명등을 변경한다.
    > 
    > 2) **마이데이터**를 통해 출석정보 , 음주기록을 확인하고 저장할 수 있다.
    > - 서로간의 정보를 공유하고 비교하며 재미를 느낄 수 있다.
    
    - **로그인 서비스**
    
    > 1) 로그인 기능을 이용하여 친구기능 마이데이터 서비스를 이용한다.
    > 
    > 2) 웹 로그인과 카카오톡 로그인을 지원한다.

- ### 향후 계획

## 📌 목차

[주 유 소 ? 🍻](#triangular_flag_on_post-run-with-me--%EF%B8%8F) 

* [시작하기](#triangular_flag_on_post-시작하기)
  
  * [시작하기에 앞서](#시작하기에-앞서)
  * [설치하기](#설치하기)
  * [실행하기](#실행하기)
  * [배포하기](#배포하기)

* [지원하는 브라우저](#globe_with_meridians-지원하는-브라우저)

* [사용된 도구](#hammer_and_wrench-사용된-도구)

* [사용된 기술](#desktop_computer-사용된-기술)

* [시스템 아키텍쳐](#desktop_computer-시스템-아키텍쳐)

* [서비스 소개](#-서비스-소개)

* [일정](#calendar-일정)

* [저자](#-저자)

* [라이센스](#page_with_curl-라이센스)

## :triangular_flag_on_post: 시작하기

아래 방법을 따르시면 프로젝트를 실행시킬 수 있습니다.

### 시작하기에 앞서

* [Windows 10](https://www.microsoft.com/en-us/software-download/windows10)
* [JDK 1.8](https://www.oracle.com/kr/java/technologies/javase/javase-jdk8-downloads.html)
* [MySQL 8.0](https://www.mysql.com/downloads/)

### 설치하기

1. 깃헙의 레포지토리를 클론합니다.
   
   ```
   $ git clone https://lab.ssafy.com/s06-webmobile1-sub2/S06P12E101.git
   ```

2. npm을 설치합니다.
   
   ```
   $ npm install
   ```

### 실행하기

`주 유 소` 서비스를 사용하기 위해서는 다음과 같은 방법으로 실행합니다:

1. 데이터베이스를 설정합니다.
   
   - `application.yml`에 데이터베이스 설정을 추가합니다.
     
     ```
     spring:
       datasource:
         driver-class-name: com.mysql.cj.jdbc.Driver
         url : jdbc:mysql://localhost:3306/juyuso?characterEncoding=UTF-8&serverTimezone=Asia/Seoul
         username : {데이터베이스 계정 아이디}
         password : {데이터베이스 계정 비밀번호}
     ```

2. 백엔드 서버를 실행합니다.
   
   - IDE에 import 후 실행합니다.
     
     : IntelliJ, STS와 같은 IDE를 사용하는 경우, `BackEnd`폴더를 import하여 실행합니다.
   
   - jar파일을 생성 후 실행합니다.
     
     ```
     $ gradlew -DskipTests=true build
     ```
     
     ```
     $ java -jar [filename].jar
     ```
   
   - 프론트엔드를 실행합니다.
     
     ```
     $ npm run serve
     ```

### 배포하기

해당 서비스는 `AWS EC2`와 `docker`를 이용하여 배포하였습니다. 

배포를 하기위해서는 다음과 같은 방법으로 실행합니다:

1. AWS EC2 인스턴스 생성

2. Ubuntu 환경에 Git Clone

3. Nginx 환경 설정
   
   ```
    server {
            listen 80;
            server_name i6e101.p.ssafy.io;
   
            # SSL Redirect
            return 301 https://$server_name$request_uri;
    }
   
    server {
        listen 443 ssl;
        server_name i6e101.p.ssafy.io;
   
        ssl_certificate /etc/letsencrypt/live/i6e101.p.ssafy.io/fullchain.pem;
        ssl_certificate_key /etc/letsencrypt/live/i6e101.p.ssafy.io/privkey.pem;
   
        location / {
                proxy_http_version 1.1;
                proxy_ssl_server_name on;
                proxy_pass http://localhost:8080;
                proxy_set_header Host $http_host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_intercept_errors on;
                error_page 404 = @rewrite_proxy;
        }
   
        location @rewrite_proxy {
                rewrite ^(.*)$ /index.html break;
                proxy_pass http://localhost:8080;
                proxy_set_header Host $http_host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
   
        location ~ ^/ws {
                rewrite ^/(.*)/$ /$1 permanent;
                proxy_http_version 1.1;
                proxy_pass http://localhost:8800;
                charset utf-8;
   
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "upgrade";
                proxy_set_header Host $host;
        }
   
        location ~ ^/(api|static|swagger-ui|webjars|configuration|swagger-resources|v2|csrf) {
                rewrite ^/(.*)/$ /$1 permanent;
                proxy_http_version 1.1;
                proxy_pass http://localhost:8800;
                charset utf-8;
   
                proxy_set_header Host $http_host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-Forwarded-Proto $scheme;
                proxy_set_header X-Forwarded-Host $host;
                proxy_set_header X-Forwarded-Port $server_port;
        }
   
        location /openvidu {
                rewrite ^/(.*)/$ /$1 permanent;
                proxy_http_version 1.1;
                proxy_pass https://localhost:8809;
                charset utf-8;
   
                proxy_set_header Host $http_host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-Forwarded-Proto $scheme;
                proxy_set_header X-Forwarded-Host $host;
                proxy_set_header X-Forwarded-Port $server_port;
        }
    }
   ```

4. JDK 설치 (환경변수 설정)

5. DB 설치 (해당 프로젝트에서 MySQL 사용)

6. gradle wrapper을 위한 버전 설정 (6.0.0 이상)

7. gradle clean build 실행 (war 파일 생성)

8. yarn build (dist 폴더 생성)

## :globe_with_meridians: 지원하는 브라우저

| Chrome |
| ------ |
| latest |

## :hammer_and_wrench: 사용된 도구

* Vue.js 2.6.11
* vue/cli 4.4.6
* yarn 1.22.4
* Spring boot 2.3.1
* Gradle 6.4.1
* IDE: Visual Studio Code 1.48, IntelliJ
* GitLab
* Jira
* Jenkins

## :desktop_computer: 사용된 기술

![](https://images.velog.io/images/upgrademarine5/post/22d764b2-3d24-4224-aeaf-6827391bbbd2/image.png)

**[ BACK END ]**

- **Spring Boot** : 주유소의 전반적인 Rest Controller 구현.
- **Spring Security** : WebSecurityConfigurerAdapter를 상속받아 Filter를 적용, 사용자 권한에 맞는 기능을 수행하도록 구현. 
- **JWT** : JSON Web Token을 활용하여 회원 인증 및 안정성있는 정보 교환을 할 수 있도록 활용.
- **JPA (Hibernate)** : ORM인 Hibernate를 활용하여 객체 중심의 개발을 할 수 있도록 하였고, JPQL, QueryDSL을 활용하여  Entity 필드가 되는 객체를 통해 DB를 동작시켜 유지보수에 용이하게 활용. 
  - 동일한 쿼리에 대한 캐시 기능을 사용하기 때문에 높은 효율성 기대
- **SSL 프로토콜** : SSL을 적용하여 전송되는 패킷값을 암호화하여 외부의 공격자로부터 데이터를 보안하기 위해 사용.
  - 인증서를 발급받아 웹서버에 SSL 인증서를 적용.
  - OPENVIDU 보안 문제를 해결하기 위해 사용 , SSL 적용 필수.
- **MySql** : RDBMS로 주유소의 사용자, 음주 기록, 방 정보, 친구관리, 차단관리, 1:1 채팅 등 다양한 데이터를 저장.
- **AWS**
  - EC2 서비스를 이용하여 Ubuntu 서버를 구축 (호스팅).
- **Jenkins**
  - CI/CD 파이프라인 구축을 통해 빌드 배포 자동화. 
- **Nginx** : 웹 서버를 구축
- **WebSocket** : 웹 상에서 쉽게 소켓 통신을 하게 해주는 라이브러리를 친구와 1:1 채팅을 하기위해 사용
- **STOMP** : Http에 모델링된 frame 기반의 메세징 프로토콜을 통해 메세지 전송을 좀 더 효율적으로 하기 위해 활용.
  - `STOMP Handler`를 구현하여 Subscribe를 통해 통신하고자 하는 주체(Topic)를 판단하여 실시간, 지속적으로 감시하고 해당 요청이 들어오면 처리하도록 구현. **(Broker 역할 수행)**

**[ FRONT END ]**

- **Vue**
  * **vuetify** - 프론트 화면구성에 필요한 다양한 기능을 담은 UI Framework
  * **vue-toast-notification** - 여러 알림 및 경고창을 띄우기 위해 활용
  * **vue-calendar-heatmapt** - 술 커밋 기록을 시각적인 차트로 보여주기 위해 사용.
  * **web-stomp** - 채팅기능을 위한 웹 소켓 프로그래밍, 실시간으로 채팅을 할때 사용.
- **Vuex** : 여러 페이지에서 공용으로 사용하는 데이터와 함수들을 저장해서 한번에 관리.
- **Vue-Router** :  SPA를 제작할 때 유용한 라우팅 라이브러리. 
- **axios** : 브라우저를 위한 Promise 기반 HTTP 클라이언트. 백엔드와 통신할 때 사용.
  * **vuex-persistedstate** - 새로고침 시 상태초기화를 방지하기 위해 활용.
- **Openvidu-browser** : WebRTC를 구현하기 위해 사용한 라이브러리.
- **firebase** : 1:1 채팅, 친구 추가 등 실시간 알림을 구현하기 위해 사용.

**[ TEAM Cooperation ]**

- **GitLab** : GitLab을 활용하여 프로젝트를 관리.
  - Git Flow 에 따른 브랜치 전략 수립.
  - MR 시 코드 리뷰 진행.
- **Jira** : 이슈 관리 도구로 활용. 
  - 주요 기능들을 이슈로 등록하고 Story Point를 산정한 후, 담당자를 지정하여 프로젝트를 진행.
  - 1~2 주 정도 상황에 맞게 스프린트를 설정.
- **Notion** : 협업을 위한 공용 문서 및 산출물들을 공유할 수 있도록 활용.
  - 동시 문서 작성.
- **Figma** : 웹 페이지 디자인 협업을 위해 활용.
  - 동시 디자인 설계을 통해 스토리보드 작성.

## :desktop_computer: 시스템 아키텍쳐

![](https://images.velog.io/images/upgrademarine5/post/a73584c2-db19-4d7b-bc07-655830e2dbde/image.png)

## 🎞 서비스 소개

### 1. 로그인 화면

<img title="" src="https://media.vlpt.us/images/sin5015243/post/7fef6663-006c-4015-87e2-b71c3bda19dc/%EB%A1%9C%EA%B7%B8%EC%9D%B8.gif" alt="df" data-align="inline">

#### 1-1. 로그인 화면

- **[로그인] :** 로그인을 할수 있다.
- **[회원가입] :** 회원가입을 통해 로그인을 할수있다.
- **[카카오로 시작하기] :** 카카오API를 사용하여 카카오계정으로도 로그인을 할수있다.

---

### 2. 테이블 목록화면

![](https://images.velog.io/images/upgrademarine5/post/573f5ce4-1a59-4d1e-8edc-97db001fbdee/image.png)

#### 2-1. 테이블 화면

- **[테이블 화면] :** 현재 생성되어 있는 방리스트를 확인 할수 있다.
- **[테이블 리스트 필터] :** 전체, 공개방, 비공개방을 설정에따라 원하는 것만 볼 수 있다.
- **[테이블 검색 기능] :** 방리스트를 태그별 제목별로 검색하여 원하는 것만 볼 수 있다.

---

#### 2-2. 테이블 화면 방 추가

![](https://media.vlpt.us/images/sin5015243/post/0215ca0a-db37-4782-9752-856443dcae87/%ED%85%8C%EC%9D%B4%EB%B8%94%EC%B6%94%EA%B0%80.gif)

- **[+버튼 클릭시] :** 새로운 방을 생성할 수 있도록 모달창을 띄운다.
- **[테마 선택 및 방정보 설정] :** 생성할 방의 기본 정보들을 정의 한다.

---

#### 2-3. 알림 기능

- **[알림 도착시] :** 알림을 통해 친구 신청 또는 메세지를 실시간으로 확인 할수 있다.

---

### 3. 미팅방

#### 3-1 미팅방 입장

<img title="" src="Readme.assets/필터 적용.gif" alt="" data-align="inline">

- **[음성 설정] :** 마이크를 켜고 끌수 있다.
- **[카메라 설정] :** 카레마를 켜고 끌수 있다.
- **[채팅 및 확성기] :** 미팅방내에서 채팅 및 확성기를 사용할수있다.
- **[참여자] :** 해당 미팅방에 참여한 사람들의 닉네임을 확인할 수 있다.
- **[비디오필터] :** 자신의 비디오에 다양한 필터를 적용함으로써 재미를 추가할 수 있다.

#### 3-2 게임선택 화면

![](Readme.assets\게임선택.PNG)

- **[게임목록] :** 타자연습, 타이타닉, 그림그리기, 밸런스 게임이 있다.

#### 3-3 타이타닉 게임

![](Readme.assets\맥주.gif)

- **[타이타닉] :** 순서대로 비어있는 술잔을 마우스클릭을 통해 채운후 넘치게 따른사람이 걸리는 게임

#### 3-4 타자연습

![](Readme.assets\타자게임.gif)

- **[타자연습] :** 시간내에 빠르게 제시된 문장을 치는 사람이 승리.

#### 3-5 그림그리기

![](Readme.assets\드로잉.png)

- **[그림그리기] :** 서로의 카메라에 그림을 그려줄 수 있다.

#### 3-6 밸런스게임

![](Readme.assets\밸런스.png)

- **[밸런스게임] :** 두개의 질문중 하나를 시간내에 선택하는 게임.

#### 3-7 방 채팅 및 확성기

![](Readme.assets\확성기2.png)

- **[채팅및확성기] :** 방에있는 사용자들과 채팅 및 확성기를 통해 소통을 할수있다.

---

### 4. 마이페이지

#### 4-1. 마이페이지 화면

<img title="" src="https://images.velog.io/images/sin5015243/post/e2c18c02-94c9-4127-bea9-a786b653acda/image.png" alt="" data-align="inline">

* **[프로필수정] :** 자신의 프로필이미지 및 정보를 수정할 수 있다.
* **[비밀번호 변경] :** 자신의 비밀번호를 수정할 수 있다.
* **[차단친구 관리] :** 자신이 차단한 사용자 목록을 보여준다.

#### 4-2. 마이데이터 화면

![](https://images.velog.io/images/sin5015243/post/25612365-a674-44ea-bde5-8875660214e4/%EC%9D%8C%EC%A3%BC%EA%B8%B0%EB%A1%9D.gif)

* **[주량기록보기] :** 자신이 방에 접속하여 마신 주량을 나타낼 수 있다.
* **[오늘주량추가] :** 대면 술자리에서 마신 주량을 직접 기록할 수 있다.

---

#### 4-3. 캘린더 화면

![](https://images.velog.io/images/sin5015243/post/46e2b184-1838-4f70-95f2-a59a0c5fbed4/image.png)

* **[출석체크] :** 출석체크를 통해 자신이 접속한 날짜를 알수 있다.

---

### 5. 사이드바

#### 5-1. 1:1채팅

![](https://media.vlpt.us/images/sin5015243/post/8f4f26f5-5390-49f7-ad94-034a11fc2b4d/%EC%B9%9C%EA%B5%AC%ED%83%AD.gif)

* **[채팅] :** 친구와 1:1 채팅을 할수 있다.

---

#### 5-2. 친구목록

![](https://images.velog.io/images/sin5015243/post/e081715f-50db-4afa-8b88-0855089eb572/image.png)

* **[프로필 보기] :** 자신의 친구의 프로필 정보를 볼수있다.
* **[채팅하기] :** 친구와 1:1 채팅을 할수있다.
* **[친구삭제] :** 자신의 친구목록에서 삭제를 한다.
* **[차단] :** 친구목록에서 제거한후 차단목록에 추가한다.

---

#### 5-3. 사용자찾기

![](https://images.velog.io/images/sin5015243/post/c15998fe-7d57-4cde-b885-5d91c6246bd7/%EC%B9%9C%EA%B5%AC%EA%B2%80%EC%83%89.gif)

* **[사용자 검색] :** 닉네임을 검색하여 사용자를 찾을수 있다.

---

시연 동영상

https://www.youtube.com/watch?v=goj1B7vHmpE

---

## 🙏 개발하신분들

* 장현진 - HyunJin Jang  @[winckey](https://github.com/winckey)  [Back]
* 박대언 - DaeEon Park  @[park0691](https://github.com/park0691) [Back]
* 양석조 - SeokJo Yang  @[protossking](https://github.com/protossking) [Back]
* 성아영 - AYoung Sung  @[Sungayoung](https://github.com/Sungayoung) [Front]
* 박수아 - SuAh Park  @[pakrsua](https://github.com/pakrsua) [Front]
* 박신영 - ShinYoung Park  @[shinyoung-angel](https://github.com/shinyoung-angel) [Front]
