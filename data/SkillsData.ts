export interface skillData {
  id: number;
  name: string;
  content: string;
}

export const SkillsData: skillData[] = [
  {
    id: 1,
    name: "React",
    content:
      "React와 Next를 통한 함수형 컴포넌트 개발이 가능합니다. useState, useEffect, useReducer의 사용에 익숙합니다. ",
  },
  {
    id: 2,
    name: "JS",
    content:
      "기본 JS지식과 Typescript를 사용할 수 있습니다. ES6 문법에 익숙합니다.",
  },
  {
    id: 3,
    name: "SQL",
    content:
      "OracleDB에 대한 CRUD와 MYsql의 CRUD가 가능합니다. join문 사용이 가능합니다.",
  },
  {
    id: 4,
    name: "spring",
    content:
      "Java8버전에 대한 이해를 통해서 SpringBoot MVC 개발이 가능합니다.\n mybatis를 사용할 수 있고 Hibernate와 JPA에 대한 기본 지식과 DB와 연동해 CRUD를 해봤습니다.",
  },
];
