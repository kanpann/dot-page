function Category(image, descript) {
  this.image = image
  this.descript = descript
}
module.exports = {
  SiteMeta: {
    title: 'Gunlog',
    url: 'https://gunlog.dev',
    descript: '공부한 내용들을 정제하기 위한 블로그입니다.',
    info: {
      author: 'Gun kim',
      image: 'https://avatars.githubusercontent.com/u/45007556?v=4',
      descript: '안녕하세요. 공부한 내용들을 정제하기 위해서 블로그를 시작했습니다.',
      github: 'https://github.com/gunkims',
      email: 'gunkim.dev@gmail.com',
    },
    gitalk: {
      clientID: '950a9f1473b04652cbc0',
      clientSecret: '6b42fe4d369ba3a4918c0b629b35115111fb33ac',
      repo: 'blog-gitalk',
      owner: 'gunkims',
      admin: ['gunkims'],
    },
  },
  Category: {
    About: {
      isSub: false,
      sub: [],
      url: '/about',
    },
    Programing: {
      isSub: false,
      sub: [],
    },
    Think: {
      isSub: true,
      sub: ['생각', '정리'],
    },
  },
  CategoryInfo: {
    Think: new Category(
      'https://user-images.githubusercontent.com/45007556/120252026-4b6de480-c2be-11eb-83b0-abd945e89871.jpg',
      '내 생각에 대하여',
    ),
  },
}
