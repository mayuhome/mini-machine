import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    // 获取请求上下文
    const ctx = host.switchToHttp();
    // resqonse对象
    const response = ctx.getResponse();
    // 异常状态码
    const status = exception.getStatus();

    // 设置message
    const message = exception.message
      ? exception.message
      : `${status >= 500 ? 'Server Error' : 'Client Error'}`;

    const errorResponse = {
      data: {},
      message: message,
      code: 0,
    };

    // 设置返回的状态码， 请求头，发送错误信息
    response.status(status);
    response.header('Content-Type', 'application/json; charset=utf-8');
    response.send(errorResponse);
  }
}
