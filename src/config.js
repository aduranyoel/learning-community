const development = {
    API_URL: 'http://localhost:3001/'
};

const production = {
    API_URL: 'https://learning-community-web.herokuapp.com/'
};

export const config = process?.env?.NODE_ENV === 'production' ? production : development;
