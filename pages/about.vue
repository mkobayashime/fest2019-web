<template lang="pug">
  #about
    h1.title-jp 文化委員会について
    section.dept-container.management
      h2
        img(src="~/assets/icon/DeptIconName-Management.svg" alt="総務課")
      p 総務課は、文化委員会の管理運営を担当しています。①各課の活動を記録し、今回の文化祭の運営はもちろん、次回以降への引継ぎにも役立てます。②委員の管理を担い、連絡網の整備や、準備期間の作業シフト作成、当日の委員配置の計画などを行います。③校内で文化委員会への相談を受け付け、生徒と委員会が共働して文化祭を作り上げる手助けをしています。
      h3 Management
      .image
    section.dept-container.decoration
      h2
        img(src="~/assets/icon/DeptIconName-Decoration.svg" alt="装飾課")
      p 我々装飾課は、この文化祭を彩る仕事をします。模造紙や画用紙、ボール紙や木などを用いて作品を作りました。中庭の垂れ幕、中学棟や高校棟の階段装飾、ステージの背景、窓ガラスのステンドグラスなど、様々な場所で我々の作った作品が展示されています。我々の約半年間の作業の集大成、ぜひじっくりご鑑賞ください。
      h3 Decoration
      .image
    section.dept-container.stages
      h2
        img(src="~/assets/icon/DeptIconName-Stages.svg" alt="ステージ課")
      p 文化祭の花形であるステージを統括するステージ課です。ステージ課は2学期の後半から活動していて、200人以上がステージに携わります。例年統括している「中庭ステージ」「視聴覚室ステージ」「大講義室ステージ」「体育館ステージ」に加えて「大講堂ステージ」「音楽室ステージ」も統括します。
      p 約半年間にも及ぶ準備の集大成である各ステージのパフォーマンスを是非お楽しみください！
      h3 Stages
      .image
    section.dept-container.design
      h2
        img(src="~/assets/icon/DeptIconName-Design.svg" alt="デザイン課")
      p 文化祭をデザインしています。文化委員会で最も人的規模の小さい課ですが担当する領域は広く、文化祭ロゴの制作からパンフレット・灘校グッズや文化祭PVなどの動画、部活ポスターやサインシステム、今ご覧頂いているこのWebサイトのデザイン/実装まで全てを一貫して実施しています。校内各所に点在するデザイン課の制作物にもご注目ください!
      h3 Design
      .image
    section.dept-container.general-affairs
      h2
        img(src="~/assets/icon/DeptIconName-GeneralAffairs.svg" alt="庶務課")
      p 庶務課は主に、文化祭に出展するクラブ・サークルから文化祭に必要な情報を回収し、それを元にクラブ・サークルと打ち合わせを進めています。部屋割りを決めるところから始まり、電力や印刷物について打ち合わせをするなど文化祭を盛り上げるクラブ・サークルを影から支えています。また、明確な業務が規定されている装飾・ステージ・デザイン・総務のどれもに該当しない広報や受付なども庶務課が担当しています。
      .image
      h3 General Affairs
</template>

<script>
export default {
  head: {
    title: '文化委員会について | 第73回灘校文化祭',
    meta: [
      {
        property: 'og:title',
        content: '文化委員会 | 第73回灘校文化祭'
      },
      {
        property: 'og:description',
        content: '文化祭を企画・運営する委員会をご紹介します'
      }
    ]
  },
  mounted() {
    document.getElementById('scroll-area').scrollTop = 0
  }
}
</script>

<style lang="stylus" scoped>
#about
  mainContainer()
  h1
    font-size 4rem
    margin 10rem 0
    +sp()
      font-size 2rem
      margin 8rem 0 4rem
    +tablet()
      font-size 3rem
      margin 8rem 0
  .dept-container
    position relative
    padding 0 2rem 3rem
    margin-bottom 10rem
    display flex
    flex-direction column
    +tablet()
      margin-bottom 25rem
    +sp()
      margin-bottom 20rem
    &:nth-last-of-type(1)
      margin-bottom 20rem
      +deskSmall()
        margin-bottom 15rem
      +tablet()
        margin-bottom 25rem
    &::before
      content ''
      position absolute
      width 100%
      height 100%
      top 2rem
      left 0
      background-color $gray-1
      z-index -1
      +sp()
        top 1.5rem
      +maxWidth(374)
        top 1.25rem
    h2
      margin-bottom 2rem
      img
        height 4rem
        +deskSmall()
          height 3.5rem
        +sp()
          height 3rem
          margin-left -.2rem
        +maxWidth(374)
          height 2.5rem
          margin-left -.2rem
    p
      width 60%
      line-height 2em
      +touch()
        width 100%
    h3
      display inline-block
      position absolute
      bottom -2rem
      padding .5em 2em
      color #fff
      font-weight 400
      letter-spacing .05em
      background-color $blue-10
      +touch()
        right 0
        bottom 0
        transform translateY(50%)
        z-index 1
    .image
      position absolute
      width 40%
      height 100%
      top 0
      background-size cover
      background-position center center
      +touch()
        width 100%
        height 15rem
        top 100%
        left 0
      +tablet()
        height 20rem
  +desktop()
    section:nth-of-type(2n)
      align-items flex-end
      .image
        left -2rem
    section:nth-of-type(2n+1)
      align-items flex-start
      .image
        right -2rem
  +deskLarge()
    section:nth-of-type(2n)
      left -2rem
    section:nth-of-type(2n+1)
      right -2rem
  .management
    .image
      background-image url('../assets/img/about/management.jpg')
  .decoration
    .image
      background-image url('../assets/img/about/decoration.jpg')
  .stages
    .image
      background-image url('../assets/img/about/stages.jpg')
  .design
    .image
      background-image url('../assets/img/about/design.jpg')
  .general-affairs
    .image
      background-image url('../assets/img/about/generalaffairs.jpg')
      +deskSmall()
        background-position center left
</style>
