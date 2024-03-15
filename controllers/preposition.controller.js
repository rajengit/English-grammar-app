const data = [
  {
    topic: "Prepositions",
    title: "introduction",
    definition: "Default page ",
    pageTitle: "Introduction",
    url: "/api/v1/preposition/introduction",
    next_page: "on",
    path:'/prposition'
  },
    {
      topic:'Prepositions',
      title: "on",
      definition:
        "preposition is the word wich connects noun and pronouns in a sentences",
      pageTitle: "ON preposition",
      url: "/api/v1/preposition/on",
      next_page: "under",
      path:'/prposition'
    },
    {
      topic:'Prepositions',
      title: "under",
      definition:
        "preposition is the word wich connects noun and pronouns in a sentences",
      pageTitle: "under preposition",
      url: "/api/v1/preposition/under",
      next_page: "under",
      path:'/prposition'
    },
    {
      topic:'Prepositions',
      title: "Behind",
      definition:
        "preposition is the word wich connects noun and pronouns in a sentences",
      pageTitle: "under preposition",
      url: "/api/v1/preposition/behind",
      next_page: "behind",
      path:'/prposition'
    }
  ];

exports.getPrepositions = (req, res, next) => {
 

    let id = JSON.stringify(req.params);
    res.render("preposition", {data});
    // console.log(data);
    //navbar
    //sidebar
    //main page
  }