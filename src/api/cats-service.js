const catsRepository = require('./cats-repository');

async function createCat(id, breed, origin, country_code, life_span, characteristic,
                         description, image_url, width, height, mime_type) {
    const cats = catsRepository.createCat(id, breed, origin, country_code, life_span, characteristic,
                                          description, image_url, width, height, mime_type);
    return cats;
}

module.exports = {
    createCat,
}
