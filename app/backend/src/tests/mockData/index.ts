const admin = {
    id: 1,
    username: 'Alberto',
    role: 'admin',
    email: 'alberto@gmail.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
};

const user = {
    id: 2,
    username: 'Camila',
    role: 'user',
    email: 'camila.santos@gmail.com',
    password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO.PW'
};

export const post = {
    mock: admin,
    request : {
        email: admin.email,
        password: admin.password,
    },
    response: { token: "kfdlklfgklgksldçgkf.are12858esgte.78desazg52qa" },
};