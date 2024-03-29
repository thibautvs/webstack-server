<img src="http://thibautvs.com/blog/img/urge2code/webstack.png" />



#Philosophy

WebStack is designed to be :

* **Reliable** : technologies on which your business can confidently rely upon
* **Performant** : to build great products and great user experiences
* **Productive** : for fast time to market, quick iterations and staying ahead of competition
* **API first** : the web client is considered one of the many potential clients (smartphones, watches)
* **Business ready** : scalable codebase, multi-lingual support, authentication + roles, etc
* **Open source** : innovative, lightweight and standards-compliant technologies

The WebStack logo is purple, the color of good judgment.

#Technology Stack

The server part of WebStack is composed of the technologies listed below. For the rationale behind these choices,
please refer to the [Design Decisions](#design-decisions) section.

* Node.js
* Express.js
* PostgreSQL
* Sequelize


# Documentation

First, type ``npm install`` to install all the dependencies. Then, install PostgreSQL and specify as database name, user name and password the same information as in ``config/config.json``. Once that done, execute the setup script in ``setup/products.sql``.

# Design Decisions

* **Open source** : this was a straightforward point for the client part as there are only open source technologies on the frontend but the backend however is a different story, with many commercial alternatives. The key for decision here is quality, to have a very strong backend and maximize the chances of business success. Then, when two technologies are comparable, the open source alternative will always be preferred, for many reasons. Cost comes immediately in mind, to avoid paying expensive licenses fees and lose time in understanding complex corporate licensing matrices. Second, open source is much more flexible and plays nicely with others, while commercial alternatives tend to lock developers in their proprietary world. A third reason is relevance : commercial products are being released once in a while (ex : SqlServer every x years), while open source alternatives benefit from fixes and new features on a regular basis and stay thus continuously up-to-date and on the cutting edge. This also allows the developer to create a fix himself without depending on (and waiting for) the vendor to release a patch. It is finally desirable, for developer happiness and productivity, that he/she can choose on which platform (PC, Mac or Linux) to develop.

* **API technology** : [Node.js][node] has been selected because the sweet spots of this technology are real-time and ReST API. As we are implementing the latter, Node immediately stood out as the ideal candidate. It is also a requirement to use a technology that is not compiled for iteration speed reasons. The startup world moves very fast and a technology that enables the business to stay ahead of competition, react quickly to market changes and implement customer feedback in a fast way can really make or break a business. As stated in an interview from Facebook, *"many consider that PHP was a bad choice, but at the time it was a very good one as the non-compiled nature of it allowed to iterate quickly and develop in a fast way"*. The contenders that were considered were [Python][python], [Go][golang] and [Ruby on Rails][rails] but didn't require lots of investigation as, at the time of writing, pretty much every big web company, such as Ebay, LinkedIn, Groupon, etc, was switching from their current language (Ruby, Java, ...) to Node and got substantial benefits from a performance and productivity points of view, as [this article][nodebenefits] relates. It also makes a lot of sense to use a technology on the backend where the knowledge and tools from the frontend can be leveraged, namely the same language, JavaScript, and testing frameworks such as Mocha/Chai/Sinon.

* **API framework** : [Express][express] is the most popular web framework for Node.js, feature-rich and stable. As such, it's also the Node.js web framework having the most available resources: tutorials, books, StackOverflow posts and trained developers.

* **Database** : the initial candidate that was strongly considered was [MongoDB][mongodb] to have a full stack JS implementation, which brings interesting benefits, including same language across the stack and no impedance mismatch. However, after reading cautionary articles on the web relating very bad experiences using it (see [this article][badmongoarticle] and this [slide deck][badmongodeck]) and having similar feedback from a Node user group citing *"MongoDB use cases to be very narrow"*, it was decided to go for a relational database instead. Production data is the most critical aspect and utmost importance has to be placed to ensure it's consistent at all times and that data is never lost. MongoDB (or any other NoSql store for that matter) isn't a good fit here for many reasons: not ACID, no transactions across collections, possibilities of inconsistent state, ... It is instead often recommended for storing arbitrary pieces of JSON. So the 2 contenders considered were [MySQL][mysql] and [PostgreSQL][postgre]. PostgreSQL has been selected because of its superior maturity, stability and features (see this [stackoverflow post][postgrespost] and [Quora article][postgresarticle]). It also now supports JSON data types which makes it the best of both worlds.

* **ORM** : the main contenders are [Sequelize][sequelize], [node-orm2][nodeorm] and [Bookshelf.js][bookshelfjs]. Sequelize has been chosen because widely considered as the best alternative, from articles (such as [this one][sequelizearticle] citing Sequelize to be *"almost ready for prime time"*) and GitHub repo stars.


[node]: http://nodejs.org/
[python]: http://www.python.org
[golang]: http://golang.org/
[rails]: http://rubyonrails.org/
[nodebenefits]: http://www.nearform.com/nodecrunch/node-js-becoming-go-technology-enterprise/
[express]: http://expressjs.com/
[mongodb]: http://www.mongodb.org/
[mysql]: http://www.mysql.com/
[postgre]: http://www.postgresql.org/
[sequelize]: http://sequelizejs.com/
[nodeorm]: https://github.com/dresende/node-orm2
[bookshelfjs]: http://bookshelfjs.org/
[sequelizearticle]: http://redotheweb.com/2013/02/20/sequelize-the-javascript-orm-in-practice.html
[badmongoarticle]: http://www.sarahmei.com/blog/2013/11/11/why-you-should-never-use-mongodb/
[badmongodeck]: https://speakerdeck.com/mitsuhiko/a-year-of-mongodb
[postgrespost]: http://stackoverflow.com/questions/110927/would-you-recommend-postgresql-over-mysql
[postgresarticle]: http://www.quora.com/Which-database-should-I-use-for-a-killer-web-application-MongoDB-PostgreSQL-or-MySQL
[dtrace]: http://dtrace.org/
