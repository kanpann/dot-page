function Category(image, descript) {
  this.image = image
  this.descript = descript
}
module.exports = {
  SiteMeta: {
    title: 'Gunlog',
    profileImage: 'https://avatars.githubusercontent.com/u/45007556?v=4',
    info: {
      author: 'Gunkim',
      descript: '안녕하세요. Gunkim입니다. 공부한 내용들을 정제하기 위해서 블로그를 시작했습니다.',
      github: 'https://github.com/kanpann',
      email: 'gunkim0318@gmail.com',
    },
  },
  Category: {
    개발환경: {
      url: '',
      isSub: false,
    },
    Java: {
      url: '',
      isSub: true,
      sub: ['Spring', 'JPA/Querydsl', 'Kotlin'],
    },
    JavaScript: { url: '', isSub: true, sub: ['TypeScript', 'React', 'Vue'] },
    Python: {
      url: '',
      isSub: true,
      sub: ['Flask', 'Django', '자동화'],
    },
    Linux: {
      url: '',
      isSub: true,
      sub: ['Ubuntu', 'CentOS'],
    },
    '컴퓨터 사이언스': {
      url: '',
      isSub: true,
      sub: ['자료구조', '알고리즘'],
    },

    생각: {
      url: '/category?menu=생각&subMenu=생각',
      isSub: false,
    },
  },
  CategoryInfo: {
    개발: new Category('', ''),
    생각: new Category('', ''),
    Linux: new Category('', ''),
    Spring: new Category(
      'https://user-images.githubusercontent.com/45007556/103328175-0e958b80-4a9b-11eb-9db7-66230e0f057c.png',
      '스프링에 대한 글들을 모아놓은 카테고리입니다.',
    ),
    JavaScript: new Category(
      'https://user-images.githubusercontent.com/45007556/99826279-7c48c080-2b9b-11eb-8cce-3c92f971c803.png',
      '자바스크립트에 대한 글들을 모아놓은 카테고리입니다.',
    ),
    React: new Category('', ''),
    Vue: new Category('', ''),
    Kotlin: new Category('', ''),
    'Data Structure': new Category('', ''),
    'Error Log': new Category('', ''),
    Python: new Category('', ''),
    Java: new Category('', ''),
    Other: new Category('', ''),
  },
}
