-- Table: "Products"

-- DROP TABLE "Products";

CREATE TABLE "Products"
(
  id serial NOT NULL,
  name text NOT NULL,
  price money NOT NULL,
  "createdAt" timestamp with time zone,
  "updatedAt" timestamp with time zone,
  CONSTRAINT "primary" PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "Products"
  OWNER TO postgres;


-- DATA

INSERT INTO "Products"(name, price) VALUES ('Macbook Pro retina', 3000);
INSERT INTO "Products"(name, price) VALUES ('iPhone', 900);
INSERT INTO "Products"(name, price) VALUES ('iPad', 700);
