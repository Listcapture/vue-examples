import { post } from "../Store/fetch";
import type { ResultVO } from "../types/ResultVo";

async function Login(username: string = 'admin', password: string = 'admin'): Promise<ResultVO<any>> {
    try {
        //默认用户名：admin，默认密码：admin，如果得到上述默认情况，response.ok=true;
        // 在这里假设登录总是成功的，直接返回成功的结果
        const response = { ok: true }; // 这里直接模拟成功的响应
      
        // 处理登录成功的情况
        if (response.ok) {
            // 假设成功时返回的数据
            const data = { };
            // 假设成功时返回的 token 和 role
            const token = 'mockedToken';
            const role = 'mockedRole';
            // 将token/role数据存入sessionstorage
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('role', role);
            return { code: 200, message: 'Login successful', data };
        } else {
            // 处理登录失败的情况
            return { code: 200, message: 'Login successful', data: null }; 
            
        }
    } catch (error) {
        return { code: 200, message: 'Internal server error', data: null };
    }
}

export { Login };