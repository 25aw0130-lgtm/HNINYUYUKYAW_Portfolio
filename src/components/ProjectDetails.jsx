import { useParams, Link } from "react-router-dom";
import "./ProjectDetails.css";

const projects = [
  {
    slug: "kikkoman-recipe",
    title: "Kikkoman Recipe",
    desc: "カプセルを回して楽しくレシピと出会えるサイト。",
    image: "/projects/recipe.png",
    website: "https://recipe-own-media.vercel.app",

    プロジェクトについて: `このプロジェクトは、企画からUIデザイン、コーディングまでをすべて一人で制作しました。
制作期間は約3ヶ月で、ユーザーにとって使いやすく楽しい体験になるよう試行錯誤を重ねながら完成させました。`,

    問題: `日々の献立を考えることが負担になり、レパートリーが固定化してしまうという課題に着目しました。
また、料理に対するモチベーションが下がることで、食事の時間そのものが楽しみではなくなる点も問題だと感じました。`,

    ゴール: `「迷う時間を減らし、楽しく選べる体験」を設計することを目的としました。
直感的な操作と動きのあるUIによって、ユーザーが自然に次のアクションへ進める構成を意識しました。`,

    プロセス: [
      "ターゲット設定（忙しい一人暮らし層）",
      "ユーザーフロー設計（食材選択 → ガチャ演出 → レシピ表示）",
      "ワイヤーフレーム制作",
      "UIデザイン設計（視認性・余白・情報優先度）",
      "JavaScriptによる状態管理・アニメーション実装",
      "レスポンシブ対応（スマートフォン最適化）",
    ],

    主な機能: [
      "食材選択型ガチャシステム",
      "ガチャ演出アニメーション（ローディング表示・モーダル表示）",
      "状態管理による画面切り替え制御",
      "レスポンシブデザイン対応",
    ],

    solution: `ガチャ演出や画面切り替えの実装において、状態管理が複雑化しバグが発生しました。
そのため、UIの状態を「選択中」「抽選中」「結果表示」と段階的に整理し、条件分岐を明確化することで安定した動作を実現しました。
また、操作に迷わないようボタン配置や余白設計を調整し、視線誘導を意識したUI改善を行いました。`,

    learnings: `本制作を通して、見た目のデザインだけでなく「ユーザーが迷わない導線設計」が重要であることを学びました。
動きのあるUIであっても、情報の優先順位と状態管理を整理することで、快適な体験を提供できると実感しました。`,
  },

  {
    slug: "suga-shrine",
    title: "Suga Shrine Guide",
    desc: "『君の名は。』聖地巡礼のフォトガイドUI。",
    image: "/projects/jinjya.png",
    website: "https://www.figma.com/design/LnIU0KnD6xMUnPB7058d0R/app-design?node-id=0-1&t=9AUD2caWXCZWcV7E-1",
    プロジェクトについて: "聖地巡礼で撮りたい写真を撮れるように情報をまとめたUIです。",
    問題: "現地で角度や場所が分からず迷ってしまうことがありました。",
    ゴール: "1画面で分かりやすく、次の行動に進める導線を作りました。",
  },
];

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="detail">
        <Link to="/" className="back">← Back</Link>
        <h2>Not found</h2>
        <p>slug: {slug}</p>
      </div>
    );
  }

  return (
    <div className="detail">
      <Link to="/" className="back">← Back</Link>

      <h1 className="title">{project.title}</h1>
      <p className="desc">{project.desc}</p>

      <img className="image" src={project.image} alt={project.title} />

      {/* プロジェクトについて */}
      {project["プロジェクトについて"] && (
        <div className="box">
          <h3>プロジェクトについて</h3>
          <p className="text">{project["プロジェクトについて"]}</p>
        </div>
      )}

      {/* 問題 */}
      {project["問題"] && (
        <div className="box">
          <h3>問題</h3>
          <p className="text">{project["問題"]}</p>
        </div>
      )}

      {/* ゴール */}
      {project["ゴール"] && (
        <div className="box">
          <h3>ゴール</h3>
          <p className="text">{project["ゴール"]}</p>
        </div>
      )}

      {/* プロセス */}
      {project["プロセス"] && (
        <div className="box">
          <h3>プロセス</h3>
          <ul className="list">
            {project["プロセス"].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* 主な機能 */}
      {project["主な機能"] && (
        <div className="box">
          <h3>主な機能</h3>
          <ul className="list">
            {project["主な機能"].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* 工夫 */}
      {project.solution && (
        <div className="box">
          <h3>工夫・課題解決</h3>
          <p className="text">{project.solution}</p>
        </div>
      )}

      {/* 学び */}
      {project.learnings && (
        <div className="box">
          <h3>学び</h3>
          <p className="text">{project.learnings}</p>
        </div>
      )}

      {/* Website */}
      {project.website && (
        <a className="btn" href={project.website} target="_blank" rel="noreferrer">
          Websiteを見る
        </a>
      )}
    </div>
  );
}