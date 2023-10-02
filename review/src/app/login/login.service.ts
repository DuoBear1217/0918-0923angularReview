import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Person {
  "name": string,
  "phone": string,
  "sex": string,
  "age": number,
  "password": string
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private getFile:HttpClient) { }

  temp: any[] = [];

  ngOnInit() {
    console.log('ohDog');
  }

  // 取得登入資料(promise)
  async getLoginData() {
    let test;
    test = await this.getFile.get('assets/test.json').toPromise();
    console.log(test);
    this.temp = this.dataTrans(JSON.stringify(test));
    return this.temp;
  }

  // 取得登入資料(observable)
  // getLoginData() {
  //   return this.getFile.get('assets/test.json');
  // }

  // 網址測試
  getWebTest() {
    return this.getFile.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-CD094466-F0F5-46D5-B4CE-B55F5026618B');
  }

  checkMember(act: string, pwd: string): boolean {
    let flag = false;
    this.temp.forEach((element: any) => {
      element = JSON.parse(element);
      if ( element.name == act && element.password == pwd) {
        console.log('can Login');
        flag = true;
      }
    });
    return flag;
  }

  // 處理檔案字串
  dataTrans(datas: string): string[] {
    let afterSplit;
    datas = datas.replace('[', '');
    datas = datas.replace(']', '');
    afterSplit = datas.split('},');
    for (let i = 0; i < afterSplit.length - 1;i++ ) {
      afterSplit[i] += '}';
    }
    return afterSplit;
  }
}
