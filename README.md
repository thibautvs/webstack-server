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
* Restify
* PostgreSQL
* Sequelize


# Documentation

First, type ``npm install`` to install all the dependencies. Then, install PostgreSQL and specify as database name, user name and password the same information as in ``config/config.json``. Once that done, execute the setup script in ``setup/products.sql``.

# Design Decisions

* **API technology** : Node.js has been selected because the sweet spots of this technology are real-time and ReST API. As we are implementing the latter, Node immediately stood out as the ideal candidate. It is also a requirement to use a technology that is not compiled for iteration speed reasons. The startup world moves very fast and a technology that enables the business to stay ahead of competition, react quickly to market changes and implement customer feedback in a fast way can really make or break a business. As stated in an interview from Facebook, "many consider that PHP was a bad choice, but at the time it was a very good one as the non-compiled nature of it allowed to iterate quickly and develop it fast". The contenders that were considered were Python, Go and Ruby on Rails but didn't require lots of investigation as, at the time of writing, pretty much every big web company, such as Ebay, LinkedIn, Groupon, etc, was switching from their current language (Ruby, Java, ...) to Node and got substantial benefits from a performance and productivity points of view. It also makes a lot of sense to use a technology on the backend where the knowledge and tools from the frontend can be leveraged, namely the same language, JavaScript, and testing frameworks such as Mocha/Chai/Sinon.

* **API framework** : it was initially considered to use Express, the go-to web framework for Node. However, after talking with TJ Fontaine (Node project lead), I learned about Restify which is basically a stripped-down version of Express to focus on writing ReST APIs, without the bulk of view rendering etc.

* **Database** : the initial candidate that was strongly considered was MongoDB to have a full stack JS implementation, which brings interesting benefits, including same language across the stack and no impedance mismatch. However, after reading cautionary articles on the web relating very bad experiences using it and having similar feedback from a Node user group, it was decided to go for a relational database instead. So the 2 contenders considered were MySQL and PostgreSQL. PostgreSQL has been selected because of its superior maturity, stability and features.
