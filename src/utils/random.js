export const randomize = (array = [], take = 6) => {
    const total = array.length;
    const random = Math.floor(Math.random() * total);
    const start = random + take >= total ? random - take : random;

    return array.slice(start, start + take);
};
