import Joi from 'joi';

export const movieSchema = Joi.object({
  title: Joi.string().max(250).required(),
  release_year: Joi.number().integer().required(),
  image_url: Joi.string().uri().max(250).required(),
  director: Joi.string().max(250).required(),
  main_actor: Joi.string().max(250).required(),
  genre: Joi.string().max(250).required(),
  synopsis: Joi.string().max(250).required(),
  watched: Joi.boolean()
});