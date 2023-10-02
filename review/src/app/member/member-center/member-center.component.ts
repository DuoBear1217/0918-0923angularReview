import { Observable, map } from 'rxjs';
import { Component } from '@angular/core';
import { LoginService, Person } from 'src/app/login/login.service';

@Component({
  selector: 'app-member-center',
  templateUrl: './member-center.component.html',
  styleUrls: ['./member-center.component.css']
})
export class MemberCenterComponent {
  constructor(private lognS: LoginService) {}

  members: Person[] = [];

  async ngOnInit() {
    // 取得資料 (Promise)
    let datas:any [] = [];
    datas = await this.lognS.getLoginData();

    // 因取得的JSON會有反斜線，需要改編回去物件
    datas.forEach(element => {
      this.members.push(JSON.parse(element));
    })

    // 取得資料 (observable)
  //   let data: Observable<object>;
  //   data = this.lognS.getLoginData();
  //   data.subscribe({
  //     next(members) {
  //       let temp, afterSplit;
  //       console.log(members);
  //       console.log(JSON.stringify(members));
  //       temp = JSON.stringify(members);
  //       // console.log(servi.dataTrans(JSON.stringify(members)));
  //       // members.forEach((element: any) => {
  //       //   this.members.push(element);
  //       // });
  //       temp = temp.replace('[', '');
  //       temp = temp.replace(']', '');
  //       afterSplit = temp.split('},');
  //       for (let i = 0; i < afterSplit.length - 1;i++ ) {
  //         afterSplit[i] += '}';
  //       }
  //       afterSplit.forEach(function(element) {
  //         console.log(JSON.parse(element));
  //       })

  //       console.log(afterSplit);
  //     },
  //     error(msg) {
  //       return msg;
  //     }
  //   })

  //   this.lognS.getWebTest().pipe(map((data:any) => { console.log(data) }));
  // }

  // dataTrans(datas: string): string[] {
  //   let afterSplit;
  //   datas = datas.replace('[', '');
  //   datas = datas.replace(']', '');
  //   afterSplit = datas.split('},');
  //   for (let i = 0; i < afterSplit.length - 1;i++ ) {
  //     afterSplit[i] += '}';
  //   }
  //   return afterSplit;
  }

}
