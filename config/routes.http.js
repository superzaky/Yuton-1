module.exports =
[
    { resource: '/',                    method: 'get',       controller: 'index',      action: 'info'        },
    { resource: '/api',                 method: 'get',       controller: 'index',      action: 'api'         },
    { resource: '/api/login',           method: 'post',      controller: 'session',    action: 'authorize'   },
    { resource: '/api/logout',          method: 'get',       controller: 'session',    action: 'unauthorize' },
    { resource: '/api/sessions/me',     method: 'get',       controller: 'session',    action: 'get'         },
    { resource: '/api/users',           method: 'get',       controller: 'user',       action: 'list'        },
    { resource: '/api/users',           method: 'post',      controller: 'user',       action: 'add'         },
    { resource: '/api/users/:id',       method: 'get',       controller: 'user',       action: 'get'         },
    { resource: '/api/users/:id',       method: 'post',      controller: 'user',       action: 'update'      },
    { resource: '/api/users/:id',       method: 'delete',    controller: 'user',       action: 'delete'      }
];
