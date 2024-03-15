const data = [
  {
    topic: "Nouns",
    title: "introduction",
    definition: "Default page ",
    pageTitle: "ON preposition",
    url: "/api/v1/noun/introduction",
    next_page: "under",
    path:'/noun'
  },
  {
    topic: "Nouns",
    title: "collective_noun",
    definition:
      "A collective noun is a noun that refers to a group of people, animals, or things. Collective nouns are usually not treated as plural, even though they refer to a group of something.",
    pageTitle: "ON preposition",
    url: "/api/v1/noun/collective_noun",
    next_page: "under",
    path:'/noun'
    
  },
  {
    topic: "Nouns",
    title: "proper_noun",
    definition:
      "A proper noun is a noun that names a specific person, place, or thing. Proper nouns are also called proper names",
    pageTitle: "under preposition",
    url: "/api/v1/noun/proper_noun",
    next_page: "under",
    path:'/noun'
  },
  {
    topic: "Nouns",
    title: "abstract_noun",
    definition:
      "An abstract noun is a noun that refers to something non-physical, such as an idea, quality, or emotion. Abstract nouns are intangible concepts that cannot be directly perceived by the senses.",
    pageTitle: "under preposition",
    url: "/api/v1/noun/abstract_noun",
    next_page: "behind",
    path:'/noun'
  },
];
exports.getNoun = (req, res, next) => {
  const id = req.params;

  const IdTitle = Object.values(id)[0];
  const single_post = data.find((el) => el.title === IdTitle);
  // console.log(single_post);
  res.render( !single_post ?"404":"noun", { data, IdTitle, single_post});
};
