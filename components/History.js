import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from '../styles/History.module.css'
import YoutubeContainer from "./YoutubeContainer"
import YoutubeContainers from "./YoutubeContainers"
import {useState, useEffect} from "react"
import SetList from "./SetList"
import CustomVerticalTimelineElement from "./CustomVerticalTimelineElement"

export default function History() {
  const blueContentStyle = { background: 'rgb(68,191,228)', color: '#fff' }
  const borderBlueContentStyle = { borderTop: '5px solid rgb(68,191,228)', color: '#000' }
  const borderPinkContentStyle = { borderTop: '5px solid rgb(241,172,210)', color: '#000' }
  const blueArrowStyle = { borderRight: '7px solid  rgb(68 ,191 ,228)' }
  const pinkArrowStyle = { borderRight: '7px solid  rgb(241,172,210)' }
  const whiteArrowStyle = { borderRight: '7px solid #aaa' }
  const blueIconStyle = { background: 'rgb(68,191,228)', color: '#fff', display: 'flex', justifyContent: 'center' }
  const pinkIconStyle = { background: 'rgb(241,172,210)', color: '#fff', display: 'flex', justifyContent: 'center' }
  const anchorIcon = <img style={{ width: '75%'}} src='anchor.svg' />
  const noteIcon = <img style={{ width: '60%'}} src='note01.svg' />
  const noteIcon2 = <img style={{ width: '60%'}} src='note02.svg' />
  // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

  const monthToPrefix = (month) => {
    switch (month) {
      case 1:
        return "jan"
      case 2:
        return "feb"
      case 3:
        return "mar"
      case 4:
        return "apr"
      case 5:
        return "may"
      case 6:
        return "jun"
      case 7:
        return "jul"
      case 8:
        return "aug"
      case 9:
        return "sep"
      case 10:
        return "oct"
      case 11:
        return "nov"
      case 12:
        return "dec"
    }
  }

  const historiesMonthToPrefix = (month) => {
    if (month <= 12) return monthToPrefix(month)
    return monthToPrefix(month % 12)
  }

  const histories = [
    {
      id: '08-21', month: 8, date: '08/21', title: '湊あくあアニバーサリーライブ2020', subTitle: 'あくあ色すーぱー☆どり～む♪',
      medias: [{ type: "image", src: "aqua_univ.jpg", link: "https://prtimes.jp/main/html/rd/p/000000274.000030268.html" }]
    },
    {
      id: '08-27', month: 8, date: '08/27', title: 'MOLLY.ONLINE コラボ', link: null,
      medias: [{ type: "youtube", id: "gnTJPk313E0" }]
    },
    {
      id: '09-12', month: 9, date: '09/12', title: 'アズールレーン生放送 ホロライブコラボ出演', link: null,
      medias: [{ type: "youtube", id: "a6Zuu6m80W4" }]
    },
    {
      id: '09-25', month: 9, date: '09/25', title: '「ようこそ実力至上主義の教室へ」広報就任', link: "https://twitter.com/minatoaqua/status/1309471489825988608",
      medias: [{ type: "youtube", id: "XIDzSr3oX1w" }, { type: "youtube", id: "5Go_DtN2QEQ" }]
    },
    {
      id: '09-25-2', month: 9, date: '09/25', title: 'Reバース for you トライアルデッキ', subTitle: '「ホロライブ2期生」発売', link: "https://rebirth-fy.com/products/trial-deck/td3_hp/",
      medias: null
    },
    {
      id: '09-26', month: 9, date: '09/26', title: 'YouTubeチャンネル登録者数70万人突破', link: "https://twitter.com/minatoaqua/status/1309740955759640576",
      medias: [{ type: "youtube", id: "Mhe2gXZtU6w" }]
    },
    {
      id: '09-26-2', month: 9, date: '09/26', title: '2D新衣装お披露目', link: null,
      medias: [{ type: "youtube", id: "HUWyLcPf1vo" }]
    },
    {
      id: '09-27', month: 9, date: '09/27', title: '「チューリングラブ」歌ってみた動画投稿', link: null,
      medias: [{ type: "youtube", id: "0OtNQEpSeIA" }]
    },
    {
      id: '10-06', month: 10, date: '10/06', title: '2期生コラボ ～ 突撃！隣のholoごはん', link: null,
      medias: [{ type: "youtube", id: "rcYl6Pca0jc" }, { type: "youtube", id: "7OtJi8WNXvQ" }, { type: "youtube", id: "secaYztdD-g" }]
    },
    {
      id: '10-10', month: 10, date: '10/10', title: 'ホロライブ×カレーメシコラボ「カレーメシWEEK」開催', link: "https://twitter.com/minatoaqua/status/1309471489825988608",
      medias: [{ type: "youtube", id: "3QJD9iekpDQ" }, { type: "image", src: "curry01.jpg", link: "https://www.youtube.com/watch?v=-5TMTyV4JZA" }, { type: "image", src: "curry02.jpg", link: "https://www.youtube.com/watch?v=IbtmfYz_LAY" }]
    },
    {
      id: '10-26', month: 10, date: '10/26', title: 'オリジナル曲「For The Win」MV投稿', link: null,
      medias: [{ type: "youtube", id: "CZGFm-O5IOU" }]
    },
    {
      id: '11-06', month: 11, date: '11/06', title: 'YouTubeチャンネル登録者数80万人突破', link: "https://twitter.com/minatoaqua/status/1324724590975700994",
      medias: [{ type: "youtube", id: "xNxgQ3ZxUoU" }]
    },
    {
      id: '11-21', month: 11, date: '11/21', title: 'ホロライブ運動会 白Aチーム', link: "https://twitter.com/minatoaqua/status/1329990943789891584",
      medias: [{ type: "youtube", id: "qqXNceOPq5I" }]
    },
    {
      id: '12-01', month: 12, date: '12/01', title: '3回目の誕生日', link: null,
      medias: [
        { type: "youtube", id: "76KDBkkZMb0" }, { type: "youtube", id: "Fkja0yzTv-k" },
        { type: "image-url", src: "https://booth.pximg.net/c/620x620/4ee2c0d9-41fa-4a0e-a30f-1bc9e15d4e5b/i/2558432/e8007e7e-35cc-4527-a2c4-76f6cd9574c6_base_resized.jpg", link: "https://hololive.booth.pm/items/2558432"}
      ]
    },
    {
      id: '12-01-2', month: 12, date: '12/01', title: '#あくあ色ぱれっと MV投稿', link: null,
      medias: [
        { type: "youtube", id: "6bnaBnd4kyU" }
      ]
    },
    {
      id: '12-08', month: 12, date: '12/08', title: '「おこちゃま戦争」歌ってみた動画出演', link: null,
      medias: [{ type: "youtube", id: "SoSuMVviNaU" }]
    },
    {
      id: '12-10', month: 12, date: '12/10', title: 'YouTubeチャンネル登録者数90万人突破', link: null,
      medias: [{ type: "youtube", id: "frUt9ZeAHAo" }]
    },
    {
      id: '12-15', month: 12, date: '12/15', title: '「ホロライブプロダクションカードチョコ」全国のローソンで発売', link: "https://tieup.tokyo/holoprochoco/",
      medias: [{ type: "image-url", src: "https://tieup.tokyo/holoprochoco/img/twittercard.jpg", link: "https://tieup.tokyo/holoprochoco/" }]
    },
    {
      id: '12-21', month: 12, date: '12/21', title: 'hololive 2nd fes. Beyond the Stage Supported By Bushiroad', link: "https://beyondthestage.hololive.tv/",
      medias: [
        { type: "image-url", src: "https://d2hzep8e9o5a9x.cloudfront.net/images/ogp.jpg", link: "https://beyondthestage.hololive.tv/" }
      ]
    },
    {
      id: '12-25', month: 12, date: '12/25', title: 'クリスマスの歌リレー配信 最終走者', link: "https://twitter.com/minatoaqua/status/1342462648684695555",
      medias: [
        { type: "youtube", id: "lerk9192c3s" },
      ]
    },
    {
      id: '12-31', month: 12, date: '12/31', title: 'ゆくホロくるホロ 2020 出演', link: null,
      medias: [
        { type: "youtube", id: "CBTwb8jqJM8" },
      ]
    },
    {
      id: '01-11', month: 13, date: '01/11', title: 'マリオカート8 デラックス大会「ホロお正月CUP」出場', link: null,
      medias: [
        { type: "youtube", id: "cJVjD5Voh9k" },
        { type: "youtube", id: "enMnSVOBAeE" },
        { type: "youtube", id: "jAQNkXzEgP0" },
        { type: "youtube", id: "oo56_BzlO3w" },
      ]
    },
    {
      id: '01-13', month: 13, date: '01/13', title: 'おうち3D 初配信', link: null,
      medias: [
        { type: "youtube", id: "kl7BJWlUgNo" }
      ]
    },
    {
      id: '01-13-2', month: 13, date: '01/13', title: 'YouTubeチャンネル登録者数100万人突破', link: null,
      medias: [
        { type: "youtube", id: "Qk51imbGXR0" }
      ]
    },
    {
      id: '01-14', month: 13, date: '01/14', title: '「Candy-Go-Round」デジタルリリース', link: null,
      medias: [
        { type: "youtube", id: "KS4brKpD5qE" }
      ]
    },
    {
      id: '01-25', month: 13, date: '01/25', title: 'AKUKIN本社建設リレー', link: null,
      medias: [
        { type: "youtube", id: "1E8uHA5r3uE" }
      ]
    },
    {
      id: '01-26', month: 13, date: '01/26', title: 'ローソン「ホロライブ」キャンペーン開催', link: "https://www.lawson.co.jp/lab/campaign/hololive/",
      medias: [
        { type: "image-url", src: "https://www.lawson.co.jp/lab/campaign/hololive/img/fb.jpg", link: "https://www.lawson.co.jp/lab/campaign/hololive/" }
      ]
    },
    {
      id: '01-30', month: 13, date: '01/30', title: 'VTuber Fes Japan 2021(DAY1)出演', link: "https://vtuberfesjapan.jp/",
      medias: [
        { type: "image-url", src: "https://vtuberfesjapan.jp/assets/images/common/common/ogp.png", link: "https://vtuberfesjapan.jp/" }
      ]
    },
    {
      id: '02-12', month: 14, date: '02/12', title: 'e-maのど飴CM出演', link: null,
      medias: [
        { type: "youtube", id: "0BBZs5rZktc" },
        { type: "youtube", id: "EFZZEW-8q7s" },
        { type: "youtube", id: "MOHpvRyC_ag" },
        { type: "youtube", id: "q_RU_QhLS_0" },
      ]
    },
    {
      id: '02-17', month: 14, date: '02/17', title: 'hololive IDOL PROJECT 1st Live.「Bloom,」出演', link: "https://bloom.hololive.tv/",
      medias: [
        { type: "image-url", src: "https://d3uqnwwjtu2lp.cloudfront.net/images/ogp.png", link: "https://bloom.hololive.tv/" }
      ]
    },
    {
      id: '02-19', month: 14, date: '02/19', title: '「あすいろClearSky」デジタルリリース', link: null,
      medias: [
        { type: "youtube", id: "5CMUI36gXtY" }
      ]
    },
    {
      id: '02-25', month: 14, date: '02/25', title: '京都大学 折田先生像 並立', link: "https://twitter.com/minatoaqua/status/1364896449255772162",
      medias: null
    },
    {
      id: '03-09', month: 15, date: '03/09', title: 'Apex ソロマスターちゃれんじ開始', link: null,
      medias: [
        { type: "youtube", id: "sQ-1o5Nm88s" },
      ]
    },
    {
      id: '03-19', month: 15, date: '03/19', title: '音楽を止めるな3 MV出演', link: "https://twitter.com/azki_vdiva/status/1372535001527422981",
      medias: null
    },
    {
      id: '04-04', month: 16, date: '04/04', title: '「hololive IDOL PROJECT presents ホロライブアイドル道ラジオ～私たちの歌をきけッ！」放送開始', link: null,
      medias: [
        { type: "youtube", id: "Fr2raq3ZMWM" },
        { type: "youtube", id: "b2nIWs68Tic" }
      ]
    },
    {
      id: '04-21', month: 16, date: '04/21', title: 'hololive IDOL PROJECT 1st album「Bouquet」リリース', link: "https://prtimes.jp/main/html/rd/p/000000372.000030268.html",
      medias: null
    },
    {
      id: '04-30', month: 16, date: '04/30', title: 'ニコニコネット超会議2021出演', subTitle: "「New ポケモンスナップ」発売特番", link: "https://live.nicovideo.jp/watch/lv331090588",
      medias: [{ type: "image-url", src: "https://img.cdn.nimg.jp/s/nicolive/program-pictures/prod-lv331090588/thumbnail_1618547363539.jpg/r640x360l.jpg?key=f8d02aac84cef5fa894b5f6bf1093ac0235b95d8bf4fe04ed9b5325e77c1019d", link: "https://live.nicovideo.jp/watch/lv331090588" }]
    },
    {
      id: '04-30-2', month: 16, date: '04/30', title: 'グッバイ宣言 歌ってみた動画投稿', link: null,
      medias: [{ type: "youtube", id: "4N_HwrzWCac" }]
    },
    {
      id: '05-09', month: 17, date: '05/09', title: '無料ソロライブ「あくあ色すーぱーみらくる☆どり〜む♪」開催', link: null,
      medias: [
        { type: "youtube", id: "gf7RSwmp8dM" },
        { type: "youtube", id: "uBr8CvOnlh4" }
      ]
    },
    {
      id: '05-09-2', month: 17, date: '05/09', title: '「Nyanyanyanyanyanyanya!」歌ってみた動画投稿', link: null,
      medias: [
        { type: "youtube", id: "Snn2gWq-3KY" }
      ]
    },
    {
      id: '05-09-3', month: 17, date: '05/09', title: '「ホロライブ公式スタンプ vol.1」発売', link: "https://store.line.me/stickershop/product/14926384/ja",
      medias: null
    },
    {
      id: '05-21', month: 17, date: '05/21', title: '「ホロライブ・オルタナティブ」ティザーPV出演', link: "https://alt.hololive.tv/",
      medias: [
        { type: "youtube", id: "3RxlzJWWzdY" }
      ]
    },
    {
      id: '06-08', month: 18, date: '06/08', title: 'レッドブル・バーチャル・アンバサダー就任', link: "https://twitter.com/minatoaqua/status/1401916949794201601",
      medias: [
        { type: "youtube", id: "t9erPqu3PYE" }
      ]
    },
    {
      id: '06-12', month: 18, date: '06/12', title: '「ヴァンパイア」歌ってみた動画投稿', link: null,
      medias: [
        { type: "youtube", id: "rbPa0Qp3zJQ" }
      ]
    },
    {
      id: '06-13', month: 18, date: '06/13', title: '「NEGI☆U」結成', link: null,
      medias: null
    },
    {
      id: '06-23', month: 18, date: '06/23', title: 'よこすか海のアニメカーニバル公式アンバサダーに就任', link: "https://umiani.net/",
      medias: null
    },
    {
      id: '07-05', month: 19, date: '07/05', title: '川崎競馬場で「よこすか海のアニメカーニバル 湊あくあ杯」開催', link: null,
      medias: [
        { type: "youtube", id: "YFogAYSQFm0" }
      ]
    },
    {
      id: '07-15', month: 19, date: '07/15', title: 'オリジナル曲「ヨーコソ！Sweet Carnival！」投稿', link: null,
      medias: [
        { type: "youtube", id: "gP8iNSq6Kwc" }
      ]
    },
    {
      id: '07-22', month: 19, date: '07/22', title: '湊あくあSEASIDE AQUA FES開催', link: "https://umiani.net/talkandlive/",
      medias: null
    },
    {
      id: '07-27', month: 19, date: '07/27', title: 'コトブキヤ 湊あくあフィギュア発売', link: "https://www.kotobukiya.co.jp/product/product-0000004035/",
      medias: [{ type: "image-url", src: "https://www.kotobukiya.co.jp/wp-content/uploads/2021/01/c0c7b5c3bfc22d94539700f9b7e73d7be008cd91.jpg", link: "https://www.kotobukiya.co.jp/product/product-0000004035/" }]
    },
    {
      id: '08-01', month: 20, date: '08/01', title: '「つまりはいつもくじけない！」デジタルリリース', link: null,
      medias: [
        { type: "youtube", id: "D2PAGHD-qT8" }
      ]
    },
    {
      id: '08-08', month: 20, date: '08/08', title: '３周年凸待ち', link: null,
      medias: [
        { type: "youtube", id: "Ndik2fklmFo" }
      ]
    },
    {
      id: '08-09', month: 20, date: '08/09', title: 'あくあ色 3rd Anniversary Live', link: null,
      medias: [
        { type: "youtube", id: "CtOkB0YQljY" }
      ]
    }
  ]

  return (
    <VerticalTimeline>
      <SetList histories={histories} />
      <div className={styles['monthly-img']}>
        <img src="/images/aug.png" />
      </div>
      <div></div>

      <CustomVerticalTimelineElement history={histories[0]} date={"2020/08/21"}>
        <YoutubeContainers medias={[{ type: "image", src: "aqua_univ.jpg", link: "https://prtimes.jp/main/html/rd/p/000000274.000030268.html" }]} />
      </CustomVerticalTimelineElement>

      <CustomVerticalTimelineElement history={histories[1]} link={histories[1].link ? histories[1].link : null}>
        { histories[1].medias ? <YoutubeContainers medias={histories[1].medias} /> : null }
      </CustomVerticalTimelineElement>

      {
        (() => {
          const ret = []
          let currentMonth = 8
          for (let i = 2; i < histories.length; i += 1) {
            if (currentMonth !== histories[i].month) {
              currentMonth = histories[i].month

              ret.push(
                <div key={`${histories[i].month}-monthly-img`} className={styles['monthly-img']}>
                  <img src={`/images/${historiesMonthToPrefix(currentMonth)}.png`} />
                </div>
              )
              ret.push(
                <div key={`${histories[i].month}-monthly-img-after`}></div>
              )
            }

            ret.push(
              <CustomVerticalTimelineElement key={`${histories[i].id}-custome-vertical-timeline`} history={histories[i]} link={histories[i].link ? histories[i].link : null}>
                {histories[i].medias ? <YoutubeContainers medias={histories[i].medias}/> : null}
              </CustomVerticalTimelineElement>
            )
          }

          return ret
        })()
      }
      <div style={{height: "500px"}}>
        <div className={styles['footer-img']}>
          <img src="/images/arrow.png" className={styles["arrow-image"]}/>
        </div>
      </div>
    </VerticalTimeline>
  )
}
