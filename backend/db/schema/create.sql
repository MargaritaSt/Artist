DROP TABLE IF EXISTS artist_list;

CREATE TABLE artist_list (
  id SERIAL PRIMARY KEY NOT NULL,
  artist_data JSONB NOT NULL default '{}'
);