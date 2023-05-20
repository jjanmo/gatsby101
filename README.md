# Gatsby101

> Let's learn how to use Gatsby 🚀

> [DEMO](https://gatsby101.netlify.app/)

## Used Gatsby Features

<details>
  <summary>gatsby routing system</summary>

> gatsby는 SSG를 기본으로 하는 프레임워크이기 때문에 **우선적으로 `SSG`를 중심**으로 구현을 하였다. 하지만 gatsby에서도 CSR / SSR / DSG 와 같은 다른 랜더링 옵션들을 제공한다.

- [x] SSG : 빌드 시점에 라우팅을 생성(based File System)

  > 기본적으로 `pages 폴더` 안에 컴퍼넌트를 추가하면 그 파일 시스템 구조대로 URL이 형성된다.

  - 정적 라우팅(static routing) ✅

    > URL과 pages 하위 컴퍼넌트간에 자동으로 맵핑되는 구조 (like Next.js)

  - 동적 라우팅(dynamic routing) (ex. blog 상세 페이지)

    - `gatsby-node.js`에서 `createPages`를 통해 필요한 페이지를 구현 (사용하지 않음!)

    - graphQL data 계층의 collection을 활용하여 페이지 구현 ✅

      > `{ }` 안에 collection의 필드값에 맞는 파일명으로 파일을 생성하면 빌드시점에 gatsby가 파일명을 파싱하여 그에 맞는 graphQL을 자동 호출하고, 해당 데이터로 페이지를 구현하게 된다.

      > 위에서처럼 collection을 이용해서 라우팅을 만든다고 해서 이를 `collection routes`라고 한다. ([자세히](https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/#collection-routes))

- [ ] [CSR](https://www.gatsbyjs.com/docs/how-to/routing/client-only-routes-and-user-authentication/) : 순수 리액트에서의 라우팅 방식 이용하는 것(based [Reach Router](https://reach.tech/router/))

- [ ] [SSR](https://www.gatsbyjs.com/docs/conceptual/rendering-options/#server-side-rendering-ssr)

- [ ] [DSG](https://www.gatsbyjs.com/docs/conceptual/rendering-options/#deferred-static-generation-dsg)

</details>

<details>
  <summary>use Gatsby Image plugin</summary>

> `gatsby-image-plugin` 플러그인을 사용하면, 마법처럼 이미지 최적화를 알아서 처리해준다. 🧙🏻‍♂️

> 2개의 API

- [x] static image : StaticImage Component

- [x] dynamic image : GatsbyImage Component
</details>

<details>
  <summary></summary>
</details>

<details>
  <summary></summary>
</details>

- [x] use graphQL : graphQL 맛보기 → fetch data

  > gatsby에서는 GraphQL Data layer

  > graphQL에 대해서 자세히 공부한 부분은 아니다. 기본적으로 데이터를 fetching하는 방법과 이를 gatsby에서 어떻게 사용하는지 정도에 대해서 알아보았다.

- [x] how to use MDX in gatsby
- [x] make detail pages (blog detail & content detail)
- [x] connect to Contentful service in gatsby
- [x] deploy using netlify

## More Study

- [Gatsby Conceptual Guides](https://www.gatsbyjs.com/docs/conceptual/)
