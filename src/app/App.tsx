import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Mail, Menu, User, X } from "lucide-react";

const projects = [
  {
    id: "01",
    slug: "orderplace",
    title: "오더플레이스",
    category: "호텔·페스티벌·테이블오더·푸드코트 확장형 주문 플랫폼",
    tags: ["Java", "Spring Boot", "Spring Framework", "MyBatis", "Vue3", "Vite", "JSP", "JavaScript", "Aurora", "Firebase", "AWS", "Gradle"],
    description:
      "일반 배달 중심 서비스였던 오더플레이스를 호텔, 페스티벌, 테이블오더, 푸드코트까지 확장 가능한 주문 플랫폼으로 고도화했습니다.\n멀티 모듈 구조와 공통 상품·주문 도메인을 정리하고, 외부 배달·POS 연동 API와 관리자 기능을 개발했습니다.\n쿼리와 인덱스 최적화를 통해 주요 조회 응답 속도를 30% 이상 개선했습니다.",
    image: "/portfolio/assets/img/orderplace-main.png",
    heroImage: "/portfolio/assets/img/orderplace-main.png",
    imageFit: "contain",
    year: "2022-현재",
    duration: "2022.04 - 현재",
    role: "Backend · API · Admin Web · Operations · Optimization",
    images: [
      "/portfolio/assets/img/orderplace.png",
      "/portfolio/assets/img/orderplace2.png",
      "/portfolio/assets/img/orderplace3.png",
    ],
    overview:
      "오더플레이스는 일반 배달 주문 서비스를 기반으로 호텔 전용 주문, 페스티벌, 테이블오더, 푸드코트 등 여러 채널을 하나의 주문 서비스 안에서 운영할 수 있도록 확장한 플랫폼입니다.",
    challenge:
      "서비스별로 중복 개발되던 상품·주문 구조를 공통 도메인 모델로 정리하고, 각 모듈의 책임 경계를 분리해 신규 채널이 추가되어도 기존 운영 흐름이 흔들리지 않도록 만드는 것이 핵심이었습니다.",
    process: [
      { step: "01 — Platform Extension", body: "기존 일반 배달 서비스 중심 구조를 호텔 전용, 페스티벌, 테이블오더, 푸드코트 채널에서 사용할 수 있도록 확장했습니다. 신규 푸드코트 서비스 출시를 위해 채널별 주문 흐름과 관리자 기능을 분리하고, 서비스별 책임 경계를 명확히 정리했습니다." },
      { step: "02 — Domain & API", body: "멀티 모듈 구조를 기반으로 상품과 주문 도메인을 공통화하고, 배달 플랫폼·배달 대행사 등 외부 서비스 연동 API를 개발했습니다. 내부 POS 연동 기반의 탭샵바 테이블오더 서비스도 상용 출시해 오프라인 매장 주문 흐름까지 확장했습니다." },
      { step: "03 — Operations & Optimization", body: "운영 중인 구버전 서비스의 유지보수와 기능 개선을 함께 수행했습니다. 다국어 서비스를 적용해 외국인 고객 주문 기반을 마련했고, 주요 조회 쿼리와 인덱스를 최적화해 서비스 응답 속도를 30% 이상 개선했습니다." },
    ],
    outcome: "호텔, 페스티벌, 테이블오더, 푸드코트까지 확장 가능한 주문 플랫폼 구조를 마련하고, 신규 서비스 출시와 기존 서비스 안정화를 함께 수행했습니다.",
    accentColor: "#C2410C",
  },
  {
    id: "02",
    slug: "football-lounge",
    title: "풋볼라운지",
    category: "축구 팀 운영 앱과 유니폼 커머스를 연결한 서비스",
    tags: ["Java", "Spring Boot", "MyBatis", "Aurora", "AWS", "Gradle", "Vue3", "Vite", "REST API", "Commerce"],
    description:
      "축구 팀 운영 앱의 백엔드 구조, DB 모델, 서버 로직과 주요 API를 설계·개발했습니다.\nAWS 기반 인프라를 구축하고, 풋볼라운지 앱과 유니폼샵의 회원을 공유하는 커스텀 유니폼 웹페이지를 개발했습니다.\n앱과 커머스 간 연동을 통해 팀 운영 서비스의 구매 흐름을 확장했습니다.",
    image: "/portfolio/assets/img/footballlounge-main.png",
    heroImage: "/portfolio/assets/img/footballlounge-main.png",
    imageFit: "contain",
    year: "2025-2026",
    duration: "2025.11 - 2026.05",
    role: "Backend Architecture · API · DB Model · AWS · Commerce",
    images: [
      "/portfolio/assets/img/footballlounge-1.png",
      "/portfolio/assets/img/footballlounge-2.png",
      "/portfolio/assets/img/footballlounge-3.png",
      "/portfolio/assets/img/fblshop-main.png",
      "/portfolio/assets/img/fblshop1.png",
      "/portfolio/assets/img/fblshop2.png",
    ],
    overview:
      "풋볼라운지는 축구 팀 운영 앱과 유니폼 커머스를 연결한 프로젝트입니다. 앱의 백엔드 구조, DB 모델, 서버 로직, API 개발을 담당하고 AWS 환경 인프라를 구축했습니다.",
    challenge:
      "앱 사용자와 유니폼샵 사용자를 자연스럽게 연결해 회원 정보를 공유하고, 커스텀 유니폼 조회부터 구매까지 이어지는 흐름을 안정적으로 설계하는 것이 핵심이었습니다.",
    process: [
      { step: "01 — Backend Architecture", body: "축구 팀 운영 앱의 백엔드 구조를 설계하고 주요 API를 개발했습니다. DB 모델과 서버 로직을 정리해 팀 운영 기능이 안정적으로 동작할 수 있는 기반을 마련했습니다." },
      { step: "02 — AWS & Operations", body: "AWS 환경에서 서비스 운영에 필요한 인프라를 구축했습니다. Java, Spring Boot, MyBatis, Aurora, Gradle 기반으로 서버 구조를 구성하고 운영 가능한 형태로 배포 흐름을 정리했습니다." },
      { step: "03 — Uniform Shop Integration", body: "풋볼라운지 앱과 유니폼샵 회원을 공유하는 유니폼 커스텀 웹페이지를 개발했습니다. 커스텀 유니폼 조회와 구매 흐름을 설계하고, 앱과 샵 연동을 통해 축구팀 운영 서비스의 커머스 확장 기반을 마련했습니다." },
    ],
    outcome: "축구 팀 운영 앱과 유니폼 커머스의 회원·구매 흐름을 연결하고, 1차 오픈이 가능한 백엔드와 웹페이지 기반을 완성했습니다.",
    accentColor: "#78D7FF",
  },
  {
    id: "03",
    slug: "runpang",
    title: "런팡",
    category: "GPS 러닝 기록과 아바타 리워드를 결합한 운동 플랫폼",
    tags: ["Java", "Spring Boot", "MyBatis", "Aurora", "AWS S3", "Gradle", "Vue3", "Vite", "GPS", "PNG Rendering", "Admin Web"],
    description:
      "GPS 기반 러닝 기록 저장과 운동 경로 관리 기능을 개발했습니다.\n상점, 인벤토리, 아바타 장착 등 리워드 기반 사용자 기능과 관리자 백오피스를 구현했습니다.\nPNG 기반 2D 캐릭터 프레임 이미지를 레이어별로 조합해 애니메이션 효과를 표현했습니다.",
    image: "/portfolio/assets/img/runpang-main.png",
    heroImage: "/portfolio/assets/img/runpang-main.png",
    imageFit: "contain",
    year: "2026",
    duration: "2026.02 - 2026.07",
    role: "Backend · API · Admin Web · Reward System · PNG Rendering",
    images: [
      "/portfolio/assets/img/runpang1.png",
      "/portfolio/assets/img/runpang2.png",
      "/portfolio/assets/img/runpang3.png",
    ],
    overview:
      "런팡은 GPS 기반 러닝 기록, 운동 경로 관리, 상점·인벤토리·아바타 장착 기능을 제공하는 리워드형 운동 플랫폼입니다. 백엔드 API와 관리자 백오피스, 일부 사용자 기능 흐름을 개발했습니다.",
    challenge:
      "러닝 기록과 보상 기능이 자연스럽게 이어지도록 데이터 흐름을 정리하고, PNG 기반 2D 캐릭터 이미지를 레이어별로 조합해 화면에서 자연스러운 애니메이션 효과를 표현하는 것이 주요 과제였습니다.",
    process: [
      { step: "01 — GPS Running", body: "GPS 기반 러닝 기록 저장과 운동 경로 관리 기능을 개발했습니다. 사용자의 운동 데이터가 서버에 안정적으로 저장되고 조회될 수 있도록 API와 데이터 처리 흐름을 구성했습니다." },
      { step: "02 — Reward & Avatar", body: "상점, 인벤토리, 아바타 장착 등 리워드 기반 사용자 기능을 개발했습니다. 사용자가 획득한 아이템을 구매·보유·장착하는 흐름을 서비스 데이터 구조에 맞춰 정리했습니다." },
      { step: "03 — Admin & PNG Frame", body: "관리자 백오피스를 개발하고, PNG 기반 2D 캐릭터 프레임 이미지를 레이어별로 조합해 애니메이션 효과를 구현했습니다. 이미지 조합 구조를 화면 상태와 연결해 캐릭터 표현이 자연스럽게 보이도록 처리했습니다." },
    ],
    outcome: "러닝 기록, 운동 경로, 리워드 상점, 아바타 장착, 관리자 백오피스까지 이어지는 핵심 기능을 구현해 서비스 운영 기반을 마련했습니다.",
    accentColor: "#FF6B6B",
  },
  {
    id: "04",
    slug: "ordermate",
    title: "오더메이트",
    category: "QR 테이블오더와 외부 POS를 연결하는 연동 에이전트",
    tags: ["Java", "Spring Boot", "REST API", "MySQL", "Firestore", "QR Order", "POS Integration", "Adapter Pattern"],
    description:
      "QR 테이블오더 주문 데이터를 외부 POS로 전달하기 위한 Java 기반 연동 에이전트입니다.\nPOS 업체별로 다른 주문·연동 방식을 어댑터 구조로 분리해 기존 주문 로직 변경을 최소화했습니다.\n주문 데이터 전달과 처리 상태 연동이 안정적으로 이어지도록 API 흐름을 구성했습니다.",
    image: "/portfolio/assets/img/ordermate-main.png",
    heroImage: "/portfolio/assets/img/ordermate-main.png",
    imageFit: "contain",
    year: "2022-현재",
    duration: "스마트오투오 운영 기간 내",
    role: "Agent API Developer · POS Integration · Adapter Design",
    images: [
      "/portfolio/assets/img/ordermate1.png",
      "/portfolio/assets/img/ordermate2.png",
      "/portfolio/assets/img/ordermate3.png",
    ],
    overview:
      "오더메이트는 QR 테이블오더에서 발생한 주문 데이터를 외부 POS로 전달하기 위한 Java 기반 연동 에이전트입니다.",
    challenge:
      "POS 업체마다 요청 형식, 처리 방식, 응답 구조가 달라 기존 주문 로직을 직접 수정하지 않고도 업체별 연동 차이를 흡수할 수 있는 구조가 필요했습니다.",
    process: [
      { step: "01 — QR Order Flow", body: "QR 테이블오더에서 생성된 주문 데이터를 외부 POS로 전달하는 흐름을 정리했습니다. 주문 생성, 전달, 처리 결과 확인까지 이어지는 API 경로를 구성했습니다." },
      { step: "02 — Agent API", body: "Java와 Spring Boot 기반의 연동 에이전트를 개발했습니다. REST API, MySQL, Firestore를 활용해 주문 데이터와 처리 상태를 다루고, 외부 POS 연동에 필요한 요청·응답 구조를 구현했습니다." },
      { step: "03 — Adapter Structure", body: "외부 POS 업체별 연동 차이를 어댑터 구조로 분리했습니다. 업체별 변경 사항이 발생해도 기존 주문 로직에 미치는 영향을 줄이고, 추가 연동이 가능한 구조로 정리했습니다." },
    ],
    outcome: "QR 주문 데이터를 외부 POS로 전달하는 연동 에이전트를 구축하고, 업체별 연동 차이를 분리해 유지보수성과 확장성을 개선했습니다.",
    accentColor: "#C2410C",
  },
  {
    id: "05",
    slug: "movideo",
    title: "모비디오",
    category: "뉴스 기사 크롤링과 AI TTS 서버 연동",
    tags: ["Java", "Spring Boot", "Spring Framework", "REST API", "Spring Batch", "MySQL", "MongoDB", "Linux", "Python", "Crawler", "AI TTS"],
    description:
      "인터넷 뉴스 매체별 기사 구조에 대응하는 크롤링 API를 관리·개발했습니다.\n수집된 뉴스 기사 본문 데이터를 TTS 서버에서 활용할 수 있도록 정제하고 결과물을 추출하는 처리 흐름을 구현했습니다.\n개발과 서버 운영을 함께 담당하며 장애 원인 파악과 대응 효율을 개선했습니다.",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=900&h=700&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1600&h=900&fit=crop&auto=format",
    year: "2021",
    duration: "2021.08 - 2021.11",
    role: "Backend · Crawling API · TTS Integration · Server Operations",
    images: [
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&h=600&fit=crop&auto=format",
    ],
    overview:
      "모비디오는 뉴스 기사 데이터를 수집·정제한 뒤 TTS 서버와 연동해 음성 결과물 생성 흐름으로 연결하는 프로젝트입니다. 뉴스 매체별 크롤링 구조 운영과 TTS 서버 연동 데이터 처리를 담당했습니다.",
    challenge:
      "뉴스 매체마다 기사 구조가 달라 크롤링 로직을 유연하게 운영해야 했고, 수집된 기사 본문이 TTS 서버에서 안정적으로 활용될 수 있도록 데이터 정제와 전달 흐름을 맞추는 것이 중요했습니다.",
    process: [
      { step: "01 — Crawling API", body: "뉴스 매체별로 상이한 기사 구조에 대응할 수 있도록 크롤링 API를 관리하고 개발했습니다. 기사 수집과 정제 자동화를 통해 콘텐츠 처리 흐름을 안정화했습니다." },
      { step: "02 — TTS Integration", body: "뉴스 기사 본문 데이터를 TTS 서버에서 활용할 수 있도록 가공하고, 처리 결과물을 추출하는 데이터 연동 작업을 수행했습니다." },
      { step: "03 — Server Operations", body: "개발과 함께 서버 운영을 담당했습니다. 운영 중 발생하는 장애 원인을 파악하고 대응 흐름을 정리해 서비스 유지보수 효율을 높였습니다." },
    ],
    outcome: "뉴스 기사 수집, 정제, TTS 서버 연동까지 이어지는 데이터 처리 흐름을 구현하고 운영 안정성을 개선했습니다.",
    accentColor: "#FFD166",
  },
  {
    id: "06",
    slug: "sensemail",
    title: "SenseMail",
    category: "기업·공공기관 웹메일 솔루션 기술지원과 기능 개발",
    tags: ["Java", "JSP", "JavaScript", "Spring Framework", "MVC", "MySQL", "Oracle", "Tibero", "Tomcat", "Apache", "Jeus", "Linux"],
    description:
      "기업 및 공공기관 대상 웹메일 솔루션의 기술지원, 유지보수, 기능 개발을 수행했습니다.\n다양한 WAS와 DB 환경에서 솔루션을 운영하며 고객사별 포털 인증 연동과 커스터마이징을 진행했습니다.\n한국전력, 한국수력원자력, 청소년정책연구원, 덕성여대 등 20여 개 고객사를 지원했습니다.",
    image: "/portfolio/assets/img/sensmail.png",
    heroImage: "/portfolio/assets/img/sensmail.png",
    year: "2018-2021",
    duration: "2018.03 - 2021.06",
    role: "Maintenance · Feature Development · Technical Support",
    images: [
      "/portfolio/assets/img/sensmail.png",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=600&fit=crop&auto=format",
    ],
    overview:
      "SenseMail은 기업 및 공공기관 대상 웹메일 솔루션입니다. 다양한 WAS와 DB 환경에서 솔루션을 운영하며 기술지원, 유지보수, 고객사별 기능 개발을 수행했습니다.",
    challenge:
      "고객사마다 WAS, DB, 포털 인증 방식이 달라 각 환경에 맞게 솔루션을 안정적으로 운영하고, 장애 대응과 기능 개선을 동시에 처리해야 했습니다.",
    process: [
      { step: "01 — Solution Operations", body: "Java, JSP, JavaScript, Spring Framework 기반 웹메일 솔루션을 Tomcat, Apache, Jeus, Linux 등 다양한 운영 환경에서 유지보수했습니다." },
      { step: "02 — Portal & Auth Integration", body: "고객사별 포털과 웹메일 솔루션을 인증 연동하고, 요구사항에 맞춘 기능 개발과 커스터마이징을 수행했습니다." },
      { step: "03 — Technical Support", body: "한국전력, 한국수력원자력, 청소년정책연구원, 덕성여대, 문화예술위원회 등 20여 개 고객사를 지원하며 고객사 기술지원 평가에서 최고점을 획득했습니다." },
    ],
    outcome: "20여 개 기업·공공기관 고객사의 웹메일 운영과 기능 개선을 지원했고, 고객사 기술지원 평가에서 최고점을 획득했습니다.",
    accentColor: "#A7F3D0",
  },
  {
    id: "07",
    slug: "fanfanseller",
    title: "판판셀러",
    category: "중소기업유통센터 웹 커머스 플랫폼 고도화",
    tags: ["Java", "JSP", "JavaScript", "eGovFrame", "MVC", "Oracle", "WebTob", "Jeus", "Gradle", "SVN"],
    description:
      "중소기업유통센터 웹 커머스 플랫폼 판판셀러 개발 프로젝트입니다.\nMVC 기반 관리자 및 사용자 화면과 백엔드 기능을 개발했습니다.\n공공기관 커머스 서비스 운영에 필요한 주요 기능과 Oracle 기반 데이터 처리 흐름을 구현했습니다.",
    image: "/portfolio/assets/img/fanfanseller-main.png",
    heroImage: "/portfolio/assets/img/fanfanseller-main.png",
    year: "2021-2022",
    duration: "2021.11 - 2022.04",
    role: "MVC Web Developer",
    images: [
      "/portfolio/assets/img/fanfanseller-main.png",
      "/portfolio/assets/img/fanfanseller1.png",
      "/portfolio/assets/img/fanfanseller2.png",
    ],
    overview:
      "판판셀러는 중소기업유통센터의 웹 커머스 플랫폼입니다. 전자정부프레임워크 기반 MVC 구조에서 관리자·사용자 화면과 백엔드 기능 개발을 담당했습니다.",
    challenge:
      "공공기관 커머스 서비스 운영에 필요한 화면과 기능을 기존 MVC 구조 안에서 안정적으로 연결하고, Oracle DB 기반의 데이터 처리 흐름을 정확하게 구현해야 했습니다.",
    process: [
      { step: "01 — MVC Structure", body: "전자정부프레임워크 기반 MVC 구조에서 관리자 및 사용자 화면의 요청, 응답, 데이터 처리 흐름을 구현했습니다." },
      { step: "02 — Commerce Features", body: "공공기관 커머스 서비스 운영에 필요한 주요 기능을 개발했습니다. JSP, JavaScript, Oracle 기반으로 화면과 백엔드 처리를 연결했습니다." },
      { step: "03 — Stable Operations", body: "Oracle DB 기반 데이터 처리와 운영 기능 개발을 통해 안정적인 웹 커머스 서비스 운영을 지원했습니다." },
    ],
    outcome: "중소기업유통센터 판판셀러의 관리자·사용자 화면과 백엔드 주요 기능을 개발해 공공기관 커머스 운영을 지원했습니다.",
    accentColor: "#FBBF24",
  },
  {
    id: "08",
    slug: "kbook",
    title: "한국도서출판정보센터",
    category: "도서판매 홈페이지 결제·본인인증·통계 고도화",
    tags: ["Java", "JSP", "JavaScript", "Spring Framework", "MySQL", "Git", "Maven", "NicePay", "Auth API", "Chart"],
    description:
      "한국도서출판정보센터 도서판매 홈페이지 고도화 프로젝트입니다.\n나이스페이 결제 모듈, 본인인증 API, 통계 차트 연동 기능을 개발했습니다.\n외부 모듈과 내부 서비스 흐름을 연결하고 운영 데이터를 확인할 수 있는 화면을 구현했습니다.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=900&h=700&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1600&h=900&fit=crop&auto=format",
    year: "2023",
    duration: "2023",
    role: "Web Developer · Payment · Auth API · Statistics Chart",
    images: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop&auto=format",
    ],
    overview:
      "한국도서출판정보센터 프로젝트에서는 도서판매 홈페이지의 결제, 본인인증, 통계 차트 연동 기능을 중심으로 고도화 작업을 수행했습니다.",
    challenge:
      "나이스페이 결제 모듈과 본인인증 API 같은 외부 모듈을 기존 서비스 흐름에 안정적으로 연결하고, 통계 데이터를 운영자가 확인할 수 있는 차트 화면으로 제공해야 했습니다.",
    process: [
      { step: "01 — Payment Module", body: "나이스페이 결제 모듈을 서비스 흐름에 연결하고, 결제 요청과 응답 처리 구조를 구현했습니다." },
      { step: "02 — Auth API", body: "본인인증 API 연동 흐름을 개발했습니다. 외부 인증 모듈과 내부 사용자 흐름이 자연스럽게 이어지도록 요청·응답 처리를 구성했습니다." },
      { step: "03 — Statistics Chart", body: "운영 데이터를 확인할 수 있는 통계 차트 영역을 개발했습니다. Java, JSP, JavaScript, Spring Framework, MySQL 기반으로 화면과 데이터를 연결했습니다." },
    ],
    outcome: "결제, 본인인증, 통계 차트 기능을 구현해 한국도서출판정보센터 도서판매 홈페이지의 주요 서비스 흐름을 고도화했습니다.",
    accentColor: "#C2410C",
  },
];

type Project = (typeof projects)[number];

const skillGroups = [
  { category: "Backend", items: ["Java", "Spring Boot", "JSP / Servlet", "Spring Batch"] },
  { category: "Frontend", items: ["HTML", "JavaScript", "Vue.js", "jQuery"] },
  { category: "Database · Infra", items: ["MySQL", "MariaDB", "Oracle", "MongoDB", "AWS", "Linux", "Tomcat", "Nginx", "Apache"] },
  { category: "Tools · Operations", items: ["Git", "GitLab", "Gradle", "Maven", "API Integration", "Technical Support"] },
];

const techSkills = [
  { name: "HTML", image: "/portfolio/assets/img/html.png" },
  { name: "Java", image: "/portfolio/assets/img/java.png" },
  { name: "JavaScript", image: "/portfolio/assets/img/javascript.png" },
  { name: "Vue.js", image: "/portfolio/assets/img/vuejs.png" },
  { name: "jQuery", image: "/portfolio/assets/img/jquery.png" },
  { name: "Spring Boot", image: "/portfolio/assets/img/springboot.png" },
  { name: "MyBatis", image: "/portfolio/assets/img/mybatis.jpeg" },
  { name: "MySQL", image: "/portfolio/assets/img/mysql.png" },
  { name: "Firestore", image: "/portfolio/assets/img/firestore.svg" },
  { name: "AWS", image: "/portfolio/assets/img/aws.jpeg" },
  { name: "Linux", image: "/portfolio/assets/img/linux.png" },
  { name: "Tomcat", image: "/portfolio/assets/img/tomcat.png" },
  { name: "Atlassian", image: "/portfolio/assets/img/atlassian.jpg" },
  { name: "Figma", image: "/portfolio/assets/img/figma.webp" },
];

const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Project", id: "work" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];
const navSectionIds = navItems.map((item) => item.id);

const careerItems = [
  { period: "2016.07 ~ 2016.08", title: "블루모바일", description: "인턴" },
  { period: "2018.02 ~ 2021.06", title: "㈜아이모션", description: "기술지원팀 연구원" },
  { period: "2021.08 ~ 2021.11", title: "인라이플", description: "주임 연구원" },
  { period: "2021.11 ~ 2022.04", title: "해올", description: "정부과제 프리랜서" },
  { period: "2022.04 ~ 현재", title: "스마트오투오", description: "프리랜서 신분으로 재직중" },
];

const educationItems = [
  { period: "2011", title: "경성고등학교", description: "졸업" },
  { period: "2011", title: "한신대학교", description: "컴퓨터공학부 입학" },
  { period: "2018", title: "한신대학교", description: "컴퓨터공학부 졸업" },
];

const extraItems = [
  { category: "Overseas", title: "캐나다 어학연수", description: "2016.09 ~ 2017.04" },
  { category: "Certificate", title: "리눅스마스터 2급", description: "License" },
  { category: "Certificate", title: "ILSC Business English", description: "Language Program" },
  { category: "License", title: "운전면허 1종 보통", description: "Driver License" },
];

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <span className="text-xs font-mono text-primary tracking-widest">{index}</span>
      <div className="flex-1 h-px bg-border" />
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
    </div>
  );
}

function ProjectDetail({ project, onBack }: { project: Project; onBack: () => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="bg-background text-foreground min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      style={{ fontFamily: "var(--font-body)" }}
    >
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 bg-background/90 backdrop-blur-xl border-b border-border">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <span
          className="font-bold tracking-[0.2em] text-sm uppercase"
          style={{ fontFamily: "var(--font-display)" }}
        >
          PORTFOLIO
        </span>
      </div>

      <section className="relative h-[72vh] md:h-[82vh] overflow-hidden bg-muted pt-20">
        <motion.img
          src={project.heroImage}
          alt={project.title}
          className={`w-full h-full ${
            project.imageFit === "contain" ? "object-contain p-8 md:p-12" : "object-cover"
          }`}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
          >
            <div className="flex flex-wrap items-center gap-4 mb-5">
              <span className="text-xs font-mono text-primary tracking-widest">{project.id}</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">{project.year}</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">{project.category}</span>
            </div>
            <h1
              className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.9] tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: project.accentColor }}
            >
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      <motion.div
        className="border-b border-border px-8 md:px-16 py-6 grid grid-cols-2 md:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        {[
          { icon: Calendar, label: "Year", value: project.year },
          { icon: Clock, label: "Duration", value: project.duration },
          { icon: User, label: "Role", value: project.role },
          { icon: ArrowUpRight, label: "Category", value: project.category },
        ].map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-start gap-3">
            <Icon size={14} className="text-primary mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                {label}
              </div>
              <div className="text-sm font-medium">{value}</div>
            </div>
          </div>
        ))}
      </motion.div>

      <main className="px-8 md:px-16 py-20 md:py-28 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 mb-24">
          <FadeUp className="md:col-span-4">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-mono tracking-widest" style={{ color: project.accentColor }}>
                Overview
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-widest border border-border text-muted-foreground px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="md:col-span-8">
            <p
              className="text-xl md:text-2xl leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              {project.overview}
            </p>
            <div className="border-l-2 pl-6 py-2" style={{ borderColor: project.accentColor }}>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {project.challenge}
              </p>
            </div>
          </FadeUp>
        </div>

        <FadeUp className="mb-24">
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {project.images.map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden bg-muted group ${
                  src.includes("fblshop") ? "h-56 md:h-72 md:col-span-3 xl:col-span-1" : "h-64 md:h-80"
                }`}
              >
                <img
                  src={src}
                  alt={`${project.title} view ${i + 1}`}
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                    project.imageFit === "contain" || src.includes("fblshop")
                      ? "object-contain p-5"
                      : "object-cover"
                  }`}
                />
                <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            ))}
          </div>
        </FadeUp>

        <div className="mb-24">
          <FadeUp>
            <div className="flex items-center gap-4 mb-12">
              <span className="text-xs font-mono tracking-widest" style={{ color: project.accentColor }}>
                Process
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>
          </FadeUp>
          <div className="divide-y divide-border border-y border-border">
            {project.process.map((item, i) => (
              <FadeUp key={item.step} delay={i * 0.08}>
                <div className="grid md:grid-cols-12 gap-6 py-10">
                  <div className="md:col-span-3">
                    <span className="text-xs font-mono uppercase tracking-widest" style={{ color: project.accentColor }}>
                      {item.step}
                    </span>
                  </div>
                  <div className="md:col-span-9">
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        <FadeUp>
          <div className="border border-border p-10 md:p-16 relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-64 h-64 opacity-[0.06] blur-[80px] rounded-full"
              style={{ background: project.accentColor }}
            />
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-mono tracking-widest" style={{ color: project.accentColor }}>
                Outcome
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <p
              className="text-xl md:text-2xl leading-relaxed max-w-3xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
            >
              {project.outcome}
            </p>
          </div>
        </FadeUp>
      </main>
    </motion.div>
  );
}

function Portfolio({ onProjectClick }: { onProjectClick: (project: Project) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("about");

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      const focusLine = window.innerHeight * 0.42;
      const currentSection =
        navSectionIds.find((id) => {
          const section = document.getElementById(id);
          if (!section) return false;

          const rect = section.getBoundingClientRect();
          return rect.top <= focusLine && rect.bottom > focusLine;
        }) ?? activeSection;

      setActiveSection(currentSection);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [activeSection]);

  return (
    <div
      className="bg-background text-foreground overflow-x-hidden"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* ── NAV ── */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 transition-all duration-500 ${
          scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border" : ""
        }`}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a
          href="#"
          className="font-bold tracking-[0.2em] text-sm uppercase"
          style={{ fontFamily: "var(--font-display)" }}
        >
          PORTFOLIO
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const sectionId = item.id;
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.id}
                href={`#${sectionId}`}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setActiveSection(sectionId)}
                className={`relative text-xs uppercase tracking-widest transition-colors duration-300 group ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
          <a
            href="#contact"
            className="text-xs uppercase tracking-widest border border-primary text-primary px-5 py-2.5 hover:bg-primary hover:text-background transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* ── MOBILE MENU ── */}
      <motion.div
        className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-10 md:hidden"
        initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
        animate={
          menuOpen
            ? { opacity: 1, clipPath: "inset(0 0 0% 0)" }
            : { opacity: 0, clipPath: "inset(0 0 100% 0)" }
        }
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      >
        {navItems.map((item) => {
          const sectionId = item.id;
          const isActive = activeSection === sectionId;

          return (
            <a
              key={item.id}
              href={`#${sectionId}`}
              aria-current={isActive ? "page" : undefined}
              onClick={() => {
                setActiveSection(sectionId);
                setMenuOpen(false);
              }}
              className={`text-5xl font-bold transition-colors ${
                isActive ? "text-primary" : "hover:text-primary"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {item.label}
            </a>
          );
        })}
      </motion.div>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        id="hero"
        className="relative h-screen flex flex-col justify-end px-8 md:px-16 pb-20 overflow-hidden"
      >
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* glow */}
        <div
          className="absolute top-[30%] right-[20%] w-[500px] h-[500px] rounded-full opacity-[0.08] blur-[140px]"
          style={{ background: "var(--primary)" }}
        />
        <div
          className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] rounded-full opacity-[0.05] blur-[100px]"
          style={{ background: "#FDBA74" }}
        />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10">
          <motion.p
            className="text-xs uppercase tracking-[0.35em] text-primary mb-8 font-mono"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Creative Developer
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              className="text-[clamp(3.5rem,10.5vw,9.5rem)] font-bold leading-[0.88] tracking-tight"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "var(--font-display)" }}
            >
              이한얼
            </motion.h1>
          </div>

          <motion.div
            className="flex flex-col md:flex-row md:items-end gap-8 mt-14"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
          >
            <p className="text-muted-foreground text-sm leading-relaxed max-w-[320px]">
              기획부터 프론트엔드, 백엔드, 데이터베이스, 인프라까지 서비스 구현 전반을
              연결하는 올라운더 개발자입니다.
            </p>

            <div className="flex gap-4">
              <a
                href="#work"
                className="group flex items-center gap-2 bg-primary text-background px-7 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-foreground transition-colors duration-300"
              >
                View Project
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 border border-border text-foreground px-7 py-3.5 text-xs uppercase tracking-widest font-medium hover:border-primary hover:text-primary transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          className="absolute bottom-10 right-8 md:right-16 flex flex-col items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <span
            className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
          <div className="w-px h-16 bg-border relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-primary"
              style={{ height: "45%" }}
              animate={{ y: ["0%", "230%"] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="px-8 md:px-16 py-32 md:py-44 border-t border-border">
        <FadeUp>
          <SectionLabel index="01" label="About" />
        </FadeUp>

        <div className="grid md:grid-cols-12 gap-16 items-start">
          <FadeUp delay={0.1} className="md:col-span-6">
            <p
              className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-[1.15] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              아이디어를 실제 서비스로 구현합니다.
              <br />
              기획, 개발, 인프라, 운영까지
              <br />
              제품이 완성되는 과정을 직접 설계합니다.
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="md:col-span-6 flex flex-col gap-6">
            <p className="text-muted-foreground leading-relaxed text-sm">
              저는 아이디어를 실제 서비스로 구현하는 백엔드 기반 프로덕트 빌더입니다.
              Java, Spring Boot, MySQL, AWS를 활용해 주문 플랫폼, 관리자 시스템, API,
              인프라 환경을 설계하고 개발해왔습니다.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              기능 구현에만 머무르지 않고, 사용자 흐름, 운영 구조, 확장 가능성까지 함께
              고려하며 서비스가 실제로 작동하고 성장할 수 있는 형태를 만드는 데 집중합니다.
            </p>

            <div className="pt-8 border-t border-border mt-2">
              <h3
                className="text-xs uppercase tracking-widest text-primary mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                가능한 기술
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {techSkills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-3">
                    <div className="w-20 h-20 rounded-full border border-border bg-card flex items-center justify-center overflow-hidden">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-11 h-11 object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest text-center leading-tight min-h-7 flex items-start justify-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border mt-2">
              {(
                [
                  ["12+", "Projects"],
                  ["8+", "Experience"],
                  ["10+", "Clients"],
                ] as [string, string][]
              ).map(([num, label]) => (
                <div key={label}>
                  <div
                    className="text-3xl font-bold text-primary"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {num}
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1.5">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="px-8 md:px-16 py-32 md:py-44 border-t border-border">
        <FadeUp>
          <SectionLabel index="02" label="Experience" />
        </FadeUp>

        <div className="grid lg:grid-cols-12 gap-16">
          <FadeUp delay={0.1} className="lg:col-span-7">
            <h3
              className="text-xl font-bold mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Career
            </h3>
            <div className="divide-y divide-border border-y border-border">
              {careerItems.map((item) => (
                <div key={`${item.period}-${item.title}`} className="grid sm:grid-cols-12 gap-4 py-6">
                  <div className="sm:col-span-4 text-xs font-mono text-primary tracking-widest">
                    {item.period}
                  </div>
                  <div className="sm:col-span-8">
                    <div className="font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>
                      {item.title}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="lg:col-span-5 flex flex-col gap-12">
            <div>
              <h3
                className="text-xl font-bold mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Education
              </h3>
              <div className="divide-y divide-border border-y border-border">
                {educationItems.map((item) => (
                  <div key={`${item.period}-${item.title}-${item.description}`} className="py-5">
                    <div className="text-xs font-mono text-primary tracking-widest mb-2">
                      {item.period}
                    </div>
                    <div className="font-bold" style={{ fontFamily: "var(--font-display)" }}>
                      {item.title}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3
                className="text-xl font-bold mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                More
              </h3>
              <div className="grid sm:grid-cols-2 gap-px bg-border">
                {extraItems.map((item) => (
                  <div key={`${item.category}-${item.title}`} className="bg-background p-5">
                    <div className="text-[10px] uppercase tracking-widest text-primary mb-3">
                      {item.category}
                    </div>
                    <div className="font-bold" style={{ fontFamily: "var(--font-display)" }}>
                      {item.title}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── WORK ── */}
      <section id="work" className="px-8 md:px-16 pb-32 md:pb-44 border-t border-border pt-24">
        <FadeUp>
          <SectionLabel index="03" label="Selected Project" />
        </FadeUp>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-px bg-border">
          {projects.map((project, i) => (
            <FadeUp key={project.id} delay={i * 0.07}>
              <div
                className="group relative bg-background overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => onProjectClick(project)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onProjectClick(project);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                {/* image */}
                <div className="relative h-64 xl:h-72 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 ${
                      project.imageFit === "contain" ? "object-contain p-5" : "object-cover"
                    }`}
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-background/5 transition-colors duration-500" />

                  {/* hover cta */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 py-3 bg-primary text-background flex items-center gap-2 text-xs uppercase tracking-widest font-medium">
                      View Detail
                      <ArrowUpRight size={14} />
                    </div>
                  </motion.div>
                </div>

                {/* info */}
                <div className="p-6 flex items-start justify-between border-b border-border min-h-[260px]">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-mono text-primary">{project.id}</span>
                      <span className="text-xs text-muted-foreground uppercase tracking-widest">{project.year}</span>
                    </div>
                    <h3
                      className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                      {project.category}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xl whitespace-pre-line line-clamp-6">
                      {project.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 mt-1 ml-4 flex-shrink-0"
                  />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="px-8 md:px-16 py-32 md:py-44 border-t border-border">
        <FadeUp>
          <SectionLabel index="04" label="Capabilities" />
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border border border-border">
          {skillGroups.map((group, i) => (
            <FadeUp key={group.category} delay={i * 0.1} className="p-8 md:p-10">
              <h3 className="text-xs uppercase tracking-widest text-primary mb-8 font-mono">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-5">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group cursor-default"
                  >
                    <span className="w-1 h-1 bg-border group-hover:bg-primary transition-colors duration-300 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="px-8 md:px-16 py-32 md:py-44 border-t border-border relative overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-[0.07] blur-[120px]"
          style={{ background: "var(--primary)" }}
        />

        <FadeUp>
          <SectionLabel index="05" label="Contact" />
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="text-[clamp(2.5rem,7vw,7.5rem)] font-bold leading-[0.88] tracking-tight mb-16 max-w-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let's build something
            <br />
            <span className="text-primary">remarkable.</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.2} className="flex flex-col md:flex-row md:items-center gap-8 flex-wrap">
          <a
            href="mailto:dlgksdjf0054@gmail.com"
            className="group flex items-center gap-3 text-xl md:text-2xl font-bold hover:text-primary transition-colors duration-300"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <Mail size={22} className="text-primary flex-shrink-0" />
            dlgksdjf0054@gmail.com
            <ArrowUpRight
              size={18}
              className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-1"
            />
          </a>
        </FadeUp>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-8 md:px-16 py-7 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xs text-muted-foreground font-mono">
          © 2025 이한얼. All rights reserved.
        </span>
        <span className="text-xs text-muted-foreground font-mono">Seoul, South Korea</span>
      </footer>
    </div>
  );
}

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setActiveProject(project);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setActiveProject(null);
  };

  return (
    <AnimatePresence mode="wait">
      {activeProject ? (
        <ProjectDetail
          key={activeProject.slug}
          project={activeProject}
          onBack={handleBack}
        />
      ) : (
        <Portfolio key="portfolio" onProjectClick={handleProjectClick} />
      )}
    </AnimatePresence>
  );
}
