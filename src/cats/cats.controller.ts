import { Controller, Get, Redirect, Query, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    @Redirect('https://nestjs.com', 301)
    checkVersion(@Query('version') version) { //  url/controller?version=5
        if (version && version == 5) { // A == B -> "5" == 5 (true) / 5 == 5 (true) | A === B -> "5" === 5 (false) / 5 === 5 (true)
            return { url: "https://stackoverflow.com" }
        }
    }

    @Get('start**end') // start아무값이나상관없는것end
    findAll() {
        return 'This route uses a wildcard';
    }

    @Get('/dectest/:id') // id에 number형의 아무 숫자
    test(@Param('id') id: number): string {
        return `${id}`
    }

    @Get("prms")
    async promiseTest(): Promise<any[]> { // promise
        return ["hello, world!"];
    }

    //request-payloads부터 시작하기
    //https://docs.nestjs.com/controllers#request-payloads
}
