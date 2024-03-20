const data = [
  {
    topic: "Prepositions ",
    title: "introduction",
    definition: "Default page ",
    pageTitle: "Introduction",
    url: "/api/v1/preposition/introduction",
    next_page: "on",
    path:'/prposition'
  },
    {
      topic:'Prepositions ',
      title: "on",
      definition:
        "the preposition ‘on‘ is generally used to talk about specific days, dates, or occasions.",


      pageTitle: "ON preposition",
      url: "/api/v1/preposition/on",
      next_page: "under",
      path:'/prposition'
    },
    {
      topic:'Prepositions ',
      title: "under",
      definition:
        "It is used to describe something that is below or lower than something else",
      pageTitle: "under preposition",
      url: "/api/v1/preposition/under",
      next_page: "under",
      path:'/prposition'
    },
    {
      topic:'Prepositions ',
      title: "behind",
      definition:
        "The preposition behind means at or to the back of someone or something. For example",
      pageTitle: "under preposition",
      url: "/api/v1/preposition/behind",
      next_page: "behind",
      path:'/prposition'
    }
  ];

exports.getPrepositions = (req, res, next) => {
  const id = req.params;
  console.log(req.params);

  const IdTitle = Object.values(id)[0];
  const single_post = data.find((el) => el.title === IdTitle);
 

    
    // res.render("preposition", {data ,single_post});
    res.send(`this is ${single_post.definition} page`)
    // console.log(data);
    //navbar
    //sidebar
    //main page
  }