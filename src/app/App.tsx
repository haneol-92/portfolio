import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Mail, Menu, User, X } from "lucide-react";

const projects = [
  {
    id: "01",
    slug: "orderplace",
    title: "오더플레이스",
    category: "대규모 트래픽에 대응하는 다채널 확장형 주문 플랫폼",
    tags: ["Java", "Spring Boot", "Vue.js", "MySQL", "Firestore", "Redis", "AWS", "Tomcat", "Gradle", "Git"],
    description:
      "대규모 트래픽에 대응하는 다채널 확장형 주문 플랫폼입니다.\n테이블 오더, 푸드코트, 페스티벌 등 성격이 다른 채널을 단일 서비스에 Plug-in 방식으로 유연하게 붙일 수 있도록 설계했습니다.\n기획, 아키텍처, API, 관리자 웹, 배포, 운영, 최적화까지 전반을 수행했습니다.",
    image: "/portfolio/assets/img/orderplace-main.png",
    heroImage: "/portfolio/assets/img/orderplace-main.png",
    imageFit: "contain",
    year: "2026",
    duration: "2026",
    role: "Planning · API · Admin Web · Deploy · Operations · Optimization",
    images: [
      "/portfolio/assets/img/orderplace.png",
      "/portfolio/assets/img/orderplace2.png",
      "/portfolio/assets/img/orderplace3.png",
    ],
    overview:
      "오더플레이스는 성격이 다른 여러 비즈니스 채널(테이블 오더, 페스티벌 등)을 단일 코어에 유연하게 연동할 수 있도록 설계된 '플러그인' 형태의 통합 주문 플랫폼입니다.",
    challenge:
      "주문·결제와 같은 핵심 도메인은 공통화하고 채널별 특화 요구사항은 독립적으로 분리하는 아키텍처를 구축하여, 새로운 비즈니스 모델이 추가될 때 즉각적으로 대응할 수 있는 기반을 마련했습니다.",
    process: [
      { step: "01 — Planning & Architecture", body: "신규 채널 확장 시 기존 코어 시스템에 미치는 영향을 최소화하는 구조 설계에 주력했습니다. 데이터베이스 스키마 단위에서 공통 도메인과 채널별 도메인을 명확하게 분리했습니다. 또한 프론트엔드와 백엔드의 페이지 라우팅 경로를 서비스별로 완전히 독립시켜, 새로운 채널 기능이 추가되더라도 기존 서비스의 운영에는 전혀 영향을 주지 않도록 안정성을 확보했습니다." },
      { step: "02 — API & Admin Web", body: "Java와 Spring Boot를 기반으로 유연한 API 및 통합 관리자 웹을 구축했습니다. 데이터 특성에 따른 효율적인 저장소 분리 처리에 집중하여, 트랜잭션 안정성이 필수적인 주문 및 상품 데이터는 MySQL로 관리하고 실시간 상태 업데이트가 잦은 운영 데이터는 Firestore와 연동해 전체 시스템의 부하를 낮췄습니다." },
      { step: "03 — Deploy & Operations & Optimization", body: "AWS 인프라 구축부터 서비스 배포, 운영까지의 전체 사이클을 수행했습니다. 특히 페스티벌 채널 운영 중 특정 시간대에 트래픽이 폭증하면서 DB 커넥션 병목 현상을 겪었습니다. 이를 해결하기 위해 쿼리 인덱스를 우선적으로 최적화하고 Redis를 활용한 캐싱 계층을 도입하여 데이터베이스 부하를 분산시켰으며, 결과적으로 대규모 동시 접속 환경에서도 지연 없는 안정적인 주문 처리를 이끌어냈습니다." },
    ],
    outcome: "푸드트럭, 페스티벌, 테이블오더 등 성격이 다른 주문 채널을 하나의 시스템으로 통합 운영할 수 있는 유연한 확장형 플랫폼 구조를 완성했습니다.",
    accentColor: "#C2410C",
  },
  {
    id: "02",
    slug: "football-lounge",
    title: "풋볼라운지",
    category: "축구 커뮤니티와 유니폼 커머스를 결합한 통합 플랫폼",
    tags: ["Java", "Spring Boot", "Vue.js", "MySQL", "Firestore", "AWS", "Tomcat", "Gradle", "Git", "Auth", "Commerce"],
    description:
      "아마추어 축구팀의 매칭 및 용병 모집 등 커뮤니티 기능과 자체 커머스(풋볼라운지샵)를 결합한 올인원 서비스입니다.\n커뮤니티 유저가 이탈 없이 커스텀 유니폼 제작과 주문 결제로 넘어갈 수 있도록 두 도메인 간의 연동 구조를 설계했습니다.\n클라이언트 앱 개발을 제외한 백엔드 아키텍처 및 서비스 기획 전반을 총괄했습니다.",
    image: "/portfolio/assets/img/footballlounge-main.png",
    heroImage: "/portfolio/assets/img/footballlounge-main.png",
    imageFit: "contain",
    year: "2026",
    duration: "2026",
    role: "Planning · Backend Architecture · API · Commerce · Operations",
    images: [
      "/portfolio/assets/img/footballlounge-1.png",
      "/portfolio/assets/img/footballlounge-2.png",
      "/portfolio/assets/img/footballlounge-3.png",
      "/portfolio/assets/img/fblshop-main.png",
      "/portfolio/assets/img/fblshop1.png",
      "/portfolio/assets/img/fblshop2.png",
    ],
    overview:
      "풋볼라운지는 아마추어 축구팀의 매칭 및 용병 모집 등 커뮤니티 기능과 자체 커머스(풋볼라운지샵)를 결합한 올인원 서비스입니다. 클라이언트 앱 개발을 제외한 백엔드 아키텍처 및 서비스 기획 전반을 총괄했습니다.",
    challenge:
      "가장 주안점을 둔 부분은 커뮤니티에서 활동하던 유저가 이탈 없이 자연스럽게 커스텀 유니폼 제작과 주문 결제로 넘어갈 수 있도록, 두 도메인 간의 매끄러운 연동 구조를 설계하는 것이었습니다.",
    process: [
      { step: "01 — Platform Planning", body: "단순한 기능의 나열을 넘어 유저가 팀을 개설하고 매칭 및 용병을 모집하는 일련의 과정이 유기적으로 맞물리도록 백엔드 도메인 구조를 기획했습니다. 특히 앱 내에서 진행된 팀원 간의 매칭 투표 데이터를 취합하여 실제 매칭 스케줄 데이터로 변환하고 생성하는 핵심 로직을 촘촘하게 설계하여 커뮤니티 플랫폼으로서의 기본기를 다졌습니다." },
      { step: "02 — Commerce Integration", body: "가장 까다로웠던 커뮤니티 앱과 커머스 샵 간의 통합 흐름을 구현해 냈습니다. 앱 유저의 인증 정보와 소속 팀 데이터를 커머스 영역으로 매끄럽게 연동하기 위해, 두 서비스가 공통 유저 테이블을 바라보도록 통합 유저 인증 서비스를 설계했습니다. 이를 통해 유저가 별도의 재가입이나 번거로운 절차 없이 즉시 커스텀 유니폼 주문서를 작성하고 결제할 수 있는 심리스한 파이프라인을 완성했습니다." },
      { step: "03 — Launch & Operations", body: "이전 프로젝트(오더플레이스)의 구축 경험을 살려 검증된 기술 스택을 바탕으로 핵심 API와 통합 관리자 시스템을 구현했습니다. 현재 1차 서비스 런칭을 완료했으며, 초기 사용자 유입과 데이터 증가에 발맞춰 병목이 발생하는 구간을 파악하고 API 성능을 튜닝하며 안정적인 운영 기반을 탄탄하게 다지고 있습니다." },
    ],
    outcome: "팀 커뮤니티와 맞춤형 커머스라는 성격이 다른 두 서비스를 성공적으로 융합한 1차 버전을 런칭했습니다. 이를 통해 아마추어 축구인들이 팀 운영부터 장비 맞춤 제작까지 단일 서비스 내에서 모두 해결할 수 있는 독자적인 플랫폼 생태계의 기술적 토대를 마련했습니다.",
    accentColor: "#78D7FF",
  },
  {
    id: "03",
    slug: "runpang",
    title: "런팡",
    category: "캐릭터 꾸미기 보상을 결합한 GPS 기반 운동 리워드 플랫폼",
    tags: ["Java", "Spring Boot", "Vue.js", "MySQL", "Firestore", "AWS", "Tomcat", "Gradle", "Git", "GPS", "PNG Rendering", "Watch App"],
    description:
      "GPS 기반 러닝 인증과 캐릭터 커스터마이징 보상 시스템을 결합한 운동 리워드 플랫폼입니다.\n운동 기록 인증부터 포인트 적립, 아이템 장착, 스마트워치 연동까지 이어지는 서비스 파이프라인을 설계했습니다.\n클라이언트 앱 개발을 제외한 서비스 기획 및 백엔드 아키텍처 전반을 총괄했습니다.",
    image: "/portfolio/assets/img/runpang-main.png",
    heroImage: "/portfolio/assets/img/runpang-main.png",
    imageFit: "contain",
    year: "2026",
    duration: "2026",
    role: "Planning · Backend Architecture · API · Admin Web · Operations",
    images: [
      "/portfolio/assets/img/runpang1.png",
      "/portfolio/assets/img/runpang2.png",
      "/portfolio/assets/img/runpang3.png",
    ],
    overview:
      "런팡은 단순한 운동 기록을 넘어, GPS 기반의 러닝 인증과 캐릭터 커스터마이징 보상 시스템을 결합한 통합 리워드 플랫폼입니다. 클라이언트 앱 개발을 제외한 서비스 기획 및 백엔드 아키텍처 전반을 총괄하며, 운동 기록 인증부터 포인트 적립, 아이템 장착, 스마트워치 연동까지 이어지는 전체 서비스 파이프라인을 설계했습니다.",
    challenge:
      "특히 유저가 획득한 다양한 아이템 조합의 좌표를 계산하여 자연스러운 단일 PNG 프레임으로 합성해 내는 로직을 구현하는 데 집중했습니다.",
    process: [
      { step: "01 — Running & GPS", body: "핵심 도메인인 러닝 기록의 신뢰도를 높이기 위해 GPS 데이터 수집 및 인증 파이프라인을 구축했습니다. 이를 바탕으로 안정적인 서버 API를 설계하고, 실제 서비스 운영 시 발생할 수 있는 GPS 신호 끊김, 어뷰징 등의 예외 상황에 대비한 견고한 운영 구조를 확립했습니다." },
      { step: "02 — Reward & Character", body: "유저의 리텐션을 끌어올릴 수 있도록 보상 및 꾸미기 도메인의 흐름을 유기적으로 설계했습니다. GPS 운동 인증 결과가 포인트 적립 트랜잭션으로 안전하게 이어지도록 구성하고, 획득한 재화로 다수의 캐릭터 아이템을 구매·장착하는 상태 관리 데이터 구조를 구현했습니다." },
      { step: "03 — PNG Frame & Watch App", body: "유저가 커스텀한 개별 아이템 이미지를 정확한 위치 좌표에 배치하여 단일 PNG 프레임으로 렌더링하는 까다로운 화면 구조 로직을 완성했습니다. 또한 모바일 앱뿐만 아니라 스마트워치 환경에서도 운동 데이터와 보상 상태가 지연 없이 실시간으로 동기화될 수 있도록 매끄러운 데이터 연동 흐름을 구축했습니다." },
    ],
    outcome: "GPS 기반 기록 측정, 복합적인 캐릭터 보상 시스템, 워치앱 동기화까지 아우르는 확장성 높은 서비스 구조의 기반을 다지며 런팡의 성공적인 1차 서비스 런칭을 이끌어냈습니다.",
    accentColor: "#FF6B6B",
  },
  {
    id: "04",
    slug: "ordermate",
    title: "오더메이트",
    category: "복수 POS 시스템 연동을 위한 QR 주문 Agent API 구축",
    tags: ["Java", "Spring Boot", "Firestore", "Agent API", "QR Order", "POS Integration", "NicePOS", "Okpos", "MetaPOS"],
    description:
      "자체 QR 주문 서비스에서 발생한 주문 내역을 나이스포스, 오케이포스, 메타포스 등 외부 POS 시스템으로 전달하는 Agent API 개발 프로젝트입니다.\n각 POS 벤더마다 다른 결제 정책과 주문 처리 구조를 분석하고,\n서로 다른 외부 시스템의 규격을 우리 서비스의 표준 주문 흐름으로 통합하는 데 중점을 두었습니다.",
    image: "/portfolio/assets/img/ordermate-main.png",
    heroImage: "/portfolio/assets/img/ordermate-main.png",
    imageFit: "contain",
    year: "2024",
    duration: "2024",
    role: "Agent API Developer · POS Integration",
    images: [
      "/portfolio/assets/img/ordermate1.png",
      "/portfolio/assets/img/ordermate2.png",
      "/portfolio/assets/img/ordermate3.png",
    ],
    overview:
      "오더메이트는 자체 QR 주문 서비스에서 발생한 내역을 나이스포스, 오케이포스, 메타포스 등 외부 POS 시스템으로 전달하는 Agent API 개발 프로젝트입니다.",
    challenge:
      "각 POS 벤더마다 고유한 결제 정책과 주문 처리 구조가 다르기 때문에, 서로 다른 외부 시스템의 규격을 우리 서비스의 표준 주문 흐름으로 통합하는 데 중점을 두었습니다.",
    process: [
      { step: "01 — QR Order Flow", body: "고객의 QR 주문이 매장의 실제 POS 처리로 이어지는 전체 파이프라인을 재설계했습니다. 특히 Firestore를 활용해 주문 상태를 실시간으로 동기화하는 로직을 구현하여, 자체 서비스와 외부 POS 간의 처리 상태를 일치시키고 매장 내 주문 누락을 방지했습니다." },
      { step: "02 — Agent API", body: "Java와 Spring Boot를 기반으로 외부 POS 연동을 전담하는 Agent API를 개발했습니다. 다수의 POS 시스템이 가진 상이한 통신 방식, 즉 즉시 응답을 반환하는 동기 방식과 콜백으로 처리 결과를 전달하는 비동기 방식을 분석하여 각 처리 흐름에 맞게 컨트롤러와 연동 구조를 분리 설계함으로써 주문 데이터가 꼬이는 문제를 방지했습니다." },
      { step: "03 — POS Operation", body: "각 매장마다 다르게 설정된 POS 정책과 연동 차이를 시스템 내에서 일관되게 처리하도록 데이터 공통화 작업을 수행했습니다. 외부 시스템과의 의존성을 내부 코어 서비스로부터 분리하여, 현재 다수의 오프라인 매장에서 트러블 없이 주문이 처리되는 운영 환경을 구축했습니다." },
    ],
    outcome: "이질적인 외부 POS 시스템을 하나의 파이프라인으로 묶어내는 Agent API를 구축해 현재 여러 오프라인 매장에서 실운영 중입니다. 이를 통해 매장의 운영 효율을 높이고, 향후 다른 POS 벤더와도 유연하게 연동할 수 있는 주문 인프라를 확보했습니다.",
    accentColor: "#C2410C",
  },
  {
    id: "05",
    slug: "movideo",
    title: "모비디오",
    category: "AI TTS · Batch Automation",
    tags: ["Java", "Spring Boot", "Spring Batch", "AI TTS", "Crawler"],
    description:
      "뉴스 매체의 기사를 수집하고 정제한 뒤,\nAI TTS 서버와 연동해 영상 콘텐츠 제작 흐름으로 연결한 프로젝트입니다.\n크롤링 데이터 처리, Spring Batch 기반 자동화,\nAI 음성 변환 서버 연동 구조를 설계하고 개발했습니다.",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=900&h=700&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1600&h=900&fit=crop&auto=format",
    year: "2020",
    duration: "2020",
    role: "Backend · Batch Automation",
    images: [
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&h=600&fit=crop&auto=format",
    ],
    overview:
      "모비디오는 뉴스 매체의 기사를 수집하고 정제한 뒤 AI TTS 서버와 연동해 영상 콘텐츠 제작 흐름으로 연결한 프로젝트입니다.",
    challenge:
      "크롤링 데이터의 품질을 정리하고, 자동 배치 처리와 AI 음성 변환 서버 연동이 안정적으로 이어지는 구조를 만드는 것이 핵심이었습니다.",
    process: [
      { step: "01 — Crawling Pipeline", body: "뉴스 기사 데이터를 수집하고 콘텐츠 제작에 사용할 수 있도록 정제하는 처리 흐름을 설계했습니다." },
      { step: "02 — Batch Automation", body: "Spring Batch 기반으로 반복 처리와 자동화 흐름을 구성해 운영 부담을 줄였습니다." },
      { step: "03 — AI TTS Integration", body: "정제된 기사 데이터를 AI TTS 서버와 연동해 음성 변환과 영상 제작 흐름으로 연결했습니다." },
    ],
    outcome: "기사 수집부터 AI 음성 변환까지 이어지는 자동화 기반 영상 콘텐츠 제작 구조를 구현했습니다.",
    accentColor: "#FFD166",
  },
  {
    id: "06",
    slug: "sensemail",
    title: "SenseMail",
    category: "Enterprise Webmail Solution · Technical Support",
    tags: ["Java", "Spring Framework", "MVC", "Linux", "Oracle", "jQuery", "JSP", "Maven"],
    description:
      "기업용 웹메일 솔루션 유지보수 및 추가 기능 개발 프로젝트입니다.\n한전, 한수원 등 공기업과 대학교 메일 환경을 지원하며\n고객사별 웹메일 운영, 기능 개선, 기술지원을 수행했습니다.",
    image: "/portfolio/assets/img/sensmail.png",
    heroImage: "/portfolio/assets/img/sensmail.png",
    year: "2018-2020",
    duration: "2018-2020",
    role: "Maintenance · Feature Development · Technical Support",
    images: [
      "/portfolio/assets/img/sensmail.png",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=600&fit=crop&auto=format",
    ],
    overview:
      "SenseMail은 기업용 웹메일 솔루션 유지보수 및 추가 기능 개발 프로젝트입니다. 한전, 한수원 등 공기업과 대학교 메일 환경을 지원하며 안정적인 웹메일 운영과 기능 개선을 수행했습니다.",
    challenge:
      "공기업과 대학교 고객사의 운영 환경은 보안 기준이 높고 폐쇄망에서 직접 작업해야 하는 경우가 있어, 제한된 환경 안에서 안정성과 보안 기준을 지키며 기능 개선과 유지보수를 수행하는 것이 가장 어려웠습니다.",
    process: [
      { step: "01 — Maintenance", body: "Java, Spring Framework MVC, JSP 기반 웹메일 솔루션의 유지보수를 수행하며 고객사 운영 환경에서 발생하는 이슈를 대응했습니다." },
      { step: "02 — Feature Development", body: "Oracle, jQuery, Maven 기반의 기존 구조 안에서 고객사 요구사항에 맞춘 추가 기능 개발과 화면/기능 개선을 진행했습니다." },
      { step: "03 — Secure Support", body: "Linux 서버와 폐쇄망 환경에서 직접 작업하며 보안 기준을 지키고, 공기업·대학교 고객사 기술지원을 안정적으로 수행했습니다." },
    ],
    outcome: "한전, 한수원 등 공기업과 대학교 웹메일 고객사를 지원하며 유지보수와 기능 개선을 수행했고, 고객사 만족도에서 최상위 평가를 받았습니다.",
    accentColor: "#A7F3D0",
  },
  {
    id: "07",
    slug: "fanfanseller",
    title: "판판셀러",
    category: "Seller Admin · E-commerce",
    tags: ["Java", "eGovFrame", "MVC", "JSP", "jQuery", "JavaScript"],
    description:
      "중소기업유통센터 판판셀러 프로젝트입니다.\n입점사와 관리자가 상품, 주문, 정산, 운영 데이터를 관리할 수 있는\n쇼핑몰 관리자 기능을 구축했습니다.",
    image: "/portfolio/assets/img/fanfanseller-main.png",
    heroImage: "/portfolio/assets/img/fanfanseller-main.png",
    year: "2021",
    duration: "2021",
    role: "MVC Web Developer",
    images: [
      "/portfolio/assets/img/fanfanseller-main.png",
      "/portfolio/assets/img/fanfanseller1.png",
      "/portfolio/assets/img/fanfanseller2.png",
    ],
    overview:
      "판판셀러는 전자정부 프레임워크 기반 MVC 모델로 구축된 중소기업유통센터 관리자 프로젝트입니다. JSP, jQuery, JavaScript를 활용해 입점사와 운영자가 쇼핑몰 운영 데이터를 관리할 수 있는 기능을 구현했습니다.",
    challenge:
      "전자정부 프레임워크와 MVC 구조 안에서 입점사 관리, 상품 관리, 판매 관리, 정산 관리, 통계 등 쇼핑몰 운영에 필요한 다양한 관리자 기능을 안정적으로 연결해야 했습니다.",
    process: [
      { step: "01 — MVC Structure", body: "전자정부 프레임워크 기반 MVC 구조 안에서 관리자 기능의 요청, 화면, 데이터 처리 흐름을 정리했습니다." },
      { step: "02 — JSP Admin UI", body: "JSP, jQuery, JavaScript를 활용해 입점사, 상품, 주문, 판매, 정산 등 쇼핑몰 운영 관리자 화면을 구현했습니다." },
      { step: "03 — Operation Data", body: "운영자가 필요한 정보를 확인하고 관리할 수 있도록 통계와 관리 화면 흐름을 구성했습니다." },
    ],
    outcome: "입점사와 운영자가 쇼핑몰 운영 데이터를 관리할 수 있는 판판셀러 관리자 기능 구축에 참여했습니다.",
    accentColor: "#FBBF24",
  },
  {
    id: "08",
    slug: "kbook",
    title: "한국도서출판정보센터",
    category: "External Module Auth · Statistics Chart",
    tags: ["Java", "Spring", "External Module", "Authentication", "Statistics Chart"],
    description:
      "한국도서출판정보센터 사이트의 외부 모듈 인증과 통계 차트 기능을 구현한 프로젝트입니다.\n외부 모듈 인증 흐름을 전반적으로 구성하고,\n운영 데이터를 확인할 수 있는 통계 차트 영역을 맡아 개발했습니다.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=900&h=700&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1600&h=900&fit=crop&auto=format",
    year: "2021",
    duration: "2021",
    role: "Web Developer · External Module Integration",
    images: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&h=600&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop&auto=format",
    ],
    overview:
      "한국도서출판정보센터 프로젝트에서는 외부 모듈 인증 흐름과 통계 차트 기능을 중심으로 주요 기능을 구현했습니다.",
    challenge:
      "외부 모듈 인증을 전체 서비스 흐름 안에 안정적으로 연결하고, 운영자가 데이터를 직관적으로 확인할 수 있는 통계 차트 기능을 구현해야 했습니다.",
    process: [
      { step: "01 — External Auth", body: "외부 모듈 인증 흐름을 분석하고 서비스 내 인증 처리 구조를 전반적으로 구현했습니다." },
      { step: "02 — Module Integration", body: "외부 모듈과 내부 서비스 간 요청, 응답, 예외 처리 흐름을 연결했습니다." },
      { step: "03 — Statistics Chart", body: "운영 데이터 확인을 위한 통계 차트 영역을 맡아 화면과 데이터 표시 흐름을 구현했습니다." },
    ],
    outcome: "외부 모듈 인증과 통계 차트 기능을 구현해 한국도서출판정보센터의 주요 서비스 기능 고도화에 참여했습니다.",
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
