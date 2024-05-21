//mirageconfig.js
import { Server, Response } from 'miragejs';

new Server({
    routes() {
        this.post('/login', (schema, request) => {
            const requestBody = JSON.parse(request.requestBody);
            const { username, password } = requestBody;

            // 模拟校验用户输入的账号密码
            if (username === 'admin' && password === 'password') {
                // 登录成功，返回用户信息和token/role数据
                return new Response(
                    200,
                    { 'Authorization': 'fakeToken', 'Role': 'user' },
                    { username: 'admin', role: 'user' }
                );
            } else {
                // 登录失败，返回错误信息
                return new Response(
                    401,
                    {},
                    { message: 'Invalid username or password' }
                );
            }
        });
    },
});

