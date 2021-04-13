function Category(image, descript) {
  this.image = image
  this.descript = descript
}
module.exports = {
  SiteMeta: {
    title: 'Gunlog',
    author: 'Gunkim',
    github: 'https://github.com/kanpann',
    profileImage: 'https://avatars.githubusercontent.com/u/45007556?v=4',
    email: 'gunkim0318@gmail.com',
  },
  Category: {
    개발: {
      url: '/category?menu=개발&subMenu=개발',
      isSub: true,
      sub: [
        'Linux',
        'Spring',
        'JavaScript',
        'React',
        'Vue',
        'Kotlin',
        'Data Structure',
        'Error Log',
        'Python',
        'Java',
        'Other',
      ],
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
