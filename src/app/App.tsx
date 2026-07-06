import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Mail, Menu, User, X } from "lucide-react";

const assetPath = (path: string) => {
  if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) {
    return path;
  }

  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
};

const projects = [
  {
    id: "01",
    slug: "orderplace",
    title: "오더플레이스",
    category: "Food Ordering · Web App",
    tags: ["Java", "Spring Boot", "Vue.js", "MySQL", "Firestore", "AWS", "Tomcat", "Gradle", "Git"],
    description:
      "음식 및 상품 주문 흐름을 기반으로\n페스티벌, 푸드트럭, 호텔 룸서비스, 테이블오더 등 다양한 채널로 확장할 수 있게 설계한 차세대 주문 플랫폼입니다.\n기획, 설계, API, 관리자 웹, 배포, 운영 대응까지 전반을 수행했습니다.",
    image: "/assets/img/orderplace-main.png",
    heroImage: "/assets/img/orderplace-main.png",
    imageFit: "contain",
    year: "2026",
    duration: "2026",
    role: "Planning · API · Admin Web · Deploy · Operations",
    images: [
      "/assets/img/orderplace.png",
      "/assets/img/orderplace2.png",
      "/assets/img/orderplace3.png",
    ],
    overview:
      "오더플레이스는 음식 및 상품 주문을 기반으로 페스티벌, 푸드트럭, 호텔 룸서비스, 테이블오더 등 여러 운영 채널로 확장할 수 있게 설계한 차세대 주문 플랫폼입니다.",
    challenge:
      "하나의 주문 서비스에 서로 다른 운영 타입을 붙여야 했기 때문에 채널별 요구사항을 분리하면서도 주문, 상품, 관리자, 운영 흐름은 공통 구조로 유지하는 설계가 가장 큰 과제였습니다.",
    process: [
      { step: "01 — Planning & Architecture", body: "차세대 주문 플랫폼의 기획과 구조 설계를 맡아 음식 및 상품 주문을 중심으로 페스티벌, 푸드트럭, 호텔 룸서비스, 테이블오더 등 다양한 채널을 확장할 수 있는 방향을 정의했습니다." },
      { step: "02 — API & Admin Web", body: "Java, Spring Boot 기반 API와 관리자 웹을 구현하고, MySQL과 Firestore를 활용해 주문, 상품, 채널별 운영 데이터를 관리할 수 있는 구조를 설계했습니다." },
      { step: "03 — Deploy & Operations", body: "Gradle, Tomcat, AWS 기반 배포와 운영 대응까지 수행하며 실제 서비스 환경에서 발생하는 채널별 이슈와 운영 요구사항을 반영했습니다." },
    ],
    outcome: "푸드트럭, 페스티벌, 테이블오더 등 다양한 주문 채널에서 성공적으로 운영 가능한 확장형 주문 플랫폼 구조를 구현했습니다.",
    accentColor: "#C2410C",
  },
  {
    id: "02",
    slug: "football-lounge",
    title: "풋볼라운지",
    category: "Team Management · Commerce",
    tags: ["Java", "Spring Boot", "Vue.js", "MySQL", "Firestore", "AWS", "Tomcat", "Gradle", "Git"],
    description:
      "축구팀 관리, 매칭, 용병 모집과 스포츠 커머스 플랫폼을 함께 기획·구축한 프로젝트입니다.\n앱 개발을 제외한 서비스 전반을 맡아 진행했고,\n풋볼라운지 사용자들이 주문서 작성과 커스텀 유니폼 제작까지 자연스럽게 이어갈 수 있도록 설계했습니다.",
    image: "/assets/img/footballlounge-main.png",
    heroImage: "/assets/img/footballlounge-main.png",
    imageFit: "contain",
    year: "2026",
    duration: "2026",
    role: "Planning · API · Commerce · Operations",
    images: [
      "/assets/img/footballlounge-1.png",
      "/assets/img/footballlounge-2.png",
      "/assets/img/footballlounge-3.png",
      "/assets/img/fblshop-main.png",
      "/assets/img/fblshop1.png",
      "/assets/img/fblshop2.png",
    ],
    overview:
      "풋볼라운지는 축구팀 관리, 매칭, 용병 모집 기능과 풋볼라운지샵 커머스 플랫폼을 함께 기획·구축한 프로젝트입니다. 앱 개발을 제외한 서비스 전반을 맡아 팀 운영과 커스텀 유니폼 주문 흐름을 하나의 경험으로 연결했습니다.",
    challenge:
      "아마추어 축구팀 운영 기능과 커머스를 하나의 서비스 흐름으로 합치는 과정이 가장 어려웠습니다. 앱 사용자가 팀 관리, 매칭, 용병 모집을 하다가 자연스럽게 주문서 작성과 커스텀 유니폼 제작으로 이어질 수 있어야 했습니다.",
    process: [
      { step: "01 — Platform Planning", body: "앱 개발을 제외한 서비스 전반을 맡아 팀 관리, 매칭, 용병 모집 기능이 하나의 플랫폼 안에서 동작하도록 구조를 정리했습니다." },
      { step: "02 — Commerce Integration", body: "풋볼라운지샵 커머스와 연결해 풋볼라운지 앱 사용자들이 주문서를 쉽게 작성하고 커스텀 유니폼 제작까지 이어갈 수 있는 흐름을 설계했습니다." },
      { step: "03 — Launch & Operations", body: "오더플레이스와 동일한 기술 스택을 기반으로 API, 관리자, 커머스 운영 구조를 구현하고 1차 오픈 이후 사용자 유입 단계에 대응하고 있습니다." },
    ],
    outcome: "풋볼라운지와 풋볼라운지샵의 1차 오픈을 완료했고, 팀 관리·매칭·용병 모집·커스텀 유니폼 주문이 연결된 통합 플랫폼으로 사용자를 모으는 단계입니다.",
    accentColor: "#78D7FF",
  },
  {
    id: "03",
    slug: "runpang",
    title: "런팡",
    category: "Fitness Reward · App",
    tags: ["Java", "Spring Boot", "Vue.js", "MySQL", "Firestore", "AWS", "Tomcat", "Gradle", "Git", "GPS", "Watch App"],
    description:
      "일반 러닝앱 기능에 캐릭터 보상형 꾸미기 기능을 결합한 운동 리워드 앱입니다.\nGPS 기반 운동 인증을 통해 포인트를 획득하고,\n캐릭터 아이템을 구매·장착하며 워치앱까지 함께 지원하는 구조로 설계했습니다.",
    image: "/assets/img/runpang-main.png",
    heroImage: "/assets/img/runpang-main.png",
    imageFit: "contain",
    year: "2026",
    duration: "2026",
    role: "Planning · API · Admin Web · Operations",
    images: [
      "/assets/img/runpang1.png",
      "/assets/img/runpang2.png",
      "/assets/img/runpang3.png",
    ],
    overview:
      "런팡은 일반 러닝앱 기능에 캐릭터 보상형 꾸미기 기능을 결합한 운동 리워드 앱입니다. 앱 개발을 제외한 서비스 전반을 맡아 GPS 운동 인증, 포인트, 캐릭터 아이템, 워치앱 연동 흐름을 설계했습니다.",
    challenge:
      "GPS 기반 운동 기록을 보상 구조와 연결하고, 사용자가 획득한 아이템 이미지를 원하는 위치에 띄워 PNG 프레임 형태로 자연스럽게 보여주는 구현이 가장 까다로웠습니다.",
    process: [
      { step: "01 — Running & GPS", body: "일반 러닝앱의 핵심 기능을 기준으로 GPS 운동 기록과 인증 흐름을 정리하고 서버 API와 운영 구조를 설계했습니다." },
      { step: "02 — Reward & Character", body: "운동 인증 후 포인트를 획득하고 캐릭터 아이템을 구매·장착하는 보상형 꾸미기 구조를 구현했습니다." },
      { step: "03 — PNG Frame & Watch App", body: "아이템 이미지를 원하는 위치에 배치해 PNG 프레임으로 보여주는 화면 구조와 워치앱까지 고려한 연동 흐름을 구성했습니다." },
    ],
    outcome: "GPS 러닝 기록, 캐릭터 보상형 꾸미기, 워치앱을 포함한 런팡의 1차 오픈을 완료했습니다.",
    accentColor: "#FF6B6B",
  },
  {
    id: "04",
    slug: "ordermate",
    title: "오더메이트",
    category: "Table Order · POS Integration",
    tags: ["Java", "Spring Boot", "Agent API", "POS Integration", "NicePOS", "Okpos", "MetaPOS"],
    description:
      "QR 주문 서비스를 외부 POS 시스템과 연동하는 Agent API 개발 프로젝트입니다.\n나이스포스, 오케이포스, 메타포스 등 매장 POS와 연결해\n고객 주문이 실제 매장 처리 흐름으로 이어지도록 구현했습니다.",
    image: "/assets/img/ordermate-main.png",
    heroImage: "/assets/img/ordermate-main.png",
    imageFit: "contain",
    year: "2024",
    duration: "2024",
    role: "Agent API Developer · POS Integration",
    images: [
      "/assets/img/ordermate1.png",
      "/assets/img/ordermate2.png",
      "/assets/img/ordermate3.png",
    ],
    overview:
      "오더메이트는 QR 주문 서비스를 나이스포스, 오케이포스, 메타포스 등 외부 POS 시스템과 연동하는 Agent API 개발 프로젝트입니다.",
    challenge:
      "POS 시스템은 매장 운영과 결제, 주문 처리 정책이 복잡하게 얽혀 있어 외부 POS의 구조를 우리 서비스 주문 흐름에 자연스럽게 녹이는 것이 가장 어려웠습니다.",
    process: [
      { step: "01 — QR Order Flow", body: "우리 서비스에서 QR 주문이 발생한 뒤 외부 POS로 전달되고 매장 처리 흐름으로 이어지는 핵심 주문 흐름을 정리했습니다." },
      { step: "02 — Agent API", body: "Java, Spring Boot 기반 Agent API를 개발해 나이스포스, 오케이포스, 메타포스 등 POS별 연동 구조를 구현했습니다." },
      { step: "03 — POS Operation", body: "POS별 복잡한 정책과 연동 차이를 우리 시스템에 맞게 흡수하고, 여러 매장에서 운영 가능한 구조로 안정화했습니다." },
    ],
    outcome: "QR 주문과 외부 POS를 연결하는 Agent API를 구현했고, 현재 여러 매장에서 실제 운영 중입니다.",
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
    image: "/assets/img/sensmail.png",
    heroImage: "/assets/img/sensmail.png",
    year: "2018-2020",
    duration: "2018-2020",
    role: "Maintenance · Feature Development · Technical Support",
    images: [
      "/assets/img/sensmail.png",
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
    image: "/assets/img/fanfanseller-main.png",
    heroImage: "/assets/img/fanfanseller-main.png",
    year: "2021",
    duration: "2021",
    role: "MVC Web Developer",
    images: [
      "/assets/img/fanfanseller-main.png",
      "/assets/img/fanfanseller1.png",
      "/assets/img/fanfanseller2.png",
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
  { name: "HTML", image: "/assets/img/html.png" },
  { name: "Java", image: "/assets/img/java.png" },
  { name: "JavaScript", image: "/assets/img/javascript.png" },
  { name: "Vue.js", image: "/assets/img/vuejs.png" },
  { name: "jQuery", image: "/assets/img/jquery.png" },
  { name: "Spring Boot", image: "/assets/img/springboot.png" },
  { name: "MyBatis", image: "/assets/img/mybatis.jpeg" },
  { name: "MySQL", image: "/assets/img/mysql.png" },
  { name: "Firestore", image: "/assets/img/firestore.svg" },
  { name: "AWS", image: "/assets/img/aws.jpeg" },
  { name: "Linux", image: "/assets/img/linux.png" },
  { name: "Tomcat", image: "/assets/img/tomcat.png" },
  { name: "Atlassian", image: "/assets/img/atlassian.jpg" },
  { name: "Figma", image: "/assets/img/figma.webp" },
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
          src={assetPath(project.heroImage)}
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
                  src={assetPath(src)}
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
                        src={assetPath(skill.image)}
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
                    src={assetPath(project.image)}
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
