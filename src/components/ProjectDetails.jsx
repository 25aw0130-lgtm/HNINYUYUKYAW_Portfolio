
import { useParams, Link } from "react-router-dom";
import "./ProjectDetails.css";

const projects = [
  {
    slug: "kikkoman-recipe",
    title: "「カプセルレシピ」Webサイト制作",
    intro: (
      <>
        この作品は、献立に悩む一人暮らしの人や忙しい人に向けて、
        楽しくレシピと出会える体験を目指して制作したWebサイトです。
        日々の「何を作ろう？」という悩みに着目し、レシピ選びそのものを
        ガチャのように楽しめるUIとして企画しました。
        <br />
        <br />
        本作品では、
        <span className="accent">企画・デザイン・実装のすべてを一人で担当</span>
        し、親しみやすいビジュアルと直感的に操作しやすい導線を意識して制作しました。
        また、見た目の楽しさだけでなく、結果がわかりやすく表示されるよう、
        情報の見せ方や動きのバランスにも工夫しました。
      </>
    ),
    period: "2025年◯月〜2025年◯月（約◯週間）",
    role: "企画・UIデザイン・コーディング",
    tools: [
      "Figma",
      "Photoshop",
      "Illustrator",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    mainImage: "/projects/recipe.png",
    // sections: [
    // {
    //   title: "制作ポイント",
    //   list: [
    //     "ガチャのようにレシピを選べるUIで、料理選びを楽しい体験にしたこと",
    //     "オレンジを基調にした配色で、親しみやすさと食欲を感じるデザインを意識したこと",
    //     "見やすさと操作性のバランスを調整したこと"
    //   ]
    // },


    sections: [
      {
        title: "制作ポイント",
        list: [
          "ガチャを回すような楽しいUI設計",
          "結果表示をわかりやすく整理",
          "一人暮らしのユーザーを意識した設計"
        ]
      },
      {
        title: "リサーチ",
        text: "献立を考えることに負担を感じている人や、毎回似たような料理になってしまう人を想定し、料理選びを前向きにできる仕組みを考えました。",
        image: "/projects/recipe.png",
        sections: [
          {
            subTitle: "ユーザビリティテスト",
            text: "実際に画面を見てもらい、操作の分かりやすさや結果表示の見やすさについて確認しました。"
          },
          {
            subTitle: "課題解決",
            text: "ユーザーが迷わず次の行動に進めるよう、情報の優先順位を整理し、視線の流れを意識して導線を調整しました。"
          },
          {
            subTitle: "振り返り",
            text: "楽しさを重視したUIでも、使いやすさとのバランスが重要であることを学びました。"
          }

        ]
      },
    
      {
        title: "UI Design",
        text: "「楽しくレシピと出会える体験」をテーマにデザインしました。献立を考えることが負担になりがちな一人暮らしの人や忙しい人でも、ガチャを回すような感覚で料理を選べるようにすることで、料理選びそのものを楽しめる体験を目指しました。",
      
        image: "/projects/recipe.png",
      
        sections: [
          {
            subTitle: "レイアウト設計",
            text: "トップページでは、ユーザーがすぐにガチャ機能にアクセスできるようにシンプルなレイアウトを採用しました。余計な情報を減らし、視線が自然に『ガチャ → レシピ結果』へ流れるように構成しています。"
          },
          {
            subTitle: "UI表現",
            text: "ガチャのアニメーションを取り入れることで、レシピを選ぶ行為そのものを楽しい体験にしました。ユーザーがクリックするたびに新しいレシピと出会える仕組みにすることで、料理への興味を高めることを意識しました。"
          },
          {
            subTitle: "Color Design",
            text: "料理サイトらしい温かさと楽しさを表現するために、オレンジをメインカラーとして使用しました。背景にはグレーを使用して情報を見やすく整理し、アクセントとしてグリーンを使うことで食材や健康的なイメージを表現しました。",
            colors: ["#ff8f05", "#f0f0f0", "#0EA213"]
          }
        ]
      },
    
  
    {
      title: "成果と学び",
      sections: [
        {
          subTitle: "苦労したこと",
          text: "デザインの段階では、トンマナ（トーン＆マナー）をそろえることを意識して作りました。Reactを勉強しながら制作したため、エラーの原因を調べる時や、自分が作りたいレイアウトを形にする時に時間がかかることもありました。特にレスポンシブデザインの調整はうまくいかないことが多く、大変でした。"
        },
        {
          subTitle: "学んだこと",
          text: "この課題では、トンマナを意識しながらデザインを考え、それをReactで形にしました。デザインとコーディングがどうつながっているのかを少しずつ理解できるようになりました。また、Reactを使う中で、コンポーネントの作り方や状態管理の仕組みについても学ぶことができました。"
        }
      ]
    }
     ],
    // website: "https://recipe-own-media.vercel.app"

  
  },
  {
    slug: "suga-shrine",
    title: "須賀神社フォトガイド Webサイト制作",
    intro: (
      <>
        この作品は、映画『君の名は。』の聖地として知られる須賀神社を訪れる人に向けて、
        写真スポットをわかりやすく紹介することを目的に制作したWebサイトです。
        聖地巡礼をする観光客が、映画と同じ構図で写真を撮れるように
        写真スポットや撮影ポイントを案内するガイドサイトとして企画しました。
        <br />
        <br />
        本作品では、
        <span className="accent">企画・デザイン・実装のすべてを一人で担当</span>
        し、初めて訪れる人でも迷わずスポットを見つけられるよう、
        写真を中心としたレイアウトとシンプルな導線設計を意識して制作しました。
        また、スマートフォンでの利用を想定し、直感的に操作できるUIと
        見やすい情報構成になるよう工夫しました。
      </>
    ),
    period: "2025年◯月〜2025年◯月（約◯週間）",
    role: "企画・UIデザイン・コーディング",
    tools: [
      "Figma",
      "Illustrator",
      "Photoshop",
    ],
    mainImage: "/projects/jinjya.png",
  }
  
];

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="projectDetail">
        <div className="projectDetail__inner">
          <Link to="/" className="projectDetail__back">
            ← Back
          </Link>
          <h1 className="projectDetail__title">Project not found</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="projectDetail">
      <div className="projectDetail__inner">
        <Link to="/" className="projectDetail__back">
          ← Back
        </Link>
  
        <div className="projectHero">
          <div className="projectHero__text">
            <h1 className="projectDetail__title">{project.title}</h1>
  
            <div className="projectDetail__intro">{project.intro}</div>
  
            <div className="projectMeta">
              <div className="projectMeta__row">
                <span className="projectMeta__label">期間</span>
                <p className="projectMeta__text">{project.period}</p>
              </div>
  
              <div className="projectMeta__row">
                <span className="projectMeta__label">担当</span>
                <p className="projectMeta__text">{project.role}</p>
              </div>
  
              <div className="projectMeta__row">
                <span className="projectMeta__label">ツール</span>
                <div className="projectMeta__tools">
                  {project.tools.map((tool) => (
                    <span className="toolTag" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
  
          <div className="projectHero__imageWrap">
            <img
              src={project.mainImage}
              alt={project.title}
              className="projectHero__image"
            />
          </div>
        </div>
  
        {project.sections?.map((section) => (
          <div className="projectSection" key={section.title}>
            <h2 className="projectSection__title">{section.title}</h2>
  
            {section.image && (
              <img
                src={section.image}
                alt={section.title}
                className="projectSection__image"
              />
            )}
  
            {section.list && (
              <ul className="projectPointList">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
  
            {section.text && (
              <p className="projectSection__text">{section.text}</p>
            )}
  
            {section.sections && (
              <div className="projectSubSectionWrap">
                {section.sections.map((item) => (
                  <div className="projectSubSection" key={item.subTitle}>
                    <h3 className="projectSubSection__title">{item.subTitle}</h3>
                    <p className="projectSection__text">{item.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
