// 请求拦截器
const requestInterceptor = (request: Request) => {
    // 在请求发送前进行处理，比如添加token等
    const token = sessionStorage.getItem('token');
    if (token) {
        request.headers.set('Authorization', token);
    }
    return request;
};

// 响应拦截器
const responseInterceptor = (response: Response) => {
    // 在响应返回后进行处理，比如处理错误等
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response;
};

const get = async (url: string) => {
    // 发送GET请求的逻辑
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (error) {
        throw new Error('Failed to fetch');
    }
};

const post = async (url: string, data: any) => {
    // 发送POST请求的逻辑
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response;
    } catch (error) {
        throw new Error('Failed to fetch');
    }
};

export { post, get, requestInterceptor, responseInterceptor };